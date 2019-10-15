// ## Question 1

// Write a function that returns the largest of two numbers. If they are equal, return the second one.

// Example:

// Input: `12, 4`

// Output: `12`

function largestNum(num1, num2){
    if(num1 > num2){
        return num1
    } else {
        return num2
    }

}
console.log(largestNum(12,4))

// ## Question 2

// Write a function named getDogAge that takes one argument: a dog's age in human years. The function returns the dog's age in dog years. The conversion rate is 1 human year to 7 dog years.

// Example:

// Input: `4`

// Output: `28`

let a =12
let b = 4

function largestNum(num1, num2){
  if(num1 > num2){
    return num1
  } else if (num1 === num2){
    return num2
  } else {
    return num2
  }
}

console.log(largestNum(a,b));

//question2
let years = 4
function dogAge(num1){
  num1 = num1 *7
  return num1
}
console.log("Dog age is "+ dogAge(years))

//Question3
let arr = [13,2,4,-2];
//console.log(arr[0])

function arrSum(arrNum){
  let sum = 0;
  for(let i=0; i< arrNum.length; i++){
    sum += arrNum[i]
  }
  return sum
}
console.log("This is the sum of the Arr = "+arrSum(arr))

//Question 4
function sum(num1, num2){
  let sum = num1 + num2
  return sum
}
console.log("This is the sum of two number =" + sum(14,5))

//Question 5
function grade(num){
  if(num === 100){
    return "A++"
  }else if(num >=90 ){
  return console.log("A")
  } else if(num >=80){
  return console.log("B")
  } else if(num >= 70){
  return console.log("C")
  } else if(num >= 65){
  return console.log("D")
  } else {
  return  console.log("F")
  }
}
console.log("Your grade is "+ grade(100))

//Question 6
function dups(str,numUsed){
    let stri = str
    for(let i = 1; i < numUsed; i++){
    stri += str
    }
    return stri
  }
  console.log(dups("+",10))
  
  //question 7
  function count(num){
  let arr = [];
    let fnum = num
    for(let i= num; i > 0; i--){
  arr.push(fnum--)
  } 
    return arr
  }
  console.log(count(3))

  //Question 8

  function fuzzBuzz(num){

    for(let i = 1; i <= num; i++){
       
        if(i % 3 === 0 && i % 5 === 0){
           console.log("FuzzBuzz")
        } 
        else if(i % 3 === 0){
            console.log("fuzz")
        }else if(i % 5 === 0){
           console.log( "buzz")
        } else {
            console.log(i) 
        }
    }

  }
  console.log(fuzzBuzz(20))
  
  //Question 9
