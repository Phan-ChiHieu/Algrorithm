const arr = [2, 4, 3, 6, 5, 1];

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
