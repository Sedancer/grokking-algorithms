class DequeNode<T> {
  value: T;
  next: DequeNode<T> | null = null;
  prev: DequeNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

export default class Deque<T> {
  private head: DequeNode<T> | null = null;
  private tail: DequeNode<T> | null = null;
  private _size: number = 0;

  get size(): number {
    return this._size;
  }

  // Додати в кінець (аналог append в Python)
  pushBack(value: T): void {
    const newNode = new DequeNode(value);
    if (!this.tail) {
      this.head = this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this._size++;
  }

  // Додати в початок (аналог appendleft в Python)
  pushFront(value: T): void {
    const newNode = new DequeNode(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this._size++;
  }

  // Видалити з кінця (аналог pop в Python)
  popBack(): T | undefined {
    if (!this.tail) return undefined;
    const value = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }
    this._size--;
    return value;
  }

  // Видалити з початку (аналог popleft в Python)
  popFront(): T | undefined {
    if (!this.head) return undefined;
    const value = this.head.value;
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }
    this._size--;
    return value;
  }
}

// Приклад використання
const deque = new Deque<number>();
deque.pushBack(1);  // Додаємо 1 в кінець
deque.pushFront(2); // Додаємо 2 в початок
console.log(deque.popBack()); // Видаляємо з кінця (1)
console.log(deque.popFront()); // Видаляємо з початку (2)       