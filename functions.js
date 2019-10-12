// ## Question One
// Write a function named double that takes in a number and returns that number times two

// function double(a) {
//     return a * 2;
// }
// console.log(double(2))

// ## Question Two
// Write a function named smallest that takes in two numbers and returns the smaller number

// function smallest(num1, num2) {
//     if (num1 < num2) {
//         return num1 
//     }
//     else {
//         return num2
//     }
// }
// console.log(smallest(3, 4))

// ## Question Three
// Write a function named smallestValueInArr that takes in an array of numbers and returns the smallest number

arr1 = [1.0,2,3,4,5,5]
arr2 = [6,5,4,3,2,1]
arr3 = [-4,-59,-348,-34,-4]

function smallestValueInArr(arr) {
    let smallestNum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (smallestNum > arr[i]) {
            smallestNum = arr[i];
        }
    }
    return smallestNum;
}
console.log(smallestValueInArr(arr3));