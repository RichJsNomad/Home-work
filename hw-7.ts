class LinkedListNode<T> {
  constructor(public value: T, public next: LinkedListNode<T> | null = null) {}
}

class LinkedListTs<T> {
  private head: LinkedListNode<T> | null = null;
  private tail: LinkedListNode<T> | null = null;
  private length: number = 0;

  append(value: T): void {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  prepend(value: T): void {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  remove(value: T): boolean {
    if (!this.head) return false;

    let current: LinkedListNode<T> | null = this.head;
    let prev: LinkedListNode<T> | null = null;

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

  find(value: T): LinkedListNode<T> | null {
    let current = this.head;

    while (current) {
      if (current.value === value) return current;
      current = current.next;
    }

    return null;
  }

  size(): number {
    return this.length;
  }

  toArray(): T[] {
    const result: T[] = [];
    let current = this.head;

    while (current) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }
}
