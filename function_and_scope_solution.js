/* 1. What will the following code log? Why?
  ```js
let greeting = 'hi'

function hello(){
  greeting = 'bye'
}

hello()
console.log(greeting)

  ``` */
undefined
  greeting is not declared within the function scope, so it will return undefined
'bye'
  hello() is reassigning greeting to 'bye'

// 2. Write a function that returns the largest of two numbers. If they are equal, return the second one.

const largestOfTwoNums = (num1, num2) => {
  if (num1 === num2) return num2
  else if (num1 > num2) return num1
  else return num2
}

console.log(largestOfTwoNums(1,10));
console.log(largestOfTwoNums(4,4));
console.log(largestOfTwoNums(7,2));

// 3. Write a function named getDogAge that takes one argument: a dog's age in human years. The function returns the dog's age in dog years. The conversion rate is 1 human year to 7 dog years.
// * Call the function and log the result.

const getDogAge = (humanYears) => {
  return humanYears / 7;
}

console.log(getDogAge(7));
console.log(getDogAge(42));
console.log(getDogAge(18));

/* 4. Create two functions that calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm)

  * Create a function called calcCircumfrence that takes the radius as an argument and return the circumference. Call the function and log the circumference:
    diameter = 2 x radius of circle
    Circumference of Circle = PI x diameter = 2 PI x radius
    where PI = PI = 3.141592...
  * Create a function called calcArea that takes the radius as an argument and returns the area.

Create a third function circleProps that takes the radius as an argument, calls the two other functions, and logs the area and circumference. The output should look like this:

"The circumference is ___".

 "The area is ___". */

 const calcCircumference = (radius) => {
   return Math.PI * (radius * 2);
 }
 console.log(calcCircumference(5));

 const calcArea = (radius) => {
   return Math.PI * (radius * radius);
 }
 console.log(calcArea(5));

 const circleProps = (radius) => {
   console.log("The circumference is " + calcCircumference(radius))
   console.log("The area is " + calcArea(radius));
 }
 console.log(circleProps(5));

 /* 5. Make a temperature converter. Use google to find the conversion formulas.

   * Create a function called celciusToFahrenheit that takes a temperature in Celsius and returns it in Fahrenheit.
   * Create a function called fahrenheitToCelcius that takes a temperature in Fahrenheit and returns it in Celsius.
   * Create a function called convertTemperature that takes two arguments: a temperature and a string. If the string is 'C', use fahrenheitToCelcius to return the temperature to Celsius. If the string is 'F', use celciusToFahrenheit to convert the temperature to Fahrenheit. */

const celsiusToFahrenheit = (celsiusTemp) => {
  return celsiusTemp * (9/5) + 32;
}
console.log(celsiusToFahrenheit(10));

const fahrenheitToCelsius = (fahrenheitTemp) => {
  return (fahrenheitTemp - 32) * (5/9);
}
console.log(fahrenheitToCelsius(100));

const convertTemperature = (temp, string) => {
  if (string.toUpperCase() === 'C') return fahrenheitToCelsius(temp);
  if (string.toUpperCase() === 'F') return celsiusToFahrenheit(temp);
}
console.log(convertTemperature(60, 'C'));
console.log(convertTemperature(60, 'c'));
console.log(convertTemperature(20, 'F'));
console.log(convertTemperature(20, 'f'));

/* 6. The Calculator:

  * Write a function `square` that returns the square of a number.
  * Write a function `half` that returns half the value of a number.
  * Write a function `percentOf` that takes two numbers. Calculate what percent the first number is of the second number, and return the result as a string. For example, 2 is 50% precent of 4, so the function returns '50%'.
  * Write a function called `areaOfCircle` that takes one argument (the radius), and return the area of a circle with that radius.
  * Bonus: Round the result so there are only two digits after the decimal.
  * Write a function doStuff that takes one argument (a number) and does the following (using the functions you wrote earlier):
      1. Calculates and saves the square of the number.
      2. Calculates and saves half the value of the result of #1.
      3. Calculate the area of a circle with the result of #2 as the radius.
      4. Calculate and returns the percentage the squared result (#1) is of the area (#3) */

const square = (number) => {
  return number * number;
}
console.log(square(10));

const half = (number) => {
  return number / 2;
}
console.log(half(100));

const percentOf = (num1, num2) => {
  return 100 * (num1 / num2) + "%";
}
console.log(percentOf(2,4));

const areaOfCircle = (radius) => {
  let answer = Math.PI * (radius * radius);
  return Math.round(answer * 100) / 100
}
console.log(areaOfCircle(5));

const doStuff = (num) => {
  let ans1 = (square(num)),
  ans2 = (half(ans1)),
  ans3 = (areaOfCircle(ans2)),
  ans4 = (percentOf(ans1,ans3));
  return ans4;
}
console.log(doStuff(10));

// 7. Write a function `arraySum` that takes in one argument and returns the sum of all the elements.

const arraySum = (argument) => {
  sum = 0;
  for (let i = 0; i < argument.length; i++) {
    sum += argument[i];
  }
  return sum;
}
console.log(arraySum([0,1,2,3]));
