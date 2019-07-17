// # Function Exercises

// ## Question 1

// Write a function that returns the largest of two numbers. If they are equal, return the second one.

// Example:

// Input: `12, 4`

// Output: `12`

function whosBigger (numeroUno, numeroDos) {
    if (numeroUno > numeroDos) {
        return numeroUno;
    } else {
        return numeroDos;
    }
}

console.log("1) ", whosBigger(100,1000));
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - -");

// ## Question 2

// Write a function named getDogAge that takes one argument: a dog's age in human years. The function returns the dog's age in dog years. The conversion rate is 1 human year to 7 dog years.

// Example:

// Input: `4`

// Output: `28`

function getDogAge (doggoAge) {
    return doggoAge / 7;
}

console.log("2) ", getDogAge(28));
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - -");

// ## Question 3

// Write a function `arraySum` that takes in an array and returns the sum of all the elements.

// Example:

// Input: `[13,2,4,-2]`

// Output: `17`

function arraySum (arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum;
}

console.log("3) ", arraySum([1,2,3,4,5]));
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - -");

// ## Question 4

// Write a function that takes in any two numbers and return their sum.

// Example:

// Input: `14, 5`

// Output: `19`

const addMeUp = (one, two) => one + two;

console.log("4) ", addMeUp(23, 24));
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - -");
// ## Question 5

// Write a function takes in any number grade and returns a corresponding letter grade.

// | Number Grade | Equivalent Letter Grade |
// | :--------: | :---------: |
// | 100 | A+ |
// | 90 - 99 | A |
// | 80 - 89 | B |
// | 70 - 79 | C |
// | 65 - 69 | D |
// | Below 65 | F |


// Example:

// Input: `88`

// Output: `"B"`

const passOrFail = (grade) => {
    return grade === 100 ? "A"
        : grade > 89 ? "A"
        : grade > 79 ? "B"
        : grade > 69 ? "C"
        : grade > 64 ? "D"
        : "F";
}

console.log("5) ", passOrFail(88));
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - -");
// ## Question 6

// Implement a function named `repeatLog` that takes a string and a number as parameters. The function should log `message` `count` number of times.

// Example:

// Input: `"+", 10`

// Output: `++++++++++`

const repeatLog = (string, number) => {
    let printMe = '';
    for (let i = 0; i < number; i++) {
        printMe += string;
    }
    return printMe;
}

console.log("6) ", repeatLog("+", 10));
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - -");
// ## Question 7

// Write a function named `first` that takes a number and returns an array with all the numbers from 1 to n


// Example:

// Input: `first(3)`

// Output: `[1, 2, 3]`

const first = (number) => {
    let arr = [];
    for (let i = 1; i <= number; i++) {
        arr.push(i);
    }
    return arr;
}

console.log("7) ", first(3));
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - -");
// ## Question 8

// Write a function that logs the numbers from 1 to x, except:

// If the number if a multiple of 3, log `"Fizz"` instead of the number
// If the number is a multiple of 5, log `"Buzz"` instead of the number
// If the number is a multiple of 3 AND 5, log `"FizzBuzz"` instead of the number
// Your function should take in one parameter: x (the number to count up to)

const fizzBuzzMe = (number) => {
    return number % 3 === 0 && number % 5 === 0 ? "FizzBuzz"
        : number % 3 === 0 ? "Fizz" 
        : number % 5 === 0 ? "Buzz"
        : "";
}

console.log("8) ", fizzBuzzMe(15));
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - -");
// ## Question 9

// Write a function named `reverse` that takes an array as a parameter. The function should return an array in reverse order.


// Example:

// Input: `reverse([1, 2, 3])`

// Output: `[3, 2, 1]`

const reverse = (arr) => {
    let holdMe;
    let printMe = [];
    let i = arr.length - 1;
    while (i >= 0) {
        holdMe = arr.pop();
        printMe.push(holdMe);
        i--;
    }
    return printMe;
}

console.log("9) ", reverse([1,2,3,4]));
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - -");
// ## Question 10

// Write a function that prints out the most frequently occurring element in an array.

// Example:

// Input: `[2,1,4,2,5,2,3,23,3,3,2,2,2,24,56,2,2,5,46,2]`

// Output: `2`

// This is not working for some reason???????? max = 3????????
const freqMe = (arr) => {
    let obj = {};
    for (let num of arr) {
        if (obj.hasOwnProperty(num)) {
            obj[num] += 1;
        } else {
            obj[num] = 1;
        }
    }
    let max = 0;
    let maxElement = 0;
    for (let count in obj) {
        if (obj[count] > max) {
            max = obj[count];
            maxElement = count;
        } 
    }
    return maxElement;
}

console.log("10) ", freqMe([2,1,4,2,5,2,3,23,3,3,3,3,2,2,24,56,2,2,5,46,2])); 
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - -");
// ## Question 11

// Write a function that sums all the even numbers in an array.

// Example:

// Input: `[1,2,5,64,23,22,91,3]`

// Output: `88`

const sumMeEven = (arr) => {
    let sum = 0;
    for (let num of arr) {
        num % 2 === 0 ? sum += num : sum += 0;
    }
    return sum;
}

console.log("11) ", sumMeEven([1,2,5,64,23,22,91,3]));
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - -");
// ## Question 12

// Write a function that flips an object.  All of the keys are now values and all of the values are now keys.

// Example:

// Input: `{1: "uno", 5: "cinco"}`

// Output: `{"uno": 1, "cinco": 5}`

const flipMe = (obj) => {
    let printMe = {};
    for (let ele in obj) {
        let holdMe = obj[ele];
        let holdMeToo = ele;
        printMe[String(holdMe)] = Number(holdMeToo);
    }
    return printMe;
}

console.log("12) ", flipMe({1: "uno", 5: "cinco"}));
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - -");
// ## Question 13

// Write a function that determines if a value is inside of array.

// Example:

// Input: `[1,4,6,9,10], 5`

// Output: `false`

const isItIn = (arr, num) => {
    for (let find of arr) {
        if (num === find) {
            return true;
        }
    }
    return false;
}

console.log("13) ", isItIn([1,4,6,9,10], 5));