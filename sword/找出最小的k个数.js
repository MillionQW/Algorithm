// 输入n个整数，找出其中最小的K个数。例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,。

function GetLeastNumbers_Solution(arr, k) {
    if (arr.length < k) return [];
    // k 最后被减到0，为了割数组，要把 k 存起来
    let s = k;
    for (let i = 0; i < arr.length; i++) {
        heapInsert(arr, i);
    }
    let size = arr.length;
    while (size > 0 && k > 0) {
        swap(arr, 0, --size);
        heapify(arr, 0, size);
        k--;
    }

    
    return arr.slice(arr.length - s);
}

function heapInsert(arr, index) {
    while (arr[((index - 1) / 2) >> 0] > arr[index]) {
        swap(arr, ((index - 1) / 2) >> 0, index);
        index = ((index - 1) / 2) >> 0;
    }
}

function heapify(arr, index, size) {
    let left = index * 2 + 1;
    while (left < size) {
        let smallest = left + 1 < size && arr[left + 1] < arr[left] ? left + 1 : left;
        smallest = arr[smallest] < arr[index] ? smallest : index;
        if (smallest !== index) {
            swap(arr, smallest, index);
            index = smallest;
            left = index * 2 + 1;
        } else {return;}
    }
}

function swap(arr, left, right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}

console.log(GetLeastNumbers_Solution([4, 3, 2, 1,5,8,9,7,4,12,0], 4))
