# Function Exercies
Jonathan Erquinigo
_NOTE:_ I am not asking for a specific ES syntax, but please note that you need to be able to do both.

1. What will the following code log? Why?
  ```js
let greeting = 'hi'

function hello(){
  greeting = 'bye'
}

hello()
console.log(greeting)
this is because of the hoisting. since since the greeting variable has not been declared in line 9, it will store the change into the greeting variable in line 6. if you have put let greeting = "bye"; into the function, only the change will happen within the code block. and on line 6 will still be on hi and since there is no argument in line 12 nothing will happen and line 13 will print out bye since no changes were done with the function
answer is bye

  ```

 2. Write a function that returns the largest of two numbers. If they are equal, return the second one.

 const largerNumber = (num1,num2) => {
if(num1 > num2){

 return num1 + " is the larger number here";
}else if(num1 < num2){
 return num2 + " is the larger number here"

}else if(num1 === num2){
 return "number is equal"

}

}

//largerNumber(1,2)
console.log(largerNumber(1,2));

 3. Write a function named getDogAge that takes one argument: a dog's age in human years. The function returns the dog's age in dog years. The conversion rate is 1 human year to 7 dog years.

    * Call the function and log the result.

    const getDogAge =(humanAge) =>{
       let dogYears = 0;
      if(humanAge <= 99){
        return dogYears = humanAge * 7;
      }else{
        return "RIP"
      }

      }


    console.log(getDogAge(18));

4. Create two functions that calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm)

  * Create a function called calcCircumfrence that takes the radius as an argument and return the circumference. Call the function and log the circumference:
  * Create a function called calcArea that takes the radius as an argument and returns the area.

Create a third function circleProps that takes the radius as an argument, calls the two other functions, and logs the area and circumference. The output should look like this:

"The circumference is ___".

 "The area is ___".

 const calcCircumfrence = (radiusVal) => {

   return Math.floor(2 * Math.PI * radiusVal)
 }

 const calcArea = (radiusVal) => {
   return Math.floor(Math.PI * radiusVal * radiusVal)
 }

const circleProps = (radiusVal) => {
  return `The circumference is ${calcCircumfrence(radiusVal)} the area is ${calcArea(radiusVal)}`;
  //logs the area of the circumference
}
//`some cool \`escaped\` thing`
 console.log(calcCircumfrence(10));
 console.log(calcArea(20));
 console.log(circleProps(4))


5. Make a temperature converter. Use google to find the conversion formulas.

  * Create a function called celciusToFahrenheit that takes a temperature in Celsius and returns it in Fahrenheit.
  * Create a function called fahrenheitToCelcius that takes a temperature in Fahrenheit and returns it in Celsius.
  * Create a function called convertTemperature that takes two arguments: a temperature and a string. If the string is 'C', use fahrenheitToCelcius to return the temperature to Celsius. If the string is 'F', use celciusToFahrenheit to convert the temperature to Fahrenheit.

  const celciusToFahrenheit = (celTemp) => {
    //(0°C × 9/5) + 32 = 32°F
  return  Math.floor(celTemp =(celTemp * 9/5) + 32)

  }
  //console.log(celciusToFahrenheit(10));



    const fahrenheitToCelcius = (fahTemp) => {
    //(32°F − 32) × 5/9 = 0°C
     return Math.floor(fahTemp = (fahTemp - 32) * 5/9)

  }
  //console.log(fahrenheitToCelcius(80));

  const convertTemperature = (temp, type) => {
    if(type === "C"){
      return `it is ${fahrenheitToCelcius(temp)} C`

    }else if(type === "F"){
      return `it is ${celciusToFahrenheit(celTemp)} F`
  }


  }



  console.log(convertTemperature(80, "C"))


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

      const square = (num) => {
      return num * num
      }
      //console.log(square(4));

      const half = (num) => {
      return num / 2
      }
      //console.log(half(7))

      const percentOf = (num1,num2) => {
        return (num1/ num2) * 100

      }
      //console.log(percentOf(8,3))

      const areaOfCircle = (radius) => {
        return Math.PI * radius * radius

      }
      //console.log(areaOfCircle(6).toFixed(2))

      const doStuff =(num) => {
        let squareSaved = square(num);
        let newSquareSaved = half(squareSaved)
        let areaCircle = areaOfCircle(newSquareSaved)
        let calculate = percentOf(squareSaved,areaCircle)

            return calculate

      }
      console.log(doStuff(100))




7. Write a function `arraySum` that takes in one argument and returns the sum of all the elements.

const arraySum = (arr) => {
arr;
  let sum = 0;
for(let i = 0; i < arr.length; i++){
  sum = sum + arr[i];


}
return sum;

}

let arr = [1,2,3,4,5]
console.log(arraySum(arr))
