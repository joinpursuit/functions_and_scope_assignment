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

  //this code will log "bye"
  //because the function is reassigning greeting = bye

 2. Write a function that returns the largest of two numbers. If they are equal, return the second one.


let num1 = 35
let num2 = 5

function largest() {

  if (num1>num2){
    console.log(num1 +" is bigger")
  } else {
    console.log(num2 + " is bigger")
  }
  return largest
}


largest()


 3. Write a function named getDogAge that takes one argument: a dog's age in human years. The function returns the dog's age in dog years. The conversion rate is 1 human year to 7 dog years.

    * Call the function and log the result.

    let humanAge = 2

function getDogAge() {

  return humanAge*7

  }

getDogAge()

4. Create two functions that calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm)

  * Create a function called calcCircumfrence that takes the radius as an argument and return the circumference. Call the function and log the circumference:
  * Create a function called calcArea that takes the radius as an argument and returns the area.

Create a third function circleProps that takes the radius as an argument, calls the two other functions, and logs the area and circumference.



 function calcCircumfrence(radius){

   return radius*radius*Math.PI
 }
 console.log(calcCircumfrence(4));

 function calcArea(radius){

 return 2*Math.PI*radius

 }
 console.log(calcArea(4));

 function circleProps(radius) {
   return "The circumference is " + calcCircumfrence(4) +" The area is " + calcArea(radius)
 }
 console.log(circleProps(4));




5. Make a temperature converter. Use google to find the conversion formulas.

  * Create a function called celciusToFahrenheit that takes a temperature in Celsius and returns it in Fahrenheit.
  * Create a function called fahrenheitToCelcius that takes a temperature in Fahrenheit and returns it in Celsius.
  * Create a function called convertTemperature that takes two arguments: a temperature and a string. If the string is 'C', use fahrenheitToCelcius to return the temperature to Celsius. If the string is 'F', use celciusToFahrenheit to convert the temperature to Fahrenheit.

  function celciusToFahrenheit(deg){
return deg*1.8+32
  }
  celciusToFahrenheit(40)

  function fahrenheitToCelcius(deg){
return (deg-32)/1.8
  }
  fahrenheitToCelcius(90)

  function convertTemperature(deg, method){
if (method === "C") {
  console.log(celciusToFahrenheit(deg))
} else {
  console.log(fahrenheitToCelcius(deg))
}
  }

  convertTemperature(40, "C")


6. The Calculator:

  * Write a function `square` that returns the square of a number.
  * Write a function `half` that returns half the value of a number.
  * Write a function `percentOf` that takes two numbers. Calculate what percent the first number is of the second number, and return the result as a string. For example, 2 is 50% precent of 4, so the function returns '50%'.
  * Write a function called `areaOfCircle` that takes one argument (the radius), and return the area of a circle with that radius.

  function square(num){
    return num*num
  }
square(4)

function half(num2){
  return num2/2
}
half(8)

function percentOf(num3,num4){
  return num3/num4*100+"%"
}
percentOf(4,40)

function areaOfCircle(radius){
  return Math.PI*radius*radius
}
areaOfCircle(5)





  //* Bonus: Round the result so there are only two digits after the decimal.
  * Write a function doStuff that takes one argument (a number) and does the following (using the functions you wrote earlier):
      1. Calculates and saves the square of the number.

  function doStuff(num5){
    return console.log(square(num5))
      }
  doStuff(10)

      2. Calculates and saves half the value of the result of #1.

half(dostuff(10))

      3. Calculate the area of a circle with the result of #2 as the radius.

areaOfCircle(half(doStuff(10)))

      4. Calculate and returns the percentage the squared result (#1) is of the area (#3)

percentOf(square(doStuff(10)), areaOfCircle(half(doStuff(10))))

7. Write a function `arraySum` that takes in one argument and returns the sum of all the elements.

function arraySum(arr){
  let sum=0
for(i= 0; i < arr.length; i++){
   sum+=arr[i]
   }
   return sum
}
arraySum([2, 4, 6, 8])
