// Stack class
class Stack {
  #items=[]
  constructor() {
    this.#items = [];
  }
  push(element) {
    this.#items.push(element);
  }
  pop() {
    if (this.#items.length == 0) return "Underflow";
    return this.#items.pop();
  }
  top() {
    return this.#items[this.#items.length - 1];
  }
  isEmpty() {
    return this.#items.length == 0;
  }

}

module.exports = Stack;