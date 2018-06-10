let LinkedList = require('../linkedlist/linkedlist')

function HashTable() {
    let table = [];
    
    let djb2HashCode = function(key) {
        let hash = 5381;
        for (let i = 0; i < key.length; i++) {
            hash = hash * 33 + key.charCodeAt(i);
        }
        return hash % 1013;
    }
    let ValuePair = function(key, value) {
        this.key = key;
        this.value = value;
        this.toString = function() {
            console.log(`${this.key}-${this.value}`);
        }
    }
    this.put = function(key, value) {
        let position = djb2HashCode(key);
        if (table[position] === undefined) {
            table[position] = new LinkedList();
        }
        table[position].append(new ValuePair(key, value));
    }
    this.get = function(key) {
        let position = djb2HashCode(key);
        if (table[position] !== undefined) {
            let current = table[position].getHead();
            while(current) {
                if (current.element.key === key) {
                    return current.element.value;
                }
                current = current.next;
            }
        }
        return undefined;
    }
    this.remove = function(key) {
        let position = djb2HashCode(key);
        if (table[position] !== undefined) {
            let current = table[position].getHead();
            while(current) {
                if (current.element.key === key) {
                    table[position].remove(element);
                    if (table[position].isEmpty()) {
                        table[position] = undefined;
                    }
                    return true;
                }
                current = current.next;
            }
        }
        return false;
    }
}

let hashTable = new HashTable();
// hashTable.put('Million', 'Million@qq.com');
// console.log(hashTable.get('Million'))