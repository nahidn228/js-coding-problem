function getMax(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}

const number = getMax(75, 85, 92);
console.log(number);

// simple inbuilt java program

const max = Math.max(12, 1, 56, 5, 65, 8, 1, 99, 2);
console.log("getMax using Math.max = ", max);
