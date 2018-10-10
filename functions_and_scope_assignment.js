// Question 1
// Bye!
//////////////////////////////////////////////
// Question 2
// const largerNum = (num1, num2) => {
//   if(num1 > num2){
//     console.log(num1)
//   } else if(num1 < num2){
//     console.log(num2)
//   } else {
//     console.log(num2)
//   }
//   }
// console.log(largerNum(90, 4))
//////////////////////////////////////////////
// Question 3
// const getDogAge = (num) => {
//   return num * 7
// }
// console.log('Dog\'s human equivalent age is ' + getDogAge(5))
// ///////////////////////////////////////////////
// Question 4
// const circumOfLife = (num) => {
//   return num * 2 * 3.14
// }
// console.log('Circumference is ' + circumOfLife(4))
// /////////////////////////////////////////////////
// const areaCirclyone = (num) => {
//   return num * num * 3.14
// }
// console.log('Area is ' + areaCirclyone(4))
///////////////////////////////////////////////////
// const areaCirclyone = (num) => {
//   return num * num * 3.14
// }
// const circumOfLife = (num) => {
//   return num * 2 * 3.14
// }
// const circleProps = (num) => {
//   console.log('The circumference is ' + circumOfLife(num))
//   console.log('The area is ' + areaCirclyone(num))
// }
// circleProps(4)
//////////////////////////////////////////////////
// Question 5
// const celciusToFahrenheit = (C) => {
//   return (C * 1.8 + 32)
// }
//
// function fahrenheitToCelcius(F) {
//   return (F - 32) * (5 / 9)
// }
//
// const convertTemperature = (num, type) => {
//   if(type === 'C'){
//     console.log('Temperature is ' + celciusToFahrenheit(num))
//   } else if(type === 'F'){
//     console.log('Temperature is ' + fahrenheitToCelcius(num))
//   }
// }
// convertTemperature(451, 'F')
/////////////////////////////////////////////////////////////////
// Question 6
// const square = (num) => {
//   return num * num
// }
//
// const half = (num) => {
//   return num / 2
// }
//
// const percentOf = (num1, num2) => {
//   // use return to actually return value
//   // console.log((num1 / num2) * 100 + '%')
//   let percentValue = (num1 / num2) * 100;
//   return percentValue + '%';
// }
//
// const areaOfCircle = (num) => {
//   // again, use return keyword to return value.
//   // without return syntax, this function is calculating the area of cirlce but does not return it
//   return Math.round((num * num * 3.14 ) * 100) / 100
// }
//
// const doStuff = (num) => {
//   let squared = square(num);
//   let halfed = half(squared);
//   let area = areaOfCircle(halfed);
//   return percentOf(squared, area);
// };
// console.log('the result of doStuff: ', doStuff(10));
////////////////////////////////////////////////////
// Question 7
// const arraySum = (arr) => {
//   let sum = 0;
//   for(let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     // console.log(sum)
//   }
//   return sum;
// }
// console.log(arraySum([1, 2, 3]))
