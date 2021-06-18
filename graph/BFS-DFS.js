class Graph{
  constructor(vertexSize){
    this.vertexSize = vertexSize;
    this.adjList = new Array(vertexSize).fill(0);
    for(let i = 0; i < this.adjList.length; i++){
      this.adjList[i] = new Array();
    }
    this.color = [];
    this.predecessor = [];
    this.distance = [];
    this.discover = [];
    this.finish = [];
    this.time = 0;
  }
  addEdgeList(from, to){
    this.adjList[from].push(to);
  }
  BFS(start){
    // 初始化
    this.color = [];
    this.predecessor = [];
    this.distance = [];
    for(let i = 0; i < this.vertexSize; i++){
      this.color[i] = 0; // 0:白色, 1:灰色, 2:黑色
      this.predecessor[i] = null;
      this.distance[i] = Infinity; // 預設為 Infinity，因為可能有頂點未與起點連接
    }

    let queue = [];
    let i = start;
    for(let j = 0; j <= this.vertexSize; j++){
      // 起始點
      if(this.color[i] === 0){
        this.color[i] = 1;
        this.predecessor[i] = null;
        this.distance[i] = 0;
        queue.push(i)
      }
      while(queue.length){
        let v = queue[0];
        let vAdjList = this.adjList[v];
        for(let k = 0; k < vAdjList.length; k++){
          let u = vAdjList[k];
          if(this.color[u] === 0){
            this.color[u] = 1;
            this.predecessor[u] = v;
            this.distance[u] = this.distance[v] + 1;
            queue.push(u);
          }
        }
        queue.shift();
        this.color[v] = 2;
      }
      // graph 內有多個 connected component
      i = j;
    }
  }
  DFS(start){
    // 初始化
    this.color = [];
    this.predecessor = [];
    this.distance = [];
    this.discover = [];
    this.finish = [];
    this.time = 0;
    for(let i = 0; i < this.vertexSize; i++){
      this.color[i] = 0;
      this.predecessor[i] = null;
      this.distance[i] = Infinity;
      this.discover[i] = 0; 
      this.finish[i] = 0;
    }

    let i = start;
    for(let j = 0; j <= this.vertexSize; j++){
      if(this.color[i] === 0){
        this.distance[i] = 0;
        this.DFSVisit(i);
      }
      i = j
    }
  }
  DFSVisit(vertex){
    this.color[vertex] = 1;
    this.discover[vertex] = ++this.time;
    let vAdjList = this.adjList[vertex];
    for(let k = 0; k < vAdjList.length; k++){
      let u = vAdjList[k];
      if(this.color[u] === 0){
        this.predecessor[u] = vertex;
        this.distance[u] = this.distance[vertex] + 1;
        this.DFSVisit(u);
      }
    }
    this.color[vertex] = 2;
    this.finish[vertex] = ++this.time;
  }
}

// test
let graph = new Graph(8);
graph.addEdgeList(0, 1);graph.addEdgeList(0, 2);
graph.addEdgeList(1, 3);
graph.addEdgeList(2, 1);graph.addEdgeList(2, 5);
graph.addEdgeList(3, 4);graph.addEdgeList(3, 5);
graph.addEdgeList(5, 1);
graph.addEdgeList(6, 4);graph.addEdgeList(6, 7);
graph.addEdgeList(7, 6);
graph.BFS(0);
// graph.DFS(0);
console.log(graph);