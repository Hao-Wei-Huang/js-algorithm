class LinkedListNode{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}
class LinkedListQueue{
  constructor(){
    this.front = null;
    this.back = null;
    this.size = 0;
  }
  push(data){
    let newNode = new LinkedListNode(data);
    if(this.isEmpty()){
      this.front = newNode;
      this.back = newNode;
      this.size++;
      return
    }
    this.back.next = newNode;
    this.back = newNode;
    this.size++;
  }
  pop(){
    if(this.isEmpty()){
      return false;
    }
    let tempNode = this.front;
    this.front = this.front.next;
    this.size--;
    return tempNode.data;
  }
  isEmpty(){
    return this.size === 0;
  }
  getSize(){
    return this.size;
  }
}

// test
let linkedListQueue = new LinkedListQueue();
linkedListQueue.push(1);
linkedListQueue.push(13);
linkedListQueue.push(21);
linkedListQueue.push(14);
linkedListQueue.pop();
linkedListQueue.push(27);
console.log(linkedListQueue);