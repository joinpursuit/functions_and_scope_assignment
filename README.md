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
  It will log bye because we reassigned the value of the variable greeting inside  the function

 2. Write a function that returns the largest of two numbers. If they are equal, return the second one.

 ```js

const largestNum = (num1, num2) => {

  if (num1 > num2){
      return num1;
  }else if (num1 < num2){
      return num2;
  }else if (num1 === num2){
      return "anything"
  }
}
}
console.log(
  largestNum(2,2)
);

 ```

 3. Write a function named getDogAge that takes one argument: a dog's age in human years. The function returns the human's age in dog years. The conversion rate is 1 human year to 7 dog years.

    * Call the function and log the result.

    const getDogAge = (human) => {
      let dogYears = 0
        if (human <= 99){
          return dogYears = human * 7
        }else {
        return "R.I.P doggo"
        }
    }
    console.log (getDogAge(14)
    );

4. Create two functions that calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm)

  * Create a function called calcCircumference that takes the radius as an argument and return the circumference. Call the function and log the circumference:
  * Create a function called calcArea that takes the radius as an argument and returns the area.

Create a third function circleProps that takes the radius as an argument, calls the two other functions, and logs the area and circumference. The output should look like this:

const calcCircumference = (radius) => {

  return Math.floor(2 * Math.PI * radius);
}

console.log(calcCircumference(2))

const calcArea = (radius) => {

 return Math.floor(Math.PI * radius * radius)
}
console.log(calcArea(6))

const circleProps = (radius) => {
  calcCircumference()
  calcArea()
}
console.log(`The circumference is ${calcCircumference(2)}. && The area is ${calcArea(6)}.`)

5. Make a temperature converter. Use google to find the conversion formulas.

  * Create a function called celciusToFahrenheit that takes a temperature in Celsius and returns it in Fahrenheit.
  * Create a function called fahrenheitToCelcius that takes a temperature in Fahrenheit and returns it in Celsius.
  * Create a function called convertTemperature that takes two arguments: a temperature and a string. If the string is 'C', use fahrenheitToCelcius to return the temperature to Celsius. If the string is 'F', use celciusToFahrenheit to convert the temperature to Fahrenheit.

  const celsiusToFarenheit = (celTemp) => {
    return celTemp = Math.floor((celTemp * 1.8) + 32)
  }
  //console.log (celsiusToFarenheit(2));

  const FarenheitToCelsius = (fahTemp) => {
    return fahTemp = Math.floor((fahTemp - 32) * 5/9)
  }
  //console.log (FarenheitToCelsius(2));

  const convertTemperature = (num, type) => {
    if (type === "C"){
      return `Outside it is ${celsiusToFarenheit(num)} degrees Farenheit.`
    } else if (type === "F"){
      return `Outside it is ${FarenheitToCelsius(num)} degrees Celsius.`
    }

  }
  convertTemperature();
  console.log (convertTemperature(0 , "F"));


6. The Calculator:

  * Write a function `square` that returns the square of a number.

  const square = (num) => {
    return num * num;
  }
  console.log(square(2));

  * Write a function `half` that returns half the value of a number

  const half = (num) => {
    return num / 2
  }
  console.log (half(8));

  * Write a function `percentOf` that takes two numbers. Calculate what percent the first number is of the second number, and return the result as a string. For example, 2 is 50% precent of 4, so the function returns '50%'.

  const percentOf = (num1, num2) => {
    return Math.floor((num1/num2) * 100)
  }
  console.log(percentOf(2, 3));

  * Write a function called `areaOfCircle` that takes one argument (the radius), and return the area of a circle with that radius.
  * Bonus: Round the result so there are only two digits after the decimal.
  * Write a function doStuff that takes one argument (a number) and does the following (using the functions you wrote earlier):
      1. Calculates and saves the square of the number.
      2. Calculates and saves half the value of the result of #1.
      3. Calculate the area of a circle with the result of #2 as the radius.
      4. Calculate and returns the percentage the squared result (#1) is of the area (#3)

      const doStuff = (num) => {
          let savedSq = square(num);
          let savedHalf = half(savedSq);
          let areaResult = areaOfCircle(savedSq * savedHalf);
          return percentOf(savedSq, areaResult);

        }
      console.log(doStuff(8));

7. Write a function `arraySum` that takes in one argument and returns the sum of all the elements.

const arraySum = (array) =>{
  let track = 0
    for (let i = 0; i < array.length; i++) {
      track += array[i]
    }

  return track
}

array = [1, 2, 3, 4, 5]
console.log (arraySum(array));
