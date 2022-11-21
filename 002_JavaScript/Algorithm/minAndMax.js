let arr = [10, 20, 30, 1, 2, 3, 5, 9, 11];

// 최소값과 최대값 구하기_1
let min = arr[0];
let max = arr[0];
for (let value of arr) {
  if (value < min) {
    min = value;
  }
  if (value > max) {
    max = value;
  }
}
console.log(min);
console.log(max);

// 최소값과 최대값 구하기_2
console.log(Math.min.apply(null, arr));
console.log(Math.max.apply(null, arr));

// 최소값과 최대값 구하기_3
const reducerMin = (acc, cur) => (acc < cur ? acc : cur);
const reducerMax = (acc, cur) => (acc > cur ? acc : cur);
console.log(arr.reduce(reducerMin));
console.log(arr.reduce(reducerMax));
