

// // // 1)
// // function double(number){
// //     return number * 2
// // }
// // console.log(double(10))

// // const double = number =>{
// // return number * 2
// // }
// // console.log(double(10))

// // //2

// // function smallest(num1, num2){
// //     let small = 0
// //     if (num1 < num2){
// //     small = num1
// //     } else {
// //         (small = num2)
// //     }
// //     return small
// // }
// // console.log(smallest(9,8))

// // const smallest = (num1, num2)=>{
// //     let small = 0
// //     if (num1 < num2){       
// //          return num1

// //     } else {
// //         return num2
// // }
    
// // }
// // console.log(smallest(5,6))

// // // 3

// // let arr1 = [6, 5, 4, 3, 2, 1, -5]
// // let smallValue = Infinity
// // function smallestValueInArr(arr){
// //     for(i = 0; i < arr.length; i++){
// //     if( arr[i] < smallValue )
// //     smallValue = arr[i]
// //     }
// //     return smallValue
// // }
// // console.log(smallestValueInArr(arr1))

// const smallestValueInArr = arr=>{
//     let smallValue = Infinity
//     for(i = 0; i < arr.length; i++){
//         if(arr[i] < smallValue)
//         smallValue = arr[i]

//     }
//     return smallValue
// }
// console.log(smallestValueInArr([4, 3, 2, 1]))


// // //4
// // let word = "Hello"
// // function occurences(string){
// //     let counter = 0
// //     for (i = 0; i < word.length; i++)
// //     if(word[i] === string)
// //         counter += 1
// //      return counter
// // }
// // console.log(occurences("l"))
// const occurences = (word, letter) =>{
//     let counter = 0
//     for (i = 0; i < word.length; i++){
//         if(word[i] === letter)
//         counter += 1
//     }
//     return counter
    
// }
// console.log(occurences("hello", "l"))

// // //5 
// // let arr = [1, 42, 1, 541, 42, 6]
// // function average(arr) {
// // let sum = 0
// // for (i = 0; i < arr.length; i++)
// //     sum += arr[i]
// // return sum/arr.length
// // }
// // console.log(average(arr))

// const average = arr=>{
//     let sum = 0
//     for (i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     return sum/arr.length
// }
// console.log(average([1,2,3,4,5]))
// //6

// // let word = "Hello"
// // let obj = {}
// // for (i = 0; i < word.length; i++){
// //     obj[word[i]] = 0
// // }


// // for (key in obj){
// //     for (i = 0; i< word.length; i++ )
// //     if (key === word[i]){
// //      obj[word[i]] += 1
// // }
// // }
// // console.log(obj)   
// // let obj = {}
// //  let word = "abeced"
// //  for(i = 0; i < word.length; i++){
// //    obj[word[i]] = 0
// //  }
// //  for( key in obj){
// //    for(i =0; i< word.length; i++){
// //      if(key === word[i]){
// //        obj[word[i]] +=1
// //      }
// //    }
// //  }
// //  console.log(obj)

// // let string = " hello there Rafid"
// // let object = {}
// // function frequencyMap(string){
// // for (i = 0; i < string.length; i++){
// //     if(object[string[i]]){
// //     object[string[i]] += 1

// // }  else {
// //     object[string[i]] = 1
// // }
// // }   
// // return object
// // }
// // console.log(frequencyMap(string))

// // const frequencyMap = word=>{
// // const object = {}
// // for (i = 0; i < word.length; i++){
// //    if (object[word[i]]){
// //        object[word[i]] += 1

// //    } else {
// //        object[word[i]] = 1
// //    }
// // }
// //     return object

// // }
// // console.log(frequencyMap("Hello"))

// const fizzBuzz = (num1, num2)=>{
//     for(i = num1; i <= num2; i++){
//         if (i % 3 === 0 && i % 5 === 0){
//             console.log ("fizzBuzz")
//         }else if (i % 3 === 0){
//             console.log("fizz")
//         } else if (i % 5 === 0){
//             console.log("buzz")
//         } else{
//             console.log(i)
//         }
        
//     }
//     return
// }
// console.log(fizzBuzz(1, 100))


const valueIsGreaterThanAverageOfArr = (arr, num)=>{
    let sumOfArr = 0
    for (i = 0; i < arr.length; i++)
        sumOfArr += arr[i]
    if (sumOfArr/arr.length < num*2){
    return true
} else {
    return false
}
}
console.log(valueIsGreaterThanAverageOfArr([100,0,2,3,4,5], 2))