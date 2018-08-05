const validateSort = require('../utils').validateSort;

function mergeSort(arr) {
    if (arr.length < 2 || arr == null) return;
    mergeSortRect(arr, 0, arr.length - 1);
}

function mergeSortRect(arr, left, right) {
    if (left == right) return;
    
    let mid = left + ((right - left) >> 1);
    mergeSortRect(arr, left, mid);
    mergeSortRect(arr, mid + 1, right);
    merge(arr, left, mid, right);
}

function merge(arr, left, mid, right) {
    let help = [];
    let i = 0;
    let p1 = left;
    let p2 = mid + 1;
    while(p1 <= mid && p2 <= right) {
        help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++];
    }
    while(p1 <= mid) {
        help[i++] = arr[p1++];
    }
    while(p2 <= right) {
        help[i++] = arr[p2++];
    }
    for(i = 0; i < help.length; i++) {
        arr[left + i] = help[i];
    }
}

validateSort(mergeSort);