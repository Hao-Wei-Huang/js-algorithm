class ArrayQueue{
  constructor(){
    this.queue = [];
    this.front = -1;
    this.back = -1;
  }
  push(data){
    this.queue[++this.back] = data;
  }
  pop(){
    if(this.isEmpty()){
      return false;
    }
    return this.queue[++this.front];
  }
  isEmpty(){
    return this.back === this.front;
  }
  getSize(){
    return this.back - this.front;
  }
}

// test
let arrayQueue = new ArrayQueue();
arrayQueue.push(1);
arrayQueue.push(13);
arrayQueue.push(21);
arrayQueue.push(14);
arrayQueue.pop();
arrayQueue.push(27);
console.log(arrayQueue); 