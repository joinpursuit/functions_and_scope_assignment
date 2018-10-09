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

bye - will be logged because:
greeting is set as hi
function hell() will set greeting to "bye" once it's called on
hello() - calls on the function hello and changes greeting to bye now
console log greeting will now log bye because hello was done before the console log - if hello() was not done before the console log then greeting would log hi

  ```

 2. Write a function that returns the largest of two numbers. If they are equal, return the second one.

 function greaterNum (num1 ,num2){
   if(num1 >num2){
     return num1
   }else{
     return num2
   }
 }

 console.log(greaterNum(9,5))

 3. Write a function named getDogAge that takes one argument: a dog's age in human years. The function returns the dog's age in dog years. The conversion rate is 1 human year to 7 dog years.

    * Call the function and log the result.

    function getDogAge (humanAge){
    let dogeAge = humanAge / 7;
    return dogeAge;
    }

    console.log(getDogAge(45))

4. Create two functions that calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm)

  * Create a function called calcCircumfrence that takes the radius as an argument and return the circumference. Call the function and log the circumference:
  * Create a function called calcArea that takes the radius as an argument and returns the area.

Create a third function circleProps that takes the radius as an argument, calls the two other functions, and logs the area and circumference. The output should look like this:

"The circumference is ___".

 "The area is ___".

 function calcCircumfrence(radius) {
 let circumference = 3.141592 * radius * 2;
 return circumference;
 }

 function calcArea (radius){
   let area = 3.141592 * radius * radius;
   return area;
 }

 function circleProps (radius){

   return('The circumference is ' + calcCircumfrence(radius) +
   ' The area is ' + calcArea(radius));

 }


 console.log(circleProps(3))

5. Make a temperature converter. Use google to find the conversion formulas.

  * Create a function called celciusToFahrenheit that takes a temperature in Celsius and returns it in Fahrenheit.
  * Create a function called fahrenheitToCelcius that takes a temperature in Fahrenheit and returns it in Celsius.
  * Create a function called convertTemperature that takes two arguments: a temperature and a string. If the string is 'C', use fahrenheitToCelcius to return the temperature to Celsius. If the string is 'F', use celciusToFahrenheit to convert the temperature to Fahrenheit.





  function celciusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9 / 5) + 32;
  return fahrenheit;
  }

  function fahrenheitToCelcius (fahrenheit){
    let celsius = (fahrenheit - 32) * 5 / 9 ;
    return celsius;
  }

  function convertTemperature (temp, string){
    if (string === 'C'){
    return temp +" "+ string + " is " + celciusToFahrenheit(temp) + "F"
    }else {
    return temp +" "+ string + " is " + fahrenheitToCelcius(temp) + "C"
    }

  }


  console.log(convertTemperature(32, 'F'))


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

      function square (num){
      let squared = num * num;
      return squared;
      }

      function half (num){
        let halved = num / 2
        return halved;
      }

      function percentOf (num1 , num2){
      let first = num1/num2 * 100 +"%"
      return num1 + " is " +first + " of " + num2
      }

      function areaOfCircle (radius){
        let area = 3.141592 * radius * radius
        return area
      }

      function doStuff(number){
        let partA = square(number);
        let partB = half(partA);
        let partC = areaOfCircle(partB);
        let partD = percentOf(partA,partC);
        return  partD
      }

      console.log(doStuff(25))


7. Write a function `arraySum` that takes in one argument and returns the sum of all the elements.



function arraySum (arr){
let answer = 0
for (i=0;i<arr.length;i++){
  answer += arr[i]
}return answer
}

console.log(arraySum([2,3,4,5,6,]))
