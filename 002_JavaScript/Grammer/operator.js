/*
  - 옵셔널 체이닝 연산자
  옵셔널 체이닝 연산자는 객체가 null 또는 undefined가 아닌지 확인한 후에
  프로퍼티를 참조할 때 유용하다.
*/

const obj = {
  value: 1,
};
// 전
const objValue_1 = obj && obj.value;
// 후
const objValue_2 = obj?.value;
