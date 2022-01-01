"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.Node = void 0;
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
exports.Node = Node;
class LinkedList {
    constructor() {
        this.head = null;
    }
    add(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    }
    sort() {
        if (!this.head)
            throw new Error('Not a valid Linked List.');
        let node = this.head;
        let arr = [];
        while (node) {
            arr.push(node.data);
            node = node.next;
        }
        arr.sort((a, b) => a - b);
        this.head = arr.reduceRight((prev, cur) => ({ data: cur, next: prev }), null);
    }
    get length() {
        if (!this.head)
            return 0;
        let node = this.head;
        let count = 0;
        while (node) {
            // while not null
            count++;
            node = node.next;
        }
        return count;
    }
    at(index) {
        if (!this.head) {
            throw new Error('Index out of bounds!');
        }
        let node = this.head;
        let count = 1;
        while (node) {
            if (count === index)
                return node.data;
            count++;
            node = node.next;
        }
        throw new Error('Index out of bounds!');
    }
    print() {
        if (!this.head)
            return;
        let node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }
}
exports.LinkedList = LinkedList;
