const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({products, productsLength: products.length, message: "success"});
  } catch (err) {
    console.log(err.message);
  }
};

const getAllProductsStatic = async (req, res) => {
  try{
    const products = await Product.find({price: {$gt: 30, $lt: 4000}}).sort('price');

    res.status(200).json({products, productsLength: products.length, message:"success"});
  }
  catch(err) {
    console.log(err.message);
  }
};

const getProductsByQuery = async (req, res) => {
  try{
    const {name, price, featured, rating, company, sort, numericFilters, fields } = req.query;
    const queryObject  = {};

    if(name) {
      queryObject.name = {$reqex: name, $options: 'i'};
    }
    if(featured) {
      queryObject.featured = featured === "true" ? true : false
    }
    if(price) {
      queryObject.price = price
    }
    if(company) {
      queryObject.company = company
    }
    if(rating) {
      queryObject.rating = rating
    }
    if(numericFilters) {
      const operatorMap = {
        '>' : '$gt',
        '>=': '$gte',
        '<': '$lt',
        '<=': '$lte',
        '=':'$eq'
      };

      const regEx = /\b(<|>|>=|=|<|<=)\b/g;
      let filters = numericFilters.replace(regEx, (match) => `-${operatorMap[match]}-`);
      const options = ['price', 'rating'];
      filters = filters.split(',').forEach(item => {
        const [field, operator, value] = item.split('-');
        if(options.includes(field)) {
          queryObject[field] = { [operator]: Number(value)};
        }
      });
    }

    let data = await Product.find(queryObject);

    if(fields) {
      const fieldsList = fields.split(',').join(' ');
      data = data.select(fieldsList);
    }
    if(sort) {
      const sortList = sort.split(',').join(' ');
      console.log(sortList)
      data = data.sort(sortList);
    }
    else {
      data = data.sort('createdAt');
    }

    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const skip = (page-1) * limit;

    data = data.skip(skip).limit(limit);

    res.status(200).json({products: data, length: data.length});
  }
  catch(err) {
    console.log(err.message);
  }
};

const insertProduct = async (req, res) => {
  try {
    const { name, price, featured, rating, company } = req.body;
    console.log(req.body);

    const product = await Product.create({
      name,
      price,
      featured,
      rating,
      company,
    });
    res
      .status(201)
      .json({ product, message: "Product created", isSuccess: "true" });
  } catch (err) {
    console.log(err.message);
  }
};

const getProductsWithRegex = async(req, res) => {
  try{
    const {name} = req.query;
    const regexPattern = "aaa";
    const products = await Product.find({name:{$regex: regexPattern, $options: 'i'}});

    res.status(200).json({products, length:products.length});
  }
  catch(err){
    console.log(err.message);
  }
}


module.exports = { getAllProducts, insertProduct, getAllProductsStatic, getProductsByQuery };
