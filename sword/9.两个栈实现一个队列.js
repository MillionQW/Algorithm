class Stack {
    constructor(value) {
        this.item = value || [];
    }
    push(value) {
        this.item.push(value);
    }
    pop(value) {
        this.item.pop(Value);
    }
}

let stack1 = new Stack();
let stack2 = new Stack();

class Quene {
    constructor(value) {
        this.item = value || [];
    }
    appendTail(value) {
        stack1.push(value);
    }
    shiftHead(value) {
        while (stack1.length > 0) {
            let data = stack1.pop();
            stack2.push(pop);
        }
        if (!stack2.length) {
            throw('无数据');
        }
        return stack2.pop();
    }
}

let quene = new Quene([1, 2, 3]);
quene.appendTail(4)
console.log(quene.item);