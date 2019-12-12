// ## Question 1

// Write a function that returns the largest of two numbers. If they are equal, return the second one.

// Example:

// Input: `12, 4`

// Output: `12`

function largerNumber(num1, num2) {
	if(num1 > num2){
		return num1;
	}
	return num2;
}

console.log(largerNumber(9, 10));
console.log(largerNumber(20, 15));

// ## Question 2

// Write a function named getDogAge that takes one argument: a dog's age in human years. The function returns the dog's age in dog years. The conversion rate is 1 human year to 7 dog years.

// Example:

// Input: `4`

// Output: `28`

function getDogAge(age){
	return age * 7;
}

console.log(getDogAge(7));
console.log(getDogAge(25));

// ## Question 3

// Write a function `arraySum` that takes in an array and returns the sum of all the elements.

// Example:

// Input: `[13,2,4,-2]`

// Output: `17`

function arraySum(arr){
	let total = 0;
	for(let i = 0; i < arr.length; i++){
		total += arr[i];
	}

	return total;
}

console.log(arraySum([13,2,4,-2]));

// ## Question 4

// Write a function that takes in any two numbers and return their sum.

// Example:

// Input: `14, 5`

// Output: `19`

const adder = (num1, num2) => (num1 + num2);

console.log(adder(14, 5));

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

function whatsYourGrade(number) {
	if(number < 65){
		return 'F';
	}
	else if(number < 70){
		return 'D';
	}
	else if(number < 80){
		return 'C';
	}
	else if(number < 90){
		return 'B';
	}
	else if(number < 100){
		return 'A';
	}
	else {
		return 'A+'
	}
}

console.log(whatsYourGrade(88));

// ## Question 6

// Implement a function named `repeatLog` that takes a string and a number as parameters. The function should log `message` `count` number of times.

// Example:

// Input: `"+", 10`

// Output: `++++++++++`

function repeatLog(message, count){
	let string = '';
	for(let i =0; i < count; i++){
		string += message;
	}	

	return string;
}

console.log(repeatLog('+', 20));

// ## Question 7

// Write a function named `first` that takes a number and returns an array with all the numbers from 1 to n


// Example:

// Input: `first(3)`

// Output: `[1, 2, 3]`

function first(num){
	let arr = [];
	for(let i = 1; i < num + 1; i++){
		arr.push(i);
	}

	return arr;
}

console.log(first(25));


// ## Question 8

// Write a function that logs the numbers from 1 to x, except:

// If the number if a multiple of 3, log `"Fizz"` instead of the number
// If the number is a multiple of 5, log `"Buzz"` instead of the number
// If the number is a multiple of 3 AND 5, log `"FizzBuzz"` instead of the number
// Your function should take in one parameter: x (the number to count up to)


function fizzBuzz(num){
	let arr = [];
	for(let i = 1; i < num + 1; i++){
		if(i  % 15 === 0){
			arr.push('fizzbuzz');
		}
		else if(i % 3 === 0){
			arr.push('fizz');
		}
		else if(i % 5 === 0){
			arr.push('buzz');
		}
		else{
			arr.push(i);
		}
	}
	return arr;
}

console.log(fizzBuzz(50));


// ## Question 9

// Write a function named `reverse` that takes an array as a parameter. The function should return an array in reverse order.


// Example:

// Input: `reverse([1, 2, 3])`

// Output: `[3, 2, 1]`

function reverse(arr){
	let temp = [];

	for(let i = arr.length - 1; i > -1; i--){
		temp.push(arr.pop());
	}

	return temp;
}

console.log(reverse([1, 2, 3,4,5,6,7,8,9,0,]));

// ## Question 10

// Write a function that prints out the most frequently occurring element in an array.

// Example:

// Input: `[2,1,4,2,5,2,3,23,3,3,2,2,2,24,56,2,2,5,46,2]`

// Output: `2`

function mostFrequent(arr){
	let tempObject = {};

	for(let i = 0; i < arr.length; i++){
		if(arr[i] in tempObject){
			tempObject[arr[i]] += 1;
		}
		else{
			tempObject[arr[i]] = 1;
		}
	}
	
	let most = -19999;

	console.log(tempObject);
	for (key in tempObject) {
		if(tempObject[key] > most){
			most = tempObject[key];
		}
	}

	return most;
}

console.log(mostFrequent([2,1,4,2,5,2,3,23,3,3,2,2,2,24,56,2,2,5,46,2]));


// ## Question 11

// Write a function that sums all the even numbers in an array.

// Example:

// Input: `[1,2,5,64,23,22,91,3]`

// Output: `88`

function sumEven(arr){
	let total = 0;
	for(let i = 0; i < arr.length; i++){
		if(arr[i] % 2 === 0){
			total += arr[i];
		}
	}

	return total;
}

console.log(sumEven([1,2,5,64,23,22,91,3]));


// ## Question 12

// Write a function that flips an object.  All of the keys are now values and all of the values are now keys.

// Example:

// Input: `{1: "uno", 5: "cinco"}`

// Output: `{"uno": 1, "cinco": 5}`

function flip(object){
	let newObject = {}
	for(let key in object){
		newObject[object[key]] = key;
	}

	return newObject;
}

console.log(flip({1: "uno", 5: "cinco"}));

// ## Question 13

// Write a function that determines if a value is inside of array.

// Example:

// Input: `[1,4,6,9,10], 5`

// Output: `false`


function inArray(arr, num){
	let inArray = false;
	for(let i = 0; i < arr.length; i++){
		if(arr[i] === num){
			inArray = true;
		}
	}

	return inArray;
}

console.log(inArray([1,4,6,9,10], 10));
























