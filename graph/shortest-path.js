class Graph{
  constructor(vertexSize){
    this.vertexSize = vertexSize;
    this.predecessor = [];
    this.distance = [];
    this.adjList = new Array(vertexSize).fill(0);
    for(let i = 0; i < this.adjList.length; i++){
      this.adjList[i] = new Array();
    }
  }
  addEdge(from, to, weight){
    this.adjList[from].push({vertex: to, weight:weight});
  }
  relax(from, to, weight){
    if(this.distance[to] > this.distance[from] + weight){
      this.distance[to] = this.distance[from] + weight;
      this.predecessor[to] = from;
    } 
  }
  bellmanFord(start){
    // 初始化
    this.predecessor = [];
    this.distance = [];
    for(let i = 0; i < this.vertexSize; i++){
      this.distance[i] = Infinity;
      this.predecessor[i] = -1;
    }
    this.distance[start] = 0;
    // v-1 loop
    for(let i = 0; i < this.vertexSize - 1; i++){
      // all edges
      for(let j = 0; j < this.vertexSize; j++){
        let u = this.adjList[j];
        for(let k = 0; k < u.length; k++){
          this.relax(j, u[k].vertex, u[k].weight);
        }
      }
    }
    // check if there is negative cycle
    for(let i = 0; i < this.vertexSize; i++){
      let u = this.adjList[i];
      for(let j = 0; j < u.length; j++){
        if(this.distance[u[j].vertex] > this.distance[i] + u[j].weight){
          return false;
        }
      }
    }
    return true
  }
  dijkstra(start){
    // 初始化
    this.predecessor = [];
    this.distance = [];
    for(let i = 0; i < this.vertexSize; i++){
      this.distance[i] = Infinity;
      this.predecessor[i] = -1;
    }
    this.distance[start] = 0;
    let minHeap = new MinHeap();
    minHeap.buildMinHeap(this.distance);
    while(!minHeap.isEmpty()){
      let u = minHeap.extractMin();
      let v = this.adjList[u];
      for(let i = 0; i < v.length; i++){
        this.relax(u, v[i].vertex, v[i].weight);
        minHeap.decreaseKey(v[i].vertex, this.distance[v[i].vertex]);
      }
    }
  }
}

// test
// bell
let graph = new Graph(6);
graph.addEdge(0, 1, 5);
graph.addEdge(1, 4, -4);graph.addEdge(1, 2, 6);
graph.addEdge(2, 4, -3);graph.addEdge(2, 5, -2);
graph.addEdge(3, 2, 4);
graph.addEdge(4, 3, 1);graph.addEdge(4, 5, 6);
graph.addEdge(5, 0, 3);graph.addEdge(5, 1, 7);

if(graph.bellmanFord(0)){
  console.log(graph);
  console.log('not negative cycle');
}
else{
  console.log('negative cycle');
}

// dijkstra
// let graph = new Graph(6);
// graph.addEdge(0, 1, 8);graph.addEdge(0, 5, 1);
// graph.addEdge(1, 0, 3);graph.addEdge(1, 2, 1);
// graph.addEdge(2, 0, 5);graph.addEdge(2, 3, 2);graph.addEdge(2, 4, 2);
// graph.addEdge(3, 1, 4);graph.addEdge(3, 2, 6);graph.addEdge(3, 4, 7);graph.addEdge(3, 5, 3);
// graph.addEdge(5, 3, 2);graph.addEdge(5, 4, 8);
// graph.dijkstra(0);
// console.log(graph);