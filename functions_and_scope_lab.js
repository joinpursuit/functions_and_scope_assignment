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
// Output: `12
const largestNum = (num1,num2) => {
  if (num1 > num2) {
    return num1
  } else {
    return num2
  }
}
console.log(largestNum(12,4))

// ## Question 2
//
// Write a function named getDogAge that takes one argument: a dog's age in human years. The function returns the dog's age in dog years. The conversion rate is 1 human year to 7 dog years.
//
// Example:
//
// Input: `4`
//
// Output: `28`
const getDogAge = (age) => {
  return age * 7
}
console.log(getDogAge(4))

// ## Question 3
//
// Write a function `arraySum` that takes in an array and returns the sum of all the elements.
//
// Example:
//
// Input: `[13,2,4,-2]`
//
// Output: `17`
const arraySum = (array) => {
  let result = 0
  for (a of array) {
    result += a
  }
  return result
}
console.log(arraySum([13,2,4,-2]))

// ## Question 4
//
// Write a function that takes in any two numbers and return their sum.
//
// Example:
//
// Input: `14, 5`
//
// Output: `19`
const sum = (num1,num2) => {
  return num1 + num2
}
console.log(sum(14,5))

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
const letterGrade = (num) => {
  if (num === 100) {
    return 'A+'
  } else if (num < 100 && num > 89) {
    return 'A'
  } else if (num < 90 && num > 79) {
    return 'B'
  } else if (num < 80 && num > 69) {
    return 'C'
  } else if (num < 70 && num > 64) {
    return 'D'
  } else if (num < 65) {
    return 'F'
  }
}
console.log(letterGrade(65))

// ## Question 6
//
// Implement a function named `repeatLog` that takes a string and a number as parameters. The function should log `message` `count` number of times.
//
// Example:
//
// Input: `"+", 10`
//
// Output: `++++++++++`
const repeatLog = (str,num) => {
  let sum = ''
  for (let i = 0; i < num; i++) {
  sum += str
} return sum
}
console.log(repeatLog('hey',5))

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
const first = (num) => {
  let array = []
  for (let i = 1; i <= num; i++) {
    array.push(i)
  }
  return array
}
console.log(first(3))

// ## Question 8
//
// Write a function that logs the numbers from 1 to x, except:
//
// If the number if a multiple of 3, log `"Fizz"` instead of the number
// If the number is a multiple of 5, log `"Buzz"` instead of the number
// If the number is a multiple of 3 AND 5, log `"FizzBuzz"` instead of the number
// Your function should take in one parameter: x (the number to count up to)
const fizzBuzzer = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz')
    } else if (i % 3 === 0) {
      console.log('Fizz')
    } else if (i % 5 === 0) {
      console.log('Buzz')
    } else{
      console.log(i)
    }
  }
}
fizzBuzzer(55)

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
const reverse = (arr) => {
  return arr.reverse()
}
console.log(reverse([1,2,3]))

// # Question 10
//
// Write a function that prints out the most frequently occurring element in an array.
//
// Example:
//
// Input: `[2,1,4,2,5,2,3,23,3,3,2,2,2,24,56,2,2,5,46,2]`
//
// Output: `2`
const mostFrequent = (arr) => {
  let object = {}
  for (let a of arr) {
  if (object[a] === 1) {
    object[a]++
  } else {
    object[a] = 1
  }
}
  let count = 0
  for (let b in object) {
    if (object[b] > count) {
      count = b
    }
  }
  console.log(count)
}
mostFrequent([2,1,4,2,2,4,4,4])

// ## Question 11
//
// Write a function that sums all the even numbers in an array.
//
// Example:
//
// Input: `[1,2,5,64,23,22,91,3]`
//
// Output: `88`
const sumAllEven = (arr) => {
  let sum = 0
  for (let a of arr) {
    if (a % 2 === 0) {
     sum += a
    }
  }
  return sum
}
console.log(sumAllEven([1,2,5,64,23,22,91,3]))

// ## Question 12
//
// Write a function that flips an object.  All of the keys are now values and all of the values are now keys.
//
// Example:
//
// Input: `{1: "uno", 5: "cinco"}`
//
// Output: `{"uno": 1, "cinco": 5}`
const flipper = (obj) => {
  let keys = Object.keys(obj)
  let values = Object.values(obj)
  let flipped = {}
  for (let i = 0; i < values.length; i++) {
    flipped[values[i]] = keys[i]
  }
  return flipped
}
console.log(flipper({1: 'uno', 5: 'cinco'}))

// ## Question 13
//
// Write a function that determines if a value is inside of array.
//
// Example:
//
// Input: `[1,4,6,9,10], 5`
//
// Output: `false`
const isIn = (arr, num) => {
  for (a of arr) {
    if (a === num) {
      return true
    }
  }
  return false
}
console.log(isIn([1,4,6,9,10], 6))
