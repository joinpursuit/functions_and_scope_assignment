// # Function Exercises
//
// ## Question 1
//
// Write a function that returns the largest of two numbers. If
// they are equal, return the second one.
//
// Example:
//
// Input: `12, 4`
//
// Output: `12`

function largerNum (param1, param2) {
  if (param1 > param2) {
    console.log(param1);
  } else if (param1 < param2) {
    console.log(param2);
  } else {
    return param2
  }
}

console.log(largerNum(9, 9))

// ## Question 2

// Write a function named getDogAge that takes one argument: a dog's age
// in human years. The function returns the dog's age in dog years.
// The conversion rate is 1 human year to 7 dog years.
//
// Example:
//
// Input: `4`
//
// Output: `28`
function getDogAge (param1) {
  let humanAge = param1/7
  return humanAge
}

console.log(getDogAge(54))

// ## Question 3
//
// Write a function `arraySum` that takes in an array and returns the sum
// of all the elements.
//
// Example:
//
// Input: `[13,2,4,-2]`
//
// Output: `17`

let arr = [5, 8, 34, 2, 7];
let sum = 0;
function arraySum (param1) {
  for (let i = 0; i < param1.length; i++) {
    sum += param1[i];
  } return sum;
}

console.log(arraySum(arr));

// ## Question 4
//
// Write a function that takes in any two numbers and return their sum.
//
// Example:
//
// Input: `14, 5`
//
// Output: `19`

function numberSum(param1, param2) {
  let sum = param1 + param2
  return sum
}

console.log(numberSum(14, 5));

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
function gradeLetter (param1) {
  if (param1 < 65) {
    return "F";
  } else if (param1 < 70) {
    return "D"
  } else if (param1 < 80) {
    return "C"
  } else if (param1 < 90) {
    return "B"
  } else if (param1 < 100) {
    return "A"
  } else {
    return "A+"
  }
}

console.log(gradeLetter(100))
console.log(gradeLetter(84))
console.log(gradeLetter(75))

// ## Question 6
//
// Implement a function named `repeatLog` that takes a string and a
// number as parameters. The function should log `message` `count`
// number of times.


// Example:
//
// Input: `"+", 10`
//
// Output: `++++++++++`
//
function repeatLog (str, num) {
  for (let i = 1; i <= num; i++) {
    console.log(str + i);
  }
}

repeatLog("Message count ", 7)

// ## Question 7
//
// Write a function named `first` that takes a number and returns an
// array with all the numbers from 1 to n
//
//
// Example:
//
// Input: `first(3)`
//
// Output: `[1, 2, 3]`

function first (param) {
  let arr = []
  for (let i = 1; i <= param; i++) {
    arr.push(i)
  } return arr
}

console.log(first(9))
// ## Question 8
//
// Write a function that logs the numbers from 1 to x, except:
//
// If the number if a multiple of 3, log `"Fizz"` instead of the number
// If the number is a multiple of 5, log `"Buzz"` instead of the number
// If the number is a multiple of 3 AND 5, log `"FizzBuzz"` instead of
// the number
// Your function should take in one parameter: x (the number to count
// up to)
//


function fizzBuzz(param1) {
  for (let i = 1; i <= param1; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i)
    }
  }
}

console.log(fizzBuzz(20));

// ## Question 9
//
// Write a function named `reverse` that takes an array as a parameter.
// The function should return an array in reverse order.
//
//
// Example:
//
// Input: `reverse([1, 2, 3])`
//
// Output: `[3, 2, 1]`
let array = [1, 2, 3, 4, 5, 6]
console.log(array);
function reverse (param) {
  let arr = []
  for (let i = param.length - 1; i >= 0; i--) {
    arr.push(array[i])
  } return arr
}

console.log(reverse(array))
//
// ## Question 10
//
// Write a function that prints out the most frequently occurring element
// in an array.
//
// Example:
//
// Input: `[2,1,4,2,5,2,3,23,3,3,2,2,2,24,56,2,2,5,46,2]`
//
// Output: `2`
//
// function frequentOcc(param) {
//   for (let i = 0; i < param.length; i++) {
//     let num = 0
//     if (param[i])
//   }
// }
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

let evenArr = [8, 2, 3, 6, 5, 10, 14];
function evenSum (param) {
  let sum = 0
  for (let i = 0; i < param.length; i++) {
    if (param[i] % 2 === 0) {
      sum += param[i]
    }
  } return sum
}

console.log(evenSum(evenArr));

// ## Question 12
//
// Write a function that flips an object.  All of the keys are now
// values and all of the values are now keys.
//
// Example:
//
// Input: `{1: "uno", 5: "cinco"}`
//
// Output: `{"uno": 1, "cinco": 5}`
//

// let obj = {
//   1: "un",
//   2: "deux",
//   3: "trois",
//   4: "quatre",
//   5: "cinq",
// }
//
// function objReverse (param) {
//   for (let key in param) {
//     console.log(key);
//   }
// }
// // console.log(Object.keys(obj))
// objReverse(obj);


// ## Question 13
//
// Write a function that determines if a value is inside of array.
//
// Example:
//
// Input: `[1,4,6,9,10], 5`

// Output: `false`
