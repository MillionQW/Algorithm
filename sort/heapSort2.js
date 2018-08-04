let swap = require('./utils').swap;
// let randomArr = require('./randomArr').randomArr;
let validateSort = require('./utils').validateSort;

let heapSort = function(arr) {
    if (arr.length < 2 || arr == null) return;
    for (let i = 0; i < arr.length; i++) {
        heapInsert(arr, i);
    }
    let size = arr.length;
    while(size > 0) {
        swap(arr, 0, --size)
        heapify(arr, 0, size);
    }
}

function heapInsert(arr, index) {
    // JS 中直接用 (index - 1) / 2 得出来的不是整数，会导致取不到数组上的数
    // java中 (2 - 1) / 2 = 0, js 中 (2 - 1) / 2 = 0.5
    while(arr[Math.floor((index - 1) / 2)] < arr[index]) {
        swap(arr, Math.floor((index - 1) / 2), index);
        index = Math.floor((index - 1) / 2);
    }
}

function heapify(arr, index, size) {
    let left = index * 2 + 1;
    while (left < size) {
        let largest = left + 1 < size && arr[left + 1] > arr[left] ? left + 1 : left;
        largest = arr[index] > arr[largest] ? index : largest;
        if (largest !== index) {
            swap(arr, index, largest);
            index = largest;
            left = index * 2 + 1;   
        } else {
            return;
        }
    }
}
// 设置对数器与系统中的排序做比较，测试是否通过
// for (let i = 0; i < 200; i++) {
//     let arr = randomArr();
//     let comparseArr = arr.concat();
//     let errorArr = arr.concat();
//     heapSort(arr);
//     comparseArr.sort();
//     arr.forEach((item, index) => {
//         if (item !== comparseArr[index]) {
//             console.log('排序不一致');
//             console.log(`数组：${errorArr}`);
//             console.log(`堆排序结果${arr}`);
//             console.log(`机排序结果${comparseArr}`);
//         }
//     })
// }
// console.log('测试通过');
validateSort(heapSort);

