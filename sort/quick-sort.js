function quickSort(A, p, r){
  if(p < r){
    let q = partition(A, p, r);
    quickSort(A, p, q);
    quickSort(A, q + 1, r);
  }
}
function partition(A, p, r){
  // choose a pivot.
  let pivot = A[p];
  let i = p - 1;
  let j = r + 1;
  while(true){
    do{
      j--;
    }while(A[j] > pivot)
    do{
      i++;
    }while(A[i] < pivot)
    if(i < j){
      let temp = A[i];
      A[i] = A[j];
      A[j] = temp;
    }
    else{
      return j;
    }
  }
}