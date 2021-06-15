class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}
class LinkedList{
  constructor(){
    this.first = null;
  }
  print(){
    let currentNode = this.first
    while(currentNode){
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
  push(data){
    let newNode = new Node(data);
    if(this.first === null){
      this.first = newNode;
    }
    else{
      let currentNode = this.first;
      // traversal
      while(currentNode.next){ 
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }
  unshift(data){
    let newNode = new Node(data);
    newNode.next = this.first;
    this.first = newNode;
  }
  pop(){
    if(!this.first){return;}
    let currentNode = this.first;
    let previousNode = null;
    while(currentNode.next){
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = null;
    return currentNode.data;
  }
  delete(data){
    let currentNode = this.first;
    let perviousNode = null;
    while(currentNode){
      if(data === currentNode.data){
        // case 1 head
        if(currentNode === this.first){
          this.first = currentNode.next;
          return;
        }
        // case 2 body and tail
        else{
          perviousNode.next = currentNode.next;
          return;
        }
      }
      perviousNode = currentNode;
      currentNode = currentNode.next;
    }
    // Can't find the current data
    return null;
  }
  clear(){
    this.first = null;
  }
  reverse(){
    let currentNode = this.first;
    let previousNode = null;
    while(currentNode){
      let nextNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }
    this.first = previousNode;
  }
}

// test
let linkedList = new LinkedList();
linkedList.push(2);
linkedList.push(3);
linkedList.push(6);
linkedList.push(7);
linkedList.unshift(5);
linkedList.unshift(8);
linkedList.print();
linkedList.reverse();
linkedList.print();