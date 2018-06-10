function HashTable() {
    let table = [];

    function loseloseHashCode(value) {
        let hash = 0;
        for (let i = 0; i < value.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    }
}