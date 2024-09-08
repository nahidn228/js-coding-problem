const numbers = [300, 100, 700, 1200];

const products = [
  { name: "shampoo", price: 400 },
  { name: "chiruni", price: 200 },
  { name: "shirt", price: 700 },
  { name: "pant", price: 1200 },
];

function totalCoast(products) {
  let sum = 0;
  for (let product of products) {
    sum = sum + product.price;
  }
  return sum;
}
const total = totalCoast(products);
console.log("ajk khosabe: ", total);
