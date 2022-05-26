// 재귀함수
// 1부터 100까지 합_1 - O(n)
let result1 = 0;
for (let i = 1; i < 101; i++) {
  result1 += i;
}
console.log(result1);

// 1부터 100까지 합_2 - O(1)
let result2 = 0;
let x = 1;
let y = 100;
result2 = (y * (x + y)) / 2;
console.log(result2);

// 1부터 100까지 합_3
const recursiveSum = (n) => {
  if (n <= 1) {
    return 1;
  } else {
    return n + recursiveSum(n - 1);
  }
};
let result3 = recursiveSum(100);
console.log(result3);

// 2진수 변환
const binary = (n) => {
  if (n === 1 || n === 0) {
    return String(n);
  } else {
    return binary(Math.floor(n / 2)) + String(n % 2);
  }
};
console.log(binary(11));

// 문자열 뒤집기
const reverseStr = (str) => {
  if (str.length === 1) {
    return str;
  } else {
    return str[str.length - 1] + reverseStr(str.slice(0, str.length - 1));
  }
};
console.log(reverseStr('hello'));

// 각 자릿수의 합
const digitSum = (str) => {
  if (str.length === 1) {
    return parseInt(str, 10);
  } else {
    return (
      parseInt(str[str.length - 1], 10) + digitSum(str.slice(0, str.length - 1))
    );
  }
};
console.log(digitSum('123123'));

// 피보나치 수열
const fibonacci = (n) => {
  if (n === 1 || n === 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};
console.log(fibonacci(10));
