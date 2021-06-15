class ArrayStack{
  constructor(){
    this.stack = [];
    this.top = -1;
  }
  push(data){
    this.stack[++this.top] = data;
  }
  pop(){
    if(this.isEmpty()){
      return false;
    }
    return this.stack[this.top--]; 
  }
  isEmpty(){
    return this.top === -1;
  }
  getTop(){
    if(this.isEmpty()){
      return false;
    }
    return this.stack[this.top];
  }
  getSize(){
    return this.top + 1;
  }
}

// test
let arrayStack = new ArrayStack();
arrayStack.push(23);
arrayStack.push(14);
arrayStack.push(5);
arrayStack.push(1);
arrayStack.pop();
console.log(arrayStack.getSize());
console.log(arrayStack.getTop());