function swap(arr, left ,right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}

module.exports = {
    swap: swap
}