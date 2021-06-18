class MaxHeap{
  constructor(){
    this.heap = [];
  }
  maxHeapfy(index){
    let leftIndex = 2 * index;
    let rigthIndex = 2 * index + 1;
    let largest; 
    if(leftIndex < this.heap.length && this.heap[leftIndex] > this.heap[index]){
      largest = leftIndex;
    }
    else{
      largest = index;
    }
    if(rigthIndex < this.heap.length && this.heap[rigthIndex] > this.heap[largest]){
      largest = rigthIndex;
    }
    if(largest !== index){
      let temp = this.heap[index];
      this.heap[index] = this.heap[largest];
      this.heap[largest] = temp;
      this.maxHeapfy(largest);
    }
  }
  buildMaxHeap(array){
    this.heap = [0, ...array];
    for(let i = Math.floor((this.heap.length - 1) / 2); i >= 1; i--){
      this.maxHeapfy(i);
    }
  }
  extractMax(){
    if(this.heap.length < 2){
      return 'empty';
    }
    let maxValue = this.heap[1];
    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.length--;
    this.maxHeapfy(1);
    return maxValue;
  }
  insert(data){
    this.heap.length++;
    let index = this.heap.length - 1;
    let parentIndex = Math.floor(index / 2);
    while(index > 1 && data > this.heap[parentIndex]){
      this.heap[index] = this.heap[parentIndex];
      index = parentIndex
      parentIndex = Math.floor(index / 2);
    }
    this.heap[index] = data;
  }
}

// test
let maxHeap = new MaxHeap();
let array = [2, 30, 15, 1, 5, 18, 6, 24, 20, 3];
maxHeap.buildMaxHeap(array);
maxHeap.extractMax();