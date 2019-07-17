// ## Question 1
//
// Write a function that returns the largest of two numbers. If they are equal,
//return the second one.
//
// Example:
//
// Input: `12, 4`
//
// Output: `12`
console.log("----Q1----")

const largerOutput = (num1, num2) => {
  if(num1 > num2){
    return num1 + " is larger"
  } else {
    return num2
  }
  }
  let result1 = largerOutput(12, 12);
  console.log(result1);

  // ## Question 2
  //
  // Write a function named getDogAge that takes one argument: a dog's age
  //in human years. The function returns the dog's age in dog years.
  //The conversion rate is 1 human year to 7 dog years.
  //
  // Example:
  //
  // Input: `4`
  //
  // Output: `28`

  console.log("-----Q2-----")
  function getDogAge(dogAge) {
    return dogAge * 7
  }
  let result2 = getDogAge(4);
  console.log(result2)

  // ## Question 3
  //
  // Write a function `arraySum` that takes in an array and returns the sum
  //of all the elements.
  //
  // Example:
  //
  // Input: `[13,2,4,-2]`
  //
  // Output: `17`

console.log("----Q3----")
let arr1 = [13, 2, 4, -2]
const arraySum = (arr1) => {
let sum = 0
for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i]
  }
 return sum
  }
  let result3 = arraySum(arr1);
  console.log(result3);

// ## Question 4
//
// Write a function that takes in any two numbers and return their sum.
//
// Example:
//
// Input: `14, 5`
//
// Output: `19`

console.log("----Q4----")

const totalNum = (num1, num2) => {
  return num1 + num2
}
let result4 = totalNum(14, 5);
console.log(result4);

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

console.log('----Q5----')

function grade(num) {
  if (num === 100) {
    return "A+"
  } else if (num >= 90) {
    return "A"
  } else if (num >= 80) {
    return "B"
  } else if (num >= 70) {
    return "C"
  } else if (num >= 65) {
    return "D"
  } else {
    return "F"
  }
  }
  let result5 = grade(78);
  console.log(result5);


  // ## Question 6
  //
  // Implement a function named `repeatLog` that takes a string and a
  //number as parameters. The function should log `message` `count`
  //number of times.
  //
  // Example:
  //
  // Input: `"+", 10`
  //
  // Output: `++++++++++`

console.log('----Q6----')
const repeatLog = (num) => {
  return str.repeat(num)
}
  let str = "+"
  let result6 = str.repeat(10);
console.log(result6);


  // ## Question 7
  //
  // Write a function named `first` that takes a number and returns an array
  //with all the numbers from 1 to n
  //
  //
  // Example:
  //
  // Input: `first(3)`
  //
  // Output: `[1, 2, 3]`

console.log("----Q7----")
let arrNum = []
  const first = (num) => {
    for (let i = 1; i <= num; i++) {
      arrNum.push(i)
      }
      return arrNum
      }

    let result7 = first(8);
    console.log(result7);

// ## Question 8
//
// Write a function that logs the numbers from 1 to x, except:
//
// If the number if a multiple of 3, log `"Fizz"` instead of the number
// If the number is a multiple of 5, log `"Buzz"` instead of the number
// If the number is a multiple of 3 AND 5, log `"FizzBuzz"` instead of the number
// Your function should take in one parameter: x (the number to count up to)

console.log("----Q8----")

  const lengthNum = (x) => {
    for (let i = 1; i <= x; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz")
    }
    else if (i % 5 === 0) {
      console.log("Buzz")
    }
    else if (i % 3 === 0) {
      console.log("Fizz")
    } else {
      console.log(i)
    }
    }
    }
let result8=lengthNum(20);
console.log(result8)

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

  console.log('----Q9----')
  const reverse =(arr) => {
     return arr.reverse()
   }
   let arrInput = [1, 2, 3]

   let result9 = reverse(arrInput);
   console.log(result9);

   // ## Question 10
   //
   // Write a function that prints out the most frequently occurring element
   //in an array.
   //
   // Example:
   //
   // Input: `[2,1,4,2,5,2,3,23,3,3,2,2,2,24,56,2,2,5,46,2]`
   //
   // Output: `2`



   // ## Question 11
   //
   // Write a function that sums all the even numbers in an array.
   //
   // Example:
   //
   // Input: `[1,2,5,64,23,22,91,3]`

   // Output: `88`

   console.log("----Q11----")
   let arrNums = [1,2,5,64,23,22,91,3]
   const addEven = (arrNums) => {
     let sum = 0
     for(let i = 0; i < arrNums.length; i++){
         if(arrNums[i]%2 === 0){
          sum = sum + arrNums[i];
         }
         }
         return sum
        }
      let result11 = addEven(arrNums)
       console.log(result11);

   // ## Question 12
   //
   // Write a function that flips an object.  All of the keys are now values
   //and all of the values are now keys.

   // Example:
   //
   // Input: `{1: "uno", 5: "cinco"}`
   //
   // Output: `{"uno": 1, "cinco": 5}`

console.log("----Q12----")
function flip (){
let ret = {}
for(let key in obj){
 ret[obj[key]] = key;
}
return ret;
}
let obj = {
  1:"uno",
  5:"cinco",
}
flip(obj)

   // ## Question 13
   //
   // Write a function that determines if a value is inside of array.
   //
   // Example:
   //
   // Input: `[1,4,6,9,10], 5`
   //
   // Output: `false`

   console.log("----Q13----")
   let arr13 = [1, 4, 6, 9, 10]
   const checkValue = (arr13) => {
     for (let i = 0; i < arr13.length; i++) {
       if (arr13.includes(i)) {
         return true
      } else {
         return false;
      }
      }
      }
      let result13 = arr13.includes(9);
      console.log(result13);
