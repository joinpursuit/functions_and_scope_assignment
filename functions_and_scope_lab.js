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
const largestOfTwo = (num1, num2) =>{
  if(num1 > num2){
    return num1;
  }else if(num1 === num2){
    return 0;
  }else{
    return num2;
  }
}

let largest = largestOfTwo(19,4);
console.log(largest)

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
let conversion = getDogAge(4);
console.log(conversion)
// ## Question 3
//
// Write a function `arraySum` that takes in an array and returns the sum of all the elements.
//
// Example:
//
// Input: `[13,2,4,-2]`
//
// Output: `17`

let numbers = [2, 5, 8, 19, -3]
const arraySum = (arr) => {
  let sum = 0
  for(let i = 0; i < arr.length; i++){
    sum += arr[i]
  }
  return sum
}
let total = arraySum(numbers);
console.log(total)

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
const addTwo = (a, b) =>{
  return a + b
}

let sumOfTwo = addTwo(5,9)
console.log(sumOfTwo)


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

const getLetterGrade = (numGrade) =>{
  if(numGrade >= 90 && numGrade <100){
    return 'A';
  } else if(numGrade<90 && numGrade>= 80){
    return 'B';
  } else if (numGrade < 80 && numGrade >= 70) {
    return 'C';
  }else if(numGrade < 70 && numGrade >= 65){
    return 'D';
  }else{
    return 'F';
  }
}
let finalGrade = getLetterGrade(88);
console.log(finalGrade)


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

// const firstThree = () =>{
//
// }

// ## Question 8
//
// Write a function that logs the numbers from 1 to x, except:
//
// If the number if a multiple of 3, log `"Fizz"` instead of the number
// If the number is a multiple of 5, log `"Buzz"` instead of the number
// If the number is a multiple of 3 AND 5, log `"FizzBuzz"` instead of the number
// Your function should take in one parameter: x (the number to count up to)

const logFizzBuzz = (x) =>{
  for(let y = 1; y <= 100; y++){
    if(x % 3 === 0 && x % 5 === 0){
    return 'FizzBuzz';
    } else if ( x % 5 === 0){
      return 'Buzz';
    } else if ( x % 3 === 0 ){
      return 'Fizz';
    }else{
      return x;
    }
}
}
let finalFB = logFizzBuzz(15)
console.log(finalFB)
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
//
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

let numArr = [2, 4, 9, 11, 24, 25, 34]
const evenSum = (arr) =>{
  for(let o = 0; o < numArr.length; o++){
    if(numArr[o] % 2 === 0){
      plsWork += numArr[o]
    }
  }
  return plsWork
}

let printEven = evenSum(numArr)
console.log(printEven)
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
