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

// console.log('------Question 6------')
//
// let starStr = '';
// const repeatLog = (starNum) => {
//   for (let i = 0; i < starNum.length; i++) {
//     starStr += '*'
//     return
//   }
// }
// let starStr = repeatLog(10)
// console.log(starStr)
//
//
// let n = 10;
// let str = '';
// for (let i = 0; i < n; i++) {
//   str += '*' //string concatenating...when you start with an empty string then add a value
// }
//for (let j = 0; j <n; j++) {
//  console.log(str)
//  break;
//}
//QUESTION 7 NOT COMPLETED

/*Write a function named `first` that takes a number
and returns an array with all the numbers from 1 to n*/

console.log('-----Question 7-----')


const first = (n) => {
    //let arr = num.push(num[i])
    let arr = Array.apply(null, Array(n));
    return arr.map(function (x, i) {return i});
      for (let i = 1; i <= n.length; i++) {
        n += num.push[i]
  }
}
console.log(first(3))




//QUESTION 8 NOT COMPLETED...I need to figure out question 7 to fully overstand

/*Write a function that logs the numbers from 1 to x, except:

If the number if a multiple of 3, log `"Fizz"` instead of the number
If the number is a multiple of 5, log `"Buzz"` instead of the number
If the number is a multiple of 3 AND 5, log `"FizzBuzz"` instead of the number
Your function should take in one parameter: x (the number to count up to)*/

// console.log('------Question 8-------')
//
// const whatBizz = (x) => {
//   for (let  i = 1; i < x; i++ ) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('FizzBuzz')
//     }else if (i % 3 === 0) {
//       console.log('Fizz')
//     }else if (i % 5 === 0) {
//       console.log('Buzz')
//     }else console.log(x)
//   }
// }
//
// console.log(whatBizz(20));





//QUESTION 9

/*Write a function named `reverse` that takes an array as a parameter.
The function should return an array in reverse order.*/

//console.log('--------Question 9 --------');

// const reverse = (arr) => {
// return arr.reverse();
// }
// console.log(reverse([1, 2, 3]));




//QUESTON 10
//Write a function that prints out the most frequently occurring element in an array.

// console.log('-------Question 10------');
//
// let a = [2,1,4,2,5,2,3,23,3,3,2,2,2,24,56,2,2,5,46,2]
//
// const mostFrequent = (arr) => {
//   let result = arr[0];
//   let tmp = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let count = 0;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         count++
//       }
//     } if (count > tmp) {
//       tmp = count;
//       result = arr[i];
//     }
//   }
//   return result;
// }
// console.log(mostFrequent([2,1,4,2,5,2,3,23,3,3,2,2,2,24,56,2,2,5,46,2]));




////QUESTION 11
////Write a function that sums all the even numbers in an array.

// console.log('------Question 11------')
//
// const sumEvenNums = (arr) => {
//   let sum = 0;
//
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       sum += arr[i]
//     }
//   }
//   return sum;
// }
// console.log(sumEvenNums([1,2,5,64,23,22,91,3]))




////QUESTION 12
// /*Write a function that flips an object.
// All of the keys are now values and all of the values are now keys.*/
//
// console.log('-------Question 12-------')
//
// const flipObj = (obj) => {
//   let ret = {};
//   for (let key in obj) {
//     ret[obj[key]] = key;
//   }
//   return ret
// }
// let objA = {1: "uno", 5: "cinco"}
// let aFlip = flipObj(objA)
// console.log(aFlip);




////QUESTION 13 NOT COMPLETED
//Write a function that determines if a value is inside of array.

//console.log('------Question 13------')

// const inAnArr = (value, arr) => {
//
//   for (let i = 0; i < arr.length; i++) {
//     let numEle = arr[i];
//     if (numEle === value) {
//       console.log(true);
//       break;
//     } else {
//       console.log(false)
//     }
//   }
//   return status;
// }

// let aR = '[1,4,6,9,10], 5'
// let determInArr = inAnArr(aR)
// console.log(determInArr);
