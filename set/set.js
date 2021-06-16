class Set{
  constructor(){
    this.set = [];
  }
  findSet(x){
    let root = x;
    while(this.set[root] >= 0){
      root = this.set[root];  
    }
    // collapsing
    // while(x !== root){
    //   let parent = this.set[x];
    //   this.set[x] = root;
    //   x = parent;
    // }

    return root;
  }
  unionSet(x, y){
    let xRoot = this.findSet(x);
    let yRoot = this.findSet(y);
    // xroot 與 yroot 都為負值，合併後以數量多的當 root
    if(this.set[xRoot] <= this.set[yRoot]){
      this.set[xRoot] += this.set[yRoot];
      this.set[yRoot] = xRoot;
    }
    else{
      this.set[yRoot] += this.set[xRoot];
      this.set[xRoot] = yRoot;
    }
  }
}

// test
let set = new Set();
set.set = [-1, -1, -1, -1, -1, -1];
set.unionSet(1, 2);
set.unionSet(0, 2);
set.unionSet(3, 5);
set.unionSet(2, 5);
console.log(set.set);
