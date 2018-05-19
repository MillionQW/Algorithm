let BST = require('./BinarySearchTree');
BST = BST.BST;

let tree = new BST();
let arr = [11, 7,  15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25, 6];

arr.forEach(item => {
    tree.insert(item);
})

let printNode = value => {
    console.log(value);
}

tree.preOrderTraverse(printNode);