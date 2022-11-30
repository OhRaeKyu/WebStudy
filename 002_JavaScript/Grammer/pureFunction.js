/*
  - 순수 함수
  외부 상태를 변경하지 않고 외부 상태에 의존하지도 않는 함수를 의미한다.
  오직 매개변수를 통해 함수 내부로 전달된 인수에게만 의존해 반환값을 만든다.
  함수형 프로그래밍에서는 이러한 순수 함수를 통해
  부수 효과를 최대한 억제하여 오류를 피하고 프로그램의 안정성을 높인다.
*/

// Ex) 비순수 함수
let num = 0;
const increaseImpure = () => {
  return ++num;
};
num = increaseImpure();
num = increaseImpure();
console.log(num); // 2

// Ex) 순수 함수
let number = 0;
const increasePure = (n) => {
  return ++n;
};
number = increasePure(number);
number = increasePure(number);
console.log(number); // 2
