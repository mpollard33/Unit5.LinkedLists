class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }

  addNode(element) {
    const node = new Node(element);
    let current = null;

    // if LinkedList is empy
    if (this.head === null) {
      this.head = node;
    }
    current = this.head;
    // navigate to the end of list
    // stops when current.next === null
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(value) {
    // add new node to end
    // assign value to this.value
    const node = new Node(value);
    // if first node in list
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      // set current tail node next value to new node
      this.tail.next = node;
      node.previous = this.tail;
      // set new node to the tail
      this.tail = node;
    }
  }

  addToHead(value) {
    const node = new Node(value);
    // set to head if this.head === null
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  removeHead() {
    // if this.head === null throw error
    if (!this.head) {
      console.log(`Linked List is empty`);
      return null;
    } else {
      const value = this.head.value;
      this.head = this.head.next;

      if (this.head) {
        this.head.previous = null;
      } else {
        this.tail = null;
      }
      return value;
    }
  }

  removeTail() {
    // if tail exist store value
    if (this.tail) {
      const value = this.tail.value;

      // remove tail node
      if (this.tail.previous) {
        this.tail.next = null;

        // update tail
        this.tail = this.tail.previous;
      } else {
        this.head = null;
        this.tail = null;
      }
      return value;
    }
    return null;
    // if tail !exist
  }

  search(value) {
    let current = this.head;
    //set key equal to param
    while (current !== null) {
      for (const key in searchStart) {
        if (this.key.value === value) {
          return this.key.value;
        }
        search = search.next;
      }
    }
    // iterate through linkedList doing compare to key
    // return key if true else return not found
  }
}

module.exports = {
  Node,
  LinkedList,
};

/*Node1
  Node2
  Node1 -> Node2 -> Node3
  head = node1;
  node1.next = node2;
  node2.next=null
   */
