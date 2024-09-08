/*
Task -1:
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
*/

const heights2 = [167, 190, 120, 165, 137, 10];
let min = heights2[0];
function getMin(numbers) {
  for (number of numbers) {
    if (number < min) {
      min = number;
    }
  }
  return min;
}
const minNumber = getMin(heights2);
//console.log("The lowest number in the array is: ", minNumber);

/*
Task -2:
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
*/
const heights = ["rahim", "robin", "rafi", "ron", "rashed"];

function getMinName(names) {
  let small = names[0];
  for (nam of names) {
    if (nam.length < small.length) {
      small = nam;
    }
  }
  return small;
}
const minName = getMinName(heights);
//console.log("The friend with the smallest name is: ", minName);

/*
Task-3:
Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
*/
let laptop = 35000;
let tablet = 15000;
let mobile = 20000;

function calculateElectronicsBudget(laptopCount, tabletCount, mobileCount) {
  let laptop = 35000;
  let tablet = 15000;
  let mobile = 20000;

  const laptopPrice = laptop * laptopCount;
  const tabletPrice = tablet * tabletCount;
  const mobilePrice = mobile * mobileCount;

  return (totalMoneyRequired = laptopPrice + tabletPrice + mobilePrice);
}
const totalPrice = calculateElectronicsBudget(1, 2, 2);
//console.log("Total money required is: ", totalPrice);

/*
Task-4:
You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

Input:

    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];

 */

const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(prices) {
  let sum = 0;
  for (let item of phones) {
    sum = sum + item.price;
  }
  let avg = 0;
  avg = sum / phones.length;
  return Math.round(avg);
}
const averagePrice = findAveragePhonePrice(phones);
//console.log("The average price of phone is: ", averagePrice);

/*   
Task -5: (Hard)
For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];
*/

const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function totalSalaryCount(employees) {
  //let result = [];
  let sum = 0;

  for (let item of employees) {
    let salary = item.starting + item.experience * item.increment;
    //result.push(salary);
    sum = sum + salary;
  }

  return sum;
}

const perMonthSalary = totalSalaryCount(employees);
console.log(
  "total salary has to be provided by the company in a month is: ",
  perMonthSalary
);
