// ## Question One
// Write a function named double that takes in a number and returns that number times two

// const double=num=>{
//     return num*2;
// }
// console.log(double(3));

// ## Question Two
// Write a function named smallest that takes in two numbers and returns the smaller number

// const smallest=(num1,num2)=>{
//     if(num1<num2){
//         return num1;
//     }else if(num2===num1){
//         console.log("the numbers are equal");
//     }else if(num1>num2){
//         return num2;
//     }
// }
// console.log(smallest(7,3));

// ## Question Three
// Write a function named smallestValueInArr 
// that takes in an array of numbers and returns the smallest number

// const smallestValueInArr = arr =>{
//      return Math.min(...arr)
// }
// console.log(smallestValueInArr([-4,-59,-348,-34,-4]));

// ## Question Four
// Write a function named occurrences that counts how many characters in a string match a specific character.

// const occurrences = (str, char) =>{
//     let count=0;
//     for(let i=0; i<str.length; i++){
//         if(str[i]===char){
//             count++
//         }
//     }
//     return count;
// }
// console.log(occurrences("hello", "l"));

// ## Question Five
// Write a function named average that returns the average of an array of numbers

// const average = arr1 =>{
//     let total = 0;
//     for(let i=0; i<arr1.length; i++){
//         total+=arr1[i];
//     }
//     let aver = total/arr1.length;
//     return aver;
// }
// console.log(average([-10,5,-15,20]));

// ## Question Six
// Write a function named frequencyMap that takes a string as input and returns an object 
// that maps each character its number of occurrences

// const counter= str =>{
// let count=0;
//     for(let i=0; i<str.length; i++){
//         if(str[i]===char){
//             count++
//         }
// }        

// const frequencyMap = str =>{
//     str.map(counter())
// }

// ## Question Seven
// Write a function called fizzBuzz that logs the numbers from 1 to n as with the following replacements:
// - If the number if a multiple of 3, replace it with "Fizz"
// - If the number is a multiple of 5, replace it with "Buzz"
// - If the number is a multiple of 3 AND 5, replace it with "FizzBuzz"

// const FizzBuzz = num =>{
//     for(let i=1; i<=num; i++){
//         if(i%3===0 && i%5===0){
//             console.log("FizzBuzz");
//         } else if(i%3===0){
//             console.log ("Fizz");
//         } else if (i%5===0){
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }
// console.log(FizzBuzz(15));

// ## Question Eight
// Write a function named valueIsGreaterThanAverageOfArr that takes in an array of numbers 
// and a number and returns whether the Double is greater than the average

// const valueIsGreaterThanAverageOfArr = (arr, num) =>{
//     let arrAver = arr.reduce((a,b) => a + b, 0)/arr.length;     
//     let double = num*num;
//     if(arrAver>double){
//         console.log("the double is smaller than the average");
//     } else if(arrAver<double){
//         console.log("the double is greater than the average");
//     }else{
//         console.log("both numbers are equal");
//     }
// }
// console.log(valueIsGreaterThanAverageOfArr([1,2,3], 4));

// ## Question Nine
// Write a function that finds the second smallest Int an an array of Ints

const findSmallest = (arr) => {
    let smallest = Infinity;
    let secondSmallest = Infinity;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest
            smallest = arr[i]
        }  else if (arr[i] < secondSmallest) {
            secondSmallest= arr[i];
        }
      }
      return secondSmallest;
    }
  console.log(findSmallest([1,3 ,6, 7, 10, 2]))