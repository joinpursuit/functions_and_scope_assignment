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

function getDogAge(num1){
    let dogAge = num1 *7
    return dogAge
}
console.log(getDogAge(4))