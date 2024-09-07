/**
 * chair --> 3 cft
 * table --> 10 cft
 * bed --> 50 cft
 */

function getWoodQuantity(chairQuantity, tableQuantity, bedQuantity) {
  let perChairWood = 3;
  let perTableWood = 10;
  let perBedWood = 50;
  const totalChairWood = chairQuantity * perChairWood;
  const totalTableWood = tableQuantity * perTableWood;
  const totalBedWood = bedQuantity * perBedWood;

  const totalWood = totalChairWood + totalTableWood + totalBedWood;
  return totalWood;
}
const totalWood = getWoodQuantity(0, 0, 1);
//console.log("total wood needed = ", totalWood);

/**
 * Shirt price --> 500
 * pant price --> 300
 * shoe price --> 900
 *
 */

function shoppingAmount(shirtQuantity, pantQuantity, shoeQuantity) {
  const shirtPrice = 500;
  const pantPrice = 800;
  const shoePrice = 900;
  const totalShirtPrice = shirtQuantity * shirtPrice;
  const totalPantPrice = pantQuantity * pantPrice;
  const totalShoePrice = shoePrice * shoeQuantity;

  const totalBill = totalShirtPrice + totalPantPrice + totalShoePrice;
  return totalBill;
}

const totalPrice = shoppingAmount(1, 1, 1);
console.log("My shopping budget is = ", totalPrice);
