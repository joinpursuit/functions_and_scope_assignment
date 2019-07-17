/*Write a function that returns the largest of two numbers. If they are equal, return the second one.

Example:

Input: `12, 4`

Output: `12` */
function largest(x,y){
  if(x > y){
    return x;
  }
  if(y >= x){
    return y;
  }
}
console.log(largest(4,7));

/*
Write a function named getDogAge that takes one argument: a dog's age in human years. The function returns the dog's age in dog years. The conversion rate is 1 human year to 7 dog years.

Example:

Input: `4`

Output: `28` */

function getDogAge(age){
  return age * 7;
}

console.log(getDogAge(4));

/*

Write a function `arraySum` that takes in an array and returns the sum of all the elements.

Example:

Input: `[13,2,4,-2]`

Output: `17` */

function arraySum(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum+=arr[i]
  }
  return sum;
}
console.log(arraySum([4,5,9,3]))

/*Write a function that takes in any two numbers and return their sum.

Example:

Input: `14, 5`

Output: `19`
*/

function sum(x,y){
  return x + y;
}
console.log(sum(14,5));

/*Write a function takes in any number grade and returns a corresponding letter grade.

| Number Grade | Equivalent Letter Grade |
| :--------: | :---------: |
| 100 | A+ |
| 90 - 99 | A |
| 80 - 89 | B |
| 70 - 79 | C |
| 65 - 69 | D |
| Below 65 | F |


Example:

Input: `88`

Output: `"B"` */

function grade(grade){
  if (grade === 100){
    return "A+";
  }
  else if (grade >= 90){
    return "A";
  }
  else if (grade >= 80){
    return "B";
  }
  else if (grade >= 70){
    return "C";
  }
  else if (grade >= 65){
    return "D";
  }
  else{
    return "F";
  }
}

console.log(grade(78));

/*Implement a function named `repeatLog` that takes a string and a number as parameters. The function should log `message` `count` number of times.

Example:

Input: `"+", 10`

Output: `++++++++++` */

function repeatLog(string,number){
  let newString = "";
  for(let i = 0; i < number;i++){
    newString+=string;
  }
  console.log(newString)

}

repeatLog("hello",4);

/*Write a function named `first` that takes a number and returns an array with all the numbers from 1 to n


Example:

Input: `first(3)`

Output: `[1, 2, 3]` */

function first(n){
  let arry = [];
  for(let i = 0; i < n; i++){
    arry[i] = i + 1;
  }
  return arry;
}
console.log(first(33));

/*Write a function that logs the numbers from 1 to x, except:

If the number if a multiple of 3, log `"Fizz"` instead of the number
If the number is a multiple of 5, log `"Buzz"` instead of the number
If the number is a multiple of 3 AND 5, log `"FizzBuzz"` instead of the number
Your function should take in one parameter: x (the number to count up to)*/

function func(x){
  for(let i = 1; i <= x ;i++){
  if(i%3===0 && i%5 === 0){
    console.log(i + "FizzBuzz");
  }
  else if(i%3===0){
    console.log(i +"Fizz");
  }
  else if(i%5 === 0){
    console.log(i +"Buzz");
  }else{
    console.log(i);
  }
}
}

func(40);

/*Write a function named `reverse` that takes an array as a parameter. The function should return an array in reverse order.


Example:

Input: `reverse([1, 2, 3])`

Output: `[3, 2, 1]`*/

function reverse(a){
  let newA = [];

  for(let i = a.length-1; i >= 0 ; i--){
      newA.push(a[i]);
    }

  return newA;
}

console.log(reverse([4,5,6,7]));

/*Write a function that prints out the most frequently element in an array.

Example:

Input: `[2,1,4,2,5,2,3,23,3,3,2,2,2,24,56,2,2,5,46,2]`

Output: `2` */

function most(array){
let obj = {};
for(let n of array){
if(obj[n] === undefined){
 obj[n] = 1;
}
else{
  obj[n]++;
}
}

let max = 0;
let count = 0;

for(let n in obj){
  if(count < obj[n]){
    count = obj[n];
    max = n;
  }
}
console.log(max);
}

most([2,1,4,2,5,2,3,23,3,3,2,2,2,24,56,2,2,5,46,2]);
/*Write a function that sums all the even numbers in an array.

Example:

Input: `[1,2,5,64,23,22,91,3]`

Output: `88`*/

function f(array){
  let sum = 0;
  for(let i = 0; i < array.length;i++){
  if(array[i]%2 === 0){
    sum+= array[i];
  }}
  return sum;
}

console.log(f([1,2,5,64,23,22,91,3]))

/*Write a function that flips a dictionary.  All of the keys are now values and all of the values are now keys.

Example:

Input: `{1: "uno", 5: "cinco"}`

Output: `{"uno": 1, "cinco": 5}`*/
let object = {1:"uno",2:"dos", 3: "tres"};
function flip(dict){
  let result = {}
  for(let item in dict){
    result[dict[item]] = item;
  }
  return result;
}
console.log("Result for dict", flip(object))

/*Write a function that determines if a value is inside of array.

Example:

Input: `[1,4,6,9,10], 5`

Output: `false` */

function check(a,n){
  let boo = false;
  for(let i = 0; i < a.length; i++){
    if(n === a[i]){
      boo = true;
    }
  }
  return boo;
}

console.log(check([1,4,6,9,10], 9))
