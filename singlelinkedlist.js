class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

export class SingleLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    // add data

    add(data) {
        const node = new Node(data);

        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++
    }

    // remove data
    remove(data) {
        if (this.head === null) return null;
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next != null) {
            if (current.next.data === data) {
                current.next = current.next.next;
                this.length--;
                return;
            }
            current = current.next;
        }
    }

    // getFirst() skal returnere den første

    getFirst() {
        return this.head;
    }

    // getLast() skal returnere den sidste

    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
        }

        return lastNode;
    }

    // get size of nodes
    size() {
        return this.length;
    }

    // get(index) retunere det gældene objekt ved indeks

    get(index) {
        let current = this.head;
        let count = 0;

        while (current) {
            if (count == index) {
                return current.data
            }
            count++;
            current = current.next;
        }

        return null;
    }

    // get FirstNode();
    getFirstNode() {
        return this.head;
    }

    // get Nextnode();
    getNextNode() {
        return this.head.next;
    }

    //`getLastNode()` - der returnerer den sidste node i listen

    getLastNode() {
        let current = this.head;
        if (current) {
            while (current.next) {
                current = current.next;
            }
        }

        return current.data;
    }

    //- `getNodeWith( data )` - der returnerer den node der linker til dette data-objekt
    getNodeWith(data) {
        let current = this.head;

        while (current != null) {
            if (current.data === data) {
                return current;
            }
            current = current.next;
            
        }
        return null;

        
    }

    //- `removeNode( node )` - der fjerner dén node fra listen

    removeNode(node) {
        if (this.head == null) return null;

        if (this.head === node) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next != null) {
            if (current.next === node) {
                current.next = current.next.next;
                this.length--;
                return;
            }
            current = current.next;
        }
    }

    //- `removeFirstNode()` - der fjerner den første node fra listen
    removeFirstNode() {
        if (this.head === null) return null;
        this.head = this.head.next;
        this.length--;
    }

    //- `removeLastNode()` - der fjerner den sidste node fra listen
    removeLastNode() {
        let current = this.head;
        if (current === null) return null;

        if (current.next === null) {
            this.head = null;
            this.length--;
            return;
        }

        while (current.next.next != null) {
            current = current.next;
        }
        current.next = null;
    }

    //- `insertAfter( node )`
    insertAfter(node, data) {
        if (node === null) return;
        let newNode = new Node(data);
        newNode.next = node.next;
        node.next = newNode;
    }

    dumpList() {
        let current = this.head;
        if (current === null) return console.log('List is empty');
        while (current != null) {
            console.log(current);
            current = current.next;
        }
    }

    clear() {
        this.head = null;
    }
}











