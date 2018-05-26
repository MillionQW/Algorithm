function Dictionary() {
    let items = {};

    this.has = function(key) {
        return key in items;
    }
    
    this.set = function(key, value) {
        items[key] = value;
    }

    // 先判断字典中有没有该 key 有就删除并返回 true，无返回false
    this.delete = function(key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    }

    this.get = function(key) {
        return this.has(key) ? items[key] : undefined;
    }

    this.values = function() {
        let values = [];
        for (let key in items) {
            if (this.has(key)) {
                values.push(items[key]);
            }
        }
        return values;
    }

    this.clear = function() {
        items = {};
    }

    this.size = function() {
        return Object.keys(items).length;
    }

    this.keys = function() {
        return Object.keys(items);
    }

    this.getItems = function() {
        
    }
}

module.exports = Dictionary;