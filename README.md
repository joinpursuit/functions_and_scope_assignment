# Function Exercies
_NOTE:_ I am not asking for a specific ES syntax, but please note that you need to be able to do both.

1. What will the following code log? Why?

  it will return bye. it was hi in the begining but was reassigned to bye on line 9.

 2. Write a function that returns the largest of two numbers. If they are equal, return the second one.

 function lorge(num1, num2) {
    // return num1 >  num2 ? num1 : num2
    if (num1 > num2) {
      return num1
    } else {
      return num2
    }
  }
  lorge(9, 5)

 3. Write a function named getDogAge that takes one argument: a dog's age in human years. The function returns the dog's age in dog years. The conversion rate is 1 human year to 7 dog years.

    * Call the function and log the result.

    function getDogAge(age){
      return (age * 7)
    }
      getDogAge(20);


4. Create two functions that calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm)

  * Create a function called calcCircumfrence that takes the radius as an argument and return the circumference. Call the function and log the circumference:
  * Create a function called calcArea that takes the radius as an argument and returns the area.


    function calcCircumfrence(rad) {
     return (2 * rad * Math.floor(Math.PI))
     }
    calcCircumfrence(10);

      function calArea(radd) {
       return (radd * radd * Math.floor(Math.PI)) }

       calArea(12)


Create a third function circleProps that takes the radius as an argument, calls the two other functions, and logs the area and circumference. The output should look like this:

"The circumference is ___".

 "The area is ___".

 function circleProps(rad){
    console.log("The circumference is + calcCircumfrence(rad));
    console.log("The area is "+ calcArea(rad));
  }
  circleProps(20)


5. Make a temperature converter. Use google to find the conversion formulas.

  * Create a function called celciusToFahrenheit that takes a temperature in Celsius and returns it in Fahrenheit.
  * Create a function called fahrenheitToCelcius that takes a temperature in Fahrenheit and returns it in Celsius.
  * Create a function called convertTemperature that takes two arguments: a temperature and a string. If the string is 'C', use fahrenheitToCelcius to return the temperature to Celsius. If the string is 'F', use celciusToFahrenheit to convert the temperature to Fahrenheit.

*  function celciusToFahrenheit(t){
        return(Math.Floor((t * 9 / 5 + 32))
      }
      celciusToFahrenheit(42);

*      function fahrenheitToCelcius(t) {
         return(Math.floor((t - 32) * 5 / 9))
         }
      fahrenheitToCelcius(16);

*    function convertTemperature(t, str){
    if (str === 'F') {
  return fahrenheitToCelcius(t)
  } else {
  return celciusToFahrenheit(t)
    }
  }
convertTemperature(90, 'F');

6. The Calculator:

  * Write a function `square` that returns the square of a number.

  function square(num){
    return (num * num)
  }
  square(3);


  * Write a function `half` that returns half the value of a number.

  function half(num){
     return (num / 2)
   }  
      half(5)

  * Write a function `percentOf` that takes two numbers. Calculate what percent the first number is of the second number, and return the result as a string. For example, 2 is 50% precent of 4, so the function returns '50%'.

  function percentOf(num1, num2){
     return console.log( num1 + ' is ' + (num1 / num2 * 100) + '% of ' + num2)
   }
   percentOf(12, 15)

  * Write a function called `areaOfCircle` that takes one argument (the radius), and return the area of a circle with that radius.

    function areaOfCircle(rad){
    return (rad * rad * Math.floor(Math.PI))
  }
  areaOfCircle(12)

  * Bonus: Round the result so there are only two digits after the decimal.
  * Write a function doStuff that takes one argument (a number) and does the following (using the functions you wrote earlier):
      1. Calculates and saves the square of the number.
      2. Calculates and saves half the value of the result of #1.
      3. Calculate the area of a circle with the result of #2 as the radius.
      4. Calculate and returns the percentage the squared result (#1) is of the area (#3)

7. Write a function `arraySum` that takes in one argument and returns the sum of all the elements.

const arraySum = (arr) => {
  let sum = 0;
   for (let i = 0; i < arr.length; i++){
    sum += arr[i];
   }
  return sum;
}
 arraySum([2, 5, 6])
