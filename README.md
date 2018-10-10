# Function Exercies
_NOTE:_ I am not asking for a specific ES syntax, but please note that you need to be able to do both.

1. What will the following code log? Why?
  ```js
let greeting = 'hi'

function hello(){
  greeting = 'bye'
}

hello()
console.log(greeting)

  ```
  "bye" because the variable 'greeting' was reassigned in the function "hello".

 2. Write a function that returns the largest of two numbers. If they are equal, return the second one.

 function largeNum(a, b) {
   // return a >  b ? a : b
   if (a > b) {
     return a
   } else {
     return b
   }
 }


 3. Write a function named getDogAge that takes one argument: a dog's age in human years. The function returns the dog's age in dog years. The conversion rate is 1 human year to 7 dog years.

    * Call the function and log the result.

    function getDogAge(a){
      return (a * 7)
    }
    console.log(getDogAge(7));


4. Create two functions that calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm)

  * Create a function called calcCircumfrence that takes the radius as an argument and return the circumference. Call the function and log the circumference:

  function calcCircumfrence(r) {
  return (2 * r * Math.PI)
  }
  console.log(calcCircumfrence(4));


  * Create a function called calcArea that takes the radius as an argument and returns the area.

  function calcArea(r) {
    return (r * r * Math.PI)
  <!-- } -->

Create a third function circleProps that takes the radius as an argument, calls the two other functions, and logs the area and circumference. The output should look like this:

"The circumference is ___".

 "The area is ___".

 function circleProps(r){
   console.log('The circumference is '+ calcCircumfrence(r));
   console.log('The area is '+ calcArea(r));
 }

5. Make a temperature converter. Use google to find the conversion formulas.

  * Create a function called celciusToFahrenheit that takes a temperature in Celsius and returns it in Fahrenheit.

  function celciusToFahrenheit(temp){
    return(temp * 9 / 5 + 32)
  }
  console.log(celciusToFahrenheit(10));


  * Create a function called fahrenheitToCelcius that takes a temperature in Fahrenheit and returns it in Celsius.

  function fahrenheitToCelcius(temp) {
  return((temp - 32) * 5 / 9)
  }
  console.log(fahrenheitToCelcius(10));

  * Create a function called convertTemperature that takes two arguments: a temperature and a string. If the string is 'C', use fahrenheitToCelcius to return the temperature to Celsius. If the string is 'F', use celciusToFahrenheit to convert the temperature to Fahrenheit.

  function convertTemperature(temp, type){
    if (type === 'F') {
  return fahrenheitToCelcius(temp)
  } else {
  return celciusToFahrenheit(temp)
    }
  }
  console.log(convertTemperature(10, 'F'));


6. The Calculator:

  * Write a function `square` that returns the square of a number.

  function square(n){
    return (n * n)
  }
  console.log(square(5));


  * Write a function `half` that returns half the value of a number.

  function half(n){
    return (n / 2)
  }

  * Write a function `percentOf` that takes two numbers. Calculate what percent the first number is of the second number, and return the result as a string. For example, 2 is 50% precent of 4, so the function returns '50%'.

  function percentOf(a,b){
    return console.log( a + ' is ' + (a / b * 100) + '% of ' + b)
  }

  * Write a function called `areaOfCircle` that takes one argument (the radius), and return the area of a circle with that radius.

  function areaOfCircle(r){
    return (r * r * Math.PI)
  }


  * Bonus: Round the result so there are only two digits after the decimal.


  * Write a function doStuff that takes one argument (a number) and does the following (using the functions you wrote earlier):
      1. Calculates and saves the square of the number.
      2. Calculates and saves half the value of the result of #1.
      3. Calculate the area of a circle with the result of #2 as the radius.
      4. Calculate and returns the percentage the squared result (#1) is of the area (#3)

  const doStuff = (num) => {
    let squareNum = square(num);
    let halfNum = half(squareNum);
    let areaCir = areaOfCircle(halfNum);
    return percentOf(squareNum, areaCir);
  }
  console.log(doStuff(10))

7. Write a function `arraySum` that takes in one argument and returns the sum of all the elements.

const arraySum = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++){
    sum += arr[i];

  }
  return sum;
}

console.log(arraySum([1, 2, 3]))
