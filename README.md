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

//bye - because the variable 'greeting' was changed to "bye"

  ```

 2. Write a function that returns the largest of two numbers. If they are equal, return the second one.

 function numbers(num1, num2) {

  if (num1 === num2) {
    console.log(num2)
  }
    if (num2 > num1) {
      console.log(num2)
    } else if (num1 > num2){
      console.log(num1)
    }
}
numbers(4567, 45676)
 3. Write a function named getDogAge that takes one argument: a dog's age in human years. The function returns the dog's age in dog years. The conversion rate is 1 human year to 7 dog years.

    * Call the function and log the result.

function getDogAge (dog){
  return dog * 7
} console.log (getDogAge(39))

// 273


4. Create two functions that calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm)

  * Create a function called calcCircumfrence that takes the radius as an argument and return the circumference. Call the function and log the circumference:
  * Create a function called calcArea that takes the radius as an argument and returns the area.

Create a third function circleProps that takes the radius as an argument, calls the two other functions, and logs the area and circumference. The output should look like this:

"The circumference is ___".

 "The area is ___".


function calcCircumfrence (radius){
  return 2*Math.PI*radius
}

function calcArea (radius){
  return Math.PI*radius*radius
}

function circleProps (radius){
  let props = (calcArea(radius) + calcCircumfrence(radius))
  return props
}

console.log("The circumference is "+circleProps(3) + " The area is "+circleProps(3) )


5. Make a temperature converter. Use google to find the conversion formulas.

  * Create a function called celciusToFahrenheit that takes a temperature in Celsius and returns it in Fahrenheit.
  * Create a function called fahrenheitToCelcius that takes a temperature in Fahrenheit and returns it in Celsius.
  * Create a function called convertTemperature that takes two arguments: a temperature and a string. If the string is 'C', use fahrenheitToCelcius to return the temperature to Celsius. If the string is 'F', use celciusToFahrenheit to convert the temperature to Fahrenheit.


<!-- function celsiusToFahrenheit (celsius){
  fahrenheit = (celsius * 9/5) + 32
  return fahrenheit
}
// // console.log(celsiusToFahrenheit(43))

function fahrenheitToCelsius (fahrenheit){
  celsius = (fahrenheit - 32) * 5/9
  return celsius
}
// console.log (fahrenheitToCelsius(20))
function convertTemperature (temp, str){
  if (str === 'c'){
    fahrenheitToCelsius(temp)
    return celsius
  } else if (str === 'f'){
    celsiusToFahrenheit (temp)
    return fahrenheit
  }
}
console.log(convertTemperature(20, 'f')) -->

6. The Calculator:

  * Write a function `square` that returns the square of a number.
  * Write a function `half` that returns half the value of a number.
  * Write a function `percentOf` that takes two numbers. Calculate what percent the first number is of the second number, and return the result as a string. For example, 2 is 50% precent of 4, so the function returns '50%'.
  * Write a function called `areaOfCircle` that takes one argument (the radius), and return the area of a circle with that radius.
  * Bonus: Round the result so there are only two digits after the decimal.
  * Write a function doStuff that takes one argument (a number) and does the following (using the functions you wrote earlier):
      1. Calculates and saves the square of the number.
      2. Calculates and saves half the value of the result of #1.
      3. Calculate the area of a circle with the result of #2 as the radius.
      4. Calculate and returns the percentage the squared result (#1) is of the area (#3)


// function square(num){
//   return Math.sqrt(num)
// }
// console.log(square(64))

// function half(num){
//   return num / 2
// }
// console.log (half(4))

// function percentOf (num1, num2){
// num3 = num1/num2 * 100
//  return num3 + "%"
// }
// console.log(percentOf(10,50))

// function areaOfCircle (radius){
//   return Math.PI*radius*radius
// }
// console.log(areaOfCircle(3))

7. Write a function `arraySum` that takes in one argument and returns the sum of all the elements.

// function arraySum(arg){
//   let sum = 0;

//   for (let i = 0 ; i < arg.length; i++){
//     sum += arg[i]
//   }
//   return sum
// }

// console.log(arraySum([1,3,5,7,9]));
