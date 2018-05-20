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

    this.remove = function(key) {
        root = removeNode(root, key)
    }

    removeNode = function(node, key) {
        // 第一种情况：本来就没有树，返回 null
        if (node === null) return null;

        // 当要删除的值还没找到时，if 分支和 else-if 其实只是在一直递归
        if (key < node.key) {
            node.left = removeNode(node.left, key);
            return node;
        } else if (key > node.key) {
            node.right = removeNode(node.right, key);
            return node;
        } else { // 找到节点的情况
            // 度为0（没有子节点），直接置空然后返回
            if (node.left === null && node.right === null) {    
                node = null;
                return node;
            // 只有一个节点的情况
            } else if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            // 两个节点都存在的情况
            } else {
                let aux = findMinNode(node.right);
                node.key = aux.key;
                node.right = removeNode(node.right, aux.key);
                return node;
            }
        }
        return node;
    }

    findMinNode = function(node) {
        while (node && node.left !== null) {
            node = node.left;
        }
        return node;
    }
}

module.exports = exports = {
    BST: BinarySearchTree
}