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
let a2: unknown = 30;
let b2 = a2 === 123;
// let c2 = a2 + 100;  // 에러
// TS2571: Object is of type 'unknown'.

// 3. boolean
// 보통 추론하도록 만들기 때문에 사용할일이 적다.
let a3: boolean = true;
let b3: true = true; // 타입 리터럴
// let d3: false = true;  // 에러
// TS2322: Type 'true' is not assignable to type 'false'.

// 4. number
// 보통 추론하도록 만들기 때문에 사용할일이 적다.
let a4: number = 100_000_000;
let b4: 26.218 = 26.218; // 타입 리터럴
// let c4: 26.218 = 10; // 에러
// TS2322: Type '10' is not assignable to type '26.218'.

// 5. bigint
// ES2020 문법 부터 사용 가능
// TS2737: BigInt literals are not available when targeting lower than ES2020.
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

// 7. symbol

// 8. object
let a8: { b: number };
// a8 = {};  // 에러
// TS2741: Property 'b8' is missing in type '{}' but required in type '{ b8: number; }'.
a8 = {
  b: 1,
  // c8: 2, // 에러
  // TS2322: Type '{ b8: number; c8: number; }' is not assignable to type '{ b8: number; }'.
};

let b8: {
  c: number;
  d?: string;
  [key: number]: boolean;
};

b8 = { c: 1 };
b8 = { c: 1, d: undefined };
b8 = { c: 1, 10: true };
b8 = { c: 1, 10: true, 20: false };

// 9. array
let a9 = [];
let b9 = [1, 2, 3];
let c9: string[] = ['a'];

// 10. tuple
// 길이가 고정되었고(조절가능) 각 인덱스의 타입이 미리 선언된 배열
let a10: [string, string, number] = ['malcolm', 'gladwell', 1963];
// 튜플 이형
// 튜플의 최소 길이를 갖도록 지정할 수 있고 순수 배열에 비해 안정성을 높일 수 있으므로 튜플 사용을 권장한다.
let b10: [string, ...string[]] = ['asd'];

// 11. null, undefined, void, never
// null : 값이 없음
// undefined : 아직 값을 변수에 할당하지 않음
// void : return 문을 포함하지 않는 함수
// never : 절대 반환하지 않는 함수

// 12. 열거형
// 열거형을 안전하게 사용하는 방법은 까다로우니 멀리하는 것을 권장. (대체 수단 많음)
const enum Color {
  Red = '#c10000',
  Blue = '#007ac1',
  Pink = 0xc10050,
  White = 255,
}

let red = Color.Red;
// let Green = Color.Green;  // 에러
// let temp = Color[6];  // 에러
// 존재하지 않은 프로퍼티
console.log(Object.prototype.toString.call(red), red);
