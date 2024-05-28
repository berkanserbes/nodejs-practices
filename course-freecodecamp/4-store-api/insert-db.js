require('dotenv').config();
const connectDB = require('./db/config');
const Product = require('./models/product');
const jsonProducts = require('./products.json');


const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI);
        await Product.create(jsonProducts);
        console.log("Success");
        process.exit(0);
    }
    catch(err) {
        console.log(err.message);
        procecess.exit(1);
    }
}

start();