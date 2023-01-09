const express = require("express")
const { createUser, userLogin, userDetails, updateUser, deleteUser } = require("../Controllers/user")
const commnMid = require("../Middleware/Auth")
const storeModel = require("../Models/storeModel")

const Router = express.Router()


Router.post("/user", createUser)
Router.post("/userlogin",userLogin)
Router.post("/:userId/details",commnMid.jwtValidation,commnMid.authorization,userDetails)
Router.put('/:userId/update',commnMid.jwtValidation,commnMid.authorization,updateUser)
Router.delete('/:userId/delete',commnMid.jwtValidation,commnMid.authorization,deleteUser)

Router.post("/create-store",commnMid.jwtValidation,commnMid.authorization,storeModel) 


Router.all("/**", function (req, res) {
    res.status(404).send({
        status: false,
        message: "Make Sure Your Endpoint is Correct or Not!"
    })
})

module.exports = Router

