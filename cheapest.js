const phones = [
  { name: "Samsung", price: 20000, camera: "12mp", color: "black" },
  { name: "xoami", price: 18000, camera: "12mp", color: "black" },
  { name: "Oppo", price: 30000, camera: "12mp", color: "black" },
  { name: "Iphone", price: 100000, camera: "12mp", color: "black" },
  { name: "Walton", price: 31000, camera: "12mp", color: "black" },
  { name: "HTC", price: 27000, camera: "12mp", color: "black" },
];

function getCheapestPhone(phones) {
  let min = phones[0];
  for (let phone of phones) {
    if (phone.price < min.price) {
      min = phone;
    }
  }
  return min;
}

const cheapestPhone = getCheapestPhone(phones);
console.log("The cheapest phone is: ", cheapestPhone);

function getHighestPhone(phones) {
  let max = phones[0];
  for (let phone of phones) {
    if (phone.price > max.price) {
      max = phone;
    }
  }
  return max;
}

const highestPhone = getHighestPhone(phones);
console.log("The Highest phone is: ", highestPhone);
