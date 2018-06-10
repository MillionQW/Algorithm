let LinkedList = require('../linkedlist/linkedlist')

function HashTable() {
    let table = [];
    
    let djb2HashCode = function(key) {
        let hash = 5381;
        for (let i = 0; i < key.length; i++) {
            hash = hash * 33 + key.charCodeAt(i);
        }
        console.log(`${key}-${hash % 1013}`);
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
hashTable.put('Million', 'Million@qq.com');
let userInfo = [
    {name: 'Gandalf', email: 'gandalf@email.com'},
    {name: 'John', email: 'johnsnow@email.com'},
    {name:  'Tyrion', email: 'Tyrion@email.com' },
    {name:  'Aaron', email: 'aaron@email.com' },
    {name:  'Donnie', email: 'donnie@email.com' },
    {name:  'Ana', email: 'ana@email.com' },
    {name:  'Jonathan', email: 'jonathan@email.com' },
    {name:  'Jamie', email: 'jamie@email.com' },
    {name:  'Sue', email: 'sue@email.com' },
    {name:  'Mindy', email: 'mindy@email.com' },
    {name:  'Paul', email: 'paul@email.com' },
    {name:  'Nathan', email: 'nathan@email.com' },
]
userInfo.forEach(item => {
    hashTable.put(item["name"], item["email"]);
})
hashTable.remove('Sue')
console.log(hashTable.get('Sue'))