// # Function Exercies
// _NOTE:_ I am not asking for a specific ES syntax, but please note that you need to be able to do both. 

// 1. What will the following code log? Why? 
//   ```js
// let greeting = 'hi'

// function hello(){
//   greeting = 'bye'
// }

// hello()
// console.log(greeting)
  
//   ```
  console.log("####### Prob 1 ###########");
  console.log("The above code will log 'bye' because you're reassigning the greeting variable inside the hello function");
//  2. Write a function that returns the largest of two numbers. If they are equal, return the second one.
 console.log("####### Prob 2 ###########");

 const largest = (num1, num2) => {
  if(num1 > num2){
    return num1;
  }else if(num2 > num1){
    return num2;
  }else{
    return num2;
  }
 } 
 console.log(largest(23, 23));
//  3. Write a function named getDogAge that takes one argument: 
//a dog's age in human years. The function returns the dog's age in dog years. 
//The conversion rate is 1 human year to 7 dog years.
console.log("####### Prob 3 ###########");

const getDogAge = (humanYears) => {
  return humanYears * 7;
}
//     * Call the function and log the result.
console.log(getDogAge(8));

// 4. Create two functions that calculate properties of a circle, 
//using the definitions [here](http://math2.org/math/geometry/circles.htm)
console.log("####### Prob 4 ###########");

//   * Create a function called calcCircumfrence that takes the radius as 
//an argument and return the circumference. Call the function and log the circumference:
const calcCircumfrence = (radius) => {
    return Math.PI * 2 * radius;
}
console.log("Circumference: "+calcCircumfrence(18));

//   * Create a function called calcArea that takes the radius as an argument and returns the area.
const calcArea = (radius) => {
    return Math.PI * Math.pow(radius, 2);
}
console.log("Area: " + calcArea(9));
// Create a third function circleProps that takes the radius as an argument, 
//calls the two other functions, and logs the area and circumference. The output should look like this:
// "The circumference is ___".
//  "The area is ___".
const circleProps = (radius) => {
  return "The circumference is " + calcCircumfrence(radius) + "\n" +
  "The area is " + calcArea(radius);
}
console.log(circleProps(12));
// 5. Make a temperature converter. Use google to find the conversion formulas.
console.log("####### Prob 5 ###########");
//   * Create a function called celciusToFahrenheit that takes a temperature in 
//Celsius and returns it in Fahrenheit.
const celciusToFahrenheit = (Celsius) => {
  return (Celsius * 9/5) + 32;
} 
//   * Create a function called fahrenheitToCelcius that takes a temperature in 
//Fahrenheit and returns it in Celsius.
const fahrenheitToCelcius = (Fahrenheit) => {
  return (Fahrenheit - 32) * 5/9;
}
//   * Create a function called convertTemperature that takes two arguments: 
//a temperature and a string. If the string is 'C', use fahrenheitToCelcius to 
//return the temperature to Celsius. If the string is 'F', use celciusToFahrenheit 
//to convert the temperature to Fahrenheit.
const convertTemperature = (temperature, string) => {
  if(string.toLowerCase() === 'c'){
    return fahrenheitToCelcius(temperature);
  }else if(string.toLowerCase() === 'f'){
    return celciusToFahrenheit(temperature);
  }
}
console.log(convertTemperature(32, 'c'))
// 6. The Calculator:

//   * Write a function `square` that returns the square of a number.
const square = (num) => {
  return Math.pow(num, 2);
}
//   * Write a function `half` that returns half the value of a number.
const half = (num) => {
  return num/2;
}
//   * Write a function `percentOf` that takes two numbers. 
//Calculate what percent the first number is of the second number, 
//and return the result as a string. 
//For example, 2 is 50% precent of 4, so the function returns '50%'.
const percentOf = (num1, num2) => {
  return Math.round((num1/num2)*100) + "%";
}
//   * Write a function called `areaOfCircle` that takes one argument (the radius), 
//and return the area of a circle with that radius.
const areaOfCircle = (radius) => {
  return Math.PI * (radius * radius);
}
//   * Bonus: Round the result so there are only two digits after the decimal.
const roundToTwo = (num) => {
  return num.toFixed(2);
}
//   * Write a function doStuff that takes one argument (a number) and does the 
//following (using the functions you wrote earlier):
//       1. Calculates and saves the square of the number.
//       2. Calculates and saves half the value of the result of #1.
//       3. Calculate the area of a circle with the result of #2 as the radius.
//       4. Calculate and returns the percentage the squared result (#1) is of the area (#3)
const doStuff = (num) => {
  let squaredNum = square(num); //#1 16
  let halvedNum = half(squaredNum); //#2 8
  let circleArea = areaOfCircle(halvedNum); //#3 
  return Math.round((squaredNum/circleArea)*100) + "%"; //#4
}
console.log("doStuff func value with num 4: "+doStuff(4));
// 7. Write a function `arraySum` that takes in one argument and returns the sum of all the elements. 
const arraySum = (arr) => {
  let result = 0;
  for(let i = 0; i < arr.length; i++){
    result += arr[i];
  }
  return result;
}
console.log("arrSum function " + arraySum([0, 1, 2, 3, 5, 4]));

