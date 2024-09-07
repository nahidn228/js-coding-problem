const prices = [20000, 16000, 50000, 100000, 12000, 30000, 35000, 100];
function getMin(numbers) {
  let min = numbers[0];
  for (num of numbers) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}

const minPrice = getMin(prices);
console.log(minPrice);
