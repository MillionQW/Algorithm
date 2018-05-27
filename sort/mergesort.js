Array.prototype.mergeSort = function() {
    let arr = this;
    return mergeSortRec(arr);
}

function mergeSortRec(arr) {
    let length = arr.length;
    if (length === 1) {
        return arr;
    }
    let mid = Math.floor(length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, length);

    return merge(mergeSortRec(left), mergeSortRec(right));
}

function merge(left, right) {
    let result = [];
    let il = 0, ir = 0;
    while(il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
            result.push(left[il]);
            il++;
        } else {
            result.push(right[ir]);
            ir++;
        }
    }
    while(il < left.length) {
        result.push(left[il]);
        il++;
    }
    while(ir < right.length) {
        result.push(right[ir]);
        ir++;
    }
    return result;
}

console.log([1,2,3,5,8,6,7].mergeSort())