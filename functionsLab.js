// # Function Exercises

// ## Question One

// Write a function named double that takes in a number and returns that number times two
// function double(num) {
//     return num * 2
// } console.log (double(3))

// ```
// Sample inputs and expected outputs:

// input: 3, expectedOutput: 6
// input: 0, expectedOutput: 0
// input: -2, expectedOutput: -4
// input: 99, expectedOutput: 198
// ```

// ## Question Two

// Write a function named smallest that takes in two numbers and returns the smaller number

// function smallest(num1, num2) {
//    if (num1 > num2) {
//     return num2;
//    } 
//    else if (num1 < num2) {
//     return num1
//    }
//    }
//     console.log(smallest(25,106))

// ```
// Sample inputs and expected outputs:

// inputOne: 8, inputTwo: 3, expectedOutput: 3.0
// inputOne: 0, inputTwo: 0, expectedOutput: 0),
// inputOne: -5, inputTwo: -3, expectedOutput: -5
// inputOne: 2.3, inputTwo: 2.03, expectedOutput: 2.03

// ## Question Three

// Write a function named smallestValueInArr that takes in an array of numbers and returns the smallest number

// let arr1 = [89, 11, 77, 13, 33, 15, 16, 99];
// // let i = 0
// function smallestValueInArr(arr) {
//     for (let i = 0; i < arr.length; i++) {
//        smallestValueInArr += arr1[i];
//        return smallestValueInArr(i)
       
//     } 

// } console.log(smallestValueInArr(arr))

// let arr1 = [89, 11, 77, 13, 33, 15];
// function smallestValueInArr(arr){

//     let smallValue = Infinity
    
//     for (let i = 0; i < arr.length; i ++) {
//         if (arr[i]<smallValue){
//             smallValue = arr[i]
//         }
        
//     } 
//     return smallValue
// }
// console.log(smallestValueInArr(arr1))
// console.log(smallestValueInArr([4, 6, 1, 5]))
// console.log(smallestValueInArr([67, 78, 89, 34, 56]))

// ```
// Sample inputs and expected outputs:

// input: [1.0,2,3,4,5,5], expectedOutput: 1
// input: [6,5,4,3,2,1], expectedOutput: 1
// input: [0,0,0,0,0,0,0,0,0,0], expectedOutput: 0
// input: [-4,-59,-348,-34,-4], expectedOutput: -348
// ```

// ## Question Four

// Write a function named occurrences that counts how many characters in
//  a string match a specific character.

// function ocurrences(char, str) {
//      let count = 0; 
//     for (let i = 0; i < str.length; i++){
//         if (str[i] === char) {
//             count++ 

//         } 
        
//     } 
//     return count
// } 
// console.log(ocurrences('a','maria'))
// console.log(ocurrences('o',"motorcycle"))

// ```
// Sample inputs and expected outputs:

// inputOne: "l", inputTwo: "hello", expectedOutput: 2
// inputOne: "r", inputTwo: "hello world!", expectedOutput: 1
// inputOne: " ", inputTwo: "Now with some spaces", expectedOutput: 3
// inputOne: "E", inputTwo: "cApItAlS aRe DiFfErEnT", expectedOutput: 2

// ## Question Five

// Write a function named average that returns the average of an array of numbers

// const average = (arr) => {
//     let sum = 0
//     for (i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum/arr.length
// }
// console.log(average([1,2,3]))
// ```
// Sample inputs and expected outputs:

// input: [1,2,3,4,5], expectedOutput: 3
// input: [1,42,1,541,42,6], expectedOutput: 105.5
// input: [-10,5,-15,20], expectedOutput: 0
// input: [1.5, 2.25, 4.5, -1.5], expectedOutput: 1.6875

//## Question Six

//Write a function named frequencyMap that takes a string as input and 
//returns an object that maps each character its number of occurrences

const frequencyMap = (str) => {
    let obj = {}
    for (i = 0; i < str.length; i++) {
        if (Object.keys(obj)[Object.keys(obj).length - 1] === str[i] ) {
            obj[str[i]]++  
        } else { 
            obj[str[i]] = 1
        }

    } return obj
} 
console.log(frequencyMap("aassskkkk"))

// ```
// Sample inputs and expected outputs:


// input: "hello", expectedOutput: {"h": 1, "e": 1, "l": 2, "o": 1}
// input: "aaaaaAAA", expectedOutput: {"a": 5, "A":3}
// input: "More words", expectedOutput: {"M": 1, "o": 2, "r": 2, "e": 1, " ": 1, "w": 1, "d": 1, "s": 1}
