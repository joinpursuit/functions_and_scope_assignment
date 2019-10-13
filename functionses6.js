// ## Question One
// Write a function named double that takes in a number and returns that number times two

// function double(a) {
//     return a * 2;
// }
// console.log(double(2))

// // Problem 1. ES6 

// const double = (a) => {
//     retun a * 2
// }

// ## Question Two
// Write a function named smallest that takes in two numbers and returns the smaller number

// function smallest(num1, num2) {
//     if (num1 < num2) {
//         return num1 
//     }
//     else {
//         return num2
//     }
// }
// console.log(smallest(3, 4))

// Problem 2. ES6

// const smallest = (num1, num2) => {
//    return num1 < num2 ? num1 : num2
// }
// console.log(smallest(15, 10))

// ## Question Three
// Write a function named smallestValueInArr that takes in an array of numbers and returns the smallest number

// arr1 = [1.0,2,3,4,5,5]
// arr2 = [6,5,4,3,2,1]
// arr3 = [-4,-59,-348,-34,-4]

// function smallestValueInArr(arr) {
//     let smallestNum = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (smallestNum > arr[i]) {
//             smallestNum = arr[i];
//         }
//     }
//     return smallestNum;
// }
// console.log(smallestValueInArr(arr3));

// ES6

// const smallestValueInArr = (arr) => {
//     let smallestNum = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (smallestNum > arr[i]) {
//             smallestNum = arr[i];
//         }
//         return smallestNum;
//     }
// }
// console.log(smallestValueInArr(arr3))

// ## Question Four
// Write a function named occurrences that counts how many characters in a string match a specific character.

// function occurrences(charName, stringName)  {
//     let count = 0
//     for (let i = 0; i < stringName.length; i++) {
//         if (charName === stringName[i]) {
//             count ++;
//         }
//     }
//     return count 
// }
// console.log(occurrences("r", "hello world"))

// ES6

// const occurrences = (charName, stringName) => {
//     let count = 0
//     for (let i = 0; i < stringName.length; i++) {
//         if (charName === stringName[i]) {
//             count ++;
//         }
//     }
//     return count
// }
// // console.log(occurrences("r", "hello world"))

// ## Question Five
// Write a function named average that returns the average of an array of numbers

arr1 = [1,2,3,4,5]
arr2 = [1,42,1,541,42,6]

// function average(arrNum) {
//     let sum = 0;
//     for (let i = 0; i < arrNum.length; i++) {
//         sum += arrNum[i];
//     }
//     return sum / arrNum.length;
// }
// console.log(average(arr2))

// ES6 

const average = (arrNum) => {
    let sum = 0;
    for (let i = 0; i < arrNum.length; i++) {
        sum += arrNum[i];
    }
    return sum / arrNum.length;
}
console.log(average(arr2))
