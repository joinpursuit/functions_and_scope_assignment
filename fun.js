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


  it will log 'bye' bc the value of greeting was reassigned inside the function from 'hi'  to 'bye', thus console.log(greeting) returns 'bye'.


//  2. Write a function that returns the largest of two numbers. If they are equal, return the second one.
//
//  ```
 const largerNumber = (num1, num2) => {

   if( num1 > num2) {

    return num1;

   } else if (num1 < num2) {

      return num2;

   } else {
      return num2
   }

 }
  console.log(largerNumber(3,1));

// ```
//
//
//  3. Write a function named getDogAge that takes one argument: a dog's age in human years. The function returns the dog's age in dog years. The conversion rate is 1 human year to 7 dog years.
//

  const getDogAge = (age) => {

return age * 7

}

console.log(getDogAge(12))


//
// 4. Create two functions that calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm)
//
//   * Create a function called calcCircumfrence that takes the radius as an argument and return the circumference. Call the function and log the circumference:
//
//   ```
   const calcCircumfrence = (radius) => {

   let diameter = 2 * radius

   return 3.141592 * diameter

   }
   console.log('The circumference is ' +  calcCircumfrence(3));

// ```
//
//   * Create a function called calcArea that takes the radius as an argument and returns the area.
// ```

  const calcArea = (radius) => {
  let r2 = radius * radius
  return 3.141592 * r2
}

console.log('The area is ' + calcArea(3));

//   ```
//
// Create a third function circleProps that takes the radius as an argument, calls the two other functions, and logs the area and circumference. The output should look like this:
//
// "The circumference is ___".
//
//  "The area is ___".


const circleProps = (radius) => {
  return  "The circumfrance is " + calcCircumfrence(radius) + " The area is " + calcArea(radius);
}

console.log("5", circleProps(3));

//
// 5. Make a temperature converter. Use google to find the conversion formulas.

  //* Create a function called celciusToFahrenheit that takes a temperature in Celsius and returns it in Fahrenheit.

const celciusToFahrenheit = (temp) => {

let tempF = (temp * 9/5) +  32

return tempF

}
console.log(celciusToFahrenheit(21));


//  * Create a function called fahrenheitToCelcius that takes a temperature in Fahrenheit and returns it in Celsius.


const fahrenheitToCelcius = (temp) => {

return temp * 1.8 - 32

}

console.log(fahrenheitToCelcius(77))


//   * Create a function called convertTemperature that takes two arguments: a temperature and a string. If the string is 'C', use fahrenheitToCelcius to return the temperature to Celsius. If the string is 'F', use celciusToFahrenheit to convert the temperature to Fahrenheit.
//


const convertTemperature = (temp, kind) => {

if( kind === 'C') {
  return celciusToFahrenheit(temp);
} else {
  return fahrenheitToCelcius(temp);
}
}

console.log(convertTemperature(29, 'F'))

// 6. The Calculator:


//   * Write a function `square` that returns the square of a number.

const square = (num) => {
  return num * num;
}
console.log(square(4));



//   * Write a function `half` that returns half the value of a number.

 const half = (num) => {
   return num \ 2
 }
 console.log(half(4));


//   * Write a function `percentOf` that takes two numbers. Calculate what percent the first number is of the second number, and return the result as a string. For example, 2 is 50% precent of 4, so the function returns '50%'.


const percentOf = (num1, num2) => {

  return num1 + " is " + (num1/ num2 * 100) + '% of ' + num2 ;

}

console.log(percentOf(4, 16));


//   * Write a function called `areaOfCircle` that takes one argument (the radius), and return the area of a circle with that radius.
//   * Bonus: Round the result so there are only two digits after the decimal.


const areaOfCircle = (radius) => {
  let r2 = radius * radius
  return Math.round(3.141592 * r2)
}
console.log(areaOfCircle(5));



//   * Write a function doStuff that takes one argument (a number) and does the following (using the functions you wrote earlier):

//       1. Calculates and saves the square of the number.
//       2. Calculates and saves half the value of the result of #1.
//       3. Calculate the area of a circle with the result of #2 as the radius.
//       4. Calculate and returns the percentage the squared result (#1) is of the area (#3)


const doStuff = (num) => {
  let s1 = square(num);
  let s2 = half(s1);
  let s3 = areaOfCircle(s2);
  return  s1 + " is " + (s1/ s3 * 100) + '% of ' + s3

}

  console.log(doStuff (10));



// 7. Write a function `arraySum` that takes in one argument and returns the sum of all the elements.

let arr1 = [1, 2, 3, 4, 5, 6];
let sumArr = 0;

const arraySum = (arr) => {

  for( let i = 0 ; i < arr.length - 1 ; i++) {
    sumArr += arr[i];
  }

  return sumArr
}
console.log(arraySum(arr1));
