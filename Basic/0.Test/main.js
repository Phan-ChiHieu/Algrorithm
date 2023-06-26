const arr = [2, 4, 3, 6, 5, 1];

// function seclectionSort(_arr) {
//   for (var i = 0; i < _arr.length - 1; i++) {
//     let numIndex = i;
//     for (var j = i + 1; j < _arr.length; j++) {
//       if (_arr[numIndex] > _arr[j]) {
//         numIndex = j;
//       }
//     }
//     [_arr[i], _arr[numIndex]] = [_arr[numIndex], _arr[i]];
//   }
//   return _arr;
// }

// const result = seclectionSort(arr);
// console.log(">>>>>", result);

// const bubbleSort = (_arr) => {
//   for (let i = 0; i < _arr.length - 1; i++) {
//     for (let j = 0; j < _arr.length; j++) {
//       if (_arr[j] > _arr[j + 1]) {
//         [_arr[j], _arr[j + 1]] = [_arr[j + 1], _arr[j]];
//       }
//     }
//   }
//   return _arr;
// };

// const result = bubbleSort(arr);
// console.log(">>>>>", result);

// function pascalsTriangle(numRow) {
//   let array = [];
//   if (numRow >= 1) array.push([1]);
//   if (numRow >= 2) array.push([1, 1]);

//   for (let i = 2; i < numRow; i++) {
//     let first = 1;
//     let last = 1;

//     let prevArr = array[i - 1];
//     if (prevArr.length === 2) {
//       array.push([first, first + last, last]);
//     } else {
//       let left = 0;
//       let right = 1;
//       let add = [];
//       while (right < prevArr.length) {
//         add.push(prevArr[left] + prevArr[right]);
//         left++;
//         right++;
//       }
//       array.push([first, ...add, last]);
//     }
//   }

//   return array;
// }

// const result = pascalsTriangle(10);

// console.log("result", result);

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    console.log(`array i ${i}`, array);

    for (let j = i; j >= 0; j--) {
      console.log("array outsite ??????????", array);
      if (array[j] < array[j - 1]) {
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
        console.log("array insite", array);
      }
    }
  }
  return array;
}

const result = insertionSort(arr);

// console.log("result", result);
