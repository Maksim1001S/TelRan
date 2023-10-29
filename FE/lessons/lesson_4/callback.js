// Callback Function (функция обратного вызова) - функция, переданная в другую фукцию в качестве аргумента

// Универсальная функция
const nums = [1, 2, 3, 4, 5];
const changeNums = (arr, instruction) => {
    for(let i = 0; i < nums.length; i++){
      arr.push(instruction(nums[i]))
    }
  }
  
  const mult_num = [];
  const pow_num = [];
  
  const multNum = a => a * 2;
  const powNum = a => a ** 2;
  
  changeNums(mult_num, multNum);
  changeNums(pow_num, powNum);
  
  console.log(mult_num);
  console.log(pow_num);