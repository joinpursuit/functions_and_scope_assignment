// ## Question 1
// Write a function that returns the largest of two numbers. If they are equal, return the second one.
// Example:
// Input: `12, 4`
// Output: `12`
console.log('Question 1: ')

const largestNumber = (num1, num2) => {
  if (num1 > num2) {
    return num1
  } else if (num1 < num2) {
    return num2
  } else if (num1 === num2) {
    return num2
  }
}
let myNumbers = largestNumber(7,5)
console.log(myNumbers)

// ## Question 2
//
// Write a function named getDogAge that takes one argument: a dog's age in human years. The function returns the dog's age in dog years. The conversion rate is 1 human year to 7 dog years.
//
// Example:
//
// Input: `4`
//
// Output: `28`
console.log('Question 2: ')

const getDogAge = (dogYears) => {
  let dogAge = (dogYears * 7)
  return dogAge
}
let oliversAge = getDogAge(3)
console.log(`Oliver is ${oliversAge} old in human years.`)

// ## Question 3
//
// Write a function `arraySum` that takes in an array and returns the sum of all the elements.
//
// Example:
//
// Input: `[13,2,4,-2]`
//
// Output: `17`
console.log('Question 3: ')
const arraySum = (arrayName) => {
  let sum = 0
  for(i = 0; i < arrayName.length; i++) {
    sum += arrayName[i];
  } return sum
}
let array1 = [25, 50, 100]
console.log(arraySum(array1))

// ## Question 4
//
// Write a function that takes in any two numbers and return their sum.
//
// Example:
//
// Input: `14, 5`
//
// Output: `19`
console.log('Question 4: ')
const addNumbers = (num1, num2) => {
  let totalNums = num1 + num2
  return totalNums
}

console.log(addNumbers(5, 10))

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
console.log('Question 5: ')
const myLetterGrade = (myNumberGrade) => {
  if (myNumberGrade >= 100) {
    return 'You got an A+'
  } else if (myNumberGrade >= 90 && myNumberGrade <= 99) {
    return 'You got an A'
  } else if (myNumberGrade >= 80 && myNumberGrade <= 89) {
    return 'You got a B'
  } else if (myNumberGrade >= 70 && myNumberGrade <= 79) {
    return 'You got a C'
  } else if (myNumberGrade >= 65 && myNumberGrade <= 69) {
    return 'You got a D'
  } else {
    return 'You got an F'
}
}
console.log(myLetterGrade(94))

// ## Question 6
//
// Implement a function named `repeatLog` that takes a string and a number as parameters. The function should log `message` `count` number of times.
//
// Example:
//
// Input: `"+", 10`
//
// Output: `++++++++++`
console.log('Question 6: ')
const repeatLog = (string, times) => {
  let numberOfStrings = string.repeat(times)
  return numberOfStrings
}
console.log(repeatLog('Here comes the sun. ', 5))


const repeatLog2 = (string2, times2) => {
  let emptyStr = ''
  for(let i = 1; i <= times2; i++) {
    emptyStr += string2
  } return emptyStr
}
console.log(repeatLog2('It\'s alright. ', 3))

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
console.log('Question 7: ')
const first = (maxNumber) => {
  let emptyArray = []
  for(let i = 1; i <= maxNumber; i ++){
    emptyArray.push(i)
  } return emptyArray
}
console.log(first(5))


// ## Question 8
//
// Write a function that logs the numbers from 1 to x, except:
//
// If the number if a multiple of 3, log `"Fizz"` instead of the number
// If the number is a multiple of 5, log `"Buzz"` instead of the number
// If the number is a multiple of 3 AND 5, log `"FizzBuzz"` instead of the number
// Your function should take in one parameter: x (the number to count up to)
console.log('Question 8: ')
const fizzBuzz = (x) => {
  let newArray = []
  for(let i = 1; i <= x; i ++) {
    if(i % 3 === 0 && i % 5 === 0) {
      newArray.push('FizzBuzz ' + i)
    } else if (i % 3 === 0 && i % 5 !== 0) {
      newArray.push('Fizz ' + i)
    } else if (i % 5 === 0 && i % 3 !== 0) {
      newArray.push('Buzz ' + i)
    } else {
      newArray.push(i)
    }
  } return newArray
}

console.log(fizzBuzz(50))
//
// const fizzBuzz1 = (x) => {
//   for(let i = 0; i <= x; i ++) {
//     if(i % 3 === 0 && i % 5 === 0) {
//       return (console.log('FizzBuzz ' + i))
//     } else if (i % 3 === 0) {
//       return (console.log('Fizz ' + i))
//     } else if (i % 5 === 0) {
//       return (console.log('Buzz ' + i))
//     } else {
//       return (console.log(i))
//     }
//   }
// }
// console.log(fizzBuzz1(15))


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
console.log('Question 9: ')
const reverse = (arraySwitch) => {
  let backwardsArray = arraySwitch.reverse()
  return backwardsArray
}
let array2 = [1, 2, 3]
console.log(reverse(array2))


// ## Question 10
//
// Write a function that prints out the most frequently occurring element in an array.
//
// Example:
//
// Input: `[2,1,4,2,5,2,3,23,3,3,2,2,2,24,56,2,2,5,46,2]`
//
// Output: `2`
console.log('Question 10: ')

function mostFrequent(array){
  let mostCommonNum = array[0];
  let mostCommonCount = 0;
  for(let i = 0; i < array.length; i++){
    let count = 0;
    for(let j = 0; j < array.length; j++){
      if(array[i]===array[j]){
        count++;
      }
    }
    if(count > mostCommonCount){
      mostCommonCount = count;
      mostCommonNum = array[i];
    }
  }
  return mostCommonNum;
}

let array8 = [3, 5, 5, 5, 5, 2, 3, 4]
let array3 = [2,1,4,2,5,2,3,23,3,3,2,2,2,24,56,2,2,5,46,2]
console.log(mostFrequent(array8))
// ## Question 11
//
// Write a function that sums all the even numbers in an array.
//
// Example:
//
// Input: `[1,2,5,64,23,22,91,3]`
//
// Output: `88`
console.log('Question 11: ')
const sumArray = (newArray) => {
  let totalSum = 0;
  for(let i = 0;i < newArray.length; i++) {
    if(newArray[i] % 2 === 0){
    totalSum += newArray[i]
  }
}
  return totalSum
}
let array5 = [10, 20,30, 45]
console.log(sumArray(array5))

// ## Question 12
//
// Write a function that flips an object.  All of the keys are now values and all of the values are now keys.
//
// Example:
//
// Input: `{1: "uno", 5: "cinco"}`
//
// Output: `{"uno": 1, "cinco": 5}`
console.log('Question 12: ')

let fruitsObj = {
  cherry: 'red',
  banana: 'yellow'
}

const flipIt = (obj) => {
  let newObj = {};
  let keys = Object.keys(obj)
  let values = Object.values(obj)
  for(let i = 0; i < values.length; i++) {
    newObj[values[i]] = keys[i];
  }
  return newObj
  }

let flippedObj = flipIt(fruitsObj)
console.log(flippedObj)


// ## Question 13
//
// Write a function that determines if a value is inside of array.
//
// Example:
//
// Input: `[1,4,6,9,10], 5`
//
// Output: `false`
console.log('Question 13: ')

const findNumber = (searchArray, num) => {
  let decisionBoolean;
  for(let i =0; i <= searchArray.length; i++) {
    if(num === searchArray[i]) {
      decisionBoolean = true
      return decisionBoolean
    } else {
      decisionBoolean = false
      return decisionBoolean
    }
  }
}
finalArray = [5, 6, 3 , 10]
console.log(findNumber(finalArray, 5))
