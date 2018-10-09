// 1. Will log 'bye' because the function inside the brackets is asking for
// greeting to be reassigned.
//

//2.
// function largestNum(a, b) {
//   if(a > b){
//     return a
//   }else{
//     return b
//   }
// }
// // const largestNum = (a, b) => a > b ? a : b
// console.log(largestNum(1, 2))

// 3.
// function getDogAge(a){
//   return (a * 7)
// }
// console.log(getDogAge(7))
//
// 4.
// function calcCircumfrence(r){
//   return (2 * r * Math.PI)
//   }
// console.log(calcCircumfrence(2))
//
// function CalcArea(r){
//   return(r * r * Math.PI)
//   }
//   console.log(2)
// //
// function circleProps(r){
// console.log("The circumference is " + calcCircumfrence(r))
// console.log("The area is " + CalcArea(r))
// }
//
// console.log(circleProps(2))

// 5.
// function celciusToFahrenheit(temp){
//   return(temp* 9 / 5 + 32 )
// }
// console.log(celciusToFahrenheit(10))
//
// function fahrenheitToCelcius (temp){
//   return((temp - 32) * 5 / 9)
// }
// console.log(fahrenheitToCelcius(10))
//
// function convertTemperature(temp, type){
//   if(type === "C") {
//     return celciusToFahrenheit(temp)
//   } else{
//     return fahrenheitToCelcius(temp)
//   }
// }
// console.log(convertTemperature(10, "C"))

//
function square(num){
  return(num * num)
}
console.log(square(5))

function half(num){
  return(num / 2)
}
console.log(half(10))

function percentOf(num1 , num2){
   return console.log( num1 * 100 / num2 + "%")
 }
console.log(percentOf(10, 100));

function areaOfCircle(r){
 return (r * r * Math.PI)
}
console.log(areaOfCircle(10))

const doStuff = (num) => {
  let squareNum = square(num);
  let halfNum = half(squareNum);
  let areaCir = areaOfCircle(halfNum);
  return percentOf(squareNum, areaCir);
}
console.log(doStuff(10))

// 7.
// function arraySum(arg){
//  let sum = 0;
//
//  for (let i = 0 ; i < arg.length; i++){
//    sum += arg[i]
//  }
//  return sum
// }
//
// console.log(arraySum([1,2,3,4,5]));
