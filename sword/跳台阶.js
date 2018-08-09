// 动态规划
function jumpFloor(number) {
    if (number < 1) return;
    if (number === 1) return 1;
    if (number === 2) return 2;
    return jumpFloor(number - 1) + jumpFloor(number - 2);
}

// 从上往下累加
function jumpFloor(number) {
    if (number === 0) return 0;
    if (number === 1) return 1;
    if (number === 2) return 2;

    let n1 = 1;
    let n2 = 2;
    let total;

    for(let i = 2; i < number; i++) {
        total = n1 + n2;
        n1 = n2;
        n2 = total;
    }

    return total;
}