let arr = [];

function addNumber(number) {
    if (typeof number !== "number") {
        return "Это не число";
    }

    arr.push(number);

    console.log(`Число ${number} добавлено в массив.`);
}

function calculateAverage() {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    let average = sum / arr.length;

    console.log(average.toFixed(2));
}

addNumber(5)
addNumber(7)
console.log(calculateAverage())
