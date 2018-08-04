function swap(arr, left ,right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}

function validateSort(fn) {
    let pass = true;
    for (let i = 0; i < 200; i++) {
        let arr = randomArr();
        let comparseArr = arr.concat();
        let errorArr = arr.concat();
        fn(arr, 0, arr.length);
        comparseArr.sort();
        arr.forEach((item, index) => {
            if (item !== comparseArr[index]) {
                console.log('排序不一致');
                console.log(`数组：${errorArr}`);
                console.log(`检验数组排序结果${arr}`);
                console.log(`机排序结果${comparseArr}`);
                pass = false;
            }
        })
    }
    if (pass) console.log('测试通过');
}

function randomArr() {
    let length = Math.floor(1 + Math.random() * 10 - 1 + 1);
    let arr = [];
    for (let i = 0; i < length; i++) {
        let num = Math.floor(Math.random() * 10);
        arr.push(num);
    }
    return arr;
}

module.exports = {
    swap,
    validateSort
}