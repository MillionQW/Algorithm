let BST = require('./BinarySearchTree');
BST = BST.BST;

// tree 只是一个有两个方法的对象，那么 树是保存在哪里呢？
// 答：在root上
let tree = new BST();
let arr = [11, 7, 15, 5, 3, 9, 8, 10, ,13, 12 ,14, 20 ,18, 25];

arr.forEach(item => {
    tree.insert(item);
})

let printNode = value => {
    console.log(value);
}

tree.inOrderTraverse(printNode);


