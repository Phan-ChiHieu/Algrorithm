const nums = [2, 7, 11, 15];
const target = 9;

const twosum = function (nums, target) {
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
const rs = twosum(nums, target);

const map1 = new Map();

map1.set("a", 1);
map1.set("b", 2);
map1.set("c", 3);

map1.delete("b");

map1.set("a", 97);

console.log("size", map1.size); // size 2
console.log(map1); // Map(2) { 'a' => 97, 'c' => 3 }
console.log(map1.has("c")); // true kiem tra key
