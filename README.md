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
it will log 'bye' because greeting was changed after the function.
```

  ```

 2. Write a function that returns the largest of two numbers. If they are equal, return the second one.
 ```
 function largest(num1, num2){

  if (num1 > num2){
    return num1;
  } else {
    return num2;

  }
}
console.log(largest(9,6));

 ```

 3. Write a function named getDogAge that takes one argument: a dog's age in human years. The function returns the dog's age in dog years. The conversion rate is 1 human year to 7 dog years.

    * Call the function and log the result.

```
function getDogAge(dogAge){
return 7 * dogAge;

}
console.log(getDogAge(2));
```    

4. Create two functions that calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm)

  * Create a function called calcCircumfrence that takes the radius as an argument and return the circumference. Call the function and log the circumference:
  ```
  function calcCircumfrence(radius){
return Math.PI * 2 * radius;

}
console.log('Circumfrence ' + calcCircumfrence(2));
  ```
  * Create a function called calcArea that takes the radius as an argument and returns the area.
```  
function calcArea(radius){
  return Math.PI * radius * radius;

}

console.log('Area ' + calcArea(3));
```
Create a third function circleProps that takes the radius as an argument, calls the two other functions, and logs the area and circumference. The output should look like this:

"The circumference is ___".

 "The area is ___".
```
function circleProps(radius){
  return 'The circumference is ' + calcCircumfrence(radius) +'\nThe area is ' +  calcArea(radius);
}
console.log(circleProps(1));
```
5. Make a temperature converter. Use google to find the conversion formulas.

  * Create a function called celciusToFahrenheit that takes a temperature in Celsius and returns it in Fahrenheit.
  ```
  function celciusToFahrenheit(temp){
    return temp * 1.8 + 32
  }
  console.log(Math.round(celciusToFahrenheit(32)));

  ```
  * Create a function called fahrenheitToCelcius that takes a temperature in Fahrenheit and returns it in Celsius.
  ```
  function fahrenheitToCelcius(temp){
    return (temp - 32)* 5/9
  }
  console.log(Math.round(fahrenheitToCelcius(80)));

  ```
  * Create a function called convertTemperature that takes two arguments: a temperature and a string. If the string is 'C', use fahrenheitToCelcius to return the temperature to Celsius. If the string is 'F', use celciusToFahrenheit to convert the temperature to Fahrenheit.
  ```
  function convertTemperature(temp, inp){
    if (inp === 'C'){
      return temp * 1.8 + 32
    } else if (inp === 'F'){
      return (temp - 32)* 5/9
    } else {
      return 'You didnt input anything'
    }
  }
  console.log(convertTemperature(32,'C'));
  ```

6. The Calculator:

  * Write a function `square` that returns the square of a number.
  ```
  function square(num){
    return num * num
  }
  console.log(square(4));

  ```
  * Write a function `half` that returns half the value of a number.
  ```
  function half(num){
    return num / 2
  }
  console.log(half(10));

  ```
  * Write a function `percentOf` that takes two numbers. Calculate what percent the first number is of the second number, and return the result as a string. For example, 2 is 50% precent of 4, so the function returns '50%'.
  ```
  function percentOf(num, num1){
    let raw = (num / num1) * 100
    return raw.toFixed(0) + '%'

  }
  console.log(percentOf(2,3));

  ```
  * Write a function called `areaOfCircle` that takes one argument (the radius), and return the area of a circle with that radius.
  ```
  function calcArea(radius){
    return Math.PI * radius * radius;

  }

  console.log('Area ' + calcArea(3));
  ```

  * Bonus: Round the result so there are only two digits after the decimal.
  ```
  function calcArea(radius){
    return (Math.PI * radius * radius).toFixed(2);

  }

  console.log('Area ' + calcArea(3));

  ```
  * Write a function doStuff that takes one argument (a number) and does the following (using the functions you wrote earlier):
      1. Calculates and saves the square of the number.
      2. Calculates and saves half the value of the result of #1.
      3. Calculate the area of a circle with the result of #2 as the radius.
      4. Calculate and returns the percentage the squared result (#1) is of the area (#3)
      ```
  function square(num){
    return num * num
  }
  function half(num){
    return num / 2
  }
  function calcArea(radius){
    return (Math.PI * radius * radius).toFixed(2);

  }
  function percentOf(num, num1){
    let raw = (num / num1) * 100
    return raw.toFixed(0) + '%'

  }

function doStuff(num){
  let squareNum = square(num);
  let halved = half(squareNum);
  let circleArea = calcArea(halved);
  console.log('The area of the circle is ' + circleArea);
  return percentOf(squareNum, circleArea);
}

console.log(doStuff(5));

      ```

7. Write a function `arraySum` that takes in one argument and returns the sum of all the elements.
```
function arraySum(arr){
  let result = 0;
  for(let i = 0; i < arr.length; i++){
    result += arr[i];
  }
  return result;
}
console.log(arraySum([2,1,2,3,4]));


```
