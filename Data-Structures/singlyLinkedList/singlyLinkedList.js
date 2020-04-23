class Node  {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        // make sure that we`ve pushed something
        if(val !== undefined) {
            let newNode = new Node(val);
            // check if this is the first time by checking if head is null then set the head and tail to the new node
            if(!this.head) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                // else,(if there is any node/nodes) then we need to connect the current node to the next node (we already know that we have a property of next in the node class) by making the tail(last one)node next property to the new node, then we need to upgrade the current node itself to the new node, by implementing this logic, we set the next node of the current node to the new node, and then set the tail to the node

                this.tail.next = newNode;
                this.tail = newNode;
            }

            this.length++;
            return this;
    
        }
    }


    pop() {

        if(this.length ===0) {
            return undefined;
        } else {

            let current = this.head;
            let ndToLast;
            
            // keep looping till the current node has no next value(so it will keep looping till the node before the last because the last node has no next)
            while(current.next) {

                // the item before the last item;
                ndToLast = current

                // go to next node
                current = current.next;
            }

            

            // when we reach to the last item, we need to set the tail and head to null instead of making the tail the node before the last node which does not make sense
            if(this.length === 1) {
                this.tail = null;
                this.head = null;
                this.length--
                return current.val
            }

            // set the val of the node before the last node to null and set the tail to it
            ndToLast.next = null;
            this.tail = ndToLast;
            this.length--;

            return current.val;
        }
    }

    
    // remove from the beginning
    shift() {

      
        let current =  this.head;
        if(!this.head) {
            return undefined;
        } else{

            this.head = current.next;
            this.length--;

            if(this.length ===  0) this.tail = null;

        }

        return current.val;
    }

    // add to the beginning
    unShift(val) {
        let newNode = new Node(val);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {

            let head  = this.head;

            this.head = newNode;
            
            this.head.next = head;
        }

        this.length++
        return this;
    }

    get(index) {

        // our list starts from zero so if we inserted a negative number, we return null or if we inserted a number greater than the list length we also return null or also if we inserted an index equal to the list length we return null because we start from zero so our last node index - list.length -1
        if( index === undefined ||  index < 0 || index >= this.length ) return false;


        let counter = 0;
        let current = this.head;
        while(counter !== index) {
            counter++;
            current = current.next;
        }

        return current;
    }

    set(index, value) {
        if(value) {

            let target = this.get(index);

            target.val = value;
            return true ;     
        }
        return false;
    }

    insert(index, value) {

        if(value) {
            if(index < 0 || index > this.length) return false;

            if(index === this.length) {
                this.push(value);
                return true;
            }
    
            if(index === 0) {
                this.unShift(value);
                return true;
            }
    
            // else the index is in the middle so i need to put the new node between the node at the inserted index and the node before the node at the inserted index, and make the next val of the new node to be the node at the inserted index and make the next val of the node before the node at the inserted index to be the new node
            
            let newNode = new Node(value);
            let previousNode = this.get(index - 1);
            let nextNode = previousNode.next;
    
            previousNode.next = newNode;
    
            newNode.next = nextNode;
    
            this.length++;
            return true;
    
        }

        
        return false
    }


    remove(index) {

        if(index !== undefined) {
            if(index < 0 || index >= this.length) return false;

            if(index === 0) {
                this.shift();
                return true;
            } else if (index === this.length - 1) {
                this.pop();
                return true
                
            } else {
            // else if the index in the middle

                let previousNode = this.get(index - 1)

                let targetNode = previousNode.next;

                let nextNode = targetNode.next                

                previousNode.next = nextNode;

                this.length--;

                return targetNode;
            }
            
        }

        return false;
    }

}


let sls = new SinglyLinkedList();

sls.push(1);
sls.push(2);
sls.push(3);

sls.remove(1)
sls.remove(1)
console.log(sls.remove(0));

console.log(sls);


