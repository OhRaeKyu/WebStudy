// 5가지 함수 선언 방법
// 1. 함수 선언문
function fn1(name: string) {
  return `hello ${name}`;
}
// 2. 함수 표현식
let fn2 = function (name: string) {
  return `hello ${name}`;
};
// 3. 화살표 함수
let fn3 = (name: string) => {
  return `hello ${name}`;
};
// 4. 단축형 화살표 함수
let fn4 = (name: string) => `hello ${name}`;
// 5. 함수 생성자
// 되도록 사용하지 않음
let fn5 = new Function('name', 'return `hello ${name}`');

// 선택적 매개변수
let log = function (message: string, userId?: string) {
  return console.log(message, userId || 'unknown');
};
// 기본 매개변수
// 실무에서는 선택적 매개변수 보다 기본 매개변수를 더 자주 사용한다.
let log2 = function (message: string, userId = 'unknown') {
  return console.log(message, userId);
};
// 나머지 매개변수
let restFn = function (...numbers: number[]) {
  return console.log(numbers.reduce((total, num) => total + num, 0));
};

// this의 타입
let thisFn = function (this: Date) {};

// 제네레이터 함수
let generatorFn = function* (): IterableIterator<number> {};

// 반복자(이터레이터)
let numbers = {
  *[Symbol.iterator]() {
    for (let n = 1; n <= 10; n++) {
      yield n;
    }
  },
};

for (let a of numbers) {
}
let allNumbers = [...numbers];

// 호출 시그니처 (타입 시그니처)
type Log = (message: string, userId?: string) => void;
let log3: Log = function (message, userId = 'Unknown') {
  console.log(message, userId);
};

// 오버로드된 함수 타입
// (호출 시그니처가 여러개인 함수)
type Reserve = {
  (from: Date, to: Date, destination: string): void;
  (from: Date, destination: string): void;
};

let reserve: Reserve = function (
  from: Date,
  toOrDestination: Date | string,
  destination?: string
) {};

// 제네릭 타입 (다형성 타입)
type Filter = {
  <T>(array: T[], f: (item: T) => boolean): T[];
};

let filter: Filter = (array, f) => {
  let results = [];

  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (f(item)) {
      results.push(item);
    }
  }

  return results;
};

console.log(filter([1, 2, 3], (x) => x < 3));
console.log(filter(['a', 'b'], (x) => x !== 'b'));

// 한정된 다형성
type TreeNode = {
  value: string;
};

let mapNode = function <T extends TreeNode>(
  node: T,
  f: (value: string) => string
): T {
  return {
    ...node,
    value: f(node.value),
  };
};

// 연습문제
type isType = {
  <T>(value: T, ...otherValue: [T, ...T[]]): boolean;
};

let is: isType = function (value, ...other) {
  return other.every((x) => x === value);
};
console.log(is('string', 'otherstring'));
console.log(is(true, false));
console.log(is(42, 42));
console.log(is([1], [1, 2], [1, 2, 3]));
console.log(is(1, 1, 1, 1, 1, 1));

// function is<T>(a: T, ...b: [T, ...T[]]): boolean {
//   return b.every((_) => _ === a);
// }
