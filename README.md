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

  bye because that is what the function is to return .

 2. Write a function that returns the largest of two numbers. If they are equal, return the second one.

 function LargerNum (Num1,Num2) {
  if (Num2 >= Num1) {
  return (Num2)
} else {
  return (Num1)
}
}
console.log(LargerNum(4,4))

 3. Write a function named getDogAge that takes one argument: a dog's age in human years. The function returns the dog's age in dog years. The conversion rate is 1 human year to 7 dog years.

 function DogYears(Age) {
return Age * 7
}
console.log(DogYears(3))

4. Create two functions that calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm)

  * Create a function called calcCircumfrence that takes the radius as an argument and return the circumference. Call the function and log the circumference:

  function calcCircumfrence(radius) {
  return (2*Math.PI)*radius
}

console.log(calcCircumfrence(4))

  * Create a function called calcArea that takes the radius as an argument and returns the area.

  function calcArea(radius) {
  return (Math.PI*(radius * radius))
}
console.log(calcArea(4))

Create a third function circleProps that takes the radius as an argument, calls the two other functions, and logs the area and circumference. The output should look like this:

function CircleProps(radius) {
  let answer = ("The circumfrence is " + calcCircumfrence(radius) + "." + " The area is " + calcArea(radius) + ".");
  return answer;
}
console.log(CircleProps(4))

5. Make a temperature converter. Use google to find the conversion formulas.

  * Create a function called celciusToFahrenheit that takes a temperature in Celsius and returns it in Fahrenheit.
  * Create a function called fahrenheitToCelcius that takes a temperature in Fahrenheit and returns it in Celsius.
  * Create a function called convertTemperature that takes two arguments: a temperature and a string. If the string is 'C', use fahrenheitToCelcius to return the temperature to Celsius. If the string is 'F', use celciusToFahrenheit to convert the temperature to Fahrenheit.

  function convertTemperature(degree, format) {
  if (format === "C") {
    return celciusToFahrenheit(degree) + 'F'
  } else if (format === "F") {
    return fahrenheitToCelcius(degree) + 'C'
  }
}
console.log(convertTemperature(0,"C"))

6. The Calculator:

  * Write a function `square` that returns the square of a number.

  function squared(num) {
  return (num*num)
}
console.log(squared(9))

  * Write a function `half` that returns half the value of a number.

  function half(num) {
  return (num/2)
}
console.log(half(10))

  * Write a function `percentOf` that takes two numbers. Calculate what percent the first number is of the second number, and return the result as a string. For example, 2 is 50% precent of 4, so the function returns '50%'.

  function percentof(num,percent) {
 let per = [((num/percent)*100) + "%"]
  return per
}
console.log(percentof(2,4))

  * Write a function called `areaOfCircle` that takes one argument (the radius), and return the area of a circle with that radius.

  function areaOfCircle(radius) {
  return (((radius * radius)*Math.PI)+ "," + radius)
}
console.log(areaOfCircle(4))


7. Write a function `arraySum` that takes in one argument and returns the sum of all the elements.

function ArraySum(arg) {
  let sumArray = 0;
  for ( let i = 0; i < arg.length; i++) {
    sumArray += arg[i]
  }
 return sumArray
}
console.log(ArraySum([1,3,5]))
