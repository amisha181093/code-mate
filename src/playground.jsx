console.clear();

function addTwoNumber(num1, num2) {
    return (num1 + num2);
};

addTwoNumber(1, 4);
addTwoNumber(1, 44);


function substractTwoNumber(num1, num2) {
    return (num1 - num2);
};

substractTwoNumber(18, 30);

function multiplyNumber(num1, num2) {
    return (num1 * num2);
};

substractTwoNumber(50, 40);

function divideNumber(num1, num2) {
    return (num1 / num2);
};

divideNumber(50, 40);


// Find the Largest Number in an Array

function findLargest(arr) {
    let max = arr[0];
    for (let num of arr) {
        if (num > max) max = num;
    }
    return max;
}
console.log(findLargest([3, 7, 2, 9])); // 9




// Find the Smallest Number in an Array

function findSmallest(arr) {
    let min = arr[0];
    for (let num of arr) {
        if (num < min) min = num;
    }
    return min;
}
console.log(findSmallest([3, 7, 2, 9])); // 2
