// # Function Exercises
//
// ## Question 1
console.log("_____#1_____");
//
// Write a function that returns the largest of two numbers. If they are equal, return the second one.
//

const largestOfTwo = (num1, num2) => {
  if (num1 > num2) {
    return num1 + " is the larger number";
  } else if (num2 > num1) {
    return num2 + " is the larger number";
  } else {
    return num2 + " the two numbers are even, but here's the second one as requested.";
  }
}
let return1 = largestOfTwo(39, 39)
console.log(return1)

console.log(" ");
// Example:
//
// Input: `12, 4`
//
// Output: `12`
//
// ## Question 2
console.log("_____#2_____")

const getDogAge = (num) => {
  let humanYears = num * 7
  return humanYears
}
let return2 = getDogAge(2)
console.log(return2)

console.log(" ")

//
// Write a function named getDogAge that takes one argument: a dog's age in human years. The function returns the dog's age in dog years. The conversion rate is 1 human year to 7 dog years.
//
// Example:
//
// Input: `4`
//
// Output: `28`
//
// ## Question 3
console.log("_____#3_____")
//

let arr1 = [12, 3, 84, 21]

const arraySum = (arr) => {
  let sum1 = 0
  for(let i = 0; i < arr.length; i++) {
    sum1 += arr[i]
  }
  return sum1
}
let return3 = arraySum(arr1)
console.log(return3)

console.log(" ")
// Write a function `arraySum` that takes in an array and returns the sum of all the elements.
//
// Example:
//
// Input: `[13,2,4,-2]`
//
// Output: `17`
//
// ## Question 4
console.log("_____#4_____")
//
const sumOfTwo = (num1, num2) => {
  return num1 + num2
}
let return4 = sumOfTwo(5, 9)
console.log(return4)

console.log(" ")

// Write a function that takes in any two numbers and return their sum.
//
// Example:
//
// Input: `14, 5`
//
// Output: `19`
//
// ## Question 5
console.log("_____#5_____")

const letterGrade = (num) => {
  if (num === 100) {
    return "A+"
  } else if (num < 100 && num >= 90) {
    return "A"
  } else if (num < 90 && num >= 80) {
    return "B"
  } else if (num < 80 && num >= 70) {
    return "C"
  } else if (num < 70 && num >= 65) {
    return "D"
  } else if (num < 65) {
    return "F"
  } else {
    return "This is not a gradable number! Please try again."
  }
}
let result5 = letterGrade(80)
console.log(result5)

console.log(" ")

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
// ## Question 6
console.log("_____#6_____")

const repeatLog = (str, num) => {
  let star = ""
  for (let i = 0; i < num; i++) {
  star += str
  }
      console.log(star)
}

let return6 = repeatLog("*", 5)
console.log(return6)

console.log(" ")
//
// Implement a function named `repeatLog` that takes a string and a number as parameters. The function should log `message` `count` number of times.
//
// Example:
//
// Input: `"+", 10`
//
// Output: `++++++++++`
//
//
// ## Question 7
console.log("_____#7_____")
//
let outputArr = []
const first = (num) => {
  for (let i = 1; i < num + 1; i++) {
    outputArr.push(i)
  }
}

first(7)
console.log(outputArr)

console.log(" ")

// Write a function named `first` that takes a number and returns an array with all the numbers from 1 to n
//
//
// Example:
//
// Input: `first(3)`
//
// Output: `[1, 2, 3]`
//
//
// ## Question 8
console.log("_____#8_____")
//
let counter1 = 0
const fizzBuzz = (num) => {
  for (let i = 0; i < num + 1; i++) {
    counter1++
   if (counter1 % 3 === 0 && counter1 % 5 === 0) {
    console.log("FizzBuzz")
  } else if (counter1 % 5 === 0) {
    console.log("Buzz")
  } else if (counter1 % 3 === 0) {
    console.log("Fizz")
  } else {
    console.log(counter1)
  }
 }
}

fizzBuzz(20)


// Write a function that logs the numbers from 1 to x, except:
//
// If the number if a multiple of 3, log `"Fizz"` instead of the number
// If the number is a multiple of 5, log `"Buzz"` instead of the number
// If the number is a multiple of 3 AND 5, log `"FizzBuzz"` instead of the number
// Your function should take in one parameter: x (the number to count up to)
//
//
// ## Question 9
console.log("_____#9_____")
//
let forwardArr = [1, 2, 3, 4]

const reverse = (arr) => {
  let reverseArr = []
  for (let i = arr.length - 1; i >= 0; i--) {
  reverseArr.push(arr[i])
 }
 return reverseArr
}

let return9 = reverse(forwardArr)
console.log(return9)

// Write a function named `reverse` that takes an array as a parameter. The function should return an array in reverse order.
//
//
// Example:
//
// Input: `reverse([1, 2, 3])`
//
// Output: `[3, 2, 1]`
//
//
// ## Question 10
console.log("_____#10_____")
//
// Write a function that prints out the most frequently occurring element in an array.
//


// Example:
//
let input2 = [2,1,4,2,5,2,3,23,3,3,2,2,2,24,56,2,2,5,46,2]
const freqElementArr = (arr) => {
  let counter = {}
  let max = arr[0]
  let maxCount = 1
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i]
    if (counter[value] == null) {
      counter[value] = 1
    } else {
      counter[value]++
    }
    if (counter[value] > maxCount){
      max = value
      maxCount = counter[value]
    }
  }
  return max
}

let return10 = freqElementArr(input2)
console.log(return10)

// NOTE: I'm INCREDIBLY lost on this one. The code doesn't brake, but it doesn't
// return anything either.

//
// Output: `2`
//
//
//
// ## Question 11
console.log("_____#11_____")
//
// Write a function that sums all the even numbers in an array.
//
// Example:
//
let input1 = [1,2,5,64,23,22,91,3]

const sumOfEven = (arr) => {
  let sum2 = 0
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
    sum2 += arr[i]
    }
  }
  return sum2
}
let return11 = sumOfEven(input1)
console.log(return3)


//
// Output: `88`
//
//
// ## Question 12
console.log("_____#12_____")
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
console.log("_____#13_____")
//
// Write a function that determines if a value is inside of array.
//


// Example:
//
// Input: `[1,4,6,9,10], 5`
//
// Output: `false`
