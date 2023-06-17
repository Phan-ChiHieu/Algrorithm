const arr = [2, 4, 3, 6, 5, 1];

// Sắp xếp từ nhỏ đến lớn

function selectionSort(_arr) {
  for (var i = 0; i < _arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < _arr.length; j++) {
      if (_arr[minIndex] > _arr[j]) {
        minIndex = j;
      }
    }
    [_arr[i], _arr[minIndex]] = [_arr[minIndex], _arr[i]];
  }
  return _arr;
}

console.log(selectionSort(arr));
