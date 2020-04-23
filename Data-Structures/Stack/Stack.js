// the stack is just a collection of data (data structure) that follows the rule of LIFO > Last In First Out and that means that the last item we add will be the first item to be removed (the history object of routing in react is an example of that)

// the stack must have the important two methods push and pop

// i`ll implement it in singly linked list data structure

// but in stack we don`t add and remove from the end, we follow the LIFO rule but from the beginning because removing from the end in the singly linked list has bigO(n) due to looping till the node before the last node in order to remove it

// so we`ll add and remove from the beginning but the convensional that it is called push and pop(but it will act as shift and unshift)





class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }


    // add to the beginning
    push (val) {

        if(val !== undefined) {
            const newNode = new Node(val);

            if(!this.first) {
                this.first = newNode;
                this.last =  newNode;
            } else {
                let first = this.first;
                newNode.next = first;
                this.first = newNode;
            }
    
            this.size++;
            return this;
    
        }

        return false
    }


    // removing from the beginning
    pop () {

        if(!this.first) return null;

        let first = this.first;

        this.first = first.next;


        this.size--;
        // if size equals zero then there`s no 
        if(this.size === 0) this.last = null;

        return first.val;
    }

}


let stack = new Stack();

stack.push(50);
stack.push(52);
stack.push(1);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

console.log(stack);
