// # Function Exercises
//
// ## Question 1
//
// Write a function that returns the largest of two numbers. If they are equal, return the second one.
//
// Example:
//
// Input: `12, 4`
//
// Output: `12`
function largerChoice (num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 >= num1) {
    return num2;
  }
}
console.log(largerChoice(12,4));
// ## Question 2
//
// Write a function named getDogAge that takes one argument:
// a dog's age in human years. The function returns the dog's age in dog years.
// The conversion rate is 1 human year to 7 dog years.
//
// Example:
//
// Input: `4`
//
// Output: `28`
const getDogAge = (num) => {
  return num * 7;
}
console.log(getDogAge(4));
// ## Question 3
//
// Write a function `arraySum` that takes in an array and returns the sum of all
// the elements.
//
// Example:
//
// Input: `[13,2,4,-2]`
//
// Output: `17`
let myArray = [13, 2, 4, -2];
const arraySum = (arr) => {
  let sum = 0;
  for (i in arr) {
    sum += arr[i];
    arr[i]++;
  }
  return sum;
}
console.log(arraySum(myArray));
// ## Question 4
//
// Write a function that takes in any two numbers and return their sum.
//
// Example:
//
// Input: `14, 5`
//
// Output: `19`
function sumTwoNums (num1, num2) {
  return num1 + num2;
}
console.log(sumTwoNums(14,5));
// ## Question 5
//
// Write a function takes in any number grade and returns a corresponding letter grade.
//
// | Number Grade | Equivalent Letter Grade |
// | :--------: | :---------: |
// | 100 | A+ |
// | 90 - 99 | A |
// | 80 - 89 | B |
// | 70 - 79 | C |
// | 65 - 69 | D |
// | Below 65 | F |
//
//
// Example:
//
// Input: `88`
//
// Output: `"B"`
const letterGrade = (num1) => {
    if (num1 === 100) {
      return "A+";
    } else if (num1 >= 90 && num1 <= 99) {
      return "A";
    } else if (num1 >= 80 && num1 <= 89) {
      return "B";
    } else if (num1 >= 70 && num1 <= 79) {
    return "C";
    } else if (num1 >= 65 && num1 <= 69) {
    return "D";
    } else {
    return "F";
  }
}
console.log(letterGrade(88));
// ## Question 6
//
// Implement a function named `repeatLog` that takes a string and a number as parameters.
// The function should log `message` `count` number of times.
//
// Example:
//
// Input: `"+", 10`
//
// Output: `++++++++++`
function repeatLog(str, num) {
  let repeater= 0;
  while (repeater < num) {
  console.log(str);
  repeater++;
  }
}
console.log(repeatLog("meow", 8));
// ## Question 7
//
// Write a function named `first` that takes a number and returns an array
// with all the numbers from 1 to n
//
// Example:
//
// Input: `first(3)`
//
// Output: `[1, 2, 3]`
//
const first = (num) => {
  let firstArray = [];
  let myNum = 1;
  while (firstArray.length < num) {
    firstArray.push(myNum);
    myNum ++;
    console.log(firstArray);
  }
}
console.log(first(3));
// ## Question 8
//
// Write a function that logs the numbers from 1 to x, except:
//
// If the number if a multiple of 3, log `"Fizz"` instead of the number
// If the number is a multiple of 5, log `"Buzz"` instead of the number
// If the number is a multiple of 3 AND 5, log `"FizzBuzz"` instead of the number
// Your function should take in one parameter: x (the number to count up to)
//
function fizzyBuzzy(x) {
  for (let newNum = 1; newNum < x; newNum++) {
    if (newNum % 3 === 0 && newNum % 5 === 0) {
      console.log("FizzBuzz");
    } else if (newNum % 3 === 0 && newNum % 5 != 0) {
      console.log("Fizz");
    } else if (newNum % 5 === 0 && newNum % 3 != 0) {
      console.log("Buzz");
    }
  }
}
console.log(fizzyBuzzy(24));
// ## Question 9
//
// Write a function named `reverse` that takes an array as a parameter.
// The function should return an array in reverse order.
//
// Example:
//
// Input: `reverse([1, 2, 3])`
//
// Output: `[3, 2, 1]`
//
let happyMeal = ["burger", "juice", "apple", "toy"];
const reverse = (arr) => {
  return arr.reverse();
}
console.log(reverse(happyMeal));
// ## Question 10
//
// Write a function that prints out the most frequently occurring element in an array.
//
// Example:
//
// Input: `[2,1,4,2,5,2,3,23,3,3,2,2,2,24,56,2,2,5,46,2]`
//
// Output: `2`
//
//
//
// ## Question 11
//
// Write a function that sums all the even numbers in an array.
//
// Example:
//
// Input: `[1,2,5,64,23,22,91,3]`
//
// Output: `88`
//
//
// ## Question 12
//
// Write a function that flips an object.  All of the keys are now values and all of the values are now keys.
//
// Example:
//
// Input: `{1: "uno", 5: "cinco"}`
//
// Output: `{"uno": 1, "cinco": 5}`
//
//
// ## Question 13
//
// Write a function that determines if a value is inside of array.
//
// Example:
//
// Input: `[1,4,6,9,10], 5`
//
// Output: `false`
