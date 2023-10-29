//Task 1
let arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
    12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
    24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
    36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
    48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
    72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
    84, 85, 86, 87, 89, 90, 91, 92, 93, 94, 95,
    96, 97, 98, 99, 100
];


const findMissingNum = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + 1 !== arr[i + 1]) {
            return arr[i] + 1
        }

    }
    return false
}

console.log(findMissingNum(arr));
//Task 2



const array = [[1, 4, 7, 11, 15, 16],
[2, 5, 8, 12, 19, 22],
[3, 6, 14, 15, 22, 24],
[10, 13, 15, 17, 24, 27],
[18, 21, 25, 26, 31, 40],
]

const SearchNumber = (matrix, k) => {
    let m = matrix.length;
    let n = matrix[0].length
    let i = 0;
    let j = n - 1;

    while (i < m && j >= 0) {
        if (matrix[i][j] === k) {
            return true;
        }
        if (matrix[i][j] < k) {
            i++;
        } else {
            j--;
        }
    }
    return false;
}
console.log(SearchNumber(array, 20));