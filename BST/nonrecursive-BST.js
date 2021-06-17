class Node{ 
  constructor(data){ 
    this.data = data; 
    this.left = null; 
    this.right = null; 
  } 
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }
  insert(data){
    let newNode = new Node(data);
    if(this.root === null){
      this.root = newNode;
      return;
    }
    let currentNode = this.root;
    while(1){
      if(newNode.data < currentNode.data){
        if(currentNode.left === null){
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      }
      else{
        if(currentNode.right === null){
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }
  search(data){
    let currentNode = this.root;
    while(currentNode){
      if(data === currentNode.data){
        return currentNode;
      }
      else if(data < currentNode.data){
        currentNode = currentNode.left;
      }
      else{
        currentNode = currentNode.right;
      }
    }
    return null;
  }
  delete(data){
    let currentNode = this.root;
    let parentNode = null;
    while(currentNode){
      if(data === currentNode.data){
        // case1
        if(currentNode.left === null && currentNode.right === null){
          if(this.root !== currentNode){
            if(currentNode === parentNode.left){
              parentNode.left = null;
            }
            else{
              parentNode.right = null;
            }
          }
          else{
            this.root = null;
          }
        }
        // case2
        else if(currentNode.left === null){
          currentNode.data = currentNode.right.data;
          currentNode.right = currentNode.right.right;
          currentNode.left = currentNode.right.left;
        }
        else if(currentNode.right === null){
          currentNode.data = currentNode.left.data;
          currentNode.right = currentNode.left.right;
          currentNode.left = currentNode.left.left;
        }
        // case3
        else{
          let successorNode = this.findMinNode(currentNode.right);
          let successorData = successorNode.data;
          this.delete(successorData);
          currentNode.data = successorData;
        }
        break;
      }
      else if(data < currentNode.data){
        parentNode = currentNode;
        currentNode = currentNode.left;
      }
      else{
        parentNode = currentNode;
        currentNode = currentNode.right;
      }
    }
  }
  findMinNode(node){
    if(node === null){
      return;
    }
    while(node.left){
      node = node.left;
    }
    return node;
  }
  preorder(node){
    let stack = [];
    let currentNode = node;
    while(1){
      while(currentNode){
        console.log(currentNode.data);
        stack.push(currentNode);
        currentNode = currentNode.left;
      }
      if(stack.length){
        currentNode = stack.pop();
        currentNode = currentNode.right;
      }
      else{
        break;
      }
    }
  }
  inorder(node){
    let stack = [];
    let currentNode = node;
    while(1){
      while(currentNode){
        stack.push(currentNode);
        currentNode = currentNode.left;
      }
      if(stack.length){
        currentNode  = stack.pop();
        console.log(currentNode.data); // V
        currentNode = currentNode.right; // R
      }
      else{
        break;
      }
    }
  }
  postorder(node){
    let stack = [];
    let currentNode = node;
    let visit = [];
    while(1){
      while(currentNode){
        stack.push(currentNode);
        // L
        currentNode = currentNode.left;
      }
      while(stack.length){
        currentNode = stack[stack.length - 1];
        if(visit.indexOf(currentNode.data) === -1){
          visit.push(currentNode.data);
          // R
          currentNode = currentNode.right;
          break;
        }
        else{
          currentNode = stack.pop();
          // V
          console.log(currentNode.data);
        }
      }
      if(!stack.length){
        return;
      }
    }
  }
  levelorder(){
    if(this.root === null){
      return;
    }
    let queue = [];
    queue.push(this.root);
    while(queue.length){
      let currentNode = queue.shift();
      console.log(currentNode.data);
      if(currentNode.left !== null){
        queue.push(currentNode.left);
      }
      if(currentNode.right !== null){
        queue.push(currentNode.right);
      }
    }
  }
}

// test
let BST = new BinarySearchTree();
BST.insert(22);
BST.insert(30);
BST.insert(10);
BST.insert(6);
BST.insert(20);
BST.insert(40);
BST.insert(2);
BST.insert(1);
BST.insert(12);
BST.insert(27);
BST.insert(21);
BST.insert(35);
BST.insert(42);

BST.inorder(BST.root);
// BST.preorder(BST.root);
// BST.postorder(BST.root);
// BST.delete(22);
// BST.levelorder();