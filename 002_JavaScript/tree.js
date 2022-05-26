class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(data) {
    let init = new Node(data);
    this.root = init;
    this.dataLength = 0;
  }

  length() {
    return this.dataLength;
  }

  insert(data) {
    let newNode = new Node(data);
    let curNode = this.root;

    while (curNode) {
      if (data === curNode.data) {
        return;
      } else if (data < curNode.data) {
        if (!curNode.left) {
          curNode.left = newNode;
          this.dataLength += 1;
          return;
        } else {
          curNode = curNode.left;
        }
      } else {
        if (!curNode.right) {
          curNode.right = newNode;
          this.dataLength += 1;
          return;
        } else {
          curNode = curNode.right;
        }
      }
    }
  }

  // 깊이 우선 탐색(DFS, Depth First Search) - 스택
  DFS() {
    let result = [];
    let stack = [this.root];

    while (stack.length !== 0) {
      let current = stack.pop();
      if (current.right) {
        stack.push(current.right);
      }
      if (current.left) {
        stack.push(current.left);
      }
      result.push(current.data);
    }
    return result;
  }

  // 너비 우선 탐색(BFS, Breadth First Seacrh) - 큐
  BFS() {
    let result = [];
    let queue = [this.root];

    while (queue.length !== 0) {
      let current = queue.shift();
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
      result.push(current.data);
    }
    return result;
  }
}
let t = new Tree(5);
t.insert(3);
t.insert(8);
t.insert(1);
t.insert(4);
t.insert(6);
t.insert(9);
console.log(t.root.data);
console.log(t.DFS());
console.log(t.BFS());
