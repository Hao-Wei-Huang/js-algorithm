class MinHeap{
  constructor(){
    this.heap = [0];
  }
  minHeapify(index){
    let left = index * 2;
    let right = index * 2 + 1;
    let smallest = index;
    if(left < this.heap.length  && this.heap[left].key < this.heap[index].key){
      smallest = left;
    }
    if(right < this.heap.length  && this.heap[right].key < this.heap[smallest].key){
      smallest = right;
    } 
    if(smallest !== index){
      let tempNode = this.heap[index];
      this.heap[index] = this.heap[smallest];
      this.heap[smallest] = tempNode;
      this.minHeapify(smallest);
    }
  }
  buildMinHeap(array){
    for(let i = 0; i < array.length; i++){
      this.heap[i + 1]= {element: i, key: array[i]};
    }
    for(let i = Math.floor((this.heap.length - 1) / 2); i >= 1; i--){
      this.minHeapify(i);
    }
  }
  extractMin(){
    if(this.isEmpty()){
      return;
    }
    let minNode = this.heap[1];
    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.length--;
    this.minHeapify(1);
    return minNode.element;
  }
  decreaseKey(element, newKey){
    let index = this.findPosition(element)
    if(!index){
      return;
    }
    if(newKey > this.heap[index].key){
      return;
    }
    this.heap[index].key = newKey;
    let node = this.heap[index];
    let parent = Math.floor(index / 2);
    while(index > 1 && newKey < this.heap[parent].key){
      this.heap[index] = this.heap[parent];
      index = parent;
      parent = Math.floor(index / 2);
    }
    this.heap[index] = node;
  }
  findPosition(element){
    for(let i = 1; i < this.heap.length; i++){
      if(this.heap[i].element === element){
        return i;
      }
    }
    return false;
  }
  insert(element, key){
    this.heap.push({element,key});
    this.decreaseKey(element, key);
  }
  isEmpty(){
    return this.heap.length < 2;
  }
}

// test
const A = [12, 25, 7, 10, 20, 3, 8, 3, 4, 30];
let minHeap = new MinHeap();
minHeap.buildMinHeap(A);
let B = [];
while(!minHeap.isEmpty()){
  B.push(A[minHeap.extractMin()]);
}
console.log(B);