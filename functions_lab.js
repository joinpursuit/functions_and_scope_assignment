
// ## Question 1
// Write a function that returns the largest of two numbers.
// If they are equal, return the second one.
// Example:
// Input: `12, 4`
// Output: `12`

const equalNum = (num1, num2) => {
  if(num1 === num2){
    return console.log(`${num1} and ${num2} are equal`)
  }else if(num1 > num2){
    return console.log(`${num1} is larger than ${num2}`)
  }else{
  return console.log(`${num2} is larger than ${num1}`)
  }
}
equalNum(4,5)

// ## Question 2
// Write a function named getDogAge that takes one argument:
// a dog's age in human years. The function returns the dog's age
// in dog years. The conversion rate is 1 human year to 7 dog years.
// Example:
// Input: `4`
// Output: `28`

const getDogAge = (arg) => {
  let age = arg * 7
  return age;
}

let dogAge = getDogAge(7)
console.log(dogAge)

// ## Question 3
// Write a function arraySum that takes in an array and returns the sum
// of all the elements.
// Example:
// Input: [13,2,4,-2]
// Output: 17

let sum = 0
const arraySum = (arg1) => {
  for(let h = 0; h < arg1.length; h++){
    sum += arg1[h]
  }
  return sum;
}
  let sum1 = arraySum([13,2,4,-2])
  console.log(sum1)

  // ## Question 4
  // Write a function that takes in any two numbers and return their sum.
  // Example:
  // Input: `14, 5`
  // Output: `19`

const addNum = (num1, num2) => {
  return num1 + num2;
}
   let add = addNum(14,5)
   console.log(add)

// ## Question 5
// Write a function takes in any number grade and returns a corresponding
//  letter grade.
// | Number Grade | Equivalent Letter Grade |
// | :--------: | :---------: |
// | 100 | A+ |
// | 90 - 99 | A |
// | 80 - 89 | B |
// | 70 - 79 | C |
// | 65 - 69 | D |
// | Below 65 | F |

const numGrade = (grade) => {
  if(grade === 100 ){
    return console.log("A+")
  }else if(grade < 99 && grade > 90){
    return console.log("A")
  }else if(grade < 89 && grade > 80){
    return console.log("B")
  }else if(grade < 79 && grade > 70){
    return console.log("C")
  }else if(grade < 69 && grade > 65){
    return console.log("D")
  }else{
    return console.log("F")
  }
}
numGrade(76)


// ## Question 6
// Implement a function named `repeatLog` that takes a string and a
// number as parameters. The function should log `message` `count` number
// of times.
// Example:
// Input: `"+", 10`
// Output: `++++++++++`

const repeatLog = (arg2, arg3) => {
 return arg2.repeat(arg3)
}
let str = repeatLog("hello world ", 3)
console.log(str)

// ## Question 7
// Write a function named `first` that takes a number and returns an array
// with all the numbers from 1 to n
// Example:
// Input: `first(3)`
// Output: `[1, 2, 3]`

const first = (num1) => {
let newArr = []
for(let q = 1; q <= num1; q++){

  newArr.push(q)
}
return newArr
}
console.log(first(3))

// ## Question 8
// Write a function that logs the numbers from 1 to x, except:
// If the number if a multiple of 3, log `"Fizz"` instead of the number
// If the number is a multiple of 5, log `"Buzz"` instead of the number
// If the number is a multiple of 3 AND 5, log `"FizzBuzz"` instead of the number
// Your function should take in one parameter: x (the number to count up to)

const numbers = (mul) => {
  for(let x = 1; x <= mul; x++){
    if (x % 3 === 0 && x % 5 === 0){
     console.log(x + ' FizzBuzz')
    }else if(x % 3 === 0){
     console.log(x + ' Fizz')
    }else if(x % 5 === 0) {
    console.log(x + ' Buzz')
    } else {
    console.log(x)
    }
  }
}
numbers(25)

// ## Question 9
// Write a function named `reverse` that takes an array as a parameter.
//The function should return an array in reverse order.
// Example:
// Input: `reverse([1, 2, 3])`
// Output: `[3, 2, 1]`

const funcReverse = (list) => {
  // let arrReverse = []
// for(let n = 0; n <= list; n++){
   list.reverse();
     // arrReverse.push(n)
// }
return list;
}
console.log(funcReverse([1,2,3]))

function print(arr){
let array = []
for(let s = arr.length - 1; s >= 0; s--){
array.push(arr[s])
}
return array;
}
console.log(print([1,2,3]))

// ## Question 10
// Write a function that prints out the most frequently occurring element
//  in an array.
// Example:
// Input: `[2,1,4,2,5,2,3,23,3,3,2,2,2,24,56,2,2,5,46,2]`
// Output: `2`

//loop through array
//declare an object
const element = (arr) => {
   let objNum ={}
   //everytime you loop through an array add a key
   //increment the value by 1 everytime the element is seen in the array
for (let t = 0; t <= arr.length; t++){
  if(objNum[arr[t]]){
    objNum[arr[t]]++
  } else{
    objNum[arr[t] = 1]
    console.log(objNum)
  }
}
return objNum;
}
console.log(element[2,1,4,2,5,2,3,23,3,3,2,2,2,24,56,2,2,5,46,2])


// ## Question 11
// Write a function that sums all the even numbers in an array.
// Example:
// Input: `[1,2,5,64,23,22,91,3]`
// Output: `88`

const arrSum =(arr4) => {
  let sum7 = 0
  for(let e = 0; e < arr4.length; e++){
    if(arr4[e] % 2 === 0){
        sum7 += arr4[e]
    }
  }
  return sum7
}
let sum8 = arrSum([1,2,5,64,23,22,91,3])
console.log(sum8)


// ## Question 12
// Write a function that flips an object.  All of the keys are now values and all of the values are now keys.
// Example:
// Input: `{1: "uno", 5: "cinco"}`
// Output: `{"uno": 1, "cinco": 5}`

const flipIt = (obj) => {
  let newObject = {}
  let keys = Object.keys(obj)
  let values = Object.values(obj)

  console.log(keys)
  console.log(values)

  keys.forEach((el) => {
 newObject[obj[el]] = el
  })
  return newObject;
 }

let obj = {
  1 : "uno",
  5 : "cinco"
};
 console.log(flipIt(obj))
//  object [key] =key
 //for each iterates through the keys. it's a method( Loop)
//  object[el] - object at el gives you the values
