/* Question 1
Write a function that returns the largest of two numbers.
If they are equal, return the second one.

Example:
Input: 12, 4
Output: 12
*/

const largestOfTwoNumbers = (num1, num2) => {
  if (num1 > num2){
    return num1;
  } else {
    return num2;
  }
}

let num1 = 14;
let num2 = 4;
console.log(`1. The largest of ${num1} and ${num2} is ${largestOfTwoNumbers(num1,num2)}`);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* Question 2
Write a function named getDogAge that takes one argument: a dog's age in human years.
The function returns the dog's age in dog years.
The conversion rate is 1 human year to 7 dog years.

Example:
Input: 4
Output: 28
*/

const getDogAge = (num) => {
  return num * 7;
}

let dogAge = 5;
realDogAge = getDogAge(dogAge);
console.log(`2. ${dogAge} years old for a dog means ${realDogAge} years old in dog years`);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* Question 3
Write a function arraySum that takes in an array and returns the sum of all the elements.

Example:
Input: [13,2,4,-2]
Output: 17
*/

const arraySum = (arr) => {
  let total = 0;

  for (let i = 0; i < arr.length; i++){
    total += arr[i];
  };
  return total;
};

let array = [13, 2, 4, -2];
let sumArray = arraySum(array);
console.log(`3. The sum ${array} is ${sumArray}`);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* Question 4
Write a function that takes in any two numbers and return their sum.

Example:
Input: 14, 5
Output: 19
*/

const sumTowNumbers = (num1, num2) => {
  return num1 + num2;
}

let sum = sumTowNumbers(num1, num2);
console.log(`4. Addition : ${num1} + ${num2} = ${sum}`);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* 5. Write a function takes in any number grade and returns a corresponding letter grade.

Number Grade	Equivalent Letter Grade
100	A+
90 - 99	A
80 - 89	B
70 - 79	C
65 - 69	D
Below 65	F

Example:
Input: 88
Output: "B"
*/

const gradesLetter = (num) => {
  if (num > 100 || num < 0){
    return false;
  }
  let grade;

  if (num > 90){
    grade = 'A';
  } else if (num > 80){
    grade = 'B';
  } else if (num > 70){
    grade = 'C';
  } else if (num > 65){
    grade = 'D';
  } else {
    grade = 'F';
  }
  return grade;
};

let gradeNumber = 100;
let grade = gradesLetter(gradeNumber);
console.log(`5. The grade for ${gradeNumber} is : ${grade}`);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* Question 6
Implement a function named repeatLog that takes a string and a number as parameters.
The function should log message count number of times.

Example:
Input: "+", 10
Output: ++++++++++
*/

const repeatLog = (str, num) => {
  let outputStr = '';
  for (let i = 0; i < num; i++){
     outputStr += str;
  }
  console.log(outputStr);
};

console.log(`Question 6:`)
repeatLog('A', 5);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* Question 7
Write a function named first that takes a number and returns an array with
all the numbers from 1 to n

Example:
Input: first(3)
Output: [1, 2, 3]
*/

const first = (num) => {
  let arr = [];

  if (num < 1){
    return false
  } else {
    for (let i = 0; i < num; i++){
      arr[i] = i + 1;
    }
  }
  return arr;
};

let incrementedArray = first (num1);
console.log(`7. Array of 1 to ${num1} : ${incrementedArray}`);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);



/* Question 8
Write a function that logs the numbers from 1 to x, except:

If the number if a multiple of 3, log "Fizz" instead of the number
If the number is a multiple of 5, log "Buzz" instead of the number
If the number is a multiple of 3 AND 5, log "FizzBuzz" instead of the number
Your function should take in one parameter: x (the number to count up to)
*/

const numFizzBuzz = (num) => {
  for (let i = 1; i <= num; i++){
    if (i % 3 === 0 && i % 5 === 0){
      console.log('FizzBuzz');
    } else if (i % 3 === 0){
      console.log('Fizz');
    } else if (i % 5 === 0){
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
};

numFizzBuzz(30);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* Question 9
Write a function named reverse that takes an array as a parameter.
The function should return an array in reverse order.

Example:
Input: reverse([1, 2, 3])
Output: [3, 2, 1]
*/

const reverse = (arr) => {
  let reverseArray = [];

  for (let i = 0; i < arr.length; i++){
    reverseArray.unshift(arr[i]);
  }
  return reverseArray;
};

let myArray = [1, 3, 7, 5]
console.log('9. The reverse array of', myArray, ' is ', reverse(myArray))
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* Question 10
Write a function that prints out the most frequently occurring element in an array.

Example:
Input: [2,1,4,2,5,2,3,23,3,3,2,2,2,24,56,2,2,5,46,2]
Output: 2
*/

const mostFrequentElementOfArray = (arr) => {
  let obj = {};

  for (let element of arr){
    if (obj[element] === undefined) {
      obj[element] = 1;
    } else {
      obj[element]++;
    }
  }

  let maxValue = 0;
  let maxKey;
  for (let key in obj){
    if (obj[key] > maxValue){
      maxValue = obj[key];
      maxKey = key;
    }
  }
  return maxKey;
}

let mySecondArray = [2,1,4,2,5,2,3,23,3,3,2,2,2,24,56,2,2,5,46,2];

let mostFrequentElement = mostFrequentElementOfArray(mySecondArray);
console.log('10. The most frequent number in the array ', mySecondArray,
            ' is ', mostFrequentElement);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* Question 11
Write a function that sums all the even numbers in an array.

Example:
Input: [1,2,5,64,23,22,91,3]
Output: 88
*/

const sumEvenElementsOfArray = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0){
      sum += arr[i];
    }
  }
  return sum;
};

let myThirdArray = [1,2,5,64,23,22,91,3];
let sumEvenNumbers = sumEvenElementsOfArray(myThirdArray);
console.log('11. The sum of all even numbers of the array ', myThirdArray,
            ' is ', sumEvenNumbers)
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* Question 12
Write a function that flips an object. All of the keys are now values and all
of the values are now keys.

Example:
Input: {1: "uno", 5: "cinco"}
Output: {"uno": 1, "cinco": 5}
*/

const flipObject = (obj) => {
  let newObject = {};
  for (let element in obj){
    newObject[obj[element]] = element;
  }
  obj = newObject;
  return obj;
};

console.log(`Question 12 :`)
let myObject = {1: "uno", 2: "dos", 5: "cinco"};
console.log(myObject);
myObject = flipObject(myObject);
console.log(myObject);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* Question 13
Write a function that determines if a value is inside of array.

Example:
Input: [1,4,6,9,10], 5
Output: false
*/

const searchForElementInArray = (arr, target) => {
  let elementPresent;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === target){
      elementPresent = true;
      break;
    } else {
      elementPresent = false
    }
  }
  return elementPresent;
};

let myFourthArray = [1,4,6,9,10];
let target = 9
let isItThere = searchForElementInArray(myFourthArray, target);
console.log(`13. My array [${myFourthArray}] has the value ${target} : `, isItThere);
