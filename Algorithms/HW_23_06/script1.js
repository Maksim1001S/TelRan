function maxSumNonAdjacent(nums) {
    if (nums.length <= 2) {
        return Math.max(...nums);
    }

    let prevMax = nums[0];
    let currMax = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        let temp = currMax;
        currMax = Math.max(currMax, prevMax + nums[i]);
        prevMax = temp;

        // Опциональная оптимизация: если текущая сумма уже больше предыдущей максимальной суммы
        // и текущий элемент отрицательный, можно прекратить итерацию, так как дальше сумма будет только уменьшаться.
        if (currMax > prevMax && nums[i] < 0) {
            break;
        }
    }

    return currMax;
}

const numbers = [1, 34, 56, 76, 34, 3, 90];
console.log(maxSumNonAdjacent(numbers));

