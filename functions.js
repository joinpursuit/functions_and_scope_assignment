//1.
// => bye
// beacuse greeting in the function change to the bye
// so we get bye by calling the function

//2.

// function largest(num1, num2) {
//   if (num1 > num2) {
//     return num1;
//   } else if (num1 <= num2) {
//     return num2;
//   }
// }
// console.log(largest(6, 5));

//3.
// function getDogAge(age) {
//   return age * 7;
// }

// console.log(getDogAge(5));

//4.
// function calcCircumfrence(radius) {
//   return 2 * Math.PI * radius;
// }
//
// calcCircumfrence();
// console.log(calcCircumfrence(3));
//
// function calcArea(radius) {
//   return 2 * Math.PI * Math.pow(radius, 2);
// }
//
// calcArea();
// console.log(calcArea(4));

// function circleProps(radius) {
//   calcCircumfrence(radius);
//   calcArea(radius);
// }
// console.log("The circumference is " + calcCircumfrence(6));
// console.log("The area is " + calcArea(5));

//5.
// function  celciusToFahrenheit(temp) {
//   return (temp * 9 / 5) + 32;
// }
//
// console.log(celciusToFahrenheit(21));
//
// function fahrenheitToCelcius(temp) {
//   return (temp * 5 / 9) - 32;
// }
//
// console.log(fahrenheitToCelcius(45));
//
// function convertTemperature(temp, type) {
//   if (type === 'c') {
//     return celciusToFahrenheit(temp);
//   } else {
//     return fahrenheitToCelcius(temp);
//   }
// }
//
// console.log(convertTemperature(55, 'f'));

//6.
// function square(num) {
//   return num * num;
// }
//
// console.log(square(3));
//
// function half(num) {
//   return num / 2;
// }
//
// console.log(half(9));
//
// function percentOf(num1, num2) {
//   return (num1 / num2 * 100) + '%';
// }
//
// console.log(percentOf(5, 6));
//
// function areaOfCircle(radius) {
//   return Math.round(2 * Math.PI * Math.pow(radius, 2));
// }
//
// console.log(areaOfCircle(5));
//
// function doStuff(num) {
//   let newsquare = square(num);
//   //return newsquare;
//   let newhalf = half(newsquare);
//   //return newhalf
//   let newareaOfCircle = areaOfCircle(newhalf)
//   //return newareaOfCircle;
//   let newpercentOf = percentOf(newsquare, newareaOfCircle)
//   return newpercentOf;
//
// }
//
// console.log(doStuff(6));

//7.

function arraySum(arr) {
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
     
    sum += arr[i];
  }

  return sum;
}

console.log(arraySum([1, 2, 3, 4, 5, 6]));
