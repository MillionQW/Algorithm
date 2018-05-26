function quicksort(arr, left, right) {
    let index;

    if (arr.length > 1) {
        let index = partition(arr, left, right);

        if (left < index) {
            quicksort(arr, left, index - 1);
        }
        if (right > index) {
            quicksort(arr, index, right);
        }
    }
}

function partiion(arr, left, right) {
    let i = left, j = right;
    let pivot = arr[Math.floor(arr.length / 2)];

    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j++;
        }
        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}