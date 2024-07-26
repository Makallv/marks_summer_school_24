let number = 1;
let anotherNumber = 2;

let testNumber = (num1, num2) => {
  return num1 > num2
    ? `${num1} is bigger than ${num2}`
    : `${num1} is less than ${num2}`;
};

console.log(testNumber(number, anotherNumber));
