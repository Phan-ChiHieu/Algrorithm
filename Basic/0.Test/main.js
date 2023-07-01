// 1 Selection Sort
const arrSelectionSort = [2, 4, 3, 6, 5, 1];
const selectionSort = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let numIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        numIndex = j;
      }
    }
    [nums[i], nums[numIndex]] = [nums[numIndex], nums[i]];
  }
  return nums;
};

// console.log(">>>>>>", selectionSort(arrSelectionSort)); // >>>>>> [ 1, 2, 3, 4, 5, 6 ]

// 2 Bubble Sort

const arrbubbleSort = [3, 2, 4, 1, 6, 5];

const bubbleSort = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums;
};

// console.log(">>>>>>", bubbleSort(arrbubbleSort)); // >>>>>> [ 1, 2, 3, 4, 5, 6 ]

// 3 Pascal's Triangle

const pascalTriangle = function (numRows) {
  let newArr = [];

  if (numRows >= 1) newArr.push([1]);
  if (numRows >= 2) newArr.push([1, 1]);

  for (let i = 2; i < numRows; i++) {
    let first = 1;
    let last = 1;
    let prevArr = newArr[i - 1];
    if (prevArr.length === 2) {
      newArr.push([first, first + last, last]);
    } else {
      let left = 0;
      let right = 1;
      let add = [];

      while (right < prevArr.length) {
        add.push(prevArr[left] + prevArr[right]);
        left++;
        right++;
      }
      newArr.push([first, ...add, last]);
    }
  }

  return newArr;
};

// console.log(">>>>", pascalTriangle(6));

// 4 Insertion Sort

const arrInsertionSort = [3, 2, 4, 1, 6, 5];

const insertionSort = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[j] < nums[j - 1]) {
        [nums[j - 1], nums[j]] = [nums[j], nums[j - 1]];
      }
    }
  }
  return nums;
};

// console.log(">>>>", insertionSort(arrInsertionSort)); // >>>> [ 1, 2, 3, 4, 5, 6 ]

// 5 Two Sum

const arrTwoSum = [2, 7, 11, 15];
const target = 9;

const twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];

    if (map.has(compliment)) {
      return [i, map.get(compliment)];
    } else {
      map.set(nums[i], i);
    }
  }
};

// console.log(">>>>>", twoSum(arrTwoSum, target));

// 6 Best Time To Buy And Sell Stock

const priceBestTimeTobuyAndSellStock = [7, 1, 5, 3, 6, 4];

const bestTimeTobuyAndSellStock = function (price) {
  let currMax = 0;
  let currMin = price[0];

  for (let i = 0; i < price.length - 1; i++) {
    currMin = Math.min(currMin, price[i]);
    currMax = Math.max(currMax, price[i] - currMin);
  }
  return currMax;
};

// console.log(">>>>>", bestTimeTobuyAndSellStock(priceBestTimeTobuyAndSellStock));

// 7 Contains Duplicate

const arrContainsDuplicate = [1, 2, 3, 4];

const containsDuplicate = function (nums) {
  let set = new Set(nums);
  return set.size !== nums.length;
};

console.log(">>>>>", containsDuplicate(arrContainsDuplicate));
