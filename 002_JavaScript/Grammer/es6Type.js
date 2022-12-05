/*
  - Symbol
  다른 값과 중복되지 않는 유일무이한 값.
  중복으로 인한 이름의 충돌 방지를 위한 프로퍼티 키를 만들기 위해 주로 사용된다.
*/
const key = Symbol('key');
console.log(typeof key);

const obj = {};
obj[key] = 'value';
console.log(obj[key]);
