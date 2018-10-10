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
  bye

 2. Write a function that returns the largest of two numbers. If they are equal, return the second one.

 function numCheck (num, num2){
   if (num <= num2){
       return num2
   } else {
     return num
   }
 }
   console.log(numCheck(3,3))



 3. Write a function named getDogAge that takes one argument: a dog's age in human years. The function returns the dog's age in dog years. The conversion rate is 1 human year to 7 dog years.

    * Call the function and log the result.

    const getDogAge = (age) => {
      return age * 7;
    }
    console.log(getDogAge(3));


4. Create two functions that calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm)

  * Create a function called calcCircumfrence that takes the radius as an argument and return the circumference. Call the function and log the circumference:
  * Create a function called calcArea that takes the radius as an argument and returns the area.

Create a third function circleProps that takes the radius as an argument, calls the two other functions, and logs the area and circumference. The output should look like this:

"The circumference is __".

 "The area is ___".

 function calcCircumfrence (radius) {
   return 2 * radius * Math.PI
 }
 const calcArea = (radius) => {
   return radius * radius * Math.PI
 }
 function circleProps (radius) {
   let properties = console.log("the circumference is " + calcCircumfrence(radius), "\nthe area is " + calcArea(radius))
   return properties
 }

 circleProps(3);



5. Make a temperature converter. Use google to find the conversion formulas.

  * Create a function called celciusToFahrenheit that takes a temperature in Celsius and returns it in Fahrenheit

  const fahrenheitToCelcius = (temp) => {
    return (temp - 32) * 5/9;
  }

  * Create a function called fahrenheitToCelcius that takes a temperature in Fahrenheit and returns it in Celsius.

  function celciusToFahrenheit (temp) {
    return temp * (9/5) + 32
  }

  * Create a function called convertTemperature that takes two arguments: a temperature and a string. If the string is 'C', use fahrenheitToCelcius to return the temperature to Celsius. If the string is 'F', use celciusToFahrenheit to convert the temperature to Fahrenheit.

  const fahrenheitToCelcius = (temp) => {
    return (temp - 32) * 5/9;
      fahrenheitToCelcius(temp);
  }
  function celciusToFahrenheit (temp) {
    return temp * (9/5) + 32;
      celciusToFahrenheit(temp);
  }
  const convertTemperature = (temp, type) => {
    if (type === "c") {
      return console.log(celciusToFahrenheit(temp));
    } else if (type === "f") {
      return console.log(fahrenheitToCelcius(temp));
    }
  }

  convertTemperature(30, "c");



6. The Calculator:

  * Write a function `square` that returns the square of a number.

  function square (num) {
    return num * num;
  }

  * Write a function `half` that returns half the value of a number.

  const half = (num) => {
    return num / 2;
  }

  * Write a function `percentOf` that takes two numbers. Calculate what percent the first number is of the second number, and return the result as a string. For example, 2 is 50% precent of 4, so the function returns '50%'.

  function percentOf (num, num2) {
    return console.log(num + " is " + Math.round(num / num2 * 100) + "% of " + num2);
  }

  * Write a function called `areaOfCircle` that takes one argument (the radius), and return the area of a circle with that radius.

  function areaOfCircle (radius) {
    return console.log(radius * radius * Math.PI);
  }

  areaOfCircle(2);


  * Bonus: Round the result so there are only two digits after the decimal.

  function areaOfCircle (radius) {
    let area = ((radius * radius * Math.PI).toFixed(2))
    return area
  }

  console.log(areaOfCircle(2));


  * Write a function doStuff that takes one argument (a number) and does the following (using the functions you wrote earlier):
      1. Calculates and saves the square of the number.
      2. Calculates and saves half the value of the result of #1.
      3. Calculate the area of a circle with the result of #2 as the radius.
      4. Calculate and returns the percentage the squared result (#1) is of the area (#3)

      function areaOfCircle (num) {
          let area = ((num) * (num) * Math.PI).toFixed(2)
          return area
        }

      function square (num) {
        return num * num;
      }
      const half = (num) => {
        return num / 2;
      }
      function percentOf (num, num2) {
        return ((num / num2 * 100).toFixed(2));
      }

      const doStuff = (num) => {
        let squared = square(num);
        let halfed = half(squared);
        let areaOfCirc = areaOfCircle(halfed);
        let percent = percentOf (squared, areaOfCirc);
        return areaOfCirc
      }

      console.log(doStuff(2) + " %");


7. Write a function `arraySum` that takes in one argument and returns the sum of all the elements.

function arraySum () {

  let sum = 0;
    for(i = 0; i < arguments.length; i++){
      sum += arguments[i]
  }
  return sum
}

console.log(arraySum(1,2,6,33,4));


if i want to get the answer in an array i will just add a variable with an empty array like this:

Reed explains why it's important to use arr in arraySum instead of leaving it empty to use arguments:
  it is clearer
  when you comeback to the code it's you could know what is suppose to come inside the parenthesis 

function arraySum(arr) {
  sum = 0;
  emt_arr = []
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    emt_arr.push(sum)
  }
  return emt_arr;
}
console.log(arraySum([9,5,0,1,2,3]));
console.log("the sum is: " + emt_arr[emt_arr.length - 1]);
