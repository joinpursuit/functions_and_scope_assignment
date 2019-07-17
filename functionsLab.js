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
let var1Num1;
let var1Num2;
const function1 = (num1, num2) => {
  if(num1 === num2) {
    return num2;

  } else if(num1 > num2) {
    return num1;

  } else if(num1 < num2) {
    return num2;

  }
}
function1(5, 7);
console.log("----------------------------------------------------")
// ## Question 2
//
// Write a function named getDogAge that takes one argument: a dog's age in human years. The function returns the dog's age in dog years. The conversion rate is 1 human year to 7 dog years.
//
// Example:
//
// Input: `4`
//
// Output: `28`
const getDogAge = (num) => {
  return console.log("The age of your dog is: " + (num * 7));
}
getDogAge(7);
console.log("----------------------------------------------------")
// ## Question 3
//
// Write a function `arraySum` that takes in an array and returns the sum of all the elements.
//
// Example:
//
// Input: `[13,2,4,-2]`
//
// Output: `17`
const arraySum = (inputArray) => {
  let temp = 0;
  for(let i in inputArray) {
    temp += inputArray[i];
  }
  return console.log("The sum of the array is: " + temp);
}
let array3 = [1, 3, 5, 7, 9];
arraySum(array3);
console.log("----------------------------------------------------")
// ## Question 4
//
// Write a function that takes in any two numbers and return their sum.
//
// Example:
//
// Input: `14, 5`
//
// Output: `19`
const function4 = (num1, num2) => {
  return console.log(num1 + num2);
}
function4(2, 5);
console.log("----------------------------------------------------")
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
const function5 = (grade) => {
  if(grade === 100) {
    console.log("A+");
  } else if( (grade < 100) && (grade >= 90) ) {
    console.log("A");
  } else if( (grade < 90) && (grade >= 80) ) {
    console.log("B");
  } else if( (grade < 80) && (grade >= 70) ) {
    console.log("C");
  } else if( (grade < 70) && (grade >= 65) ) {
    console.log("D");
  } else { console.log("F") };
}
function5(85);
("----------------------------------------------------")
// ## Question 6
//
// Implement a function named `repeatLog` that takes a string and a number as parameters. The function should log `message` `count` number of times.
//
// Example:
//
// Input: `"+", 10`
//
// Output: `++++++++++
const repeatLog = (num, str) => {
  let tempStr = "";
  for(let i = 0; i < num; i++) {
    tempStr += str;
  }
  return console.log(tempStr);
}
repeatLog(5, "a");
("----------------------------------------------------");
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
const first = (num) => {
  let tempArray = [];
  for(let i = num; (i <= num) && (i >= 1); i--) {
    tempArray.push(i)
  }
  for(let i = 0; i < tempArray.length; i++) {
    console.log(tempArray[i]);
  }
}
first(5);
("----------------------------------------------------");
// ## Question 8
//
// Write a function that logs the numbers from 1 to x, except:
//
// If the number if a multiple of 3, log `"Fizz"` instead of the number
// If the number is a multiple of 5, log `"Buzz"` instead of the number
// If the number is a multiple of 3 AND 5, log `"FizzBuzz"` instead of the number
// Your function should take in one parameter: x (the number to count up to)
let function8 = (num) => {
  for(let i = 1; i < num; i++) {
    if( (i % 3 === 0) && (i % 5 === 0) ) {
      console.log("FizzBuzz");
    } else if(i % 3 === 0) {
      console.log("Fizz");
    } else if(i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
function8(100);
console.log("----------------------------------------------------");
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
const reverse = (arrayInput) => {
  let newArr = [];
  for(let i = arrayInput.length-1; i >= 0 ; i--) {
    newArr.push(arrayInput[i]);
  }
  return newArr;
  }

let array9 = [0, 1, 2, 3, 4];
console.log(reverse(array9));
console.log("----------------------------------------------------");
// ## Question 10
//
// Write a function that prints out the most frequently occurring element in an array.
//
// Example:
//
// Input: `[2,1,4,2,5,2,3,23,3,3,2,2,2,24,56,2,2,5,46,2]`
//
// Output: `2`
// const function10 = (inputArray, n) => {
//   inputArray.sort();
//   let max_count = 1;
//   let res = inputArray[0];
//   let curr_count = 1;
//   for (let i = 0; i < n; i++) {
//     if (inputArray[i] == inputArray[i - 1]) {
//         curr_count++;
//       } else {
//         if (curr_count > max_count)
//         {
//             max_count = curr_count;
//             res = inputArray[i - 1];
//         }
//         curr_count = 1;
//     }
//   }
//   // If last element is most frequent
//           if (curr_count > max_count)
//           {
//               max_count = curr_count;
//               res = inputArray[n - 1];
//           }
//
//           return res;
// }
// let array10 = [2, 1, 4, 2, 5, 2, 3, 23, 3, 3, 2, 2, 2, 24, 56, 2, 2, 5, 46, 2];
// let n = array10.length;
// function10(array10);
//or I can do this way
const function10 = () => {
  let object = {};
  let array10 = [2, 1, 4, 2, 5, 2, 3, 23, 3, 3, 2, 2, 2, 24, 56, 2, 2, 5, 46, 2];
  console.log(array10);
  for (let element of array10) { //go through each item in array. This loop will only work if the array has content in it
    if (object[element] === undefined) { //if the json object "element"(from array) is empty
      object[element] = 1; //then make the key and the value in the same time here. the key will be "element" (which we'll start with 'a' since it's the first element in the array) then make the value of "element" equal to 1
    } else {
      object[element] ++ //if the element already exists in the object, then add the value again, since it's it repeated in the array
    }
  }
  console.log(object);
  console.log("The most common number in array10 is: 2, which appears: " + object[2] + " times in the array.");
  }

console.log( function10() );
console.log("----------------------------------------------------");
// ## Question 11
//
// Write a function that sums all the even numbers in an array.
//
// Example:
//
// Input: `[1,2,5,64,23,22,91,3]`
//
// Output: `88`
const function11 = (inputArray) => {
  let temp = 0;
  for(let i = 0; i < inputArray.length-1; i++) {
    if(inputArray[i] % 2 === 0) {
      temp += inputArray[i];
    }
  }
  return console.log("The sum of the even numbers in the array is: " + temp);
}
let array11 = [1, 2, 5, 64, 23, 22, 91, 3];
function11(array11);
console.log("----------------------------------------------------");
// ## Question 12
//
// Write a function that flips an object.  All of the keys are now values and all of the values are now keys.
//
// Example:
//
// Input: `{1: "uno", 5: "cinco"}`
//
// Output: `{"uno": 1, "cinco": 5}`
// ## Question 13
//
// Write a function that determines if a value is inside of array.
//
// Example:
//
// Input: `[1,4,6,9,10], 5`
//
// Output: `false`
const function13 = (inputArray, num) => {
  for(let i = 0; i < inputArray.length - 1; i++) {
    if(num === inputArray[i]) {
      return console.log(num + " is in the array");
    };
  }
  return console.log("False");
}
let array13 = [1, 4, 6, 9, 10];
function13(array13, 5);
