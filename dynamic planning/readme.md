可以使用动态规划的情况有两个特征：
- 有最小边界；
- 有最优原子结构

把要求的最终问题转换为要解决他的子问题的子问题的子问题，抽出一个状态转移方程，得出最终问题的解。

如斐波那契数列
```
function fib(n) {
    if (n === 0) {
        return 0;
    }
    // 最小边界
    if (n === 1 || n === 2) {
        return 1;
    }
    // 最优原子结构
    return fib(n - 1) + fib(n - 2);
}
```

上面的方法容易理解，但是由于使用了递归，整个运算过程相当于一颗二叉树，且包含了很多重复计算的部分，算法复杂度为```O(n²)```

观察斐波那契数列可以发现除了前一项，后面其实是一个数列，可以利用自底向上叠加的方法得出最终的解。
```
function fib(n) {
    let sum = 0, a = 1, b = 1;
    if (n === 1 || n === 2) {
        return 1;
    }

    // 注意从3开始循环
    for (let i = 3; i <= n; i++) {
        sum = a + b;
        a = b;
        b = sum;
    }
    return sum;
    
}
```