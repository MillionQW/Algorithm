let swap = require('./utils').swap;

Array.prototype.heapSort = function() {
    let arr = this;
    let length = arr.length;
    buildHeap(arr);

    while(length > 1) {
        length--;
        swap(arr, 0, length);
        heapify(arr, length, 0);
    }
}

function buildHeap(arr) {
    let length = arr.length;
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
        heapify(arr, length, i);
    }
}

function heapify(arr, length,  i) {
    let left = i * 2 + 1;
    let right = i * 2 + 2;
    let largest = i;
    if (left < length && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < length && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest !== i) {
        swap(arr, largest, i);
        heapify(arr, length, largest);
    }
}

let arr = [2,4,6,9,3,6,3]
arr.heapSort();
console.log(arr);