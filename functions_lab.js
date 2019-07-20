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

console.log('=======answer#1=========')

let num1 = 12;
let num2 = 4;
function largestOfTwoNum (num1, num2) {
  if (num1 < num2) {
  return num2
  } else if (num1 > num2) {
    return num1
  } else {
    return num1,num2
  }
}
console.log(largestOfTwoNum(num1, num2))

// #########

const largestOfTwoNum = (num1, num2) => {
  if (num1 < num2) {
    return num2
  } else if (num1 > num2) {
    return num1
  } else {
    return num1, num2
  }
}
let num1 = 12;
let num2 = 4
console.log(largestOfTwoNum(num1, num2))

// ## Question 2
//
// Write a function named getDogAge that takes one argument: a dog's
// age in human years. The function returns the dog's age in dog years.
//The conversion rate is 1 human year to 7 dog years.
//
// Example:
//
// Input: `4`
//
// Output: `28`

console.log('=======answer#2=========')

function getDogAge (num) {
return num * 7
}
let num = 4
let result = num * 7
console.log(result)

//#################

const getDogAge = (num) => {
  return num * 7
}
let num = 4
let result = num * 7
console.log(result)
//

// ## Question 3
//
// Write a function `arraySum` that takes in an array and returns the
// sum of all the elements.
//
// Example:
//
// Input: `[13,2,4,-2]`
//
// Output: `17`

console.log('=========answer#3=======')


function arraySum (arr) {

  return

  i++
}

let arr = [13,2,4,-2];


const arraySum = (arr) => {
  let sum = 0;
for (let i = 0; i < arr.length; i++ ) {
  sum += arr[i]
  }

  return sum
}


console.log(arraySum(arr))

//
// ## Question 4
//
// Write a function that takes in any two numbers and return their sum.
//
// Example:
//
// Input: `14, 5`
//
// Output: `19`

console.log('===========answer#4========')

function sumOfTwoNums (num1, num2) {
  return num1 + num2
}
let result1  = sumOfTwoNums(100, 2)
console.log(result1)
let result2 = sumOfTwoNums(14, 5)
console.log(result2)


//
// ## Question 5
//
// Write a function takes in any number grade and returns a corresponding
//letter grade.
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
// console.log('=======answer#5=========')
let num = 88
const letterGrade = (num) => {
  if (num >= 100) {
    return "A+"
  } else if (num <=99  && num >= 90){
    return "A"
  } else if (num >= 80 && num <= 89){
    return "B"
  } else if (num >= 70 && num <= 79) {
    return "C"
  } else if (num >= 65 && num <= 69){
    return "D"
  } else {
    return "F"
}
}
// let num = 88
let result = letterGrade(num)


console.log(result)


// ## Question 6
//
// Implement a function named `repeatLog` that takes a string and a number
//as parameters. The function should log `message` `count` number of times.
//
// Example:
//
// Input: `"+", 10`
//
// Output: `++++++++++`

console.log('==========answer#6=======')
// //
function repeatLog (param1) {
  return x = x.repeat(param1)
  }
let x = "+"
let result = x.repeat(10)

  console.log (result)
//
//
// ## Question 7
//
// Write a function named `first` that takes a number and returns an array with
// all the numbers from 1 to n
//
//
// Example:
//
// Input: `first(3)`
//
// Output: `[1, 2, 3]`

console.log('=========answer#7===========')
//
// const first = (num) => {
//   return num[num.length]
//   }
//
// let num = [3]
// num.unshift(1, 2);
//
// console.log(num)
//
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
console.log('=========answer#8=========')

function multiples (num) {
  let num2 = []
for (let i = 1; i <= num; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    num2.push("FizzBuzz")
} else if (i % 3 === 0) {
  num2.push("Fizz")
} else if (i % 5 === 0) {
    num2.push("Buzz")
} else {
    num2.push(i)
}

  }
  return num2
}

console.log(multiples(90))
//
// ## Question 9
//
// Write a function named `reverse` that takes an array as a parameter.
//The function should return an array in reverse order.
//
//
// Example:
//
// Input: `reverse([1, 2, 3])`
//
// Output: `[3, 2, 1]`

console.log('=========answer#9===========')
let arr = [1, 2, 3];

const reverse = (arr) => {
let reverseArr = [];
for (let num of arr) {
reverseArr.unshift(num)

}
return reverseArr
}
console.log(reverse(arr))




//
//
// ## Question 10
//
// Write a function that prints out the most frequently occurring element in an
//array.
//
// Example:
//
// Input: `[2,1,4,2,5,2,3,23,3,3,2,2,2,24,56,2,2,5,46,2]`
//
// Output: `2`
 console.log("========answer#10=========")

 let arr = [2,1,4,2,5,2,3,23,3,3,2,2,2,24,56,2,2,5,46,2]
function mostFrequentElement (arr) {
  return
}

  let myArr = {
}


 for (let i = 0; i < arr.length; i++) {
  let currNum = arr[i]
  if ( currNum !== ",") {
  }
   if (myArr[currNum]=== undefined) {
     myArr[currNum] = 1;
   } else {
     myArr[currNum]++
   }

   let mostNum;
   let mostNumCount = 0

   for (let num in myArr) {
     if (myArr[num] > mostNumCount) {
       mostNum = num
       mostNumCount = myArr[num]

     }

return mostNum

   // console.log(mostNum)
   // console.log(mostNumCount)
 }
   console.log(mostFrequentElement([arr]))

   // DOESN'T RUN





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

// console.log("========answer#11===========")
//
 let arr = [1,2,5,64,23,22,91,3];

 const evenSum = (arr) => {

       let sum = 0
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0){
        sum += arr[i]
  }
}
    return sum
 }
 console.log(evenSum(arr))



//
//
// ## Question 12
//
// Write a function that flips an object.  All of the keys are now values and
//all of the values are now keys.
//
// Example:
//
// Input: `{1: "uno", 5: "cinco"}`
//
// Output: `{"uno": 1, "cinco": 5}

// console.log('========answer#12==========')

let obj = {1: "uno", 5: "cinco"}
const flipObj = (obj) => {
  let flip = {}
  for (let key in obj) {
    flip[obj[key]] = key;
  }
  return flip

}
console.log(flipObj(obj))
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

console.log("========answer#13========")

let theArr = [1, 4, 6, 9, 10,]
const valueArr = (arr, val) => {
  for (let inside of theArr) {
    if (val !== inside) {
    return false
  } else {
      return true
  }
  }

}
console.log(valueArr(theArr, 6))
