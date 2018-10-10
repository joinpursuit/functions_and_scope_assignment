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
//
Will log "bye" because the code explicity calls console.log(greeting); greeting is a variable that stores "bye"
//

  ```

 2. Write a function that returns the largest of two numbers. If they are equal, return the second one.
 //
 function biggerNum (num1, num2){
   if (num1 < num2 ){
   return (num1 + " is the smaller number")
   } else if (num1 > num2){
     return (num2 + " is the smaller number")
   }
   else {
     return num2
   }

 }

 console.log (biggerNum(12, 15))
 //

 3. Write a function named getDogAge that takes one argument: a dog's age in human years. The function returns the dog's age in dog years. The conversion rate is 1 human year to 7 dog years.

    * Call the function and log the result.
    //
    function dogAge(humanAge){
      return humanAge * 7

    }
    console.log (dogAge(4))
    //

4. Create two functions that calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm)

  * Create a function called calcCircumfrence that takes the radius as an argument and return the circumference. Call the function and log the circumference:
  //
  const calcCircumfrence = (radius) => {
    return 2 * Math.PI * radius

  }
  console.log (calcCircumfrence(2))
  //
  * Create a function called calcArea that takes the radius as an argument and returns the area.
//
const areaCirc = (radius) => {
  return Math.PI * radius * radius

}
console.log (areaCirc(5))
//


Create a third function circleProps that takes the radius as an argument, calls the two other functions, and logs the area and circumference. The output should look like this:

"The circumference is ___".

 "The area is ___".
//
const areaCirc = (radius) => {
  return Math.PI * radius * radius

}

const calcCircumfrence = (radius) => {
    return 2 * Math.PI * radius
}

const circleProp = (radius) => {
  return "the area is " + areaCirc(radius) + "\n" + "the circumfrence is " + calcCircumfrence(radius)
}
console.log (circleProp(3))
//
5. Make a temperature converter. Use google to find the conversion formulas.

  * Create a function called celciusToFahrenheit that takes a temperature in Celsius and returns it in Fahrenheit.
  * Create a function called fahrenheitToCelcius that takes a temperature in Fahrenheit and returns it in Celsius.
  * Create a function called convertTemperature that takes two arguments: a temperature and a string. If the string is 'C', use fahrenheitToCelcius to return the temperature to Celsius. If the string is 'F', use celciusToFahrenheit to convert the temperature to Fahrenheit.
  //
  const celciusToFahrenheit = (celcius) => {
   return (celcius * 9/5) + 32
  }
  const fahrenheitToCelcius = (fahrenheit) => {
    return (fahrenheit - 32) * (5/9)
  }
  // console.log (fahrenheitToCelcius(32))

  const convertTemperature = (temp, str) => {
    if(str === "C"){
    return fahrenheitToCelcius(temp)
    } else if (str === "F"){
      return celciusToFahrenheit(temp)
    }
  }
  console.log (convertTemperature(0, "F"));
  //

6. The Calculator:

  * Write a function `square` that returns the square of a number.
  * Write a function `half` that returns half the value of a number.
  * Write a function `percentOf` that takes two numbers. Calculate what percent the first number is of the second number, and return the result as a string. For example, 2 is 50% precent of 4, so the function returns '50%'.
  //
  const square = (sqr) => {
   return sqr * sqr
  }
  const half = (hlf) => {
    return hlf/2
  }
  const percent = (num1, num2) => {
    return console.log (num1 + " is " + Math.round(num1 / num2 * 100) + " % of " + num2)
  }
  percent (1,2)
  //
  * Write a function called `areaOfCircle` that takes one argument (the radius), and return the area of a circle with that radius.
  //
  let areaOfCircle = (radius) => {
    return Math.PI * radius *radius
  }
  console.log (areaOfCircle(2))
  //
  * Bonus: Round the result so there are only two digits after the decimal.
  //
  let areaOfCircle = (radius) => {
    let a = Math.PI * radius *radius;
   return a.toFixed(2)
  }
  console.log (areaOfCircle(2))
  //
  * Write a function doStuff that takes one argument (a number) and does the following (using the functions you wrote earlier):
      1. Calculates and saves the square of the number.
      2. Calculates and saves half the value of the result of #1.
      3. Calculate the area of a circle with the result of #2 as the radius.
      4. Calculate and returns the percentage the squared result (#1) is of the area (#3)
      //
      const percent = (num1, num2) => {
          return ((num1/num2) * 100)
        }
      const areaOfCircle = (radius) => {
          return Math.PI * radius *radius
        }
      const half = (hlf) => {
          return hlf/2;
      }
      const square = (sqr) => {
         return sqr * sqr;
        }
      let doStuff = (num) => {
        let saveSquare =  square(num);
        let saveHalf = half(saveSquare);
        let saveArea = areaOfCircle(saveSquare);
        return percent(saveSquare, saveArea)
       };

        doStuff(10)
      //

7. Write a function `arraySum` that takes in one argument and returns the sum of all the elements.
//
const arraySum = (num) => {
  let track = 0
  for( let i=0; i < num.length; i++){
     track += num[i]
  }
  return track;
}
 num = [1, 2, 3, 5, 10]
console.log(arraySum(num))
//
