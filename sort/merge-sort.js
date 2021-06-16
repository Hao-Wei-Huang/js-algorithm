function mergeSort(A, p, r){
  if(p < r){
    let q = Math.floor((r + p) / 2);
    mergeSort(A, p, q);
    mergeSort(A, q + 1, r);
    merge(A, p, q, r);
  }
}
function merge(A, p, q, r){
  let L = A.slice(p, q + 1);
  L.push(Infinity);
  let R = A.slice(q + 1, r + 1);
  R.push(Infinity);
  let i = 0;
  let j = 0;
  for(let k = p; k <= r; k++){
    if(L[i] <= R[j]){
      A[k] = L[i];
      i++;
    }
    else{
      A[k] = R[j];
      j++
    }
  }
}