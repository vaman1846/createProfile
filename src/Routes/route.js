const express = require("express")
const { create_store } = require("../Controllers/storeController")
const { createUser, userLogin, updateUser, deleteUser, updateStore } = require("../Controllers/user")
const commnMid = require("../Middleware/Auth")

const Router = express.Router()


Router.post("/user", createUser)

Router.post("/userlogin",userLogin)

Router.put('/:userId/update',commnMid.jwtValidation,commnMid.authorization,updateUser)

Router.delete('/:userId/delete',commnMid.jwtValidation,commnMid.authorization,deleteUser)

Router.put("/:userId/updatestore",commnMid.jwtValidation,commnMid.authorization,updateStore)

Router.post("/:userId/create-store",commnMid.jwtValidation,commnMid.authorization,create_store) 


Router.all("/**", function (req, res) {
    res.status(404).send({
        status: false,
        message: "Make Sure Your Endpoint is Correct or Not!"
    })
})

module.exports = Router

