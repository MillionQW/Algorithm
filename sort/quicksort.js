function quickSort(array, left, right) {
    let index;
    if (array.length > 1) {

        index = partition(array, left, right);

        if (left < index - 1) {
            quickSort(array, left, index - 1);
        } 
        if (right > index) {
            quickSort(array, index, right);
        }
    } else {
        return array;
    }

    

    function partition(array, left, right) {
        let pivot = array[Math.floor((right + left) / 2)];
        let i = left;
        let j = right;

        while (i <= j) {
            while (array[i] < pivot) {
                i++;
            }
            while (array[j] > pivot) {
                j--;
            }
            if (i <= j) {
                swap(array, i, j);
                i++;
                j--;
            }
        }
        return i;
    }

    function swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
} 

let arr = [3, 5, 1, 6, 4, 7, 2];
console.log(quickSort(arr, 0, arr.length-1));