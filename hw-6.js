class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  remove(value) {
    if (!this.head) return false;

    let current = this.head;
    let prev = null;

    while (current) {
      if (current.value === value) {
        if (prev === null) {
          this.head = current.next;
          if (!this.head) this.tail = null;
        } else {
          prev.next = current.next;
          if (!current.next) this.tail = prev;
        }

        this.length--;
        return true;
      }
      prev = current;
      current = current.next;
    }

    return false;
  }

  find(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }

    return null;
  }

  size() {
    return this.length;
  }

  toArray() {
    const result = [];
    let current = this.head;

    while (current) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }
}

const list = new LinkedList();

list.append(2);
list.prepend(1);
list.append(3);
list.append(4);
list.remove(3);

console.log(list.size());
console.log(list.find(2));
console.log(list.find(5));
console.log(list.toArray());
