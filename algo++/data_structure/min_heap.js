
class MinHeap {
    #heap=[]
    constructor() {
        this.#heap = [];
    }
 
    // Helper Methods
    #getLeftChildIndex(parentIndex) {
        return 2 * parentIndex + 1;
    }
    #getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 2;
    }
    #getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }
    #hasLeftChild(index) {
        return this.#getLeftChildIndex(index) < this.#heap.length;
    }
    #hasRightChild(index) {
        return this.#getRightChildIndex(index) < this.#heap.length;
    }
    #hasParent(index) {
        return this.#getParentIndex(index) >= 0;
    }
    #leftChild(index) {
        return this.#heap[this.#getLeftChildIndex(index)];
    }
    #rightChild(index) {
        return this.#heap[this.#getRightChildIndex(index)];
    }
    #parent(index) {
        return this.#heap[this.#getParentIndex(index)];
    }

    #swap(indexOne, indexTwo) {
        const temp = this.#heap[indexOne];
        this.#heap[indexOne] = this.#heap[indexTwo];
        this.#heap[indexTwo] = temp;
    }

    #heapifyUp() {
        let index = this.#heap.length - 1;
        while (this.#hasParent(index) && this.#parent(index) > this.#heap[index]) {
            this.#swap(this.#getParentIndex(index), index);
            index = this.#getParentIndex(index);
        }
    }
 
    #heapifyDown() {
        let index = 0;
        while (this.#hasLeftChild(index)) {
            let smallerChildIndex = this.#getLeftChildIndex(index);
            if (this.#hasRightChild(index) && this.#rightChild(index) < this.#leftChild(index)) {
                smallerChildIndex = this.#getRightChildIndex(index);
            }
            if (this.#heap[index] < this.#heap[smallerChildIndex]) {
                break;
            } else {
                this.#swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
        }
    }
 
    //functions to implement
    top() {
        if (this.#heap.length === 0) {
            return null;
        }
        return this.#heap[0];
    }

    remove() {
        if (this.#heap.length === 0) {
            return null;
        }
        const item = this.#heap[0];
        this.#heap[0] = this.#heap[this.#heap.length - 1];
        this.#heap.pop();
        this.#heapifyDown();
        return item;
    }
 
    add(item) {
        this.#heap.push(item);
        this.#heapifyUp();
    }
     
    printHeap() {
        var heap =` ${this.#heap[0]} `
        for(var i = 1; i<this.#heap.length;i++) {
            heap += ` ${this.#heap[i]} `;
        }
        console.log(heap);
    }
}

module.exports = MinHeap