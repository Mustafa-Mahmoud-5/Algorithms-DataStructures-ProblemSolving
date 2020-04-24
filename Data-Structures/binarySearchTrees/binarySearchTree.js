// the binarySearchTree consists of several nodes. each node has a value and left and right properties

// the bst class itself should start with a node property

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        // if there`s no root, then make the first node to be the root
        if(!this.root) {
            this.root = newNode;
            return this;
        }

        // else, then want to check if the value we want to insert is greater than the current node(which starts from the root) or less than it, if smaller then we want to make another check if there`s no current.left then we make it the newnode.. if not, then we update the current to make it the current.left and then keep checking the same process.... on the other hand if the value is greater than the current, then we need to check if there`s current.right, if not then we make it the newnode , if it exist, then we set the current to current.next and keep checking the while process

        let current = this.root;

        while(true) {
            // check if we inserted an existed node then return undefined
            if(value === current.value) return undefined;

            if(value < current.value) {
                if(!current.left) {
                    current.left = newNode;
                    return this;
                }
                // else, move the current to the found node to keep checking
                current = current.left;
            }

            if(value > current.value) {
                if(!current.right) {
                    current.right = newNode;
                    return this;
                }
                // else, move the current to the found node to keep checking
                current = current.right
            }
        }   
    }


    find(value) {
        // if we have no root(then no nodes to search) , return undefined 
        if(!this.root) return undefined;

        // set the current to the root to keep tracking of the current as we did in insert
        let current = this.root;
        // make a found variable that will be set to true when the current.value = value
        let found = false
        // keep looping while found not true and current exists
        while(!found && current) {
            if(value < current.value) {
                current = current.left;
            } else if(value > current.value) {
                current = current.right;
            } else {
                // then current === value and set found to true and break the loop
                found = true
            }
        }
        if(!found) return undefined;

        return current;
    }
}

let BST = new BinarySearchTree();


BST.insert(10)
BST.insert(8)
BST.insert(9)

console.log(BST.find(10));


console.log(BST);
