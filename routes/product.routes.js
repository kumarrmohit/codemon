const express = require("express")
const {productModel}=require("../models/product.model")
const productRouter=express.Router()

productRouter.get("/", async (req, res) => {
    let query = req.query
    console.log(query)
    try {
        const users = await productModel.find(query)
        res.send(users)
    } catch (err) {
        res.send({ "msg": "cannot get all the data", "error": err.message })
    }
})
productRouter.get("/:productId", async (req, res) => {
    const ID = req.params.productId 
    try {
        const users =  await productModel.find({ _id: ID })
        res.send(users)
    } catch(err) {
        res.send({ "msg": "cannot get all the data", "error": err.message })
    }
})
productRouter.post("/create", async (req, res) => {
    //console.log(req.body)
    try {
        const user = new productModel(req.body)
        await user.save()
        res.send({ "msg": "product will be registered" })
    } catch (err) {
        res.send({ "msg": "cannot register", "error": err.message })
    }
})

productRouter.patch("/:productId", async (req, res) => {
    const ID = req.params.productId 
    //res.send(ID)
    const payload = req.body
    try {
        await productModel.findByIdAndUpdate({ _id: ID }, payload)
        res.send({ "msg": "product has been updated" })
    } catch(err) {
        res.send({ "msg": "cannot modify", "error": err.message })
    }
})
productRouter.delete("/:productId", async (req, res) => {
    const ID = req.params.productId
    //res.send(ID)
    try {
        await productModel.findByIdAndDelete({ _id: ID })
        res.send({ "msg": "product has been deleted" })
    } catch(err) {
        res.send({ "msg": "cannot delete", "error": err.message })
    }
})


module.exports={
    productRouter
}