function quickSort(arr, left, right) {
    if (left < right) {
        random = Math.floor(left + Math.random() * (right - left + 1));
        swap(arr, random, right);
        // p 算出来是一个数组，p[0]是比较值开始的位置，p[1]是比较值结束的位置
        let p = partition(arr, left, right);
        // 小区的快排
        quickSort(arr, left, p[0] - 1);
        // 大区的快排 比较值不需要参与快排
        quickSort(arr, p[1] + 1, right);
    }
}

function partition(arr, left, right) {
    let less = left - 1;
    let more = right;
    while (left < more) {
        // 小于比较值就 ++less, 大于比较值就 --more，且指针left不移位
        if (arr[left] < arr[right]) {
            swap(arr, ++less, left++);
        } else if (arr[left] > arr[right]) {
            swap(arr, --more, left);
        } else {
            left++;
        }
    }
    // 把最后一位与大区的第一位交换（因为最后一位是比较值）
    swap(arr, more, right);
    // 返回等于区域的下标是哪一段到哪一段
    return [less+1, more];
}

function swap(arr, left, right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}

let arr = [5,7,2,4,6];
quickSort(arr, 0, arr.length-1);
console.log(arr);