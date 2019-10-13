//Problem 1
const double = num => {
    return num*2
}
console.log(double(2))

//Problem 2
const smallest = (num1, num2) => {
    if(num1 < num2) {
        return num1
    } else if(num1 > num2) {
        return num2
    }
}
console.log(smallest(3, 2))

//Problem 3
const smallestValueInArr = arr => {
    let smallestValue = arr[0]
    for(let i =0; i < arr.length; i++) {
        if(smallestValue > arr[i]){
            smallestValue = arr[i]
        }
    }
    return smallestValue
}
console.log(smallestValueInArr([-4,-59,-348,-34,-4]))

//Problem 4
const occurrences = (inputOne,inputTwo) => {
    let freq=0
    for (let i=0;i < inputTwo.length; i++){
        if (inputOne === inputTwo[i]){
        freq++
        }
    }
    return freq
}
console.log(occurrences("l","hello"))

//Problem 5
const averageArr = (arr) => {
    let sum = 0
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length
}
console.log(averageArr([1,42,1,541,42,6]))

//Problem 6
const frequencyMap = string => {
    
}