const express = require("express");
const app = express();

const { products } = require("../data");

app.get("/", (req, res) => {
  res.send('<h1>Home page</h1><a href="/api/products">Products</a>');
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((item) => {
    const { id, name, image } = item;
    return { id, name, image };
  });
  console.log(newProducts);

  res.json(newProducts);
});

app.get("/api/products/:productId", (req, res) => {
  console.log(req.params); // { productId: '2' }
  const { productId } = req.params;
  const singleProduct = products.find((item) => item.id === Number(productId));
  console.log(singleProduct); // {id: 1, name: 'Protein Powder', image: 'https://s12.gifyu.com/images/Su5ot.webp', price: 39.95, desc: "I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian."}
  if (!singleProduct) {
    return res.status(404).send(`Product with id: ${productId} does not exist`);
  }

  res.json(singleProduct);
});

app.get("/api/products/:productId/reviews/:reviewId", (req, res) => {
  console.log(req.params); // { productId: '1', reviewId: '4' }
  res.send(
    `ProductId: ${req.params.productId}, ReviewId: ${req.params.reviewId}`
  );
});

app.get("/api/v1/query", (req, res) => {
  console.log(req.query); // { search: '"search"', limit: '12' }
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((item) => {
      return item.name.toLowerCase().includes(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send("No products matched your search");
    return res.status(200).json({ success: true, data: [] });
  }

  res.status(200).json(sortedProducts);
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
