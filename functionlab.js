// question 1
function double(num) {
    return num * 2;
}
console.log(double(4));
//question 2
function smallest(num1,num2) {
    if (num1 > num2){
        return num2
    } else if (num1 == num2) {
        return "they are equal"
    } else {
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
const  frequencyMap =(str) => {
    
    let map = {};
    for(let i = 0; i < str.length; i++){
        let char = str.charAt(i);
        if(map[char]){
            map[char]++;
       }
       else {
           map[char] = 1;
       }
    }
    return map;
}
console.log(frequencyMap("Hello"));
//question 7
console.log("");
function theN(n){
    for (let i = 1; i <= n; i++) { 
        if (i % 3 === 0 && i % 5 === 0){
            console.log ("FizzBuzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0){
            console.log("Buzz")
        } else {
            console.log(i);
        }
    }
}
    theN(20);
//question 8
function valueIsGreaterThanAverageOfArr(arr) {
        sum = 0
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
        }
    if ((sum / arr.length) > (sum * 2)){
        return "the average is bigger"
    } else {
        return "the double is bigger"
    }
}
   console.log(valueIsGreaterThanAverageOfArr([1,2,3,4,5]));
   //question 9;
   const secondSmall = (arr) => {
    let smallest = Infinity
    let secondSmallest = Infinity
       for(let i = 0; i < arr.length; i++){
            if(arr[i] < smallest){
                smallest = arr[i]
            }
            else if(arr[i] < secondSmallest && arr != smallest){
                secondSmallest = arr[i]
            }
        }
        return secondSmallest
    }
   console.log(secondSmall([7,1,5,3,4,5]));
   // Ohidur R.
   // Syn P.