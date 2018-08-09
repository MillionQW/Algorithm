let validateSort = require('./utils').validateSort;
let swap = require('./utils').swap;

function heapSort(arr) {
    if (arr.length < 2 || arr == null) return;

    for (let i = 0; i < arr.length; i++) {
        heapInsert(arr, i);
    }

    let size = arr.length;
    while(size > 0) {
        swap(arr, 0, --size);
        heapify(arr, 0, size);
    }
}

function heapInsert(arr, index) {
    while(arr[((index - 1) / 2) >> 0] < arr[index]) {
        swap(arr, ((index - 1) / 2) >> 0, index);
        index = ((index - 1) / 2) >> 0;
    }
}

function heapify(arr, index, size) {
    let left = index * 2 + 1;
    while(left < size) {
        let largest = left + 1 < size && arr[left] < arr[left + 1] ? left + 1 : left;
        largest = arr[largest] > arr[index] ? largest : index;
        if (largest == index) {
            return;
        } else {
            swap(arr, largest, index);
            index = largest;
            left = index * 2 + 1;
        }
    }
}

validateSort(heapSort);