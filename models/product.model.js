const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name: String,
    description: String,
    price:Number
}, {
    versionKey: false
})


const productModel = mongoose.model("product", productSchema)

module.exports={
    productModel
}