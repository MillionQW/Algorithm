/* 题目描述
输入一个整数数组， 实现一个函数来调整该数组中数字的顺序， 
使得所有的奇数位于数组的前半部分， 所有的偶数位于数组的后半部分， 
并保证奇数和奇数， 偶数和偶数之间的相对位置不变。 */

function reOrderArray(array) {
    // write code here
    reOrderArrayRect(array, 0, arr.length-1);
}

function reOrderArrayRect(array, left, right) {
    if (left === right) return;
    mid = left + ((right - left) / 2 >> 0);

    reOrderArrayRect(array, left, mid);
    reOrderArrayRect(array, mid + 1, right);
    merge(array, left, mid, right);
}

function merge(array, left, mid, right) {
    let helper = [];
    let i = 0;
    let odd = left;
    let even = left;
    while (odd < right) {
        let num = array[odd];
        helper[i++] = (( num % 2 !== 0) ? array[odd++] : odd++);
    }
    while (even < right) {
        helper[i++] = array[odd] === 0 || array[even] % 2 === 0 ? array[even++] : even++;
    }
    for (let i = 0; i < helper.length - 1; i++) {
        array[left + i] = helper[i];
    }
}

let arr = [4,2];
reOrderArray(arr);
console.log(arr);