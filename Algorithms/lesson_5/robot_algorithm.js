const getWayNumbers = (n, m) => {
    console.log(`Rec: [n=${n} : m=${m}]`);
    if (n < 1 || m < 1) {
        return 0;
    }

    if (n === 1 && m === 1) {
        return 1;
    }

    return getWayNumbers(n - 1, m) + getWayNumbers(n, m - 1);
}
console.log(getWayNumbers(2, 2));