const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// API endpoint to calculate total value of products
app.post("/api/products/total-value", (req, res) => {
  const products = req.body.products;

  if (!Array.isArray(products)) {
    return res.status(400).json({ error: "Products should be an array." });
  }

  let totalValue = 0;

  products.forEach((product) => {
    const { price, quantity } = product;

    if (typeof price !== "number" || typeof quantity !== "number") {
      return res
        .status(400)
        .json({ error: "Price and quantity must be numbers." });
    }

    totalValue += price * quantity;
  });

  res.json({ totalValue });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
