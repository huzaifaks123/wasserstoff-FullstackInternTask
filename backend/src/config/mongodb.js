// import mongoClient form mongodb module
import { MongoClient } from "mongodb";

// define client
let client;

// function to connect mongo DB 
export const connectToMongoDB = () => {
    MongoClient.connect(process.env.MONGO_URL)
    .then(clientInstance => {
        client = clientInstance
        console.log("MongoDB is Connected");
    })
    .catch(err => {
        console.log("Error connecting MongoDB : ",err);
    })
}

// function to export dataBase
export const getDB = () => {
    return client.db()
}