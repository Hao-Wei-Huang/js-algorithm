// Node class 
class Node 
{ 
  constructor(data) 
  { 
    this.data = data; 
    this.left = null; 
    this.right = null; 
  } 
}

// Binary Search tree class 
class BinarySearchTree 
{ 
  constructor() 
  { 
    // root of a binary seach tree 
    this.root = null; 
  }
  insert(data){
    let newNode = new Node(data);
    // root is null
    if(this.root == null){
      this.root = newNode;
    }
    // insert node
    else{
      this.insertNode(this.root, newNode);
    }
  };
  insertNode(node, newNode){
    // new data < current data
    if(newNode.data < node.data){
      if(node.left == null){
        node.left = newNode;
      }
      else{
        this.insertNode(node.left, newNode);
      }
    }
    // new data > current data
    else{
      if(node.right == null){
        node.right = newNode;
      }
      else{
        this.insertNode(node.right, newNode);
      }  
    }
  };
  search(data){
    return this.searchNode(this.root, data);
  }
  searchNode(node, data){
    if(node == null){
      return null;
    }
    else{
      if(data === node.data){
        return node;
      }
      else if(data < node.data){
        return this.searchNode(node.left, data);
      }
      else{
        return this.searchNode(node.right, data);
      }
    }
  }
  delete(data){ 
    this.root = this.deleteNode(this.root, data);
  }
  deleteNode(node, data){
    if(node === null){
      return null;
    }
    else if(data < node.data){
      node.left = this.deleteNode(node.left, data);
      return node;
    }
    else if(data > node.data){
      node.right = this.deleteNode(node.right, data);
      return node;
    }
    // Find target node
    else{
      // case1
      if(node.left === null && node.right === null){
        node = null;
        return node;
      }
      // case2
      else if(node.left === null){
        node = node.right;
        return node;
      }
      else if(node.right === null){
        node = node.left;
        return node;
      }
      // case3
      else{
        let successor = this.findMinNode(node.right);
        node.data = successor.data;
        node.right = this.deleteNode(node.right, successor.data);
        return node;
      }
    }
  }
  findMinNode(node){
    if(node === null){
      return null;
    }
    else{
      if(node.left === null){
        return node;
      }
      return this.findMinNode(node.left);
    }
  }
  preorder(node){
    if(node !== null){
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }
  inorder(node){
    if(node !== null){
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }
  postorder(node){
    if(node !== null){
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
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
BST.levelorder();
// BST.inorder(BST.root);
// BST.preorder(BST.root);
// BST.postorder(BST.root);
//BST.delete(22);
//BST.levelorder();
//console.log('-------')
//console.log('-------');