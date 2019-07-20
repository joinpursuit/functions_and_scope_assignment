// # Function Exercises
//=====================================================================
// ## Question 1
//
// Write a function that returns the largest of two numbers. If they are equal, return the second one.
//
// Example:
//
// Input: `12, 4`
//
// Output: `12`
// let num1 = 12;
// let num2 = 4;
// function LargerNum (num1,num2) {
//  if (num2 >= num1) {
//  return (num2)
// } else {
//  return (num1)
// }
// }
// console.log(LargerNum(num1,num2))
//====================================================================
// ## Question 2
//
// Write a function named getDogAge that takes one argument:
//a dog's age in human years. The function returns the dog's
//age in dog years. The conversion rate is 1 human year to 7 dog years.
//
// Example:
//
// Input: `4`
//
// Output: `28`
// let Age = 4
// function DogYears(Age) {
// return Age * 7
// }
// console.log(DogYears(Age))
//================================================================
// ## Question 3
//
// Write a function `arraySum` that takes in an array and returns
// the sum of all the elements.
//
// Example:
//
// Input: `[13,2,4,-2]`
//
// Output: `17`
// let num = [13,2,4,-2];
// const arraySum = (array) => {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++){
//    sum += array[i];
//    }
//   return sum;
// }
// console.log(arraySum(num));
// //=================================================================
// ## Question 4
//
// Write a function that takes in any two numbers and return their sum.
//
// Example:
//
// Input: `14, 5`
//
//Output: `19`
// let num1 = 14
// let num2 = 5
// function addTwoNums (num1, num2){
//  return num1 + num2
// }
//  let result= addTwoNums(num1, num2)
// console.log(result)

//==================================================================
// ## Question 5
//
// Write a function takes in any number grade and
//returns a corresponding letter grade.
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
// //
// let i = 50
//   function letterGrade() {
//   if (i >= 100){
//     return "A+"
//   } else if (i >= 90 && i <= 99){
//      return "A"
// } else if (i >= 80 && i <= 89){
//      return "B"
// } else if (i >= 70 && i <= 79){
//      return "C"
//  }else if (i >= 65 && i <= 69){
//           return "D"
// } else {
//   return "F"}
// }
// let result = letterGrade(i)
// console.log(result)
//=============================================
// ## Question 6
//
// Implement a function named `repeatLog` that takes a
//string and a number as parameters.
//The function should log `message` `count` number of times.
//
// Example:
//
// Input: `"+", 10`
//
// Output: `++++++++++`
// const repeatLog =(str, num) => {
// let result = ""
// for (let i = 0; i < num; i++){
//   result += str;
// }
// return result;
// }
// console.log(repeatLog('+', 10));
//===============================================================================
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
// const first = (num) => {
//  let arr = [];
//  for (i = 0; i < num; i++) {
//    arr.push(1 + i);
//  }
//  return arr;
// }
// console.log(first(3));
//=======================================================================
// ## Question 8
//
// Write a function that logs the numbers from 1 to x, except:
//
// If the number if a multiple of 3, log `"Fizz"` instead of the number
// If the number is a multiple of 5, log `"Buzz"` instead of the number
// If the number is a multiple of 3 AND 5, log `"FizzBuzz"` instead of the number
// Your function should take in one parameter: x (the number to count up to)
// // ****need help*****
// function multiple (num){
//   for ( let num =1; num <= 50; i++){
//     if ( num % 3 ===0 && num % 5 ===o){
// return"FizzBuzz"
// } else if (num % 3 ===0){
//   return "Fizz
//   for ( let num2 =2; num2 <= 50; i++){
//     if( i % 3 === 0 && i % 5 === 0){
//       num2.push("FizzBuzz")
//     }else if ( i % 3 ===0){
//       num2.push("Fizz")
//     }else if ( i %5 ===0){
//       return " Buzz"
//       num2.push("Buzz")
//     } else{
//       return i
//     }
//     num2.push(i)
//   }
// }
// return num2
//   }
// }
//   console.log(multiple(50))
//===============================================================================
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
// let arr = [1, 2 ,3];
// const reverse = (arr) => {
//   let reverseArray = [];
// for (let value of arr) {
//   reverseArray.unshift(value);
// }
// return reverseArray;
// }
// console.log(reverse(arr));
// ==================================================================
// ## Question 10*
//
// Write a function that prints out the most frequently occurring element in an array.
//
// Example:
//
// Input: `[2,1,4,2,5,2,3,23,3,3,2,2,2,24,56,2,2,5,46,2]`
//
// Output: `2`
//let arr = [2,1,4,2,5,2,3,23,3,3,2,2,2,24,56,2,2,5,46,2];
//
//====================================================================
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
//  let arr = [1,2,5,64,23,22,91,3];
// const even = (arr) => {
//   let sum = 0
//  for ( let i = 0; i < arr.length; i ++){
//     if ( arr[i] % 2 === 0){
// sum = sum + arr[i]
//   }
// }
// return sum
// console.log(sum)
// };
//  let result = even(arr)
//  console.log(result);
//==========================================================================
// ## Question 12
//
// Write a function that flips an object.  All of the keys are now values and all of the values are now keys.
//
// Example:
//
// Input: `{1: "uno", 5: "cinco"}`
//
// Output: `{"uno": 1, "cinco": 5}`

// let object = {1: "uno", 5: "cinco" }
// const flipObj = (object) =>{
//   let flip = {}
//   for ( let key in object) {
//     flip[object[key]] = key;
//   }
//   return flip
// }
// console.log(flipObj(object))
//=========================================================================
// ## Question 13
//
// Write a function that determines if a value is inside of array.
//
// Example:
//
// Input: `[1,4,6,9,10], 5`
//
// Output: `false`
// let arr = [1,4,6,9,10]
// const valueArr = ( arr, val) =>{
//   for ( let inside of arr) {
//   if (val === inside){
//     return true
//   } else {
//     return false
//   }
// }
// }
// console.log(valueArr(arr, 5))
// //
