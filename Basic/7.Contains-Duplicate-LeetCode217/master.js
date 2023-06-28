const nums = [1, 2, 3, 1];

let containsDuplicate = function (nums) {
  let set = new Set(nums);
  console.log("set >>>>>>", set);
  return set.size !== nums.length;
};

console.log(containsDuplicate(nums));

// Set se bo di 2 phan tu giong nhau trong mot array
