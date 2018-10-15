const missingNumber = arr => {
  let count = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== count) {
      return count;
    } else {
      count++;
    }
  }
};

//finds missing number in an array of consecutive numbers
//assumes array starts at 1
