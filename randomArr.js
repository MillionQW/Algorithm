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
    randomArr
}