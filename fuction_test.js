//Write a function that takes in an array of nums and returns a new array
// w. only the even numbers
// let array = [4,5,9,10,11]

// function onlyEven(num){
//     let newEvenNum = []
//     for(let i = 0; i < array.length; i += 1){
//         if(num[i] % 2 === 0){
//             newEvenNum.push(array[i])
//         }
//     }
//     return newEvenNum
// }
// console.log(onlyEven(array))


//once a function returns, its over

// function evenOrOdda(num){
//     if (num % 2 === 1 ){
//         return "number is odd";
//     } else {
//         return " number is even";
//     } 
// }
// console.log(evenOrOdda('cat'))


// function sum(arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i ++){
//         sum += arr[i]
        
//     }
//     return sum;
// }
// console.log(sum([1,2,3]))

// function sayHello() {
//     return "Hello"
// }

// var sayHello = function (name) {
//     return "Hello " + name
// }
// console.log(sayHello("henry"))

const sayHello = (name) => {
    return "Hello " + name;
}
console.log(sayHello("henry"))

const sumOfTwo = (num) => {
    return num + num;
}
console.log(sumOfTwo(5,5))

const doubleSquared = (num) => {
    let doubled = num * 2;
    return doubled * doubled;
}
console.log(doubleSquared(6))
console.log (((6*(6*6)*6)))