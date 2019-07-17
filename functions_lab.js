 // ## Question 1
//
// Write a function that returns the largest of two numbers. If they are equal, return the second one.
//
// Example:
//
// Input: `12, 4`
//
// Output: `12`

const largerOfTheTwo = (num1, num2) => {
  if (num1 > num2){
    return num1
  } else if (num2 > num1){
    return num2
  } else {
    return num2
  }
}
console.log(largerOfTheTwo(4,4))

console.log('-----------------------')

// ## Question 2
//
// Write a function named getDogAge that takes one argument: a dog's age in human years. The function returns the dog's age in dog years. The conversion rate is 1 human year to 7 dog years.
//
// Example:
//
// Input: `4`
//
// Output: `28`
//
const getDogAge = (age) => {
  return age * 7
}
console.log(getDogAge(8))

console.log('-----------------------')
//
// ## Question 3
//
// Write a function `arraySum` that takes in an array and returns the sum of all the elements.
//
// Example:
//
// Input: `[13,2,4,-2]`
//
// Output: `17`
//
let arr = [13, 7, 9, 20, -1]
let sum = 0
const arraySum = (arr) => {
  for (let i = 0; i < arr.length; i ++){
  sum += arr[i]
}
  return sum
}
console.log(arraySum(arr))

console.log('-----------------------')

// ## Question 4
//
// Write a function that takes in any two numbers and return their sum.
//
// Example:
//
// Input: `14, 5`
//
// Output: `19`
//
const sumOfTwoNums = (num1, num2) => {
  return num1 + num2
}
console.log(sumOfTwoNums(45,20))

console.log('----------------------')

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
//
const graderFunct = (letter) => {
  if (letter > 99) {
    return 'A+'
  } else if (letter < 100 && letter >= 90){
    return 'A'
  } else if (letter < 90 && letter >= 80){
    return 'B'
  } else if (letter < 80 && letter >= 70){
    return 'C'
  } else if (letter < 70 && letter >= 65){
    return 'D'
  } else if (letter < 65){
    return 'F'
  }
}

console.log(graderFunct(89));

console.log('------------------------')

// ## Question 6
//
// Implement a function named `repeatLog` that takes a string and a number as parameters. The function should log `message` `count` number of times.
//
// Example:
//
// Input: `"+", 10`
//
// Output: `++++++++++`
//
const repeatLog = (str,count) => {
  let newStr = '';
  for (let i = 0; i < count; i ++){
    newStr += str;
  }
  console.log(newStr);
}
repeatLog('hello ',8);

console.log('-------------------------')
//
// ## Question 7
//
// Write a function named `first` that takes a number and returns an array with all the numbers from 1 to n
//
//
// Example:
//
// Input: `first(3)`
//
// Output: `[1, 2, 3]`
//
// How do I make this work with negative numbers?
const first = (num1) => {
  let newArr =[]
  for (let i = 1; i < num1 + 1; i ++){
    newArr.push(i)
  }
  return newArr;
}
console.log(first(4))

console.log('--------------------------')
//
// ## Question 8
//
// Write a function that logs the numbers from 1 to x, except:
//
// If the number if a multiple of 3, log `"Fizz"` instead of the number
// If the number is a multiple of 5, log `"Buzz"` instead of the number
// If the number is a multiple of 3 AND 5, log `"FizzBuzz"` instead of the number
// Your function should take in one parameter: x (the number to count up to)
//
const fizzBuzz = (num1) => {
  for (let i = 0; i <= num1 ; i ++){
    if (i % 3 === 0 && i % 5 === 0){
    console.log('FizzBuzz')
  } else if (i % 3 === 0){
      console.log('Fizz')
    } else if (i % 5 === 0){
      console.log('Buzz')
    } else {
      console.log(i)
    }
  }
}
(fizzBuzz(20))

console.log('--------------------------')
//
// ## Question 9
//
// Write a function named `reverse` that takes an array as a parameter. The function should return an array in reverse order.
//
//
// Example:
//
// Input: `reverse([1, 2, 3])`
//
// Output: `[3, 2, 1]`
//
// Not sure how to do it long ways!
const reverseArr = (arr) => {
  return arr.reverse(arr)
}
console.log(reverseArr(['1','2','3','0','-90']))
console.log('---------------------------')
//
// ## Question 10 I'm not sure how to get the object to populate
//
// Write a function that prints out the most frequently occurring element in an array.
//
// Example:
//
// Input: `[2,1,4,2,5,2,3,23,3,3,2,2,2,24,56,2,2,5,46,2]`
//
// Output: `2`
//
const printMostFreq = (arr) => {
  let obj = {};

  for (let i = 0; i < arr.length; i ++){
    if (obj[arr[i]] === arr[i]){
      obj[arr[i]] = 1
    } else {
      obj[arr[i]]++
    }
  }
  let mostComm;
  let count = 0
  for (let char in obj) {
    if (obj[char] > count) {
      mostComm += char
      count = obj[char]
    }
  }
  return mostComm
}
console.log(printMostFreq(2,1,4,2,5,2,3,23,3,3,2,2,2,24,56,2,2,5,46,2))

console.log('------------------------')
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
const sumAllEven = (arr) => {
  let sum = 0
  for (let i = 0; i < arr.length; i ++){
    if (arr[i] % 2 === 0){
      sum += arr[i]
  }
 }
 return sum
}
console.log(sumAllEven([1,2,5,64,23,22,91,3]));

console.log('------------------------')

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
const flippyBoi = (output) => {
let obj = {}
for (let int in output){
  obj[output[int]] = int;
}
  return obj
}
console.log(flippyBoi({1: "uno", 5: "cinco"}))

console.log('-----------------------')
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

const trueOrFalse = (arr,num) => {
let checkNum = false
let value;
 for (let i = 0; i < arr.length; i ++){
   value = arr[i];
   if (value === num){
     checkNum = true;
     break;
     }
   }
   return checkNum
 }

console.log(trueOrFalse([1,6,9,0,8],3))

//
