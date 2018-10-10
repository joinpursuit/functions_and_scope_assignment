// # Function Exercies
// _NOTE:_ I am not asking for a specific ES syntax, but please note that you need to be able to do both.
//
// 1. What will the following code log? Why?
//   ```js
// let greeting = 'hi'
//
// function hello(){
//   greeting = 'bye'
// }
//
// hello()
// console.log(greeting)
//
//   ```
//

1.
this will log bye because in the first line greeting is hi, it is then redefined in the function
so when you call the function hello() in the next line, it will log bye
if you were to remove the hello(), console.log would just log hi, because although its redefined
in the function, its not being called.


//  2. Write a function that returns the largest of two numbers. If they are equal, return the second one.

2.
function largestNumber (num1,num2){
  if (num1 > num2){
    console.log(num1)
  }else if(num1 < num2){
    console.log(num2)
  }else{
    console.log(num2)
  }
}

console.log(largestNumber(6,2))


//  3. Write a function named getDogAge that takes one argument: a dog's age in human years. The function returns the dog's age in dog years. The conversion rate is 1 human year to 7 dog years.
//
//     * Call the function and log the result.

3.
function getDogAge (age){
  let humanAge = age;
  let dogAge = humanAge * 7

  return dogAge;
}

console.log(getDogAge(3))
//
// 4. Create two functions that calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm)
//
//   * Create a function called calcCircumfrence that takes the radius as an argument and return the circumference. Call the function and log the circumference:
//   * Create a function called calcArea that takes the radius as an argument and returns the area.
//
// Create a third function circleProps that takes the radius as an argument, calls the two other functions, and logs the area and circumference. The output should look like this:
//
// "The circumference is ___".
//
//  "The area is ___".
//

4.
function calcCircumference (radius){
  let rad = radius;
  let circum = 2 * Math.PI * rad

  return circum;
}

function calcArea (radius){
  let radi = radius;
  let area = Math.PI * radi * radi

  return area;
}

function circleProps(radius){
  return 'The circumference is: ' + calcCircumference(radius) + '\nThe area is: ' + calcArea(radius)
}
console.log(calcCircumference(3))
console.log(calcArea(4))
console.log(circleProps())



// 5. Make a temperature converter. Use google to find the conversion formulas.
//
//   * Create a function called celciusToFahrenheit that takes a temperature in Celsius and returns it in Fahrenheit.
//   * Create a function called fahrenheitToCelcius that takes a temperature in Fahrenheit and returns it in Celsius.
//   * Create a function called convertTemperature that takes two arguments: a temperature and a string. If the string is 'C', use fahrenheitToCelcius to return the temperature to Celsius. If the string is 'F', use celciusToFahrenheit to convert the temperature to Fahrenheit.
//

5.
function celciusToFahrenheit(num1, type){
  let celcius = num1;
  let word = type;
  word = ' °F'
  let formula = (celcius * (9/5)) + 32;
  return formula + word;
}

function fahrenheitToCelcius(num2, type){
  let fahrenheit = num2;
  let word = type;
  word = ' °C'
  let formula = (fahrenheit - 32) * (5/9);
  return formula + word;
}

function convertTemperature(num, type){
  let word = type;
  if (word === 'C'){
    let word = 'F'
    console.log(celciusToFahrenheit(num, word))
  }else{
    console.log(fahrenheitToCelcius(num, word))
  }
}

console.log(celciusToFahrenheit(12))
console.log(fahrenheitToCelcius(15))
console.log(convertTemperature(30, 'F'))




// 6. The Calculator:
//
//   * Write a function `square` that returns the square of a number.
//   * Write a function `half` that returns half the value of a number.
//   * Write a function `percentOf` that takes two numbers. Calculate what percent the first number is of the second number, and return the result as a string. For example, 2 is 50% precent of 4, so the function returns '50%'.
//   * Write a function called `areaOfCircle` that takes one argument (the radius), and return the area of a circle with that radius.
//   * Bonus: Round the result so there are only two digits after the decimal.
//   * Write a function doStuff that takes one argument (a number) and does the following (using the functions you wrote earlier):
//       1. Calculates and saves the square of the number.
//       2. Calculates and saves half the value of the result of #1.
//       3. Calculate the area of a circle with the result of #2 as the radius.
//       4. Calculate and returns the percentage the squared result (#1) is of the area (#3)
//


6.
function square (num) {
  return num * num;
}

console.log(square(4))


function half (num){
  return num / 2;
}

console.log(half(4))



function percentOf (num1, num2){

  let percent = num1 * 100 / num2

  return num1 + ' is ' + percent + '%' + ' of ' + num2;
}

console.log(percentOf(2,2000))
console.log(percentOf(100,500))


function areaOfCircle (radius){
  let radi = radius;
  let area = Math.PI * radi * radi;
  let round = area.toFixed(2);
  return round;

  return (square(radius) * Math.PI).toFixed(2)
}

console.log(areaOfCircle(4))


function doStuff (num){
  let squareNum = square(num);
  let halfNum = half(squareNum);
  let circleArea = areaOfCircle(halfNum);

  return percentOf(squareNum, circleArea)

}

console.log(doStuff(10))



// 7. Write a function `arraySum` that takes in one argument and returns the sum of all the elements.


7.
function arraySum (things){
  let sum = 0;
  for (i = 0; i < things.length; i++){
    sum += things[i]

  }
  return sum;
}

console.log(arraySum([1, 2, 3]))
