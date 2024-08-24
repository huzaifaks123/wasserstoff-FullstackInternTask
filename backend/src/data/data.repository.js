// import get db to obtain mongodb
import { getDB } from "../config/mongodb.js";

// export dataRepository class
export default class DataRepository {

    // contructor to create data Collection
    constructor() {
        this.collection = "data"
    }

    // function to get all data
    async getAll() {
        try {
            const db = getDB()
            const collection = db.collection(this.collection)
            const data = await collection.find().toArray()
            return data
        } catch (error) {
            console.log("Error while fetching data : ", error);
        }
    }
}