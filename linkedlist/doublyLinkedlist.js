function DoublyLinkedList() {
    let Node = function(element) {
        this.element = element;
        this.prev = null;
        this.next = null;   // 新增
    };

    let length = 0;
    let head = null;
    let tail = null;        // 新增

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
                if (!head) {
                    head = node;
                    tail = node;
                } else {
                    current.prev = node;
                    node.next = current;
                    head = node;
                }
            } else if (position === length) {   // 插入尾部
                tail.next = node;
                node.prev = tail;
                tail = node;
            } else {
                while(index < position) {
                    previous = current;
                    current = current.next;
                    index++;
                }
                node.next = current;
                node.prev = previous;           // 新增
                previous.next = node;
                current.prev = node;            // 新增
                
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
            if (position === 0) {
                head = current.next;
                if (length === 1) {
                    // 如果只有一个节点,tail 置 null，否则就保留了原节点的索引
                    tail === null;
                } else {
                    // 新上位节点的 prev 保留了旧头节点的索引，所以要置 null.
                    head.prev = null;
                }
            }
            else {
                while(index < position) {
                    previous = current;
                    current = current.next;
                    index++;
                }
                previous.next = current.next;
                current.next.prev = previous;       // 新增
            }
            length--;
            return current.element;
        } else {
            return null;
        }
        
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

    this.getTail = function() {
        return tail;
    }

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

let linkedlist = new DoublyLinkedList();
linkedlist.insert(0, 1)
linkedlist.insert(1, 2)
linkedlist.insert(2, 3)
linkedlist.insert(3, 4)
console.log(linkedlist.indexOf(2))