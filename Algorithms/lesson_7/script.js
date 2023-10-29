const multiply = (a, b) => {
    if (b == 0) {
        return 0;
    }
    return multiply(a, b - 1) + a;
}
console.log(multiply(2, 3));

// simple method sort
const mergeSort = (array) => {
    const temp = []; // служит для обмена ссылками между const currentSrc и const currentDest
    const currentSrc = array; // исходный для текущей итерации
    const currentDest = new int[array.length]; // для результата слияния 
    const size = 1;

    while (size < array.length) {
        for (let i = 0; i < array.length; i += 2 * size) {
            merge(currentSrc, i, currentSrc, i + size, currentDest, i, size);
            temp = currentSrc;
            currentSrc = currentDest;
            currentDest = temp;
            size = size * 2;
        }
    }
    return currentSrc;
}

// merge method
const merge = (src1, src1Start, src2, src2Start, dest, destStart, size) => {
    const index1 = src1Start;
    const index2 = src2Start;
}