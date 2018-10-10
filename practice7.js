function arraySum () {

  let sum = 0;
    for(i = 0; i < arguments.length; i++){
      sum += arguments[i]
  }
  return sum
}

console.log(arraySum(1,2,6,33,4));



// function areaOfCircle (num) {
//     let area = ((num) * (num) * Math.PI).toFixed(2)
//     return area
//   }
//
// function square (num) {
//   return num * num;
// }
// const half = (num) => {
//   return num / 2;
// }
// function percentOf (num, num2) {
//   return ((num / num2 * 100).toFixed(2));
// }
//
// const doStuff = (num) => {
//   let squared = square(num);
//   let halfed = half(squared);
//   let areaOfCirc = areaOfCircle(halfed);
//   let percent = percentOf (squared, areaOfCirc);
//   return areaOfCirc
// }
//
// console.log(doStuff(2) + " %");




// function square (num) {
//   return num * num;
// }
// const half = (num) => {
//   return num / 2;
// }
//
// function doStuff (num) {
//   let newSquare = square(num)
//     //return newSquare
//   let newHalf = half(newSquare)
//     //return newHalf
// }
// console.log(doStuff(8));



//console.log(arraySum([2,3,5]))

//   function areaOfCircle (num) {
//     let area = half(num) * half(num) * Math.PI
//     return area
//   }
// }

// console.log(doStuff(6));



// function areaOfCircle (radius) {
//   let area = ((radius * radius * Math.PI).toFixed(2))
//   return area
// }
//
// console.log(areaOfCircle(2));

/*

function areaOfCircle (num) {
    let area = ((num) * (num) * Math.PI).toFixed(2)
    return area
  }

function square (num) {
  return num * num;
}
const half = (num) => {
  return num / 2;
}
function percentOf (num, num2) {
  return console.log(num + " is " + (num / num2 * 100).toFixed(2) + "% of " + num2);
}

const doStuff = (num) => {
  let squared = square(num);
  let halfed = half(squared);
  let newArea = h


  const half = (num) => {
    return square(num) / 2;
  }
}
// percentOf(3,9);

*/
// const fahrenheitToCelcius = (temp) => {
//   return (temp - 32) * 5/9;
//     fahrenheitToCelcius(temp);
// }
// function celciusToFahrenheit (temp) {
//   return temp * (9/5) + 32;
//     celciusToFahrenheit(temp);
// }
// const convertTemperature = (temp, type) => {
//   if (type === "c") {
//     return console.log(celciusToFahrenheit(temp));
//   } else if (type === "f") {
//     return console.log(fahrenheitToCelcius(temp));
//   }
// }
//
// convertTemperature(30, "c");



// function calcCircumfrence (radius) {
//   return 2 * radius * Math.PI
// }
// const calcArea = (radius) => {
//   return radius * radius * Math.PI
// }
// function circleProps (radius) {
//   let properties = console.log("the circumference is " + calcCircumfrence(radius), "\nthe area is " + calcArea(radius))
//   return properties
// }
//
// circleProps(3);
//





// function getDogAge (age) {
//   return age * 7
// }
//
// console.log(getDogAge(2));
//
// const getDogAge = (age) => {
//   return age * 7;
// }
// console.log(getDogAge(3));
// function numCheck (num, num2){
//   if (num <= num2){
//       return num2
//   } else {
//     return num
//   }
// }
//   console.log(numCheck(3,3))
//
//



//  const numCheck = (num, num2) => {
//    if (num <= num2){
//      return (num2);
//    } else {
//      return (num)
//    }
//  }
//
// console.log(numCheck(4,4));
