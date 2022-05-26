// 연결 리스트
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node('init');

    this.head = init;
    this.tail = init;
    this.currentNode = undefined;
    this.dataLength = 0;
  }

  get fullData() {
    let cur = this.head;
    cur = cur.next;

    let s = '';
    for (let i = 0; i < this.dataLength; i++) {
      s += `${cur.data}, `;
      cur = cur.next;
    }
    return JSON.parse(`[${s.slice(0, -2)}]`);
  }

  length() {
    return this.dataLength;
  }

  append(data) {
    let newNode = new Node(data);

    this.tail.next = newNode;
    this.tail = newNode;
    this.dataLength += 1;
  }

  insert(index, data) {
    let cur = this.head;
    cur = cur.next;

    for (let i = 0; i < index - 1; i++) {
      cur = cur.next;
    }

    let newNode = new Node(data);

    newNode.next = cur.next;
    cur.next = newNode;
    this.dataLength += 1;
  }
}

let l = new LinkedList();
l.append(10);
l.append(20);
l.append(30);
l.append(100);
l.append(200);
l.append(300);
console.log(l);
console.log(l.length());
console.log(l.fullData);
console.log(l.insert(2, 1000));
console.log(l.fullData);
