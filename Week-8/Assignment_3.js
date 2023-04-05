class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
} 

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    add(value){
        var node = new Node(value);

        var current;

        if(this.head === null){  
            this.head = node;
        }else {
            current = this.head;
            
             while(current.next){ 
                current = current.next;
             }

            current.next = node; 
        } 
        this.size++ 
        return this.head
    }


     detectLoop(head)
{
    let slow_p = head, fast_p = head;
    let flag = 0;
     
    while (slow_p != null && fast_p != null &&
           fast_p.next != null)
    {
        slow_p = slow_p.next;
        fast_p = fast_p.next.next;
        if (slow_p == fast_p)
        {
            flag = 1;
            break;
        }
    }
    if (flag == 1)
        console.log("Loop Found<br>");
    else
        console.log("No Loop<br>");
}

}


var node = new LinkedList();
var arr = [1,3,4];

var regularlinkedlist;
for(let el of arr){ 
    regularlinkedlist = node.add(el);
}

node.detectLoop(regularlinkedlist);