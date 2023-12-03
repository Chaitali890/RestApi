require("dotenv").config();
const connectDB = require("./db/connect");
const product = require("./model/product");
const Product = require("./model/product");


const ProductJson = require("./product.json");

const start = async () => {
    try
    {
        await connectDB(process.env.MONGODB_URL);
        await Product.deleteMany();
        await Product.create(ProductJson);
        console.log("success");
    }catch (error) {
        console.log(error);
    }
}

start();