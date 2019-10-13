

// // 1)
// function double(number){
//     return number * 2
// }
// console.log(double(10))

// //2

// function smallest(num1, num2){
//     let small = 0
//     if (num1 < num2){
//     small = num1
//     } else {
//         (small = num2)
//     }
//     return small
// }
// console.log(smallest(9,8))

// // 3

// let arr1 = [6, 5, 4, 3, 2, 1, -5]
// let smallValue = Infinity
// function smallestValueInArr(arr){
//     for(i = 0; i < arr.length; i++){
//     if( arr[i] < smallValue )
//     smallValue = arr[i]
//     }
//     return smallValue
// }
// console.log(smallestValueInArr(arr1))


// //4
// let word = "Hello"
// function occurences(string){
//     let counter = 0
//     for (i = 0; i < word.length; i++)
//     if(word[i] === string)
//         counter += 1
//      return counter
// }
// console.log(occurences("l"))


// //5 
// let arr = [1, 42, 1, 541, 42, 6]
// function average(arr) {
// let sum = 0
// for (i = 0; i < arr.length; i++)
//     sum += arr[i]
// return sum/arr.length
// }
// console.log(average(arr))

// //6
// let word = "hello"

// function frequencyMap(string){
// let obj = {}
// for(i = 0; i < string.length; i++){
//    obj[string[i]] = 0
//  }
// for( key in obj){
//    for(i =0; i< string.length; i++){
//      if(key === string[i]){
//        obj[string[i]] +=1
//      }
//     }
// }
// return obj
// } 

// console.log(frequencyMap(word))

// let arrNin = [1,2,3,4];
// // let arr = [213,331,780]

// function secondSmallest(arr){
//     let firSmal = Infinity
//     let secSmal = Infinity
//     for( let indNin = 0; indNin < arr.length; indNin ++){
//         if( arr[indNin] < secSmal){
//             secSmal = arr[indNin]
//         } else if ( arr[indNin] < firSmal){
//             firSmal = arr[indNin]
//         }
//     }
//     return secSmal
// }


// console.log(secondSmallest(arrNin))

// arrt = [4,5,9,10,11]

// function even(arr){
//     let newArr = []
//     for( let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0 ){
//             newArr.push(arr[i])
//         }
//     }
// return newArr
// }

// console.log(even(arrt))