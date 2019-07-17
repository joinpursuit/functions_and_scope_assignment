//QUESTION 1

/*Write a function that returns the largest of two numbers.
If they are equal, return the second one.*/
//
// console.log('--------Question 1---------')
// const findTheLargeNum = (num1, num2) => {
//   if (num1 > num2) {
//     console.log(`${num1} is greater than ${num2}`);
//     return true;
//   } else if (num1 < num2) {
//       console.log(`${num2} is greater than ${num1}`)
//     } else {
//       console.log(`${num1} is equal to ${num2}`)
//     }
//   }
//
//
// let result = findTheLargeNum(4, 4)




//QUESTION 2

/*Write a function named getDogAge that takes one argument:
a dog's age in human years. The function returns the dog's age in dog years.
The conversion rate is 1 human year to 7 dog years.*/

// console.log('--------Question 2--------')
// const getDogAge = (humanAge) => {
//   return humanAge * 7
// }
//
// let dogAge = getDogAge(10)
// console.log(dogAge)



//
// //QUESTION 3
//
// //Write a function `arraySum` that takes in an array and returns the sum of all the elements.
// console.log('--------Question 3--------')
// const arraySum = (arr) => {
//   let s = 0;
//   for (let i = 0; i < arr.length; i++){
//     s = s + arr[i]
//   }
//   console.log(s)
// }
//
//
// let a = [1, 2, 3, 4, 5]
// let b = [13, 2, 4, -2]
//
// let aSumArr = arraySum(a)
// let bSumArr = arraySum(b)




//QUESTION 4

// //Write a function that takes in any two numbers and return their sum.
// console.log('-------Question 4--------')
// const addTwoNums = (num1, num2) => {
//   return num1 + num2
// }
//
// let sumResult = addTwoNums(4, 25)
// console.log(sumResult)



//QUESTON 5

/*Write a function takes in any number grade
and returns a corresponding letter grade.*/
// console.log('--------Question 5----------')
// const gradeToLetter = (numGrade) => {
//   if (numGrade === 100) {
//     console.log('A+')
//   } else if (numGrade >= 90 && numGrade < 100) {
//       console.log('A')
//     }else if (numGrade >= 80 && numGrade < 90) {
//       console.log('B')
//     }else if (numGrade >= 70 && numGrade < 80 ) {
//       console.log('C')
//     }else if (numGrade >= 65 && numGrade < 70) {
//       console.log('D')
//     }else {
//       console.log('F')
//     }
// }
//
// let letterGrade = gradeToLetter(88)
// console.log(letterGrade)



//QUESTION 6
/*Implement a function named `repeatLog` that takes a string
and a number as parameters.
The function should log `message` `count` number of times.*/

console.log('------Question 6------')

let str = ''
const repeatLog = (starNum) => {
  for (let i = 0; i < starNum.length; i++) {
    return starNum += '*'
  }
}
let starStr = repeatLog(10)
console.log(starStr)



//QUESTION 7

/*Write a function named `first` that takes a number
and returns an array with all the numbers from 1 to n*/

// const first = (numArr) => {
//   if (let i = 0; i < numArr.length; i++) {
//     return numArr[i]
//   }
// }
