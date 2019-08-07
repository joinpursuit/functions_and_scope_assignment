// //1;
// const largest = (num1, num2) => {
//   if (num1 > num2) {
//     return num1;
//   } else if (num1 < num2) {
//     return num2;
//   }else if (num1 === num2) {
//     return num2;
//   }
// };
// #2
// console.log(largest(10, 2));
// console.log(largest(6, 832784));
// //
// const getDogAge = (num) => {
//   return num * 7;
// };
//
// console.log(getDogAge(4));

// 3;
// console.log('with for/ of loop');
// const arraySum1 = (arr) => {
//   let sum = 0;
//   for (let i of arr) {
//     sum += i;
//   }
//
//   return sum;
// };
// //
// console.log(arraySum1([13, 2, 4, -2]));

// console.log('with for loop');
// const arraySum = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//
//   return sum;
// };
//
// let arr1 = [13, 2, 4, -2];
// let arr2 = [12, 3, 4,  5];
// let arr1Sum = arraySum(arr1);
// let arr2Sum = arraySum(arr2);
// console.log(arr1Sum);
// console.log(arr2Sum);
// console.log(arraySum[13, 2, 4, -2]);
// //4
// //input:14,5 Output:'19'
//
// const addTwoNums = (num1, num2) => {
//   return num1 + num2;
// };
//
// console.log(addTwoNums(14, 5));

//5
// console.log('using or statement');
// const letterGrade = (num) => {
//   if (num < 65) {
//     return 'F';
//   } else if (num === 65 || num <= 69) {
//     return 'D';
//   } else if (num === 70 || num <= 79) {
//     return 'C';
//   } else if (num === 80 || num <= 89) {
//     return 'B';
//   } else if (num === 90 || num <= 99) {
//     return 'A';
//   } else {
//     return 'A+';
//   }
// };
//
// console.log(letterGrade(89));
// console.log('-------------------------');
//
// Q6
// const repeatLog = (a, b) => {
//   return a.repeat(b);
// };
//
// console.log(repeatLog('+', 10));
//
//Q7;

// const first = (number) => {
//   let result = [];
//   for (let i = 1; i <= number; i++) {
//     result.push(i);
//   }
//
//   return result;
// };
//
// console.log(first(5));
//
//
//8
// const fizzBuzz = (num)=> {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('FizzBuzz');
//     } else if (i % 5 === 0) {
//       console.log('Buzz');
//     } else if (i % 3 === 0) {
//       console.log('Fizz');
//     } else {
//       console.log(i);
//     }
//   }
//
//   return;
// };
//
// fizzBuzz(25);
// //
//
//Q9
// const reverse = (arr) => {
//   let result = [];
//   for (let i = arr.length - 1; i >= 0; i--)
// result.push(arr[i]);
//   return result;
// };
//
// console.log(reverse([1, 2, 3]));
//
// //10
//
// const frequent = (array)=> {
//   let empty = {};
//   for (let i = 0; i <= array.length; i++) {
//     if (empty.hasOwnProperty(array[i])) {
//       empty[array[i]] += 1;
//     } else {
//       empty[array[i]] = 1;
//     }
//   }
//
//   console.log(empty);
//   let maxCount = 0;
//   let maxNum = 0;
//
//   for (let key in empty) {
//     if (empty[key] > maxCount) {
//       maxCount = empty[key];
//       maxNum = key;
//     }
//   }
//
//   return maxNum;
//
// };
//
// console.log(frequent([2, 1, 4, 2, 5, 2, 3, 23, 3, 3, 2, 2, 2, 24, 56, 2, 2, 5, 46, 2]));

// Q 11
// const sumEven = (arr)=> {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       sum =  sum + arr[i];
//     }
//   }
//
//   return sum;
// };
//
// console.log(sumEven([1, 2, 3, 5, 6, 6, 8]));
//12
// this one doesn't work.
// const filp = (object) => {
//   let placeHolder = '';
//   object.keys = placeHolder;
//   placeHolder = object.value;
// };
