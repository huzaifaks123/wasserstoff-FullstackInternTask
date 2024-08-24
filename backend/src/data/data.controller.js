// import DataRepository from its directory
import DataRepository from "./data.repository.js";

// export controller class
export default class DataController {

    // contructor to create instance of repository class
    constructor() {
        this.dataRepository = new DataRepository()
    }

    // function to get all data
    getAll = async (req, res) => {
        try {
            const data = await this.dataRepository.getAll()
            if (data) {
                return res.status(200).json(data)
            } else {
                return res.status(400).send("data not available")
            }
        } catch (error) {
            return res.status(400).send("Error while collecting data")
        }
    }
}