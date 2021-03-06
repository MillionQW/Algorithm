## HashTable
HashTable 又叫 HashMap, 出现的目的是为了加快查找的速度。利用哈希函数得出一个哈希值做一个key和hash的映射，从而快速找到目标值。
HashTable 中有两个学问，一个是用什么散列函数求出 hash 值，一个是同一个 hash 值下有多个目标值的处理方法。
hash 值的取法讲究的是尽量不产生有冲突的 hash 值。常用的是用 djb2。
```
djb2HashCode = function(key) {
    let hash = 5381; // 初始化 hash 为一个质数，通常选 5381
    for (let i = 0; i < key.length; i++) {
        hash = hash * 33 + key.charCodeAt(i);
    }
    return hash % 1013;     // 1013 的取值讲究的是取比散列表的大小要大的一个质数
                            // 这里假设散列表的大小是 1000
}
```

解决 hash 值相同导致的冲突，方法是 “开放定址（open addressing）” 和 “分离链栈（operate chaining）”。
开放定址：当前 key 得出的 hash 值如果已经有对应的目标值，就把 hash值 + 1 作为新的存放点，如果还是有目标值就再加1，加到没有为止。取值的时候如果 hash 值对应的 key 值不是要找的 key 值，就 +1 一直找到找到或者到数组最后一位为止。不是很喜欢这种要用到遍历的方法。
分离链栈：每个 key 值对于的是一个链表，如果 key 值上已经有值，就放在链表的后面一位。   
![分离链栈](./img/operateChaining.jpg)

分离链栈要用到前面用过的链表，要插入一个新值的时候判断该 key 上是否为 ```undefined```，是就新建一个链表，然后```append```进去。考虑到查找时需要用到 key ，所以 ```append```进去的必须是一个对象：
```
 ValuePair = function(key, value) {
    this.key = key;
    this.value = value;
    this.toString = function() {
        console.log(`${key}-${value}`)
    }
}
```
### put 
```
this.put = function(key, value) {
    let position = djb2HashCode(key);
    if (table[position] === undefined) {
        table[position] = new LinkedList();
    }
    table[position].append(new ValuePair(key, value))
};
```
### remove
```remove``` 做的就是在判断该 ```key``` 确实存在的情况下做一个链表的 ```remove```操作。   
要注意的一个点就是 ```remove``` 后当链表为空，必须把 table[position] 置为 ```undefined``` ，否则保留这个链表因为是对象会一直判断为 ```true``` 。
this.remove = function(key) {
    let position = djb2HashCode(key);
    if (table[position] !== undefined) {
        let current = table[position].getHead();
        while(current) {
            if (current.element.key === key) {
                table[position].remove(current);
                if (table[position].getEmpty()) {
                    table[position] = undefined;
                }
                return true;
            }
            current = current.next;
        }
    }
    return false;
}

### get 
```
this.get = function(key) {
    let position = djb2HashCode(key);
    if (table[position] !== undefined) {
        let current = table[position].getHead();
        while(current) {
            if (current.element.key === key) {
                reutrn current.element.element;
            }
            current = current.next;
        }
    }
    return undefined;
}
```