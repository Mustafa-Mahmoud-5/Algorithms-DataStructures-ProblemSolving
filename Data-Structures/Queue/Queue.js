// queue is a data structure that is a little bit simillar to the stack but the queue follows the rule of FIFO > first in first out and that means that the first item joins the list will be the first item to quit the list

// this techneque is just like the line of any thing , a line of people waitting for a doctor in the clinc for instace, where the first patient comes to the clinc will be the first patient to leave the clinc

// in programming, the queue is something like online players waitting to join a game in fortninte for instance where the program will have a list of all the players want to join the game, and the first player who made the request will join first. also another example like downloading same sized files

// adding process of a node to queue collection is called Enqueue and the removing process is called Dequeue

// implementing queue in arrays is really bad unlike stacks(adding & removing from the end can be good as it do not reindex the array) because adding to end and removing from the beginning will re index the array ... adding from the beginning and removing from the end will also reindex the array

// so it is better to be implemented in singly linked list

// the best way of imlementing it in singly linked list is to add to the end, and remove from the beginning(to avoid removing from the end as this process has bigO(n))
class Node {

    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = null;
    }


    // adding to the end
    enqueue (val) {
        if(val !== undefined) {
            let newNode = new Node(val);

            if(!this.first) {
                this.first = newNode;
                this.last = newNode;
            } else {
                this.last.next = newNode;
                this.last = newNode;
            }


            this.size++
            return this
        }

        return false;
    }

    // removing from the beginning
    dequeue() {



        if(!this.first) return null;

        let first = this.first;

        this.first = first.next;

        this.size--;

        if(this.size === 0) this.last = null;
        
        return first.val;
    }
}


let queue = new Queue();

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.dequeue()
queue.dequeue()

