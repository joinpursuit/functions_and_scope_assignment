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
//
//
//
const returnLargestNumber = (num1, num2) => {
  if( num1 > num2){
  return num1

}else{
  return num2
}
}

let largestNumber= returnLargestNumber(12, 4)
console.log(largestNumber);
//
//
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
//

function getDogAge(humanAge){
  return humanAge * 7
}
console.log(getDogAge(4))

//or
// let getDogAge2= getDogAge(10)
// console.log(getDogAge2);

//
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
//
let arr = [13,2,4,-2]

function arraysum(arrsum1){
 let sum = 0;
  for(let i = 0; i < arrsum1.length; i++){
sum += arrsum1[i]
}
return sum;
}

let arraysum2 = arraysum(arr)
console.log(arraysum2)
//
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
//
//
function sumOfNumber (num1,num2){
  return num1 + num2
}
let twoNumbers = sumOfNumber(14, 5)
console.log(twoNumbers)
//
//
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
//
function repearLog(num){
 if (num === 100){
return "A+"
} else if (num < 100 && num >= 90){
return "A"
} else if (num < 90 && num >= 80){
return "B"
} else if (num < 80 && num >= 70){
return "C"
} else if (num < 70 && num >= 65){
return "D"
} else{
return "F"
}
}
let grade = repearLog(88)
console.log(grade)
//
//
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
//
function repeatLog(message, count){
for( let i= 0; i < count; i++){
string += message;
}
return string
}
let string= ' '
console.log(repeatLog('+', 10));
//
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
//
function first(num){
  let arr = [];
  for(let i = 0; i < num; i++){
    arr[i] = i + 1 ;
  }
  return arr;
}
console.log(first(3));
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
//
function fizz(num){
for(let i = 1; i <=100; i += 1){
  if(num % 3 === 0 && num % 5 === 0){
    return("FizzBuzz")
  }else if(num % 3 === 0){
    return("Fizz")
  }else if (num % 5 === 0){
    return("Buzz")
  }else{
  return(num)
  }
}
}
let fizzNumber = fizz(15)
console.log(fizzNumber)
//
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
function reverse(array) {
  let arr = [];
  for (let i = 1; i < array.length +1 ; i++){
  arr.unshift(i);
}
  return arr;
}
let arr = [1,2,3]
console.log(reverse(arr));
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
//
function sumOfNum(num){
  let sum= 0;
for(let i = 0; i < num.length; i++){
  if(num[i] % 2 === 0){
    sum += num[i]

}
}
return sum;
}
console.log(sumOfNum([1,5,2,4,11,12,99,100]))
//OR
// let evenAndOddArr = [1,5,2,4,11,12,99,100]
// let sumOfEven = sumOfNum(evenAndOddArr)
// console.log(sumOfEven)
//
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

 // ## Question 13
//
// Write a function that determines if a value is inside of array.
//
// Example:
//
// Input: `[1,4,6,9,10], 5`
//
// Output: `false`
//
//
function value(arr1,num1){
  for(let i = 0; i < arr1.length; i++){
  if(arr1.includes(num1)){
  return "true";
}else{
  return "false";
}
}
}
console.log(value([1,4,6,9,10],5))
