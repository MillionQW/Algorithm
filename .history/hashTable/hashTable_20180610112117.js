function HashTable() {
    let table = [];

    function loseloseHashCode(value) {
        let hash = 0;
        for (let i = 0; i < value.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    }

    this.put = function(key, value) {
        let position = loseloseHashCode(key);
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