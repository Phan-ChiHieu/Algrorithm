const generate = function (numRows) {
  let _arr = [];
  if (numRows >= 1) _arr.push([1]);
  if (numRows >= 2) _arr.push([1, 1]);
  for (let i = 2; i < numRows; i++) {
    let first = 1;
    let last = 1;
    let prevArr = _arr[i - 1];
    if (prevArr.length === 2) {
      _arr.push([first, first + last, last]);
    } else {
      let left = 0;
      let right = 1;
      let add = [];

      while (right < prevArr.length) {
        add.push(prevArr[left] + prevArr[right]);
        left++;
        right++;
      }
      _arr.push([first, ...add, last]);
    }
  }
  return _arr;
};

console.log(generate(5));
