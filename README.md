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
**bye**
  ```


 2. Write a function that returns the largest of two numbers. If they are equal, return the second one.
 ```js
 function returnLargeNumber(num1, num2) {
 if (num1 <= num2)
 {
 return num2
 }
 else {
 return num1
}
 }


 console.log(returnLargeNumber(100,400))
 ```


 3. Write a function named getDogAge that takes one argument: a dog's age in human years. The function returns the dog's age in dog years. The conversion rate is 1 human year to 7 dog years.

    * Call the function and log the result.

``` js
function findDogYears (years){
	return years * 7
}

console.log(findDogYears(3)

``

4. Create two functions that calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm)

  * Create a function called calcCircumfrence that takes the radius as an argument and return the circumference. Call the function and log the circumference:
  * Create a function called calcArea that takes the radius as an argument and returns the area.


  // function calcCircumfrence(radius){
  // 		return 2 * Math.PI * radius
  // 	}


  // calcCircumfrence(1)

  const calcCircumfrence = radius => {return 2 * Math.PI * radius}

  calcCircumfrence(1)

  // function calcArea(radius) {
  // 	return (radius * radius) * Math.PI
  // }


  const calcArea = radius => { return (radius * radius) * Math.PI
  }

  calcArea(2)


Create a third function circleProps that takes the radius as an argument, calls the two other functions, and logs the area and circumference. The output should look like this:

"The circumference is ___".

 "The area is ___".

```js
const calcCircumfrence = radius =>{
	return 2 * Math.PI * radius
}

// function calcArea(radius) {
// 	return (radius * radius) * Math.PI
// }


const calcArea = radius => {
	return (radius * radius) * Math.PI
}

function circProp (radius){
	console.log(`The Circumfrence is ${calcCircumfrence(radius)} ... The Area is ${calcArea(radius)}`)

}

console.log (calcCircumfrence(3))
console.log(calcArea(3))

circProp(3)


```
5. Make a temperature converter. Use google to find the conversion formulas.

  * Create a function called celciusToFahrenheit that takes a temperature in Celsius and returns it in Fahrenheit.

  * Create a function called fahrenheitToCelcius that takes a temperature in Fahrenheit and returns it in Celsius.

  * Create a function called convertTemperature that takes two arguments: a temperature and a string. If the string is 'C', use fahrenheitToCelcius to return the temperature to Celsius. If the string is 'F', use celciusToFahrenheit to convert the temperature to Fahrenheit.
```
`const celciusToFahrenheit = num => {
	return (num * 9/5) + 32
}

const fahrenheitToCelcius = num => {
	return (num - 32) * 5/9
}

fahrenheitToCelcius(0)


const convertTemperature = (num1,type)=>{
	if (type === "C" || type === "c"){
		return console.log(celciusToFahrenheit(num1)+ "C°")
	}
	else if (type === "F" || type === "f"){
		return console.log(fahrenheitToCelcius(num1)+ "F°")
	}
	else
	return console.log("null")
}

convertTemperature(0,"C")
`
6. The Calculator:

  * Write a function `square` that returns the square of a number.
  * Write a function `half` that returns half the value of a number.
  * Write a function `percentOf` that takes two numbers. Calculate what percent the first number is of the second number, and return the result as a string. For example, 2 is 50% precent of 4, so the function returns '50%'.

  function Square (num){
	return Math.pow (num,2)
}

function Half (num){
	return num/2
}

function PercentOf (num, num2){
	 	let perc = (num/num2)*100
		 return perc + "%"
}

  * Write a function called `areaOfCircle`
  that takes one argument (the radius), and return the area of a circle with that radius.

  function areaOfCircle (radius){
	return ans = (Math.PI * (Math.pow(radius,2))).toFixed(2)
	}

	areaOfCircle(1.4)


  * Bonus: Round the result so there are only two digits after the decimal.

  * Write a function doStuff that takes one argument (a number) and does the following (using the functions you wrote earlier):
      1. Calculates and saves the square of the number.
      2. Calculates and saves half the value of the result of #1.
      3. Calculate the area of a circle with the result of #2 as the radius.
      4. Calculate and returns the percentage the squared result (#1) is of the area (#3)

    function doStuff (value) {
      let x = Square(value)
      let y = Half(x)
      let z = areaOfCircle(y)
      let xz = PercentOf(x,z)
      return console.log(xz)
      }

      doStuff(8)
7. Write a function `arraySum` that takes in one argument and returns the sum of all the elements.

function arraySum (array) {
let result = 0
for (i=0; i < array.length; i++){
	result = result + array[i]
}
return result
}

console.log(arraySum([1,2,3,4]))
