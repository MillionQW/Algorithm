function cutRope(length) {
    if (length === 0) return 0;
    if (length === 1) return 1;
    if (length === 2) return 1;
    if (length === 3) return 2;
    let maxNums = [];
    maxNums[0] = 0;
    maxNums[1] = 1;
    maxNums[2] = 2;
    maxNums[3] = 3;
    for (let i = 4; i <= length; i++) {
        let max = 0;
        for (let j = 1; j <= i / 2; j++) {
            let res = maxNums[j] * maxNums[i - j];
            if (res > max) {
                max = res;
            }
        }
        maxNums[i] = max;
    }
    return maxNums[length];
}

console.log(cutRope(8));