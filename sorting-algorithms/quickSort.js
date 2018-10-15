const quickSort = arr => {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr.pop();

  let left = [];
  let right = [];

  arr.forEach(num => {
    if (num <= pivot) {
      left.push(num);
    } else {
      right.push(num);
    }
  });

  return [...quickSort(left), pivot, ...quickSort(right)];
};
