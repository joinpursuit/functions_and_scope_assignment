// Question 1:
  // 'bye'

// Question 2:

const largestOfTwo = (n1, n2) => {
  return(n1 > n2 ? n1 : n2);
}
console.log(largestOfTwo(12, 32));

// Question 3:

const getDogAge = (myAge) => {

  let d = myAge * 7;
  console.log('My age, ' + myAge + ', is ' + d + ' in dog years...kinda.');
}
getDogAge(25);

// Question 4:

const pi = Math.PI;

const calcCircumfrence = (r) => {
  const circ = 2 * r * pi;
  return circ;
}

const calcArea = (r) => {
  const area = r * r * pi;
  return area;
}

  const circleProps = (radius) => {
    const theCirc = calcCircumfrence(radius).toFixed(2);
    const theArea = calcArea(radius).toFixed(2);
    return `The circumference of ${radius} is: ${theCirc}. The area is: ${theArea}.`
}

console.log(circleProps(5));

// Question 5:

function celciusToFahrenheit(cel) {
  const fahr = (cel * 9/5 + 32).toFixed(2);

  console.log(cel + 'C is ' + fahr + 'F.');

}

function fahrenheitToCelcius(fahr) {
  const cel = (fahr - 32 * 5/9).toFixed(2);

  console.log(fahr + 'F is ' + cel + 'C.');
}

function convertTemperature(temp, degree) {
  if (degree === 'C') {
    celciusToFahrenheit(temp, degree);
  } else {
    fahrenheitToCelcius(temp, degree);
  }
}

// Question 6:

const square = (num) => {
  answer = num * num;
  return answer;

}

const half = (num) => {
  answer = num / 2;
  return answer;
}

const percentOf = (n, d) => {
  answer = Math.floor(n / d * 100);
  return answer;
}

const areaOfCircle = (radius) => {
  answer = (Math.PI * radius * radius).toFixed(2);
  return answer;
}

const doStuff = (num) => {
  let sqNumHalved = square(num);
  let halfToArea = half(sqNumHalved);
  let areaResult = areaOfCircle(halfToArea);
  let perSquaredAndArea = (sqNumHalved, areaResult);

  return result = `${num} squared equals ${sqNumHalved}.
  Halved, this equals ${halfToArea}. The area of ${halfToArea} is ${areaResult}`;
}

// Question 7:

const arraySum = (arr) => {
  sum = arr.reduce((n1, n2) => n1 + n2, 0);
  return sum;

}
console.log(arraySum([3, 5, 3, 7, 5, 8]));
