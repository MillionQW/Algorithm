## 快速排序
快速排序的思想就是，选定一个pivot，第一轮后，我要让比pivot小的在pivot左边，比他他的要在他右边，然后两边去递归。   
虽然第一次我们找数组中间的那个值作为pivot，但是一次循环下来后，并不按pivot为临界点分割。
步骤：
1. 找数组中间的那个值为pivot（或者随机找，不考虑第一位的原因是如果是一个排序快完成的列表，性能会很差）；
2. 以 i 为左指针递增， j 为右指针递增；
3. 当 i 走到 array[i] 大于等于 pivot 时停下，（代码中是 ```while (array[i] > pivot) { i++ }``` 所以跳出 while 循环时 array[i] 就是那个大于等于 pivot 的数）；
4. 当 i 走到 array[i] 大于等于 pivot 时停下，（代码中是 ```while (array[j] < pivot) { j-- }``` 所以跳出 while 循环时 array[j] 就是那个小于等于 pivot 的数）；
5. i, j 确定后，看看 i 是不是还小于等于 j ，是就 ```swap(array, left, right)```；
6. 再走一个3, 4步骤，跳出 3, 4后，如果 i 已经大于等于 j 则不 swap，返回 i 现在的索引。
7. 以 i 的索引为分界，分割两个数组去递归；

## 冒泡排序、选择排序、插入排序
冒泡排序：一个数遍历整个数组，在比较中如果他大于被比较的数，就换位置，循环下来完成排序。 
冒泡最好的时间复杂度是O(n)，就是在使用双向冒泡的时候。  
选择排序：找出整个数组中最小的数，放最前面，再选第二小，放第二位...时间复杂度是O(n²)（最好最坏都是O(n²)，因为都要遍历一次。）  
插入排序是增加一个空数组，先丢一个进去，丢第二个的时候跟第二个比较，大的放后面小的放前面，第三个进来就遍历已有数字，看插在谁的后面。最好的时间复杂度是O(n)，刚好丢进去不用比较。  
这三个排序方法性能都不好，且O(n)都是在排序基本完成的情况下，那就没什么意义。

## 归并排序
归并排序是利用递归，将数组分为两部分，这两部分分别递归，最后把两个已经排好序的数组再做比较，合并成一个数组。   
归并排序需要三个函数，一个归并函数，一个负责递归的函数，一个辅助合并的函数，参数都是数组  
1. 创造一个归并排序函数；
```
function mergeSort() {
    mergeSortRec();
}
```
2. 创造一个负责拆分数组的递归函数；
```
function mergeSortRec() {
    let length = arr.length;
    if (length === 1) return arr;

    let mid = Math.floor(length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, length);
    return merge(mergeSortRec(left), mergeSortRec(right));
}
```
3. 递归函数里有一个 ```merge(arr1, arr2)```，比较arr1，arr2，小的就放进一个数组，最后返回一个排好序的数组。  
``` 
function merge(leftArr, rightArr) {
    let result = [];
    let il = 0, ir = 0;
    let ilLength = leftArr.length;
    let irLength = rightArr.length;
    while (il < ilLength && ir < irLength) {
        if (leftArr[il] < rightArr[ir]) {
            result.push(leftArr[il]);
            il++;
        } else {
            result.push(rightArr[ir]);
            ir++;
        }
    }
    while(il < ilLength) {
        result.push(leftArr(il));
        il++;
    }
    while(ir < irLength) {
        result.push(rightArr(ir));
        ir++;
    }
    return result;
}
```
归并排序和堆排序的最好最坏时间复杂度都是O(nlogn)。

## 堆排序
堆排序将数组当作二叉树来排序，基于以下前提：
- 索引0是树的根节点
- 除根节点外，其他节点的父节点都是```N-1/2```
- 节点L的左子节点是```2*L+1```
- 节点R的右子节点是```2*R+2```

先把数组排成一个大顶堆（父节点必大于左右子节点，这样最大的数必在根节点），将根节点与最尾的节点交换，然后把最结尾的节点断开，再排成大顶堆，再交换再断开再排，最后就是一个升序的数组。

### 代码思路
1. 需要有一个```heapify(arr, length, i)```，作用是能以传入的 ```i``` 节点为根节点，检查左右子节点大小，若小于子节点就记下子节点位置，交换位置。然后继续以子节点位置向下递归，排列成大顶堆的格式。
```
function heapify(arr, length, i) {
    let left = i * 2 + 1;
    let right = i * 2 + 2;
    let largest = i;
    if (i < length && arr[left] > arr[i]) {
        largest = left;
    }
    if (i < length && arr[right] > arr[i]) {
        largest = right;
    }
    if (i !== largest) {
        swap(arr, i, largest);
        heapify(arr, length, largest);
    }
}
```
2. 有一个```buildHeap()```用于构造大顶堆，需要用到```heapify(arr, length, i)```，```buildHeap()```的作用是以数组长度的一半为起始点（这个点很巧妙，在二叉树中这个点刚好是第一个叶子节点）开始，```i--```往上检查，判断子树是不是一个大顶堆，不是就调用```heapify(arr, length, i)```交换位置。由于是从最底下的子树开始检查的，所以不会出现```heapify(arr, length, i)```换好位置后往下检查，把比子节点还大的孙子节点换上来后，不能跟子树的根节点交换的情况（写得有点复杂）。
```
function buildHeap() {
    let length = arr.length;
    for(let i = Math.floor(arr.length / 2); i >= 0; i--) {
        heapify(arr, length, i);
    }
}
```
3. 排成大顶堆后，将数组最后一位与第一位交换。对数组长度减一传入```heapify(arr, length-1, 0)```（因为最后一位不加入排顶堆，要不又排最前面了），再构成大顶堆，循环到数组长度剩下1，数组就变成了一个升序数组。
```
while(length > 1) {
    length--;
    swap(arr, 0, length);
    heapily(arr, length, 0)
}
```