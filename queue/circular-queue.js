class CircularQueue{
  constructor(){
    // index 從 0 開始，捨棄一個記憶體位置，為了區別是 empty or full
    this.queue = [];
    this.front = 0;
    this.back = 0;
    this.capacity = 5;
  }
  push(data){
    if(this.isFull()){
      return false;
    }
    this.back = (this.back + 1) % this.capacity;
    this.queue[this.back] = data;
  }
  pop(){
    if(this.isEmpty()){
      return false;
    }
    this.front = (this.front + 1) % this.capacity;
    return this.queue[this.front];
  }
  isFull(){ 
    return (this.back + 1) % this.capacity === this.front;
  }
  isEmpty(){
    return this.back === this.front;
  }
  getSize(){
    if(this.back >= this.front ){
      return this.back - this.front;
    }
    else{
      return this.capacity - (this.front - this.back);
    }
  }
}

// test
let circularQueue = new CircularQueue();
circularQueue.push(2);
circularQueue.push(15);
circularQueue.push(20);
circularQueue.push(42);
circularQueue.pop();
console.log(circularQueue);