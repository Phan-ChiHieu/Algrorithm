const prices = [7, 1, 5, 3, 6, 4];

let maxProfit = function (prices) {
  let curMin = prices[0];
  let curMax = 0;

  for (let i = 0; i < prices.length; i++) {
    console.log("curMin", curMin);
    console.log("curMax", curMax);
    curMin = Math.min(prices[i], curMin);
    curMax = Math.max(curMax, prices[i] - curMin);
  }
  return curMax;
};

console.log(maxProfit(prices));

// Vao array ngay phan tu thap nhat
// Tiep theo lay phan tu thap nhat tru cac phan tu trong tuong lai lay ra gia tri sau khi tru la cao nhat
