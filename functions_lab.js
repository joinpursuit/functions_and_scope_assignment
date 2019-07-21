// # Function Exercises
//
// ## Question 1
// Write a function that returns the largest of two numbers. If they are equal, return the second one.

const returnsLargest = (num1, num2) => {
  if (num1 > num2){
    return num1
  } else if (num2 > num1){
    return num2
  } else {
    return num2
  }
}
let numbers = returnsLargest(1, 14);
console.log(numbers);

// ## Question 2
// Write a function named getDogAge that takes one argument: a dog's age in human years.
// The function returns the dog's age in dog years. The conversion rate is 1 human year to 7 dog years.

const getDogAge = (num) => {
  return num * 7
}

let dogAge = getDogAge(4);
console.log(dogAge);


// ## Question 3
// Write a function `arraySum` that takes in an array and returns the sum of all the elements.

let sum = 0
const arraySum = (arr) => {
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
 return sum
}

let arr1 = [13, 2, 4, -2]
console.log(arraySum(arr1));


// ## Question 4
// Write a function that takes in any two numbers and return their sum.

const addTwoNumbers = (num1, num2) => {
  return num1 + num2
}

console.log(addTwoNumbers(2, 3));


// ## Question 5
// Write a function takes in any number grade and returns a corresponding letter grade.

const letterGrade = (num) => {
  if (num >= 100){
    return "A+"
  } else if (num >= 90 && num <= 99){
    return "A"
  } else if (num >= 80 && num <= 89){
    return "B"
  } else if (num >= 70 && num <= 79){
    return "C"
  } else if (num >= 65 && num <= 69){
    return "D"
  } else {
    return "F"
  }
}

console.log(letterGrade(88));


// ## Question 6
// Implement a function named `repeatLog` that takes a string and a number as parameters.
// The function should log `message` `count` number of times.

const repeatLog = (str, num) => {
  let numberOfStrings = str.repeat(num)
  return numberOfStrings
}


console.log(repeatLog("blah", 5));



// ## Question 7
// Write a function named `first` that takes a number and returns an array with all the numbers from 1 to n.

const first = (num) => {
    let newArr = []
    for (let i = 0; i <= num; i++){
      newArr.push(i)
    }
    return newArr
}

console.log(first(8));


// ## Question 8
// Write a function that logs the numbers from 1 to x, except:
// If the number if a multiple of 3, log `"Fizz"` instead of the number
// If the number is a multiple of 5, log `"Buzz"` instead of the number
// If the number is a multiple of 3 AND 5, log `"FizzBuzz"` instead of the number
// Your function should take in one parameter: x (the number to count up to)

const logFizzBuzz = (num) => {
 for (let i = 1; i <= num; i++){
  if (i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz " + i)
  } else if (i % 5 === 0){
    console.log("Buzz " + i)
  } else if (i % 3 === 0){
    console.log("Fizz " + i)
  } else {
    console.log(i)
  }
}
}

logFizzBuzz(45);

// ## Question 9
// Write a function named `reverse` that takes an array as a parameter.
// The function should return an array in reverse order.

const reverse = (arr) => {
 let reverseArray = arr.reverse()
 return reverseArray
}

let arr2 = [5, 10, 15, 20, 25, 30]
console.log(reverse(arr2));


// ## Question 10
// Write a function that prints out the most frequently occurring element in an array.

arr = [2, 4, 2, 3, 5, 2, 7, 2, 8, 2]

const mostFrequent = (arr) => {
// declare empty object variable
let emptyObject = {}
// loop through an array
for (let i = 0; i < arr.length; i++){
  //every time that we loop through the array
  // add it as a key to the empty object
if (emptyObject[arr[i]]){

}
}

// increment the value every time the element in seen in the array
}


// ## Question 11
// Write a function that sums all the even numbers in an array.


let arr3 = [10, 11, 12, 13, 14, 15]

const sumEvenNums = (arr) => {
  let sum = 0
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0) {
      sum += arr[i]
    }
  } return sum
}

console.log(sumEvenNums(arr2));

// ## Question 12
// Write a function that flips an object.  All of the keys are now values and all of the values are now keys.


// ## Question 13
// Write a function that determines if a value is inside of array.
