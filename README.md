# Function Exercies
_NOTE:_ I am not asking for a specific ES syntax, but please note that you need to be able to do both.

1. What will the following code log? Why?
It will log bye. We have called the function hello which reassigned "bye" into greeting.
  ```js
let greeting = 'hi'

function hello(){
  greeting = 'bye'
}

hello()
console.log(greeting)

  ```

 2. Write a function that returns the largest of two numbers. If they are equal, return the second one.
 ```js
 function largestNum(num1,num2) {
   if (num1>num2) {
     return num1;
   } else {
     return num2;
   }   
 }
 ```

 3. Write a function named getDogAge that takes one argument: a dog's age in human years. The function returns the dog's age in dog years. The conversion rate is 1 human year to 7 dog years.
```js
 function getDogAge(age) {
   return age*7;
 }
 console.log(getDogAge(29))
```
    * Call the function and log the result.

4. Create two functions that calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm)

  * Create a function called calcCircumference that takes the radius as an argument and return the circumference. Call the function and log the circumference:
  * Create a function called calcArea that takes the radius as an argument and returns the area.
  ```js
  function calcCircumference(radius) {
    return radius*2*Math.PI;
  }
  function calcArea(radius) {
    return radius**2*Math.PI;
  }
  function circleProps(radius) {
    console.log("The circumference is "+calcCircumference(radius));
    console.log("The Area is "+calcArea(radius));
  }
  circleProps(3);
  ```

Create a third function circleProps that takes the radius as an argument, calls the two other functions, and logs the area and circumference. The output should look like this:

"The circumference is  "

 "The area is  "

5. Make a temperature converter. Use google to find the conversion formulas.

  * Create a function called celciusToFahrenheit that takes a temperature in Celsius and returns it in Fahrenheit.
  * Create a function called fahrenheitToCelcius that takes a temperature in Fahrenheit and returns it in Celsius.
  * Create a function called convertTemperature that takes two arguments: a temperature and a string. If the string is 'C', use fahrenheitToCelcius to return the temperature to Celsius. If the string is 'F', use celciusToFahrenheit to convert the temperature to Fahrenheit.
```js
ffunction fahrenheitToCelcius(tempC) {
  return tempC*(9/5)+32;
}
function celciusToFahrenheit(tempF) {
  return (tempF-32)*5/9;
}
function convertTemperature(temp, string) {
  if (string==="C") {
    return fahrenheitToCelcius(temp);
  } else if (string==="F") {
    return celciusToFahrenheit(temp);
  }
}
console.log(convertTemperature(29,"C"))
```
6. The Calculator:

  * Write a function `square` that returns the square of a number.
  ```js
  function square(number) {
    return number*number;
  }
  ```
  * Write a function `half` that returns half the value of a number.
  ```js
  function half(number) {
    return number/2;
  }
  ```
  * Write a function `percentOf` that takes two numbers. Calculate what percent the first number is of the second number, and return the result as a string. For example, 2 is 50% precent of 4, so the function returns '50%'.
  ```js
  function percentOf(num1,num2) {
    return num1*100/num2+"%";
  }
  ```
  * Write a function called `areaOfCircle` that takes one argument (the radius), and return the area of a circle with that radius.
  ```js
  function areaOfCircle(radius) {
    return radius**2*Math.PI;
  }
  ```
  * Bonus: Round the result so there are only two digits after the decimal.
  * Write a function doStuff that takes one argument (a number) and does the following (using the functions you wrote earlier):
      1. Calculates and saves the square of the number.
      2. Calculates and saves half the value of the result of #1.
      3. Calculate the area of a circle with the result of #2 as the radius.
      4. Calculate and returns the percentage the squared result (#1) is of the area (#3)
```js
function square(number) {
  return number*number;
}
function half(number) {
  return number/2;
}
function percentOf(num1,num2) {
  return num1*100/num2+"%";
}
function areaOfCircle(radius) {
  return radius**2*Math.PI;
}
const doStuff = (number) => {
  let squareN = square(number);
  let halfN = half(squareN);
  let areaC = areaOfCircle(halfN);
  return percentOf(squareN, areaC);
}
console.log(doStuff(4))
```
7. Write a function `arraySum` that takes in one argument and returns the sum of all the elements.
```js
const arraySum = (arr) => {
  let result = 0;
  for (let i = 0; i<arr.length; i++) {
    result+=arr[i];
  }
  return result;
}

console.log(arraySum([1,2,3]))
```
