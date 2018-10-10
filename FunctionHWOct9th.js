// 2
// const getLargerNumber = (num1, num2)=>{
//
//     if (num1> num2){
//       return num1;
//     }else{
//       (num1 < num2)
//     return num2;
//     }
//   }
// // there was no need for a for loop. just an if else statement between
// // two numbers
// console.log (getLargerNumber(12,15));
//
// 3. Write a function named getDogAge that takes one argument:
// a dog's age in human years. The function returns the dog's age
// in dog years. The conversion rate is 1 human year to 7 dog years.
//
//    * Call the function and log the result.
// const getDogAge = (pplYears) =>{
//   return pplYears * 2;
// }
// console.log(getDogAge(1));
//
// const getDogeAge = (humanYears) =>{
//   return humanYears * 7;
// }
// console.log(getDogeAge(5))
//
// 4.
// const calcCircumfrence = (radius)=>{
//    return 2 * Math.PI * radius;
//  }
// // console.log("The circumference is " + calcCircumfrence(2));
//
// const calcArea = (radius)=>{
//    return Math.PI * Math.pow(radius,2);
//  }
// // console.log("The area is " + calcArea(4));
//
//
// const circleProps = (radius)=>{
//   console.log("The circumference is " +  calcCircumfrence(radius));
//   console.log(" The area is " + calcArea(radius));
// // This is calling the other two functions and concatenate
// }
// circleProps(4)
// // this IS CALLING A FUNCTION OK THIS NAKED PART HERE OUTSIDE THE
// // THE FUNCTION CALLS IT
//
// // 5
// Celsius to Fahrenheit formula (0°C × 9/5) + 32 = 32°F
//
// const celciusToFahrenheit = (temperature) =>{
//  return temperature * 9 / 5 + 32;
// }
// // console.log(celciusToFahrenheit(20));
//
// const fahrenheitToCelcius = (temperature) =>{
//  return (temperature -32) * 5 /9 ;
// }
// // console.log(fahrenheitToCelcius(20));
//
// const convertTemperature = (temperature,string)=>{
//   if (string === "C"){
//     return fahrenheitToCelcius(temperature);
//   }else{
//     return celciusToFahrenheit(temperature);
//   }
//
// // }
// // console.log(convertTemperature(20,"F"));
// //
// 6. The Calculator:
//
//   * Write a function `square` that returns the square of a number.
//   * Write a function `half` that returns half the value of a number.
//   * Write a function `percentOf` that takes two numbers. \
//   Calculate what percent the first number is of the second number,
//    and return the result as a string. For example, 2 is 50% precent of 4, so the function returns '50%'.
//    * Write a function called `areaOfCircle` that takes one argument (the radius),
//    and return the area of a circle with that radius.
   // * Bonus: Round the result so there are only two digits after the decimal.
   // * Write a function doStuff that takes one argument (a number) and does the following (using the functions you wrote earlier):
   //    1. Calculates and saves the square of the number.
   //    2. Calculates and saves half the value of the result of #1.
   //    3. Calculate the area of a circle with the result of #2 as the radius.
   //    4. Calculate and returns the percentage the squared result (#1) is of the area (#3)
//
// const square =(number)=>{
//         return number * number;
//       }
//       // console.log(square(4));
//
//   const half = (number)=>{
//     return number / 2;
//   }
//   console.log(half(24));
//
//   const percentOf = (num1,num2)=>{
//     return Math.round((num1 / num2) * 100 )
//   }
// console.log(percentOf(2,4)+ "%")

// const areaOfCircle = (radius)=>{
//   return Math.PI * Math.pow(radius,2)
//
// }
// console.log(areaOfCircle(3))
//
// const twoDecimals = (num) => {
//   return num.toFixed(2);
// }
// console.log(twoDecimals(10.3254535))

// The toFixed() method formats a number using fixed-point notation.

//7. Write a function `arraySum` that takes in one argument and returns the sum of all the elements.

const arraySum =(array)=>{
  let answer = 0;
  for (let i=0;i<array.length;i++){
    answer+= array[i];
  }
  return answer;
}
console.log("Sum of elements using a function is =  " + arraySum([25,25,25,25]));
