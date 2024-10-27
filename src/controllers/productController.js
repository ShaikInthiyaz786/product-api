const productService = require("../services/productService");

exports.calculateTotalValue = (req, res) => {
  const products = req.body.products;
  const totalValue = productService.calculateTotalValue(products);
  res.json({ totalValue });
};
