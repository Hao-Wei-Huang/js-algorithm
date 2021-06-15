class LinkedListNode{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}
class LinkedListStack{
  constructor(){
    this.top = null;
    this.size = 0;
  }
  push(data){
    let newNode = new LinkedListNode(data);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }
  pop(){
    if(this.isEmpty()){
      return false;
    }
    let tempNode = this.top;
    this.top = this.top.next;
    this.size--;
    return tempNode.data;
  }
  isEmpty(){
    return this.top === null;
  }
  getTop(){
    if(this.isEmpty()){
      return false;
    }
    return this.top.data;
  }
  getSize(){
    return this.size;
  }
}

// test
let linkedListStack = new LinkedListStack();
linkedListStack.push(12);
linkedListStack.push(14);
linkedListStack.push(15);
linkedListStack.push(20);
linkedListStack.push(5);
linkedListStack.pop();
console.log(linkedListStack.getSize());
console.log(linkedListStack.getTop());