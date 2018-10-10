// // 1)
//
// The code logs 'bye' because once function hello is invoke the codeblock reassigns the value of greeting to bye (where it was declared).
//
// // 2)
//
// const largestOfTwoNums = function (num1, num2) {
//   if(num1 > num2) {
//       return num1;
//   } else if (num2 > num1) {
//       return num2;
//   } else {
//       return num2;
//   };
// };
//
// console.log(largestOfTwoNums(15, 15));
//
// // 3)
//
// const getDogAge = function (arg1) {
//   return (arg1 * 7);
// }
//
// console.log(getDogAge(10));
//
// // 4)
//
// function calcCircumfrence(radius) {
//   return ((2 * radius) * Math.PI);
// };
//
// function calcArea(radius) {
//   return (Math.PI * (Math.pow(radius, 2)));
// };
//
// function circleProps(radius) {
//   console.log("Circumference is " + calcCircumfrence(radius));
//   console.log("Area is " + calcArea(radius));
// };
//
// circleProps(5);
//
// // 5)
//
// function celciusToFahrenheit(Celsius) {
//   return (Celsius * (9/5) + 32);
// };
//
// function fahrenheitToCelcius(Fahrenheit) {
//   return ((Fahrenheit - 32) * (5/9));
// };
//
// function convertTemperature(temperature , string) {
//   if (string === ('C' || 'c' || 'Celsius' || 'celsius')) {
//     return fahrenheitToCelcius(temperature);
//   } else if (string === ('F' || 'f' || 'Fahrenheit' || 'fahrenheit')) {
//     return celciusToFahrenheit(temperature);
//   };
// };
//
// console.log(convertTemperature(20, 'C'));
//
// // 6)

// const square = (num1) => {
//   return (num1 * num1);
// };
//
// const half = (num1) => {
//   return (num1 / 2);
// };
//
// const percentOf = (num1 , num2) => {
//   let str = (num1 / num2);
//   return (str * 100 + "%");
// };
//
// const areaOfCircle = (radius) => {
//   answer = (Math.PI * (Math.pow(radius, 2)));
//   return parseFloat(answer.toFixed(2));
// };
//
// const doStuff = (num1) => {
//   let savedSq = square(num1);
//   let savedHalf = half(savedSq);
//   let savedArea = areaOfCircle(savedHalf);
//   return percentOf(savedSq, savedArea);
// };
//
// console.log(doStuff(10));

// 7)

const arraySum = (arg1) => {
  arg1;
  sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }

  return sum;
};

array = [3, 7, 10];
console.log(arraySum(array));
