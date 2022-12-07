/*
  - this
  작성 시점이 아닌 호출 당시 컨텍스트를 가리키는 변수.
  기본 바인딩으로는 전역 객체인 Window 객체를 가리키고
  함수 호출부에 컨텍스트 객체가 있다면 해당 객체를 가리킨다.
*/

class Stack {
  constructor() {
    this.arr = [];
  }
  push(data) {
    this.arr.push(data);
  }
}

const stack = new Stack();
stack.push(1);
stack.push(3);
stack.push(5);
console.log(stack);
