exports.calculateTotalValue = (products) => {
  if (!Array.isArray(products)) throw new Error("Products should be an array");

  return products.reduce((total, { price, quantity }) => {
    if (typeof price !== "number" || typeof quantity !== "number") {
      throw new Error("Price and quantity must be numbers");
    }
    return total + price * quantity;
  }, 0);
};
