function insertionSort(A){
  for(let i = 1; i < A.length; i++){
    let key = A[i];
    let j = i - 1;
    while(j >=0 && key < A[j]){
      A[j + 1] = A[j];
      j--;
    }
    A[j + 1] = key;
  }
}