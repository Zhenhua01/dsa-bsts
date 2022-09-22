class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): Insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }

    let current = this.root;

    while (current) {
      if (val < current.val) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = new Node(val);
          return this;
        }
      }

      if (val > current.val) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = new Node(val);
          return this;
        }
      }

    }

  }

  /** insertRecursively(val): Insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }

    if (val < current.val) {
      if (current.left) {
        this.insertRecursively(val, current.left);
      } else {
        current.left = new Node(val);
        return this;
      }
    }

    if (val > current.val) {
      if (current.right) {
        this.insertRecursively(val, current.right);
      } else {
        current.right = new Node(val);
        return this;
      }
    }
  }

  /** find(val): Search the tree for a node with value val.
   * Return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;

    while (current) {
      if (current.val === val) return current;

      current = (val < current.val ? current.left : current.right);
    }
  }

  /** findRecursively(val): Search the tree for a node with value val.
   * Return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (!current) return undefined;
    if (current.val === val) return current;

    let move = (val < current.val ? current.left : current.right);
    return this.findRecursively(val, move);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root, visited = []) {
    if (!node) return visited;
    visited.push(node.val);
    this.dfsPreOrder(node.left, visited);
    this.dfsPreOrder(node.right, visited);

    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root, visited = []) {
    if (!node) return visited;
    this.dfsInOrder(node.left, visited);
    visited.push(node.val);
    this.dfsInOrder(node.right, visited);

    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root, visited = []) {
    if (!node) return visited;
    this.dfsPostOrder(node.left, visited);
    this.dfsPostOrder(node.right, visited);
    visited.push(node.val);

    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let toVisitQueue = this.root ? [this.root] : [];

    let visited = [];
    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();
      visited.push(current.val);

      if (current.left) toVisitQueue.push(current.left);
      if (current.right) toVisitQueue.push(current.right);
    }
    return visited;
  }

  /** findSuccessorNode(): Find the node with the next largest value.
   * Return successor node or undefined if not found. */

  findSuccessorNode(node, current = this.root, max = Infinity) {
    //check if current.val <= node
    //if true, move right, if > move to left, compare to max and save if < max
    //repeat
    if (current.val <= node.val) {
      if(!current.right) return undefined;
      return this.findSuccessorNode(node, current.right);
    }

    if (current.val > node.val) {
      if(!current.left) return current;
      return this.findSuccessorNode(node, current.left);
    }
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }
}

module.exports = {
  BinarySearchTree,
  Node,
};
