console.log('Function Exercises')
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

function largest (num, num2)  {
let largest;
  if (num > num2) {
  largest = num;
} else {
  largest = num2;
}
  return largest
}

console.log(largest(12, 4));

console.log('---2');

// ## Question 2
//
// Write a function named getDogAge that takes one argument: a dog's age in human years. The function returns the dog's age in dog years. The conversion rate is 1 human year to 7 dog years.
//
// Example:
//
// Input: `4`
//
// Output: `28`

function getDogAge (dAge) {
  return console.log(dAge * 7)
}

getDogAge (4)

console.log('---3');

// ## Question 3
//
// Write a function `arraySum` that takes in an array and returns the sum of all the elements.
//
// Example:
//
// Input: `[13,2,4,-2]`
//
// Output: `17`



function arraySum (arr) {
  let sum = 0
  for (i = 0; i < arr.length; i++) {
      sum += arr[i]
  }
    return console.log(sum);
}

arraySum([13, 2, 4, -2])


console.log('---4');

// ## Question 4

// Write a function that takes in any two numbers and return their sum.
//
// Example:
//
// Input: `14, 5`
//
// Output: `19`

function sum (n1, n2) {
  let gg = 0
  gg = n1 + n2

  return gg
}

console.log(sum(14, 5));

console.log('---5');

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

function grade (g) {
    if (g === 100) {
     g = "A+"
  }
  else if ( g >= 90){
     g = "A"
  }
  else if (g >= 80) {
     g = "B"
  }
  else if (g >= 70) {
     g = "C"
  }
  else if (g >= 65) {
     g = "D"
  }
  else {
    g = "F"
  }
    return g
  }
  console.log(grade( 88))

console.log('---6');
  // ## Question 6
  //
  // Implement a function named `repeatLog` that takes a string and a number as parameters. The function should log `message` `count` number of times.
  //
  // Example:
  //
  // Input: `"+", 10`
  //
  // Output: `++++++++++`
  //

  function repeatLog(message, count){
    let string = '';
    for(let i =0; i < count; i++){
      string += message;
    }	
  
    return string;
  }

  
// [9, 15, 18]


function repeatLog (emp, reap) {
  for (j = 1; j <= reap; j++) {
       console.log(`${emp} ${j} number of ${reap} times`)
  }
}

console.log('----7');

// ## Question 7
//
// Write a function named `first` that takes a number and returns an array with all the numbers from 1 to n
//
//
// Example:
//
// Input: first(3)
//
// Output: [1, 2, 3]

function first (fum) {
let farray = []
for (k = 1; k <= fum; k++) {
  farray.push(k)
}
  console.log(farray);
}

first(7)

console.log('------8');
// ## Question 8
//
// Write a function that logs the numbers from 1 to x, except:
//
// If the number if a multiple of 3, log `"Fizz"` instead of the number
// If the number is a multiple of 5, log `"Buzz"` instead of the number
// If the number is a multiple of 3 AND 5, log `"FizzBuzz"` instead of the number
// Your function should take in one parameter: x (the number to count up to)

function fizzbuzz (x) {
  for (i = 0; i <= x; i++) {
    if (i %  3 === 0 && i % 5 != 0) {
      console.log("fizz");
    }else if (i % 5 === 0 && i % 3 != 0) {
      console.log("buzz");
    }else if (i % 5 === 0 && i % 3 === 0){
      console.log("fizzbuzz");
    }else{
      console.log(i);
    }
  }
  //console.log(i);
}

fizzbuzz(15);

console.log('---9');

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
//

function reverse (para) {
  arr9 = []
  for (i = para.length - 1; i <= 0 ; i--) {
    arr9.push(i)
  }
}

console.log(reverse([3, 2, 1]));

console.log('---10');

console.log('---11');

function sumOfEven (arr) {
  let total = 0
  for(i=0; i < arr.length; i++) {
    res = []
    if (arr[i] % 2 === 0) {
      total += arr[i]
    }
  }
  return total
}

console.log('---12')

function flip(object){  
	let newObject = {}
	for(let key in object)  {

		newObject[object[key]] = key;
  
  }

	return newObject;
}

console.log(flip({1: "uno", 5: "cinco"}))