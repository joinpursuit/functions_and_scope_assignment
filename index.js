//Question 1

const double = (num) => {
    return num * 2
}

console.log(double(4))

//Question 2

const smallest = (num1, num2) => {
    if (num1 < num2) {
        return num1
    } else if (num1 > num2) {
        return num2
    } else {
        return num1
    }
}
console.log(smallest(2.3 , 2.03))