console.log(`# Function Exercises`);


//## Question 1
console.log(`\n\n\n\n========================================\n## Question 1\n===============\n`);
console.log(`
Write a function that returns the largest of two numbers. If they are equal, return the second one.

Example:

Input: '12, 4'

Output: '12'
\n--------------------------------------\n\n`);

function larger(x, y) {
  let z;
  x > y ? z = x : z = y;
  return z;
}

console.log(larger(12, 4));

//## Question 2
console.log(`\n\n\n\n========================================\n## Question 2\n===============\n`);
console.log(`
Write a function named getDogAge that takes one argument: a dog's age in human years. The function returns the dog's age in dog years. The conversion rate is 1 human year to 7 dog years.

Example:

Input: '4'

Output: '28'
\n--------------------------------------\n\n`);

function getDogAge(humanAge) {
  return humanAge * 7;
}

console.log(getDogAge(4));

//## Question 3
console.log(`\n\n\n\n========================================\n## Question 3\n===============\n`);
console.log(`
Write a function 'arraySum' that takes in an array and returns the sum of all the elements.

Example:

Input: '[13,2,4,-2]'

Output: '17'
\n--------------------------------------\n\n`);

function arraySum(arr) {
  sum = 0;
  for (let i of arr) sum += i;
  return sum;
}

console.log(arraySum([13,2,4,-2]));

//## Question 4
console.log(`\n\n\n\n========================================\n## Question 4\n===============\n`);
console.log(`
Write a function that takes in any two numbers and return their sum.

Example:

Input: '14, 5'

Output: '19'
\n--------------------------------------\n\n`);

function sumOfTwo(x, y) {
  return x + y;
}

console.log(sumOfTwo(14, 5));

//## Question 5
console.log(`\n\n\n\n========================================\n## Question 5\n===============\n`);
console.log(`
Write a function takes in any number grade and returns a corresponding letter grade.

| Number Grade | Equivalent Letter Grade |
| :--------: | :---------: |
| 100 | A+ |
| 90 - 99 | A |
| 80 - 89 | B |
| 70 - 79 | C |
| 65 - 69 | D |
| Below 65 | F |


Example:

Input: '88'

Output: '"B"'
\n--------------------------------------\n\n`);

function letterGrade(number) {
  if (number >= 100) return `A+`;
  else if (number >= 90) return `A`;
  else if (number >= 80) return `B`;
  else if (number >= 70) return `C`;
  else if (number >= 65) return `D`;
  else return `F`;
}

console.log(letterGrade(88));

//## Question 9
console.log(`\n\n\n\n========================================\n## Question 9\n===============\n`);
console.log(`
Implement a function named 'repeatLog' that takes a string and a number as parameters. The function should log 'message' 'count' number of times.

Example:

Input: '"+", 10'

Output: '++++++++++'

\n--------------------------------------\n\n`);

function repeatLog(str, n) {
  let string = ``;
  for (let i = n; i > 0; i--) string += str;
  console.log(string);
}

repeatLog(`+`, 10);

//## Question 10
console.log(`\n\n\n\n========================================\n## Question 10\n===============\n`);
console.log(`
Write a function named 'first' that takes a number and returns an array with all the numbers from 1 to n


Example:

Input: 'first(3)'

Output: '[1, 2, 3]'

\n--------------------------------------\n\n`);

function first(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) arr.push(i);
  return arr;
}

console.log(first(3));

//## Question 11
console.log(`\n\n\n\n========================================\n## Question 11\n===============\n`);
console.log(`
Write a function that logs the numbers from 1 to x, except:

If the number if a multiple of 3, log '"Fizz"' instead of the number
If the number is a multiple of 5, log '"Buzz"' instead of the number
If the number is a multiple of 3 AND 5, log '"FizzBuzz"' instead of the number
Your function should take in one parameter: x (the number to count up to)

\n--------------------------------------\n\n`);

function fizzBuzz(x) {
  for (let i = 1; i <= x; i++) {
    if (!(i % 15)) console.log(`FizzBuzz`);
    else if (!(i % 3)) console.log(`Fizz`);
    else if (!(i % 5)) console.log(`Buzz`);
    else console.log(i);
  }
}

fizzBuzz(20);

//## Question 12
console.log(`\n\n\n\n========================================\n## Question 12\n===============\n`);
console.log(`
Write a function named 'reverse' that takes an array as a parameter. The function should return an array in reverse order.


Example:

Input: 'reverse([1, 2, 3])'

Output: '[3, 2, 1]'

\n--------------------------------------\n\n`);

function reverse(arr) {
  let rArr = [];
  for (let i of arr) rArr.unshift(i);
  return rArr;
}

console.log(reverse([1, 2, 3]));

//## Question 13
console.log(`\n\n\n\n========================================\n## Question 13\n===============\n`);
console.log(`
Write a function that prints out the most frequently element in an array.

Example:

Input: '[2,1,4,2,5,2,3,23,3,3,2,2,2,24,56,2,2,5,46,2]'

Output: '2'


\n--------------------------------------\n\n`);

function mostFreq(arr) {
  let obj = {};
  let count = 0;
  let mostFreq = ``;
  for (let i of arr) obj[i] === undefined ? obj[i] = 1 : obj[i] += 1;
  for (let j in obj) {
    if (obj[j] > count) {
      count = obj[j];
      mostFreq = j;
    }
  }

  console.log(mostFreq, `appears`,count, `times`);
}

mostFreq([2,1,4,2,5,2,3,23,3,3,2,2,2,24,56,2,2,5,46,2]);

//## Question 14
console.log(`\n\n\n\n========================================\n## Question 14\n===============\n`);
console.log(`
Write a function that sums all the even numbers in an array.

Example:

Input: '[1,2,5,64,23,22,91,3]'

Output: '88'

\n--------------------------------------\n\n`);

function evenSum(arr) {
  let evenSum = 0;
  for (let i of arr) !(i % 2) ? evenSum += i : null;
  return evenSum;
}

console.log(evenSum([1,2,5,64,23,22,91,3]));

//## Question 15
console.log(`\n\n\n\n========================================\n## Question 15\n===============\n`);
console.log(`
Write a function that flips a dictionary.  All of the keys are now values and all of the values are now keys.

Example:

Input: '{1: "uno", 5: "cinco"}'

Output: '{"uno": 1, "cinco": 5}'

\n--------------------------------------\n\n`);

function objFlip(obj) {
  let flipObj = {};
  for (let i in obj) flipObj[obj[i]] = i;
  return flipObj;
}

console.log(objFlip({1: "uno", 5: "cinco"}));

//## Question 16
console.log(`\n\n\n\n========================================\n## Question 16\n===============\n`);
console.log(`
Write a function that determines if a value is inside of array.

Example:

Input: '[1,4,6,9,10], 5'

Output: 'false'
\n--------------------------------------\n\n`);

function valCheck(arr, val) {
  for (let i of arr) {
    if (i === val) return true;
    else return false;
  }
}

console.log(valCheck([1,4,6,9,10], 5));
