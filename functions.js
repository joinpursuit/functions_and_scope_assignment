// 1. What will the following code log? Why?

// let greeting = 'hi'
//
// function hello(){
//   greeting = 'bye'
// }
//
// hello()
// console.log(greeting)

// Answer : bye
// Because: the variable greeting was declared and defined as 'hi'. the funciton hello() redefined the variable greeting to make it now produce the string 'hi'.
// at the end, the greeting variable was logged to the console. normally, the predefined string 'hi' would be logged, but because JS reads from the top to bottom, and before requesting console.log the hello funciton was called, the redefined string for the variable greeting will instead be printed to the console.



//  2. Write a function that returns the largest of two numbers. If they are equal, return the second one.

// function larger (num1, num2){
//   if (num1>num2){
//     return num1
//   }else if(num2>num1){
//     return num2
//   }else{
//     return "equal"
//   }
// }
// // larger(); - not needed
// console.log(larger(-2000,1));



//  3. Write a function named getDogAge that takes one argument: a dog's age in human years. The function returns the dog's age in dog years. The conversion rate is 1 human year to 7 dog years.
//
//     * Call the function and log the result.
//

// function getDogAge(ageHumanYears){
//     dogYears = ageHumanYears/7
//
// return dogYears
// }
//

// console.log(getDogAge(140));



// 4. Create two functions that calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm)

//   * Create a function called calcCircumfrence that takes the radius as an argument and return the circumference. Call the function and log the circumference:

// function calcCircumfrence(radius){
//   circumference = 2* Math.PI * radius
//   return circumference;
// }
// console.log(calcCircumfrence(1/Math.PI));


//   * Create a function called calcArea that takes the radius as an argument and returns the area.

// function calcArea (radius){
//   area = Math.PI * Math.pow(radius, 2);
//   return area;
// }

// console.log(calcArea(1));


// Create a third function circleProps that takes the radius as an argument, calls the two other functions, and logs the area and circumference. The output should look like this:
//
// "The circumference is ___".
//  "The area is ___".

// function circleProps (radius){
//   calcCircumfrence(radius);
//   calcArea(radius);
//   return "The circumference is " + circumference + ". \n The area is " + area + ".";
// }
//
// circleProps()
// console.log(circleProps(1));



// 5. Make a temperature converter. Use google to find the conversion formulas.

  // * Create a function called celsiusToFahrenheit that takes a temperature in Celsius and returns it in Fahrenheit.

// function celsiusToFahrenheit(celsius){
//   fahrenheit = ( celsius * 9/5 ) + 32
//   return fahrenheit;
// }


  // * Create a function called fahrenheitToCelsius that takes a temperature in Fahrenheit and returns it in Celsius.

// function fahrenheitToCelsius(fahrenheit){
//   celsius = ( fahrenheit - 32) * 5/9
//   return celsius;
// }


  // * Create a function called convertTemperature that takes two arguments: a temperature and a string. If the string is 'C', use fahrenheitToCelsius to return the temperature to Celsius. If the string is 'F', use celsiusToFahrenheit to convert the temperature to Fahrenheit.

// function convertTemperature(temp, str){
//   if (str === 'C'){
//     fahrenheitToCelsius(temp)
//     // temp = celsius;
//     return celsius;
//   }else if (str === 'F'){
//     celsiusToFahrenheit(temp)
//     // temp = fahrenheit;
//     return fahrenheit;
//   }
// }
//

// console.log(convertTemperature(30, 'C'));



// 6. The Calculator:

//   * Write a function `square` that returns the square of a number.

function square(num){
  calcSquare = Math.pow(num,2)
  return calcSquare;
}
// console.log(square(2));


//   * Write a function `half` that returns half the value of a number.

function half(num){
  calcHalf = num/2
  return calcHalf;
}
// console.log(half(1));

//   * Write a function `percentOf` that takes two numbers. Calculate what percent the first number is of the second number, and return the result as a string. For example, 2 is 50% precent of 4, so the function returns '50%'.

function percentOf(num1, num2){
  num2 = num1/num2 * 100
  return num2 + "%"
}
// console.log(percentOf(5,20));

//   * Write a function called `areaOfCircle` that takes one argument (the radius), and return the area of a circle with that radius.

function areaOfCircle(radius){
  area = Math.PI * Math.pow(radius, 2)
  return area
}
// console.log(areaOfCircle(1));


//   * Bonus: Round the result so there are only two digits after the decimal.

function round(radius){
  areaOfCircle(radius)
  roundIt = area.toFixed(2)
  return roundIt;
}
// console.log(round(1));


//   * Write a function doStuff that takes one argument (a number) and does the following (using the functions you wrote earlier):

//       1. Calculates and saves the square of the number.
//       2. Calculates and saves half the value of the result of #1.
//       3. Calculate the area of a circle with the result of #2 as the radius.
//       4. Calculate and returns the percentage the squared result (#1) is of the area (#3)

function doStuff(num){
  let numSquared = square(num)
  let numHalf = half(numSquared)
  let numArea = areaOfCircle(numHalf)
  let numPercent = percentOf(numSquared, numArea)
  // let percentRound = round(numPercent)

  return numPercent
  // + " = " + percentRound;
  // return percentRound; ---- NaN bc of % sign

}
// console.log(percentOf(3,10));
console.log(doStuff(1));


// 7. Write a function `arraySum` that takes in one argument and returns the sum of all the elements.

// function arraySum(arg){
//   let sum = 0;
//
//   for (let i = 0 ; i < arg.length; i++){
//     sum += arg[i]
//   }
//   return sum
// }
//
// console.log(arraySum([1,2,3,4,5]));
