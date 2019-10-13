//Problem One

// function double(num) {
//     return num * 2
// }
// console.log(double(8));

//ES6
// const dbl = (num) => { 
//     return (num * num)
// }
// console.log(dbl(8))
//Problem Two

// function smallest(num1, num2) {
//  if(num1 < num2) {
//      return num1
//  } else {
//      return num2
//  }
// }
// console.log(smallest(11, 6))
   
const smallest = (num1, num2) => {
 if(num1 < num2) {
     return num1
 } else {
     return num2;
 }
}
console.log(smallest(20, -10));


//Problem Three

// function smallestValueInArr(arr) {
//     let smallestNum = Infinity
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] < smallestNum) {
//          smallestNum = arr[i]//this is how you save a value to be compared to the newer value as it loops through the array
            
//         }
//     }

// return smallestNum
// } 

// console.log(smallestValueInArr([-4,-59,-348,-34,-4]));

//ES6

const sVIA = (arr) => {
    let small = Infinity
    
    for(let i = 0; i < arr.length; i++) {
    if(arr[i] < small){
       small = arr[i];
    }
    }
    return small;
    }
    console.log(sVIA([10,12,9,15,20]));

//Problem 4

// function occurrences(character, string) {
//     let num = 0;
//     for(let i = 0; i < string.length; i++) {
//         if(character === string[i]) {
//             num++
//         }
//     }
//     return num
// }


// console.log(occurrences("r", "okrrrrrr"))

//ES6

let occurrences = (character, string) => {
    let characterNum = 0;
    for(let i = 0; i < string.length; i++) {
        if(character === string[i]) {
            characterNum++
        }
    }
    return characterNum
}

console.log(occurrences("i", "Mississippi"))



// let arr2 = [1,2,3,4,5]
// let sum2 = 0
// for(let i = 0; i < arr2.length; i++) {
//     sum2 = arr2[i] += arr2[i] 
//     console.log(sum2)
// }


// function average(arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         sum = arr[i] += arr[i] 
//         sum/arr.length
//     }
//     return sum
// }
// console.log(average([1,2,3,4,5]))


// function evenNums(arr) {
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] % 2 === 0){
//             newArr.push(arr[i]);//this how you store info to get return for later
//     }
// }
// return newArr
// }
// console.log(evenNums([9,7,10,7,8,13,12]))


// // function sayHello() {
// //     return "hello"
// // }

// //THIS IS HOW WE WOULD USE ES5
// var sayHello = function(name) {//you can also wrte a function as a varible to equal the function
//     return "Hello " + name
// }

// console.log(sayHello("Danielle")) //a varible takes on the value of whatever it's assigned to

// //
// const sayHello2 = (name) => {
//     return "hello " + name//Explict return
// }

// console.log(sayHello2("Danielle"))


// const nums2 = (num1, num2) => {
//     let newSum = 0;
//     newSum = num1 + num2;
//     return newSum
// }
// console.log(nums2(45,3))

