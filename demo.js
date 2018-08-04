let swap = require('./utils').swap;
// let randomArr = require('./randomArr').randomArr;
let validateSort = require('./utils').validateSort;

function quickSort(arr, left, right) {
    right = right === arr.length ? right - 1 : right;
    if (left < right) {
        let random = Math.floor(left + Math.random() * (right - left + 1));
        swap(arr, random, right - 1);
        let p = partition(arr, left, right);
        quickSort(arr, left, p[0] - 1);
        quickSort(arr, p[1] + 1, right);
    }
}

function partition(arr, left, right) {
    let less = left - 1;
    let more = right;
    while(left < more) {
        if (arr[left] < arr[right]) {
            swap(arr, ++less, left++);
        } else if (arr[left] > arr[right]) {
            swap(arr, --more, left);
        } else {
            left++;
        }
    }
    swap(arr, more, right);
    return [less + 1, more];
}

// // 设置对数器与系统中的排序做比较，测试是否通过
// for (let i = 0; i < 200; i++) {
//     let arr = randomArr();
//     let comparseArr = arr.concat();
//     let errorArr = arr.concat();
//     quickSort(arr, 0, arr.length);
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
validateSort(quickSort);