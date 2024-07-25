// @ts-nocheck
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
 
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
 
  // 插入节点
  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }
 
  // 删除节点
  remove(value) {
    if (this.head === null) {
      return false;
    }
    let current = this.head;
    if (current.value === value) {
      this.head = current.next;
    } else {
      while (current.next !== null && current.next.value !== value) {
        current = current.next;
      }
      if (current.next !== null) {
        current.next = current.next.next;
      } else {
        return false;
      }
    }
    this.size--;
    return true;
  }
 
  // 查询节点
  search(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
 
  // 更新节点
  update(oldValue, newValue) {
    let current = this.head;
    while (current !== null) {
      if (current.value === oldValue) {
        current.value = newValue;
        return;
      }
      current = current.next;
    }
  }
}
 
// 示例使用
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
console.log(list.search(2)); // true
list.update(2, 20);
console.log(list.search(2)); // false
console.log(list.search(20)); // true
list.remove(3);
console.log(list.search(3)); // false