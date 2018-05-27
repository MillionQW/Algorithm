let swap = require('./utils').swap;

Array.prototype.heapSort = function() {
    let arr = this;
    let length = arr.length;
    buildHeap();

    while(length > 1) {
        length--;
        swap(arr, 0, length);
        heapily(arr, length, 0)
    }
}
function buildHeap() {
    let length = arr.length;
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
        heapily(arr, length, i);
    }
}


function heapily(arr, length, i) {
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
        swap(arr, i, largest);
        heapily(arr, length, largest);
    }
}

let arr = [3, 5, 1, 6, 4, 7, 2];
arr.heapSort();
console.log(arr);