// PROBLEM 1

// function double (num) {
//     return num * 2;
// }
// console.log(double(99));


// PROBLEM 2

// function smallest (num1, num2) {
//     if ( num1 < num2) {
//         return num1 ;
//     } else {
//         return num2
//     }
// }
// console.log(smallest(2.3, 2.03))


// PROBLEM 3

// let arr1 = [1.0, 2, 3, 4, 5, 5] 
// let arr2 = [6, 5, 4, 3, 2, 1]
// let arr3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// let arr4 = [-4, -59, -348, -34, -4]
// function smallestValueInArr (arrNum){
//     let smallestNumber = arrNum[0] 
//     for( let i = 0; i < arrNum.length; i++){
//         if (arrNum[i]  < smallestNumber){
//             smallestNumber = arrNum[i];
//         }
//         // console.log(i)
//     } 
//     return smallestNumber;
// }
// console.log(smallestValueInArr(arr4));

//problem 4

// function occurences(letter, str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             count +=1
//         }  
//     } 
//     return letter + ":" + count  
// }
// console.log(occurences("l", "hello"));
// console.log(occurences("r", "hello world!"));
// console.log(occurences(" ", "Now with some spaces"));
// console.log(occurences("E", "cApItAlS aRe DiFfErEnT"));

// Problem 5

// let arr  = [1, 2, 3, 4, 5] 
// let arr2 = [1,42,1,541,42,6]
// let arr3 = [-10,5,-15,20]
// let arr4 = [1.5, 2.25, 4.5, -1.5]

// function sum(arr) {
//     let sum1 = 0;
//     for (let i = 0; i < arr.length; i++) {
//     sum1 += arr[i];
// }
//     return sum1/ arr.length
// }
// console.log(sum(arr4))



// PROBLEM 6

// let str1 = "hello"
// let str2 = "aaaaaAAA"
// let str3 = "More words"


// function frequencyMap(str) {
//     let newObj = {};
//     for(let i = 0; i < str.length; i++){
//         if (newObj[str[i]]){
//             newObj[str[i]] +=1
//              } else {
//                 newObj[str[i]] = 1
                
//             }  
//         }
        
//         return newObj
//     }
// console.log(frequencyMap(str1))



// PROBLEM 7

// function fizzBuzz(num) {
//         for (let i = 0; i <= num; i++){
//             if( i % 3 ===0 && i % 5 ===0){
//             console.log("FizzBuzz")
//             }
//             else if ( i % 3 === 0) {
//                 console.log("Fizz")
//             } else if ( i % 5 === 0) {
//                 console.log("Buzz")
//             } else {
//                 console.log(i)
//             } 
//         } 
//     }

// console.log(fizzBuzz(27))





// PROBLEM 8

// let arr1 = [1.0,2,3,4,5]
// let arr2 = [1,2,3,4,5]
// let arr3 = [1,2,3,4,5]
// let arr4 = [1,42,1,541,42,5]
// let arr5 = [1,42,1,541,42,5]
// function valueIsGreaterThanAverageOfArr(num,arr) {
//      let sum = 0
//      for (i = 0; i < arr.length; i++){

//          sum += arr[i];
//     }
//        let ave = sum / arr.length 
//        if ( num > ave) {
//            console.log("true")
//        } else {
//            console.log("false")
//        }
//     } 
// console.log(valueIsGreaterThanAverageOfArr(105.4,arr5))





// PROBLEM 9

// let arr1 = [1,2,3,4]
// let arr4 = [807,909,-22,424,244,873,-907,-350,-780,576,-177,278,-855,296,-33,-609,-664,-126,-469,-57,-376,-424,-477,-795,-481,-806,545,727,-879,210,-114,-783,-156,45,781,369,35,900,904,-2,168,489,-329,608,-287,40,442,362,-560,236,-583,698,544,-154,478,535,-397,363,470,-49,49,631,-62,-293,-419,-528,753,-809,-48,-888,606,-889,-908,672,-783,-921,-198,-428,701,-30,106,500,-106,199,-793,392,873,330,366,45,840,649,-135,-850,174,-338,901,-753,402,-62,554,-579,863,955,-999,-13,851,760,-523,-968,225,-173,-605,-759,306,657,844,168,-270,883,963,-835,624,570,705,333,-293,283,382,926,839,264,602,-940,160,-369,-770,-792,722,321,88,-176,-911,203,486,-175,-529,187,-668,518,-282,162,-165,-34,544,538,-828,-562,-154,591,345,-241,962,801,-632,-921,-710,588,-642,113,128,-242,56,716,-709,232,-870,241,-612,-583,-199,762,-601,-410,-896,-493,664,531,-613,-285,-951,-589,243,819,-195,911,-701,-368,-85,-316]
//   function smallestt(array){
//    let smallest = array[0];
//    let secSmallest = array[0];
//    for(let i = 0; i <= array.length; i += 1){
//        if(array[i] < smallest){
//            smallest = array[i]
//         }else if (array[i] > smallest && array[i] < secSmallest){
//             secSmallest = array[i]
//        }
//    }
//    return secSmallest
// }
// console.log(smallestt(arr4));






//  ES6 SYNTAX 

// PROBLEM 1

// const double = (num) => {
//     return num * 2;
// }
// console.log(double(99));


// PROBLEM 2

// const smallest = (num1, num2) => {
//     if ( num1 < num2) {
//         return num1 ;
//     } else {
//         return num2
//     }
// }
// console.log(smallest(2.3, 2.03))


// PROBLEM 3

// let arr1 = [1.0, 2, 3, 4, 5, 5] 
// let arr2 = [6, 5, 4, 3, 2, 1]
// let arr3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// let arr4 = [-4, -59, -348, -34, -4]
// const smallestValueInArr = (arrNum) => {
//     let smallestNumber = arrNum[0] 
//     for( let i = 0; i < arrNum.length; i++){
//         if (arrNum[i]  < smallestNumber){
//             smallestNumber = arrNum[i];
//         }
//         // console.log(i)
//     } 
//     return smallestNumber;
// }
// console.log(smallestValueInArr(arr4));


//problem 4

// const occurences = (letter, str) => {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             count +=1
//         }  
//     } 
//     return letter + ":" + count  
// }
// console.log(occurences("l", "hello"));
// console.log(occurences("r", "hello world!"));
// console.log(occurences(" ", "Now with some spaces"));
// console.log(occurences("E", "cApItAlS aRe DiFfErEnT"));

// Problem 5

// let arr  = [1, 2, 3, 4, 5] 
// let arr2 = [1,42,1,541,42,6]
// let arr3 = [-10,5,-15,20]
// let arr4 = [1.5, 2.25, 4.5, -1.5]

// const sum= (arr)=> {
//     let sum1 = 0;
//     for (let i = 0; i < arr.length; i++) {
//     sum1 += arr[i];
// }
//     return sum1/ arr.length
// }
// console.log(sum(arr4))

// PROBLEM 6

// let str1 = "hello"
// let str2 = "aaaaaAAA"
// let str3 = "More words"


// const frequencyMap = (str) => {
//     let newObj = {};
//     for(let i = 0; i < str.length; i++){
//         if (newObj[str[i]]){
//             newObj[str[i]] +=1
//              } else {
//                 newObj[str[i]] = 1
                
//             }  
//         }
        
//         return newObj
//     }
// console.log(frequencyMap(str1))



// PROBLEM 7

// const fizzBuzz = (num)=> {
//         for (let i = 0; i <= num; i++){
//             if( i % 3 ===0 && i % 5 ===0){
//             console.log("FizzBuzz")
//             }
//             else if ( i % 3 === 0) {
//                 console.log("Fizz")
//             } else if ( i % 5 === 0) {
//                 console.log("Buzz")
//             } else {
//                 console.log(i)
//             } 
//         } 
//     }

// console.log(fizzBuzz(27))


// PROBLEM 8

// let arr1 = [1.0,2,3,4,5]
// let arr2 = [1,2,3,4,5]
// let arr3 = [1,2,3,4,5]
// let arr4 = [1,42,1,541,42,5]
// let arr5 = [1,42,1,541,42,5]
// const valueIsGreaterThanAverageOfArr = (num,arr) => {
//      let sum = 0
//      for (i = 0; i < arr.length; i++){

//          sum += arr[i];
//     }
//        let ave = sum / arr.length 
//        if ( num > ave) {
//            console.log("true")
//        } else {
//            console.log("false")
//        }
//     } 
// console.log(valueIsGreaterThanAverageOfArr(105.4,arr5))

//PROBLEM 9

let arr1 = [1,2,3,4]
let arr4 = [807,909,-22,424,244,873,-907,-350,-780,576,-177,278,-855,296,-33,-609,-664,-126,-469,-57,-376,-424,-477,-795,-481,-806,545,727,-879,210,-114,-783,-156,45,781,369,35,900,904,-2,168,489,-329,608,-287,40,442,362,-560,236,-583,698,544,-154,478,535,-397,363,470,-49,49,631,-62,-293,-419,-528,753,-809,-48,-888,606,-889,-908,672,-783,-921,-198,-428,701,-30,106,500,-106,199,-793,392,873,330,366,45,840,649,-135,-850,174,-338,901,-753,402,-62,554,-579,863,955,-999,-13,851,760,-523,-968,225,-173,-605,-759,306,657,844,168,-270,883,963,-835,624,570,705,333,-293,283,382,926,839,264,602,-940,160,-369,-770,-792,722,321,88,-176,-911,203,486,-175,-529,187,-668,518,-282,162,-165,-34,544,538,-828,-562,-154,591,345,-241,962,801,-632,-921,-710,588,-642,113,128,-242,56,716,-709,232,-870,241,-612,-583,-199,762,-601,-410,-896,-493,664,531,-613,-285,-951,-589,243,819,-195,911,-701,-368,-85,-316]
  const smallestt = (array) => {
   let smallest = array[0];
   let secSmallest = array[0];
   for(let i = 0; i <= array.length; i += 1){
       if(array[i] < smallest){
           smallest = array[i]
        }else if (array[i] > smallest && array[i] < secSmallest){
            secSmallest = array[i]
       }
   }
   return secSmallest
}
console.log(smallestt(arr4));








