// import express from express-module
import express from 'express'

// import DataController and create instance
import DataController from './data.controller.js'
const dataController = new DataController()

// create router using express router
const dataRouter = express.Router()

// api route to retrieve data
dataRouter.get("/", dataController.getAll)

// export router 
export default dataRouter