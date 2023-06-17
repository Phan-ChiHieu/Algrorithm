const arr = [2, 4, 3, 6, 5, 1];

function bubbleSort(_arr) {
  for (let i = 0; i < _arr.length - 1; i++) {
    for (let j = 0; j < _arr.length; j++) {
      if (_arr[j] > _arr[j + 1]) {
        [_arr[j], _arr[j + 1]] = [_arr[j + 1], _arr[j]];
      }
    }
  }
  return _arr;
}

console.log(">>>", bubbleSort(arr));
