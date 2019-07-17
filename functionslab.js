console.log('======question 1=======');

function largTwoNum(num1, num2) {
  if (num1 > num2){
    return num1 + 'larger';
  } else {
    return num2
  }

}

let result1 = largTwoNum(3, 2);
console.log(result1);

console.log('=========question 2===========');
function getDogAge(num3, num4) {
  return num3 + num3;
}

const getDogAgeES6 = (num3) => {
  return num3 * 7;
};

let result2 = getDogAge(4);
console.log(result2);
console.log('========question3=========');

let array2 = [13, 2, 4, -2];
let result3 = 0;
for (let i in array2) {
  result3 += array2[i];
}

console.log(result3);
console.log('=========question4===========');

let sumReturn = (num4, num5) => {
  return num4 + num5;
};

let result4 = sumReturn(14, 5);
console.log(result4);
console.log('========question5============');

let numGrade = ['100', '99-90', '89-80', '79-70', '69-60'];
let lettGrade = ['A', 'B', 'C', 'D', 'F'];
for (let j = 0; j < numGrade.length; j++) {
  console.log(lettGrade[j] + ',' + numGrade[j]);
}

const grCon = (grades) => {
  if (grades === 100) {
    return 'A+' ;
  } else if (grades < 89) {
    return ('B');
  } else if (grades < 79) {
        return ('C');
      } else if (grades < 69) {
        return ('D');
      } else if (grades < 59) {
        return ('F');
      }
    }
    let result5 = grCon(88)
console.log(result5);
console.log('==========question 6==========');
const repeatLog = '+';
const messageLog = [];
for (let t = 1; t <= 10; t++) {
  messageLog.push(repeatLog);
}

console.log(messageLog.join('+'));
console.log('==========question7==========');
let arrx = [];
const first = (num7) => {
  for (let r = 1; r <= num7; r++) {
  arrx.push(r);
}

return arrx;
}


console.log(first(3));
console.log('============question8===========');
const lengthNum = (f) => {
   for (let i = 1; i <= f; i++) {
   if(i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
   }
   else if (i % 5 === 0) {
     console.log("Buzz");
   }
   else if (i % 3 === 0) {
     console.log("Fizz")
   } else {
     console.log(i);
   }
   }
   }
let result8 = lengthNum(20);
console.log(result8)

console.log('========question9=========')
const reverse = (num9) => {
return num9.reverse()
}
  let arrz = [1, 2, 3];

let result9 = reverse(arrz);
console.log(result9);


console.log('==========question 10=========');
var mode = function mode(arr) {
    return arr.reduce(function(current, item) {
        var val = current.numMapping[item] = (current.numMapping[item] || 0) + 1;
        if (val > current.greatestFreq) {
            current.greatestFreq = val;
            current.mode = item;
        }
        return current;
    }, {mode: null, greatestFreq: -Infinity, numMapping: {}}).mode;
};

console.log(mode([2,1,4,2,5,2,3,23,3,3,2,2,2,24,56,2,2,5,46,2]));
console.log('==========question 10=========');
const mode10 = (array10) => {
  const map10 = new Map10();
  let maxFreq = 0;
  let mode10;

  for (const item10 of array10) {
    let freq10 = map10.has(item10) ? map10.get(item10) : 0;
    freq10++;

    if(freq10 > maxFreq) {
      maxFreq = freq10;
      mode10 = item10;
    }

    map10.set(item10, freq10);
  }

  return mode10;
};

const testArray = [2,1,4,2,5,2,3,23,3,3,2,2,2,24,56,2,2,5,46,2];
console.log(`Mode of [${testArray}] is ${mode(testArray)}.`);

console.log('=========question 11===========');
let arr11 = [1,2,5,64,23,22,91,3]
  const even = (arr11) => {
    let sum11 = 0
    for(let i = 0; i < arr11.length; i++){
        if(arr11[i]%2 === 0){
         sum11 = sum11 + arr11[i];
        }
        }

        return sum11;
      };

     let result11 = even(arr11)
     console.log(result11);
     console.log('==========question12===========');

     let = `{1: "uno", 5: "cinco"}`;

     console.log('============question13============');
     let arry13 = [1, 4, 6, 9, 10];
     const total= (arry13) => {
       for (let i= 0; i<arry13.length; i++); {
         if(arry13.includes(i)) {
           return true
         } else {
           return false;
         }
       }
     }
     let total13 = arry13.includes(5);

     console.log(total13);
