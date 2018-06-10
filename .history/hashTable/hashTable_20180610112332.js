function HashTable() {
    let table = [];

    function loseloseHashCode(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    }

    this.put = function(key, value) {
        let position = loseloseHashCode(key);
        console.log(`${position}-${value}`);
        table[position] = value;
    }

    this.remove = function(key) {
        let position = loseloseHashCode(key);
        table[position] = undefined;
    }

    this.get = function(key) {
        return table[loseloseHashCode(key)];
    }
}

let hash = new HashTable();
hash.put('Million', 'Million@qq.com');
hash.get('Million')