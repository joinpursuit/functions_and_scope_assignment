// ## Question One
// Write a function named double that takes in a number and returns that number times two

// function double(a) {
//     return a * 2;
// }
// console.log(double(2))

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

// ## Question Five
// Write a function named average that returns the average of an array of numbers

// arr1 = [1,2,3,4,5]
// arr2 = [1,42,1,541,42,6]

// function average(arrNum) {
//     let sum = 0;
//     for (let i = 0; i < arrNum.length; i++) {
//         sum += arrNum[i];
//     }
//     return sum / arrNum.length;
// }
// console.log(average(arr2))

// ## Question Six
// Write a function named frequencyMap that takes a string as input and returns an object that maps each character its number of occurrences

// function frequencyMap(stringName) {
//     let characterMap = {}
//     for(let i =0; i < stringName.length; i++) {
//         if (characterMap[stringName[i]]) {
//             characterMap[stringName[i]] ++
//         }
//         else {characterMap[stringName[i]] = 1}
//     }
// return characterMap
// }
// console.log(frequencyMap("hello"))

// ## Question Seven
// Write a function called fizzBuzz that logs the numbers from 1 to n as with the following replacements:

// function fizzBuzz(n) {
//     for (let i = 0; i < n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//             continue;
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//             continue;
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//             continue;
//         } 
//         console.log(i);
//     }
// }

// console.log(fizzBuzz(27));

// ## Question Eight
// Write a function named valueIsGreaterThanAverageOfArr that takes in an array of numbers and a number and returns whether the Double is greater than the averageute

// inputOne = 1
// inputTwo = [1.0,2,3,4,5]

// function valueIsGreaterThanAverageOfArr(num, array) {
//     let double = num * 2
//     let sum = 0
//     for (let i = 0; i < array.length; i++){
//         sum += array[i]
//     }
//     let avg = sum / array.length
//     if (double > avg) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(valueIsGreaterThanAverageOfArr(inputOne, inputTwo))