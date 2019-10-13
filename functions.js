// PROBLEM 1

// function double (num) {
//     return num * 2;
// }
// console.log(double(99));


// PROBLEM 2

// function smallest (num1, num2) {
//     if ( num1 < num2) {
//         return num1 ;
//     } else {
//         return num2
//     }
// }
// console.log(smallest(2.3, 2.03))


// PROBLEM 3

// let arr1 = [1.0, 2, 3, 4, 5, 5] 
// let arr2 = [6, 5, 4, 3, 2, 1]
// let arr3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// let arr4 = [-4, -59, -348, -34, -4]
// function smallestValueInArr (arrNum){
//     let smallestNumber = arrNum[0] 
//     for( let i = 0; i < arrNum.length; i++){
//         if (arrNum[i]  < smallestNumber){
//             smallestNumber = arrNum[i];
//         }
//         // console.log(i)
//     } 
//     return smallestNumber;
// }
// console.log(smallestValueInArr(arr4));

//problem 4

// function occurences(letter, str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             count +=1
//         }  
//     } 
//     return letter + ":" + count  
// }
// console.log(occurences("l", "hello"));
// console.log(occurences("r", "hello world!"));
// console.log(occurences(" ", "Now with some spaces"));
// console.log(occurences("E", "cApItAlS aRe DiFfErEnT"));

// Problem 5

// let arr  = [1, 2, 3, 4, 5] 
// let arr2 = [1,42,1,541,42,6]
// let arr3 = [-10,5,-15,20]
// let arr4 = [1.5, 2.25, 4.5, -1.5]

// function sum(arr) {
//     let sum1 = 0;
//     for (let i = 0; i < arr.length; i++) {
//     sum1 += arr[i];
// }
//     return sum1/ arr.length
// }
// console.log(sum(arr4))



// PROBLEM 6

// let str1 = "hello"
// let str2 = "aaaaaAAA"
// let str3 = "More words"

// function frequencyMap(str) {
//     let newObj = {}
//    for(let i = 0; i < str.length; i++){
//    if (str[i] !== i){
//        newObj[str[i]] = 1

//     } else {
//     count = newObj[str[i]]++

//    }  
// //    newObj =   
//    }
 
// // return newObj
//  }
// // console.log(frequencyMap(str1))



// PROBLEM 7

function fizzBuzz(num) {
        for (let i = 0; i <= num; i++){
            if( i % 3 ===0 && i % 5 ===0){
            console.log("FizzBuzz")
            }
            else if ( i % 3 === 0) {
                console.log("Fizz")
            } else if ( i % 5 === 0) {
                console.log("Buzz")
            } else {
                console.log(i)
            } 
        } 
    }

console.log(fizzBuzz(27))