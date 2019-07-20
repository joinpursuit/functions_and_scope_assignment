/* ## Question 1

Write a function that returns the largest of two numbers. If they are equal, return the second one.

Example:

Input: `12, 4`

Output: `12`
*/
console.log('#1');

function twoLargestNum(numbers) {
  numbers.sort(function(a,b){
    return b - a;
  });
  return numbers[0] + numbers[1]
}
let numbers = twoLargestNum([10,20,30,40,50])
console.log(numbers);

/*
## Question 2

Write a function named getDogAge that takes one argument: a dog's age in human years. The function returns the dog's age in dog years. The conversion rate is 1 human year to 7 dog years.

Example:

Input: `4`

*/

console.log(" ");
console.log('#2');

function getDogAge (age){
  return age*7;
}
let age = getDogAge(10);
console.log(age);

/*## Question 3

Write a function `arraySum` that takes in an array and returns the sum of all the elements.

Example:

Input: `[13,2,4,-2]`
Output: `17`
*/

console.log(" ");
console.log("#3");

const arraySum = (arr) =>{
  let sums = 0
  for(let i = 0; i <= arr.length-1; i++){
    sums+= arr[i];
   }
   return sums
 }
let result = arraySum([1,2,3,4,5])
 console.log(result);

/*
## Question 4
Write a function that takes in any two numbers and return their sum.

Example:

Input: `14, 5`

Output: `19`
*/
console.log(" ");
console.log("#4");

function add(array){
  let sum = 0
  for(let i = 0; i <= array.length-1;i++){
    sum = array[2]+array[3];
    }
      return sum;
}
let result2 = add([0,1,3,7,11])
console.log(result2);

/*
## Question 5

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

Input: `88`

Output: `"B"`
*/

console.log("");
console.log('#5');

const grade = (letter) => {
   value = 0;
   if(grade >= 100){
    return value = "A+" //console.log("A+");
   }
   else if (letter <= 90 && letter >= 99 ) {
    return value = "A" //console.log('A');

   }
   else if (letter >= 80 && letter <= 89 ) {
     return value = 'B'//console.log('B');
}
  else if (letter >= 70 && letter <= 79 ) {
  return value = 'C'//console.log('C');
}
  else if (letter >= 65 && letter <= 69 ) {
  return value = 'D'//console.log('D');
}
  else{
  return value = 'F'//console.log('F');
}
}
  let grades = grade(88.8);
console.log(grades);


/*
## Question 6

Implement a function named `repeatLog` that takes a string and a number as parameters. The function should log `message` `count` number of times.

Example:

Input: `"+", 10`

Output: `++++++++++`
*/
console.log('');
console.log('#6');
    function repeatLog (str,rep){
      let result = "";
      for(let i = 0; i < rep; i++){
        result += str;
}
  return result;
}
  let log = repeatLog("+",10)
console.log(log);
/*
# Question 7

Write a function named `first` that takes a number and returns an array with all the numbers from 1 to n


Example:

Input: `first(3)`

Output: `[1, 2, 3]`
*/
console.log('');
console.log("#7");
function first (arr){

}

/*
## Question 8

Write a function that logs the numbers from 1 to x, except:

If the number if a multiple of 3, log `"Fizz"` instead of the number
If the number is a multiple of 5, log `"Buzz"` instead of the number
If the number is a multiple of 3 AND 5, log `"FizzBuzz"` instead of the number
Your function should take in one parameter: x (the number to count up to)
*/


const fizzbuzz = () =>{
  for(let i = 0; i < 100; i++){

  }
}

//was not able to fnish lab. this week was heecktic for me. I will submit for now, and will push the additional answers. 
