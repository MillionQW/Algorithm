function LinkedList() {
    let Node = function(element) {
        this.element = element;
        this.next = null;
    };

    let length = 0;
    let head = null;

    this.append = function(element) {
        let node = new Node(element);
        let current;
        if (head === null) {
            head = node;
        } else {
            current = head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
    };

    this.insert = function(position, element) {
        let node = new Node(element);
        let previous;
        let current = head;
        let index = 0;
        if (position > -1 &&　position <= length) {
            if (position === 0) {
                node.next = current;
                head = node;
            } else {
                while(index < position) {
                    previous = current;
                    current = current.next;
                    index++;
                }
                node.next = current;
                previous.next = node;
                
            }
            length++;
            return true;
        } else {
            return false;
        }
    };

    this.removeAt = function(position) {
        let previous;
        let current = head;
        let index = 0;
        if (position > -1 && position < length) {
            if (position === 0) head = current.next;
            else {
                while(index < position) {
                    previous = current;
                    current = current.next;
                    index++;
                }
                previous.next = current.next;
            }
        }
        length--;
        return current.element;
    };

    this.remove = function(element) {
        let index = this.indexOf(element);
        this.removeAt(index);
    };

    this.indexOf = function(element) {
        let index = 0;
        let current = head;
        for (index; index < length; index++) {
            if (current.element === element ) {
                return index;
            } 
            current = current.next;
        }
        return -1;
    };

    this.isEmpty = function() {
        return length === 0;
    };

    this.size = function() {
        return length;
    };

    this.getHead = function() {
        return head;
    };

    this.toString = function() {
        let current = head;
        let string = '';
        while(current) {
            string += current.element + (current.next ? 'n' : '');
            current = current.next;
        }
        return string;
    };

    this.print = function(element) {};

}

module.exports =  LinkedList;

let linkedlist = new LinkedList();
linkedlist.append(1)
linkedlist.append(12);
console.log(linkedlist.indexOf(1))