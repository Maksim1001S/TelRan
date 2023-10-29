const isPrimeNumber = (number) => {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }

    }
    return true;
}


var startTime = performance.now();

for (let i = 0; i <= 5000000; i++) {
    isPrimeNumber(i)

}

// Окончание замера времени выполнения
var endTime = performance.now();

// Вывод времени выполнения в консоль
console.log('Время выполнения: ' + (endTime - startTime) + ' мс');








const weights = [3, 4, 5, 8, 9];
const prices = [1, 6, 4, 7, 6];

const maxWeight = 13;
const maxPrice = 0;
const maxState = 0;

let count = 1 << weights.length;

for (let state = 1; state <= count; state++) {
    const price = statePrice(state, prices);
    const weight = stateWeight(state, weights);
    if (weight <= maxWeight && price > maxPrice) {
        maxPrice = price;
        maxState = state;
    }

}


console.log("Optimum set is : ");


const stateWeight = (state, weights) => {
    const weight = 0;
    for (let i = 0; i < weights.length; i++) {
        if (((1 << i) & state) !== 0) {
            weight += weights[i];
        }
    }
    return weight;
}

const statePrice = (state, prices) => {
    const price = 0;
    for (let i = 0; i < prices.length; i++) {
        if (((1 << i) & state) !== 0) {
            price += prices[i];
        }
    }
    return price;
}
