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

it will log "bye", this will happen because the hello function is called before console logging it, the function will change the value of hi to bye. then lastly the console log outputs the new value of greeting.

 2. Write a function that returns the largest of two numbers. If they are equal, return the second one.

 const largNum = (num,num2) => {
   let LargestN = 0;

   if(num > num2){
     console.log(`${num} is greater than ${num2}`)
   }else if(num2 > num){
     console.log(`${num2} is greater than ${num}`)
   }else{
     console.log(`${num2} is best`)
   }
   return
 }

largNum(4,4)

 3. Write a function named getDogAge that takes one argument: a dog's age in human years. The function returns the dog's age in dog years. The conversion rate is 1 human year to 7 dog years.

    * Call the function and log the result.



const getDogAge = (Dage) => {
  return Dage * 7
}
console.log(getDogAge(4));


4. Create two functions that calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm)

  * Create a function called calcCircumfrence that takes the radius as an argument and return the circumference. Call the function and log the circumference:
  * Create a function called calcArea that takes the radius as an argument and returns the area.

Create a third function circleProps that takes the radius as an argument, calls the two other functions, and logs the area and circumference. The output should look like this:

"The circumference is ___".

 "The area is ___".

let circumference = 0;

const calcCircumference = (radius) => {
  return 2*Math.PI*radius
  cirF = calcCircumference()
}

const calcCircumference = (radius) => {
  return 2*Math.PI*radius
}

const calcArea = (radius) => {
  return Math.PI*(Math.pow(radius, 2))
}

const circleProps = (radius) =>{
  console.log(`This is the are ${calcArea(radius)}`);
  console.log(`The circumference is ${calcCircumference(radius)}`)
}

circleProps(5)


5. Make a temperature converter. Use google to find the conversion formulas.

  * Create a function called celciusToFahrenheit that takes a temperature in Celsius and returns it in Fahrenheit.
  * Create a function called fahrenheitToCelcius that takes a temperature in Fahrenheit and returns it in Celsius.
  * Create a function called convertTemperature that takes two arguments: a temperature and a string. If the string is 'C', use fahrenheitToCelcius to return the temperature to Celsius. If the string is 'F', use celciusToFahrenheit to convert the temperature to Fahrenheit.

  const calcToF =(celsius) =>{
    return (celsius * (9/5)) + 32
  }
  const calcToC = (fahren) =>{
    return ((fahren -32) * (5/9))
  }

  const convertTemp = (num, tempT ) =>{

    if(tempT.toLowerCase() === "c"){
      console.log(`${num} C is ${calcToF(num)} in F `)
    }else if(tempT.toLowerCase() === "f"){
      console.log(`${num} F is ${calcToC(num)} in C`)
    }else{console.log("asdf")}

  }
  convertTemp(12,"C")

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

      const Square =(num) =>{
        return Math.sqrt(num)
      }
      const half =(num) => {
        return num/2
      }
      const perCent = (numerator, denominator) => {
        return (numerator / denominator) *100 +" %"

      }
      const areaOfCircle = (radius) =>{

        return Math.PI*(Math.pow(radius, 2))
      }

      const doStuff = (aNumber) =>{
        let sqrdNum = Square(aNumber);
        let denom = areaOfCircle(half(Square(aNumber)));

        return perCent(sqrdNum,denom)
       }

      console.log(doStuff(4));

7. Write a function `arraySum` that takes in one argument and returns the sum of all the elements.

const arraySum = (daArg) =>{
  let arrRes = 0;
  for(var i = 0; i < daArg.length; i++){
    arrRes += daArg[i]

  }
 return arrRes
}
console.log(arraySum([1,2,3,5]))
