class MinHeap{
  constructor(){
    this.heap = [];
  }
  minHeapify(index){
    let left = 2 * index;
    let right = 2 * index + 1;
    let smallest = index;
    if(left < this.heap.length && this.heap[index].key > this.heap[left].key){
      smallest = left;
    }
    if(right < this.heap.length && this.heap[smallest].key > this.heap[right].key){
      smallest = right;
    }
    if(smallest !== index){
      let node = this.heap[index];
      this.heap[index] = this.heap[smallest];
      this.heap[smallest] = node;
      this.minHeapify(smallest);
    }
  }
  buildMinHeap(array){
    for(let i = 0; i < array.length; i++){
      this.heap[i + 1] = {element: i, key: array[i]};
    }
    for(let i = Math.floor((this.heap.length - 1) / 2); i >= 1; i--){
      this.minHeapify(i);
    }
  }
  extractMin(){
    if(this.isEmpty()){
      return 'empty';
    }
    let minValue = this.heap[1].element;
    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.length--;
    this.minHeapify(1);
    return minValue;
  }
  findPosition(element){
    for(let i = 1; i < this.heap.length; i++){
      if(this.heap[i].element === element){
        return i;
      }
    }
    return false;
  }
  decreaseKey(element, newKey){
    let index = this.findPosition(element);
    if(!index){
      return;
    }
    let node = this.heap[index];
    if(this.heap[index].key < newKey){
      return false;
    }
    this.heap[index].key = newKey;
    let parentIndex = Math.floor(index / 2);
    while(index > 1 && this.heap[parentIndex].key > newKey){
      this.heap[index] = this.heap[parentIndex];
      index = parentIndex;
      parentIndex = Math.floor(index / 2);
    }
    this.heap[index] = node;
  }
  insert(element, key){
    this.heap.push({element, key});
    this.decreaseKey(element, key);
  }
  isEmpty(){
    if(this.heap.length < 2){
      return true;
    }
    else{
      return false;
    }
  }
}