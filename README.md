# Function Exercies
_NOTE:_ I am not asking for a specific ES syntax, but please note that you need to be able to do both.

1. What will the following code log? Why?
  ```js
let greeting = 'hi'

function hello(){
  greeting = 'bye'
}

hello() // This will print out: bye
console.log(greeting) // Will log bye, because we can access inside the function in that way we re-assign the value of greeting. If the function was declare with a variable so that is a local scope.

}

  ```

 2. Write a function that returns the largest of two numbers. If they are equal, return the second one.

 ```js
 const largestNum = function(num1, num2){

   if(num1 > num2){
     return num1;
   }else if(num1 < num2){
     return num2;
   }else{
     return "They are equal."
   }
 };

 console.log(largestNum(8, 8));
 ```

 3. Write a function named getDogAge that takes one argument: a dog's age in human years. The function returns the dog's age in dog years. The conversion rate is 1 human year to 7 dog years.

    * Call the function and log the result.

    ```js
    function getDogAge(dogAge) {
    return dogAge * 7
  };

  getDogAge();

  console.log(getDogAge(3));
    ```

4. Create two functions that calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm)

  * Create a function called calcCircumfrence that takes the radius as an argument and return the circumference. Call the function and log the circumference:
  * Create a function called calcArea that takes the radius as an argument and returns the area.

Create a third function circleProps that takes the radius as an argument, calls the two other functions, and logs the area and circumference. The output should look like this:

```js
"The circumference is ___".

 "The area is ___".

```

```js
const calcCircumfrence = function(radius){
   return 2 * Math.PI * radius;
};

const calcArea = function(radius){
return  Math.PI * Math.pow(radius, 2)
};

const circleProps = function(radius){
  console.log("The circumference is " + calcCircumfrence(radius));
  console.log("The are is " + calcArea(radius));

};

circleProps(3);
```

5. Make a temperature converter. Use google to find the conversion formulas.

  * Create a function called celciusToFahrenheit that takes a temperature in Celsius and returns it in Fahrenheit.
  * Create a function called fahrenheitToCelcius that takes a temperature in Fahrenheit and returns it in Celsius.
  * Create a function called convertTemperature that takes two arguments: a temperature and a string. If the string is 'C', use fahrenheitToCelcius to return the temperature to Celsius. If the string is 'F', use celciusToFahrenheit to convert the temperature to Fahrenheit.

```js
const celciusToFahrenheit = function(fahrenheit){
console.log(fahrenheit * (9/5) + 32);
}
 celciusToFahrenheit(20);

const fahrenheitToCelcius = function(celcius){

return celcius - 32 * (5/9);
}
 fahrenheitToCelcius(3);
```

```js

const celciusToFahrenheit = function(celcius){
return celcius * (9/5) + 32;
};

const fahrenheitToCelcius = function(fahrenheit){
return (fahrenheit - 32) * (5/9);
};

const convertTemperature  = function(temperature,string){
  if(string === "C"){
    return "The temperature is Celcius " + fahrenheitToCelcius(temperature) + " C.";
    ;
  }else if(string === "F"){
    return "The temperature is Fahrenheit " + celciusToFahrenheit(temperature) + " F.";
  }
};
console.log(convertTemperature(3, "F"));
```

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

  ```js
  const calculateSquare = function(square){
    console.log(Math.pow(square, 2));
  };
calculateSquare(2);

  const calculateHalf = function(half){
    console.log(half / 2);
  };
calculateHalf(4);

const percentOf = function(num1, num2){
  console.log(" The " + num1 + " is " + (num1 / 100) * num2 + "% of " + num2);
};
percentOf(12, 50);

const areaOfCircle = function(radius){
  return  (Math.PI * Math.pow(radius, 2)).toFixed(2) + " is the radius of " + radius ; // This have the BONUS to.toFixed()
};
console.log(areaOfCircle(2));
  ```
```js
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
       let newSquareSaved = half(squareSaved);
       let areaCircle = areaOfCircle(newSquareSaved);
       let calculate = percentOf(squareSaved,areaCircle);

           return calculate;

     }
     console.log(doStuff(100));
```

7. Write a function `arraySum` that takes in one argument and returns the sum of all the elements.
```js
arr = [1,2,3,4];

const arraySum = function(arr){
  let sum = 0;

  for(let i = 0; i < arr.length ; i++){
  sum += arr[i]
  }
  return sum
};


console.log(arraySum(arr));
```
