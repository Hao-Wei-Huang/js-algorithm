# JS 撰寫演算法與資料結構

該 repo 為使用 JS 練習的演算法與資料結構

## Array
* 優點 : 
  1. 連續記憶體空間，利用 index 可在 O(1) 時間對 Array 的資料做搜尋或讀取。
  2. 較 linked list 節省記憶體空間。
* 缺點 :
  1. 資料的移動、插入、刪除需搬動所有元素，較為複雜。
  2. 空間有限制。
* 適用時機
  1. 記憶體空間使用量需較小。
  2. 需快速讀取與搜尋。
## Linked list
* 優點 : 
  1. 空間無限
  2. 較方便資料的新增、插入、刪除操作，僅需改變前後的 node pointer 方向即可。
* 缺點 :
  1. 不能透過索引，僅能從頭一個一個搜尋 O(n)。
  2. 需多花記憶體儲存指標。
* 適用時機 : 
  1. 資料大小不確定時。
  2. 需不斷新增、插入、刪除資料。
  3. 不須快速查詢資料 (double linked list 增加搜尋速度)。

## Stack
有 Last-In-First-Out (LIFO) 性質，可以紀錄先前的資訊，並可取出上一個資料，因此可有下列應用：
* 記錄歷史資訊，所以可以回到上一步、上一個工作等。
* 常用於程式的函式堆疊（call stack）
* 在 DFS 當中需紀錄先前的點位，也會應用到 stack。
* 由於遞迴是使用 call stack，因此所有的遞迴都可以改用 stack 實作。

stack 只是一種方法與概念，並不限於使用何種方式實作，因此可使用 array 與 linked list 兩種資料結構實作。

程式檔案名稱如下：
* array-stack.js
* linked-list-stack.js

## Queue
有 First-In-First-Out (FIFO) 性質，會將資料照順序排列並取出，常使用於排程上的應用：

* 一次只能執行一個程式時，需要 queue 來排序多個程式的執行順序(ex : event queue)
* Tree 的 level order traversal 使用 queue 進行運算。

Queue 只是一種方法與概念，並不限於使用何種方式實作，因此可使用 array 與 linked list 兩種資料結構實作。

程式檔案名稱如下：
* array-stack.js
* linked-list-stack.js

為了節省 array queue 記憶體的浪費，因此實作 circular queue 重複利用記憶體空間，雖然記憶體為線性排列，但當記憶體到底部時又會再繞回從頭開始存取，所以為環狀的概念。

程式檔案名稱如下：
* circular-queue.js

## Priority Queue

* Priority 代表資料會有優先權之分，因此 Priority Queue 會藉由優先權大小排列。
* 可以有許多資料結構可以實作，該程式使用 Binary Heap 實作。
* 實作結構有兩個：
  * Min-Priority Queue
  * Max-Priority Queue


## Set
性質：
* 資料無順序關係，每個集合會有 root。
* 資料皆唯一不會重複
## Sort

項目 | Insertion sort | Merge sort | Quick sort | Heap sort 
--- | :---: | :---: | :---: |:---:
Best case    | N | NlogN | NlogN | NlogN 
Average case | N^2^ | NlogN | NlogN | NlogN
Worst case   | N^2^ | NlogN | N^2^ | NlogN
Stable       | Yes | Yes | No | No
In-place     | Yes | No | Yes | Yes

## Binary Search Tree

### 定義
* 每個 node 最多只有兩個 child 的樹為 Binary Tree( 二元樹 )，並稱兩個 child 為 left child 和 right child。
* root node 會大於 left child，小於 right child。


### 性質
1. node 的索引值
    * 第i個node的left child之index為 2i
    * 第i個node的right child之index為 2i+1
    * 除了root之parent為NULL之外，第i個node的parent之index為 ⌊$\dfrac{i}{2}$⌋
2. node 的數量
    * the maximum number of nodes on level i of a binary tree is $2^{i-1}$
    * the maximum number of nodes in a binary tree of height h is $2^{h+1}-1$
    * $n_{0}$=$n_{2}+1$，下標為 degree
3. Full & Complete Binary Tree
    * Full Binary Tree : level 全滿。
    * Complete Binary Tree : 沒有全滿，但他依順序填滿，並無跳索引值。

### 實作方法

* Insert
* Search
* Delete
* Traversal
  * Pre-Order
  * In-Order
  * Post-Order
  * Level-Order

其中實作方法又分為 recursive 和 nonrecursive。

## Graph

### 概念

* Graph 是與空間有關的資料結構，讓資料有先後與距離的概念。
* Graph 包含 Tree，差別在於 「 cycle 」。
* Graph 分為有無方向，有無權重。

### 實作方法

實作都是以 Adjacency List 結構

* BFS - 廣度優先搜尋
* DFS - 深度優先搜尋

## Shortest Path

計算某一點到各點的最短距離，實作兩個演算法：

* Dijkstra's Algorithm
  * 權重有「負值」時，不可使用，cycle 可以。
  * 不同結構實作 Min-Priority Queue時間複雜度也會不同，這邊以 Binary Heap 實作 Min-Priority Queue，時間複雜度為 O((E+V)logV)。
* Bellmem-Ford Algorithm
  * Negative cycle 時，不能使用。
  * 時間複雜度：O(VE)。

