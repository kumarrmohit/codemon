const express=require("express")
const {connection}=require("./db")
const {productRouter}=require("./routes/product.routes")
const port=process.env.port||3000
const app=express()

app.use(express.json())

app.use("/product",productRouter)

app.listen(port,async()=>{
    try{
        await connection
        console.log("connected to Db")
    }catch (err){
        console.log("cannot connected to Db")
        console.log(err)
    }
    console.log(`server running at port ${port}`)
})
