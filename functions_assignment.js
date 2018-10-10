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
// This code will log 'bye'. We have reassigned the value of the greeting inside the function.

 2. Write a function that returns the largest of two numbers. If they are equal, return the second one.

 function getLargestNumber (num1, num2) {

 	if(num1 > num2)
 		return num1;
 	else
 		return num2;
 }

 console.log(getLargestNumber(76, 34));

 3. Write a function named getDogAge that takes one argument: a dog's age in human years. The function returns the dog's age in dog years. The conversion rate is 1 human year to 7 dog years.

    * Call the function and log the result.

````

    function getDogAge (humanYears) {
         return humanYears * 7
       }
       getDogAge();
       console.log("My dog is " + getDogAge(70) + " in dog years")

````

4. Create two functions that calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm)

  * Create a function called calcCircumfrence that takes the radius as an argument and return the circumference. Call the function and log the circumference:
  * Create a function called calcArea that takes the radius as an argument and returns the area.
,,,,

  function calcCircumference (radius) {
    return 3.141592 * radius * 2
  }
  calcCircumference();
  console.log("The circumference of our circle is " + calcCircumference(3));

  ,,,

  function calcArea (radius) {
  return 3.141592 * radius * radius
}
calcArea();
console.log ("The area of our circle is " + calcArea(3))

,,,,
Create a third function circleProps that takes the radius as an argument, calls the two other functions, and logs the area and circumference. The output should look like this:

"The circumference is ___".

 "The area is ___".
,,,,

 function circleProps (radius) {
  return ("The circumference is " + calcCircumference(radius) + "." + " The area is " + calcArea(radius) + ".")
}
circleProps();
console.log(circleProps(3))

,,,,,

5. Make a temperature converter. Use google to find the conversion formulas.

  * Create a function called celciusToFahrenheit that takes a temperature in Celsius and returns it in Fahrenheit.
  * Create a function called fahrenheitToCelcius that takes a temperature in Fahrenheit and returns it in Celsius.
  * Create a function called convertTemperature that takes two arguments: a temperature and a string. If the string is 'C', use fahrenheitToCelcius to return the temperature to Celsius. If the string is 'F', use celciusToFahrenheit to convert the temperature to Fahrenheit.
  function celciusToFahrenheit (celTemp) {
    return Math.floor((celTemp * 9/5) + 32)
  }
  celciusToFahrenheit();
  // console.log("The temperature is " + celciusToFahrenheit(8) + "'F")

  function fahrenheitToCelcius (fahTemp) {
    return Math.floor((fahTemp - 32) * 5/9)
  }
  fahrenheitToCelcius();
  // console.log("The temperature today is " + fahrenheitToCelcius(100) + "'C")

  function convertTemperature (temp, kind) {
    if (kind === "'F") {
      return "The temperature is " + fahrenheitToCelcius(temp) + "'C"
    } else if (kind === "'C") {
      return "The temperature is " + celciusToFahrenheit(temp) + "'F"
    } else {
      return "What kind of temperature is this?" ;
    }
  }
  convertTemperature();
  console.log(convertTemperature(0, "'C"));

  // The 3rd part of this assignment is asking us to convert to Celcius if we see string "C". I'm assuming it's an error, as it doesn't make much sense. If we see "0'C" we should convert it to "32'F", right? At least that's what I logged. But it's easy to switch if necessary (if we are given the temperature in Fahrenheit with a string of 'C attached to it).

6. The Calculator:

  * Write a function `square` that returns the square of a number

  function square (num) {
  return num * num
}
square();
console.log(square(4));

  * Write a function `half` that returns half the value of a number.

  function half (num) {
  return num / 2
}
half();
console.log(half(4));

  * Write a function `percentOf` that takes two numbers. Calculate what percent the first number is of the second number, and return the result as a string. For example, 2 is 50% precent of 4, so the function returns '50%'.

  function percentOf (num1, num2) {
  return num1 / num2 * 100
}
percentOf();
console.log(percentOf(4, 80) + "%");

  * Write a function called `areaOfCircle` that takes one argument (the radius), and return the area of a circle with that radius.

  function areaOfCircle (radius) {
  return Math.PI * radius * radius
}
areaOfCircle();
console.log(areaOfCircle(3).toFixed(2))

  * Bonus: Round the result so there are only two digits after the decimal. // included on top ^^^^

  * Write a function doStuff that takes one argument (a number) and does the following (using the functions you wrote earlier):
      1. Calculates and saves the square of the number.
      2. Calculates and saves half the value of the result of #1.
      3. Calculate the area of a circle with the result of #2 as the radius.
      4. Calculate and returns the percentage the squared result (#1) is of the area (#3)

,,,,

function doStuff(num) {
 num1 = square(num);
 num2 = half(num1);
 num3 = areaOfCircle(num2);
 return percentOf(num1, num3)
}
doStuff();
console.log(doStuff(4));
,,,,

7. Write a function `arraySum` that takes in one argument and returns the sum of all the elements.

function arraySum (array) {
  sum = 0;
  for (i = 0; i < array.length; i++){
  sum = sum + array[i];
  }
  return sum;
}
array = [2, 4, 5, 78];

console.log(arraySum(array));
