//Write a function that returns the largest of two numbers.If they are equal,
// return the second one.

function bigNum(num1, num2) {
    if (num1 === num2) {
        return num2
    } else if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}


// Write a function named getDogAge that takes one argument: a dog's age in human years. The function returns the dog's age in dog years.The conversion rate is 1 human year to 7 dog years.

function getDogAge(num) {
    return num * 7
}

// Write a function `arraySum` that takes in an array and returns the sum of all the elements.

function arraySum(arr) {
    let output = 0
    for (let i = 0; i < arr.length; i++) {
        output += arr[i]
    }
    return output
}

console.log(arraySum([13, 2, 4, -2]));

// Write a function that takes in any two numbers and return their sum.

function numSum(num1, num2) {
    return num1 + num2
}

// Write a function takes in any number grade and returns a corresponding letter grade.

function numGrade(num){
    if (num >= 100) {
        return "A+"
    } else if (num > 90) {
        return "A"
    } else if (num > 80) {
        return "B"
    } else if (num > 70) {
        return "C"
    } else if (num > 65) {
        return "D"
    } else if (num < 65) {
        return "F"
    }
}

console.log(numGrade(99));

// Implement a function named `repeatLog` that takes a string and a number as parameters.
// The function should log`message` `count` number of times.

function repeatLog(str, num){
    for (let i = 0; i < num; i++) {
        console.log(str);
    }
}
repeatLog('hey', 5)

// Write a function named `first` that takes a number and returns an array with 
// all the numbers from 1 to n.

function first(num){
    let output = []
    for (let i = 1; i <= num; i++) {
        output.push(i)
    }
    return output
}

console.log(first(15));

// Write a function that logs the numbers from 1 to x, except:

// If the number if a multiple of 3, log`"Fizz"` instead of the number
// If the number is a multiple of 5, log`"Buzz"` instead of the number
// If the number is a multiple of 3 AND 5, log`"FizzBuzz"` instead of the number
// Your function should take in one parameter: x(the number to count up to)

function fizzBuzz(x) {
    for (let i = 1; i <= x; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log("FizzBuzz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(50)

// Write a function named `reverse` that takes an array as a parameter.The function should
// return an array in reverse order.

function reverse(arr){
    let output = []
    for (let i = 0; i < arr.length; i++) {
        output.unshift(arr[i]);   
    }
    return output
}
console.log(reverse([5, 4, 3, 2, 1]));

// Write a function that prints out the most frequently occurring element in an array.

// Write a function that sums all the even numbers in an array.

function evenSum(array){
    let answer = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            answer += array[i]
        } 
    }
    return answer
}

// Write a function that determines if a value is inside of array.

function check(array, int){
    let output = true
    for (let i = 0; i < array.length; i++) {
        if (array[i] === int) {
            return output
        } else {
            return !output
        }
    }
}