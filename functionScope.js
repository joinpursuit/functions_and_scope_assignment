//NOTE: I am not asking for a specific ES syntax,
//but please note that you need to be able to do both.

//1. What will the following code log? Why?
let greeting = "hi";

function hello() {
  greeting = "bye";
}

hello();
console.log(greeting);
//logs "bye" per calling hello function that mutates greeting from hi to bye

//2. Write a function that returns the largest of two numbers. If they are equal, return the second one.
const largest = (a, b) => (a > b ? a : b);
console.log(largest(1, 2), largest(2, 2), largest(2, 3));

//3.  Write a function named getDogAge that takes one argument:
// a dog's age in human years. The function returns the dog's age in dog years. The conversion rate is 1 human year to 7 dog years.
// Call the function and log the result.
const getDogAge = age => age * 7;
console.log(getDogAge(3));

//4. Create two functions that calculate properties of a circle, using the definitions here
// Create a function called calcCircumfrence that takes the radius as an argument and return the circumference. Call the function and log the circumference:
// Create a function called calcArea that takes the radius as an argument and returns the area.
// Create a third function circleProps that takes the radius as an argument, calls the two other functions, and logs the area and circumference. The output should look like this:
//
// "The circumference is ___".
//
// "The area is ___".
const calcCircumference = r => 2 * r * Math.PI;
const calcArea = r => Math.PI * r * r;
const circleProps = r =>
  console.log(
    "The circumference is " +
      calcCircumference(r) +
      ".\nThe area is " +
      calcArea(r) +
      "."
  );
circleProps(3);

//5. Make a temperature converter. Use google to find the conversion formulas.
// Create a function called celciusToFahrenheit that takes a temperature in Celsius and returns it in Fahrenheit.
// Create a function called fahrenheitToCelcius that takes a temperature in Fahrenheit and returns it in Celsius.
// Create a function called convertTemperature that takes two arguments: a temperature and a string. If the string is 'C', use fahrenheitToCelcius to return the temperature to Celsius. If the string is 'F', use celciusToFahrenheit to convert the temperature to Fahrenheit.
const celciusToFahrenheit = c => (c * 9) / 5 + 32;
const fahrenheitToCelcius = f => ((f - 32) * 5) / 9;
const convertTemperature = (temp, str) =>
  str.toLowerCase() === "c"
    ? console.log(celciusToFahrenheit(temp))
    : console.log(fahrenheitToCelcius(temp));
convertTemperature(35, "C");

//6. The Calculator:
// Write a function square that returns the square of a number.
// Write a function half that returns half the value of a number.
// Write a function percentOf that takes two numbers. Calculate what percent the first number is of the second number, and return the result as a string. For example, 2 is 50% precent of 4, so the function returns '50%'.
// Write a function called areaOfCircle that takes one argument (the radius), and return the area of a circle with that radius.
//TODO:
// Bonus: Round the result so there are only two digits after the decimal.
// Write a function doStuff that takes one argument (a number) and does the following (using the functions you wrote earlier):
// Calculates and saves the square of the number.
// Calculates and saves half the value of the result of #1.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate and returns the percentage the squared result (#1) is of the area (#3)
const squared = num => num * num;
const half = num => num / 2;
const percentOf = (ttl, amt) => (((ttl / amt) * 100) >>> 0) / 100 + "%";
const areaOfCircle = r => ((Math.PI * r * r * 100) >>> 0) / 100;
//console.log(percentOf(2, 4));
//console.log("area:", areaOfCircle(5));
const doStuff = function(num) {
  let s = squared(num);
  let h = half(s);
  let a = areaOfCircle(h);
  return percentOf(s, a);
};
console.log(doStuff(10));

//7. Write a function arraySum that takes in one argument and returns the sum of all the elements.
const arraySum = function(a) {
  let b = 0;
  for (let i = 0, len = a.length; i < len; i++) {
    b += a[i];
  }
  return b;
};
console.log(arraySum([1, 2, 3, 4, 5, 6, 7]));
