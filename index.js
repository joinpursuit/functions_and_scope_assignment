//Question 1

const double = (num) => {
    return num * 2
}
console.log(double(4))

//Question 2

const smallest = (num1, num2) => {
    if (num1 < num2) {
        return num1
    } else if (num1 > num2) {
        return num2
    } else {
        return num1
    }
}
console.log(smallest(2.3 , 2.03))

//Question 3

let arr = [6,5,4,3,2,1]

const smallestValueInArr = (arr) => {
  return Math.min(...arr)
}
console.log(smallestValueInArr(arr))

//Question 4
// Write a function named occurrences that counts how many characters in a string match a specific character.

// ```
// Sample inputs and expected outputs:

// inputOne: "l", inputTwo: "hello", expectedOutput: 2
// inputOne: "r", inputTwo: "hello world!", expectedOutput: 1
// inputOne: " ", inputTwo: "Now with some spaces", expectedOutput: 3
// inputOne: "E", inputTwo: "cApItAlS aRe DiFfErEnT", expectedOutput: 2
// ```

let char = "E"
let count = 0

const occurrences = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i].includes(char)) 
    count ++
  }
    return count
}
console.log(occurrences("cApItAlS aRe DiFfErEnT"))
