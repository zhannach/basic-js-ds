const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {


  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addNode(this.rootNode, data)

    function addNode(node, data) {
      if (!node) {
        return new Node(data)
      }

      if (node.data === data) {
        return node
      }
      if (data < node.data) {
        node.left = addNode(node.left, data)
      } else {
        node.right = addNode(node.right, data)
      }
      return node
    }
  }


  has(data) {
    return lookNode(this.rootNode, data)

    function lookNode(node, data) {
      if (!node) {
        return false
      }

      if (node.data === data) {
        return true
      }

      return data < node.data ? lookNode(node.left, data) :
        lookNode(node.right, data)
    }
  }


  find(data) {
    return lookNode(this.rootNode, data)

    function lookNode(node, data) {
      if (!node) {
        return null
      }

      if (node.data === data) {
        return node
      }

      return data < node.data ? lookNode(node.left, data) :
        lookNode(node.right, data)
    }
  }

  remove(data) {
    this.rootNode = deleteNode(this.rootNode, data)

    function deleteNode(node, data) {
      if (!node) {
        return null
      }
      if (data < node.data) {
        node.left = deleteNode(node.left, data)
        return node
      } else if (node.data < data) {
        node.right = deleteNode(node.right, data)
        return node
      } else {
        if (!node.left && !node.right) {
          return null
        }
      }

      if (!node.left) {
        node = node.right
        return node
      }

      if (!node.right) {
        node = node.left
        return node
      }

      let minRightNode = node.right
      while (minRightNode.left) {
        minRightNode = minRightNode.left
      }
      node.data = minRightNode.data
      node.right = deleteNode(node.right, minRightNode.data)

      return node
    }
  }
  min() {
    if (!this.rootNode) {
      return null
    }

    let node = this.rootNode
    while (node.left) {
      node = node.left
    }
    return node.data
  }

  max() {
    if (!this.rootNode) {
      return null
    }

    let node = this.rootNode
    while (node.right) {
      node = node.right
    }
    return node.data
  }
}

module.exports = {
  BinarySearchTree
};