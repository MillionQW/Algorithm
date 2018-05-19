// 搜索树的特性是：左子节点 < 中子节点 <= 右子节点

function BinarySearchTree() {
    let Node = function(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };
    
    let root = null;

    /* 插入 */
    this.insert = function(key) {
        let newNode = new Node(key);
        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    }

    let insertNode = function(node, newNode) {
        // 新节点 小于 旧节点
        if (newNode.key < node.key) {
            if(node.left === null) {
                node.left = newNode;
            } else {
                // 非空则以左节点为“根节点”开始递归，最终就像一颗珠子往下落一样落到了某一个节点上还空着的位置上
                insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    }

    this.inOrderTraverse = function(callback) {
        inOrderTraverseNode(root, callback)
    }

    let inOrderTraverseNode = function(node, callback) {
        if (node !== null) {
            // 一直往下往下往下，下到最左边的叶节点
            inOrderTraverseNode(node.left, callback);
            
            callback(node.key);
            inOrderTraverseNode(node.right, callback);
        }
    }

    this.preOrderTraverse = function(callback) {
        preOrderTraverseNode(root, callback);
    }

    let preOrderTraverseNode = function(node, callback) {
        if (node !== null) {
            callback(node.key);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
        }
    }

    this.postOrderTraverse = function(callback) {
        postOrderTraverseNode(root, callback);
    }

    let postOrderTraverseNode = function(node, callback) {
        if (node !== null) {
            postOrderTraverseNode(node.left, callback);
            postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }
}

module.exports = exports = {
    BST: BinarySearchTree
}