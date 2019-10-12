// question 1
function double(num) {
    return num * 2;
}
console.log(double(4));

//question 2
function smallest(num1,num2) {
    if (num1 > num2){
        return num2
    }else {
        return num1
    }
}
console.log(smallest(0,3));

//question 3
function smallestValueInArr(arr) {
    let num  = arr[0] 
    for(let i = 0; i < arr.lengh; i++){
        if(arr[i] < num){
            num = arr[i]
        }
    
    }
    return num;
}
console.log(smallestValueInArr([1.0,2,3,4,5,5]));
//question 4
// let mystr = "Hello World"
function occurrences (char,str){
    let count = 0 
   for (let i = 0; i < str.length; i++){
    if(char === str[i]){
        count++
   }
}
return count;
}
console.log(occurrences("l","Hello World")); //3

//question 5

function avg(arr) {
    sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length
}
console.log(avg([1,2,3,4,5])) //3



//question 6 
function frequencyMap(str) {
    let map = {}
    for(let i = 0; i < str.lengh; i++){
        map += str[i]

    }
    return str
}
console.log(frequencyMap("Hello"));

//question 7


function theN(n){
    for (let i = 0; i <= n; i++) 
        if (i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0){
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
    console.log(theN(20))

//question 8
function valueIsGreaterThanAverageOfArr(arr) {
        sum = 0
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
        }
    if ((sum / arr.length) > (sum * 2)){
        console.log("the average is bigger")
    } else {
        console.log("the double is bigger")
    }
}
    valueIsGreaterThanAverageOfArr([1,2,3,4,5])