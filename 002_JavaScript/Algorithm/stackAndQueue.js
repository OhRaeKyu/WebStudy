// 스택 - FIRO(RIFO)
class Stack {
  constructor() {
    this.arr = [];
  }

  push(data) {
    this.arr.push(data);
  }

  pop(index = this.arr.length - 1) {
    if (index === this.arr.length - 1) {
      return this.arr.pop();
    } else {
      let result = this.arr.splice(index, 1);
      return result;
    }
  }

  empty() {
    if (this.arr.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  top() {
    return this.arr[this.arr.length - 1];
  }

  bottom() {
    return this.arr[0];
  }
}
let s = new Stack();
s.push(10);
s.push(20);
s.push(30);
s.push(100);
s.push(200);
s.push(300);
console.log(s.arr);
console.log(s.pop());
console.log(s.arr);
console.log(s.top());
console.log(s.bottom());

// 큐 - FIFO(RIRO)
class Queue {
  constructor() {
    this.arr = [];
  }

  enqueue(item) {
    this.arr.push(item);
  }

  dequeue() {
    this.arr.shift();
  }
}

let q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(100);
q.enqueue(200);
q.enqueue(300);
console.log(q.arr);
q.dequeue();
console.log(q.arr);
