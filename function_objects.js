// # Function Exercises

// ## Question One

// Write a function named double that takes in a number and returns that number times two

// function double(num){
//     return num * 2;
// }
// console.log(double(4))


// ```
// Sample inputs and expected outputs:

// input: 3, expectedOutput: 6
// input: 0, expectedOutput: 0
// input: -2, expectedOutput: -4
// input: 99, expectedOutput: 198
// ```

// ## Question Two

// Write a function named smallest that takes in two numbers and returns the smaller number

// function smallest(num1, num2){
//     if(num1 > num2){
//         return num2
//     }else{
//         return num1
//     }
// }
// console.log(smallest(10, 15))

// ```
// Sample inputs and expected outputs:

// inputOne: 8, inputTwo: 3, expectedOutput: 3.0
// inputOne: 0, inputTwo: 0, expectedOutput: 0),
// inputOne: -5, inputTwo: -3, expectedOutput: -5
// inputOne: 2.3, inputTwo: 2.03, expectedOutput: 2.03
// ```

// ## Question Three

// Write a function named smallestValueInArr that takes in an array of numbers and returns the smallest number

// let arr = [1, 2, 3, 0, 5, 6]
// function smallestValueInArr (array){
//     let smallest = array[0]
//     for(let i = 0; i <= array.length; i += 1){
//         if(array[i] < smallest){
//             smallest = array[i]
//         }
//     }return smallest
// }
// console.log(smallestValueInArr(arr))

// ```
// Sample inputs and expected outputs:

// input: [1.0,2,3,4,5,5], expectedOutput: 1
// input: [6,5,4,3,2,1], expectedOutput: 1
// input: [0,0,0,0,0,0,0,0,0,0], expectedOutput: 0
// input: [-4,-59,-348,-34,-4], expectedOutput: -348
// ```

// ## Question Four

// Write a function named occurrences that counts how many characters in a string match a specific character.

// ```
// Sample inputs and expected outputs:

// inputOne: "l", inputTwo: "hello", expectedOutput: 2
// inputOne: "r", inputTwo: "hello world!", expectedOutput: 1
// inputOne: " ", inputTwo: "Now with some spaces", expectedOutput: 3
// inputOne: "E", inputTwo: "cApItAlS aRe DiFfErEnT", expectedOutput: 2
// ```
function occurences(letter, string){
    let count = 0;
    for (let i = 0; i < string.length; i++){
        if (string[i] === letter){
            count++;
        }
    }
    return count;
}
console.log(occurences("l", "hello"));
console.log(occurences(" ","Now with some spaces"));
console.log(occurences("E","cApItAlS aRe DiFfErEnT"));

// ## Question Five

// Write a function named average that returns the average of an array of numbers

// ```
// Sample inputs and expected outputs:

// input: [1,2,3,4,5], expectedOutput: 3
// input: [1,42,1,541,42,6], expectedOutput: 105.5
// input: [-10,5,-15,20], expectedOutput: 0
// input: [1.5, 2.25, 4.5, -1.5], expectedOutput: 1.6875
// ```
let arr2 = [ 40 , 22, 1, 2, 3 ];
function average (array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum / array.length;
}
console.log(average(arr2));

// ## Question Six

// Write a function named frequencyMap that takes a string as input and returns an object that maps each character its number of occurrences


function frequencyMap(string){
    let obj = { }
    for(let i = 0; i < string.length; i++){
        if (!obj.hasOwnProperty(string[i])){
            obj[string[i]] = 1;
        } else {
            obj[string[i]]++;
        }
    }
return obj;
}
console.log(frequencyMap("supercalifragilisticexpialidocious"))


// ```
// Sample inputs and expected outputs:


// input: "hello", expectedOutput: {"h": 1, "e": 1, "l": 2, "o": 1}
// input: "aaaaaAAA", expectedOutput: {"a": 5, "A":3}
// input: "More words", expectedOutput: {"M": 1, "o": 2, "r": 2, "e": 1, " ": 1, "w": 1, "d": 1, "s": 1}
// ```

// ## Question Seven

// Write a function called fizzBuzz that logs the numbers from 1 to n as with the following replacements:

// - If the number if a multiple of 3, replace it with "Fizz"
// - If the number is a multiple of 5, replace it with "Buzz"
// - If the number is a multiple of 3 AND 5, replace it with "FizzBuzz"
function fizzBuzz(n){
    for(let i = 1; i <= n; i += 1){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz');
        }else if( i % 3 === 0){
            console.log('Fizz');
        }else if(i % 5 === 0){
            console.log('Buzz');
        }else{
            console.log(i)
        }
    }
}
fizzBuzz(30);

// ```
// input: 27
// output:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// ```

// ## Question Eight

// Write a function named valueIsGreaterThanAverageOfArr that takes in an array of numbers and a number and returns whether the Double is greater than the average


// ```
// Sample inputs and expected outputs

// inputOne: 4.0, inputTwo: [1.0,2,3,4,5], expectedOutput: true
// inputOne: 2, inputTwo: [1,2,3,4,5], expectedOutput: false
// inputOne: 3, inputTwo: [1,2,3,4,5], expectedOutput: false
// inputOne: 100.8, inputTwo: [1,42,1,541,42,5], expectedOutput: false
// inputOne: 105.4, inputTwo: [1,42,1,541,42,5], expectedOutput: true
// ```
let array8 = [1.0,2,3,4,5];
let arr8 = [1,2,3,4,5];

function valueIsGreaterThanAverageOfArr(num, array){
    let sumArr = 0;
    for(let i = 0; i < array.length; i++){
        sumArr += array[i];
    }
    if(num > (sumArr/array.length)){
        return true;
    } else{
        return false;
    }
}
console.log(valueIsGreaterThanAverageOfArr(4, array8));
console.log(valueIsGreaterThanAverageOfArr(2, arr8));

// ## Question Nine

// Write a function that finds the second smallest Int an an array of Ints

// ```
// Sample inputs and expected outputs

// input: [1,2,3,4], expectedOutput: 2
// input: [2,1,3,4], expectedOutput: 2
// input: [40,253,680,750,64,126,4,471,706,757,899,856,617,169,697,755,36,426,973,107,299,360,201,313,801,61,241,911,992,354,108,341,170,949,333,937,933,512,568,379,995,29,637,417,793,763,47,387,166,135,259,400,406,141,271,194,263,171,992,508,953,176,990,544,491,488,691,406,911,751,519,732,907,403,328,110,348,669,112,719,852,671,447,619,928,847,630,711,371,143,277,405,210,266,241,379,265,213,331,780], expectedOutput: 29
// input: [910,158,197,874,58,835,765,182,562,942,399,35,269,704,634,518,948,744,786,181,801,952,175,97,222,705,121,928,126,35,346,174,214,906,906,886,245,34,239,376,34,902,355,528,844,265,796,27,721,905,877,567,911,223,472,132,426,359,617,402,89,144,976,774,961,386,380,75,504,854,862,101,271,914,673,288,844,633,40,477,346,479,727,62,604,523,852,789,234,374,156,855,819,422,741,543,994,587,37,100], expectedOutput: 34
// input: [807,909,-22,424,244,873,-907,-350,-780,576,-177,278,-855,296,-33,-609,-664,-126,-469,-57,-376,-424,-477,-795,-481,-806,545,727,-879,210,-114,-783,-156,45,781,369,35,900,904,-2,168,489,-329,608,-287,40,442,362,-560,236,-583,698,544,-154,478,535,-397,363,470,-49,49,631,-62,-293,-419,-528,753,-809,-48,-888,606,-889,-908,672,-783,-921,-198,-428,701,-30,106,500,-106,199,-793,392,873,330,366,45,840,649,-135,-850,174,-338,901,-753,402,-62,554,-579,863,955,-999,-13,851,760,-523,-968,225,-173,-605,-759,306,657,844,168,-270,883,963,-835,624,570,705,333,-293,283,382,926,839,264,602,-940,160,-369,-770,-792,722,321,88,-176,-911,203,486,-175,-529,187,-668,518,-282,162,-165,-34,544,538,-828,-562,-154,591,345,-241,962,801,-632,-921,-710,588,-642,113,128,-242,56,716,-709,232,-870,241,-612,-583,-199,762,-601,-410,-896,-493,664,531,-613,-285,-951,-589,243,819,-195,911,-701,-368,-85,-316], expectedOutput: -968
// ```
let arr9 = [1,2,3,4]
let array9 = [807,909,-22,424,244,873,-907,-350,-780,576,-177,278,-855,296,-33,-609,-664,-126,-469,-57,-376,-424,-477,-795,-481,-806,545,727,-879,210,-114,-783,-156,45,781,369,35,900,904,-2,168,489,-329,608,-287,40,442,362,-560,236,-583,698,544,-154,478,535,-397,363,470,-49,49,631,-62,-293,-419,-528,753,-809,-48,-888,606,-889,-908,672,-783,-921,-198,-428,701,-30,106,500,-106,199,-793,392,873,330,366,45,840,649,-135,-850,174,-338,901,-753,402,-62,554,-579,863,955,-999,-13,851,760,-523,-968,225,-173,-605,-759,306,657,844,168,-270,883,963,-835,624,570,705,333,-293,283,382,926,839,264,602,-940,160,-369,-770,-792,722,321,88,-176,-911,203,486,-175,-529,187,-668,518,-282,162,-165,-34,544,538,-828,-562,-154,591,345,-241,962,801,-632,-921,-710,588,-642,113,128,-242,56,716,-709,232,-870,241,-612,-583,-199,762,-601,-410,-896,-493,664,531,-613,-285,-951,-589,243,819,-195,911,-701,-368,-85,-316];
function secondSmallest (array){
    let smallest = array[0];
    let secSmallest = array[1];
    for(let i = 0; i < array.length; i++){
        if(smallest < array[i]){
            smallest = array[i];
        }
        if(smallest < secSmallest && secSmallest < array[i]){
            secSmallest = array[i];
        }
    }
    return secSmallest;
}
console.log(secondSmallest(arr9));
console.log(secondSmallest(array9));

// ## Question Ten

// Sign up for an account on [Code Wars](https://www.codewars.com/collections/javascript-basics-2) and solve the questions in this collection.
