// import get db to obtain mongodb
import { getDB } from "../config/mongodb.js";

// export dataRepository class
export default class DataRepository {

    // contructor to create data Collection
    constructor() {
        this.collection = "data"
    }

    // function to get all data
    async getAll(filters) {
        try {
            const db = getDB();
            const collection = db.collection(this.collection);
            const query = this.buildQuery(filters);
            console.log(query);
            const data = await collection.find(query).toArray();
            console.log("data => ", data);
            return data;
        } catch (error) {
            console.log("Error while fetching data : ", error);
        }
    }

    // function to return string for the filters that can be used to retrive data from db
    buildQuery(filters) {
        const query = {};
        // Only add conditions for non-empty filters
        Object.keys(filters).forEach(key => {
            if (filters[key]) {
                const values = filters[key].split(',');
                // Convert to integer if the key is one of the specified fields
                if (['intensity', 'start_year', 'end_year', 'relevance'].includes(key)) {
                    query[key] = { $in: values.map(Number) };
                } else {
                    query[key] = { $in: values };
                }
            }
        });
        return query;
    }

}