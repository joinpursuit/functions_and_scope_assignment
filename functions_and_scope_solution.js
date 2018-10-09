/*
//1.What will the following code log? Why?
output should be "bye".
Because the variable greeting has been changed inside the funtion from "hi" to "bye".
And the hello function has been called before log.

//2.Write a function that returns the largest of two numbers. If they are equal, return the second one.
function largestNum(num1,num2) {
  if (num1 = num2) {
  return num2;
  } else if (num1 > num2) {
    return num1;
    } else {
      return num2;
    }
}
console.log(largestNum(1,4));

// Question 3
function getDogAge(ageInHuman) {
  let ageInDog = ageInHuman * 7;
  return ageInDog;
}
console.log(getDogAge(9));

//Question 4

const calcCircumference = (radius) => {
  return Math.round(Math.PI * radius * radius);
}
const calcArea = (radius) => {
  return Math.round(2 * Math.PI * radius);
}
const circleProps = (radius) => {
  console.log("The circumference is " + calcCircumference(radius));
  console.log("The area is " + calcArea(radius));
}
console.log(circleProps(8));

//Question 5
const celciusToFahrenheit = (celsius) => {
  return celsius * 9 / 5 + 32;
}
const fahrenheitToCelcius = (Fahrenheit) => {
  return (Fahrenheit - 32) * 5 / 9;
}
const convertTemperature =(temp,str) => {
  if (str === "C") {
    return fahrenheitToCelcius(temp);
  } else if (str === "F") {
    return celciusToFahrenheit(temp);
  }
}
console.log(convertTemperature(32,"F"));

//Question 6
const square = (num) => {
  return num * num;
};
const half = (num) => {
  return num / 2;
};
const percentOf = (num1,num2) => {
  return (num1 / num2 * 100).toFixed(2) + "%";
};
const areaOfCircle = (radius) =>{
  return (Math.PI * radius * radius).toFixed(2);
};
const doStuff = (num) => {
  let answer1 = square (num);
  let answer2 = half(answer1);
  let answer3 = areaOfCircle(answer2);
  let answer4 = percentOf(answer1,answer3);
  return answer4;
};
console.log(doStuff(5));

//Question 7
let arr = [1,2,4,5,6];
const arraySum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
     sum += arr[i];
  }
  return sum;
}
console.log(arraySum(arr));
*/
