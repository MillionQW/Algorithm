import LinkedList from '../linkedlist/linkedlist';

function hashTable() {
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
            let current = table[positoin].getHead();
            while (current.element.key !== key) {
                if (!current.next) {
                    return false;
                }
                current = current.next;
            }
            return current.element.value;
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