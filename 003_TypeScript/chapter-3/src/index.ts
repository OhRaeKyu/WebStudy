// 어노테이션
console.log('어노테이션');
function squareOf(n: number) {
  return n * n;
}

console.log(squareOf(2)); // 4
// console.log(squareOf('z'));  // 에러
// error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

// 타입스크립트의 타입(자료형)
// 1. any
// 가급적 사용하지 말자.

// 2. unknown
console.log('2. unknown');
let a2: unknown = 30;
let b2 = a2 === 123;
// let c2 = a2 + 100;  // 에러
// TS2571: Object is of type 'unknown'.

// 3. boolean
// 보통 추론하도록 만들기 때문에 사용할일이 적다.
console.log('3. boolean');
let a3: boolean = true;
let b3: true = true; // 타입 리터럴
// let d3: false = true;  // 에러
// TS2322: Type 'true' is not assignable to type 'false'.

// 4. number
// 보통 추론하도록 만들기 때문에 사용할일이 적다.
console.log('4. number');
let a4: number = 100_000_000;
let b4: 26.218 = 26.218; // 타입 리터럴
// let c4: 26.218 = 10; // 에러
// TS2322: Type '10' is not assignable to type '26.218'.

// 5. bigint
// ES2020 문법 부터 사용 가능
// TS2737: BigInt literals are not available when targeting lower than ES2020.
console.log('5. bigint');
// let a5: bigint = 100n;
// let b5: 100n = 100n;
// let c5: bigint = 100; // 에러
// TS2322: Type 'number' is not assignable to type 'bigint'.

// 6. string
// 가능하다면 타입스크립트가 string 타입을 추론하도록 두는 것이 좋다.
let a6: string = 'zoom';
let b6: 'john' = 'john'; // 타입 리터럴
// let c6: 'john' = 'zoe'; // 에러
// TS2322: Type '"zoe"' is not assignable to type '"john"'.
