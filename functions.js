// ## Question One
// Write a function named double that takes in a number and returns that number times two

// function double(a) {
//     return a * 2;
// }
// console.log(double(2))

// ## Question Two
// Write a function named smallest that takes in two numbers and returns the smaller number

function smallest(num1, num2) {
    if (num1 < num2) {
        return num1 
    }
    else {
        return num2
    }
}
console.log(smallest(3, 4))