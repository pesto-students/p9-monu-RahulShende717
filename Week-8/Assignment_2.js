class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}
function Rotate_List(N, val, k) {

    let size = N;
    let rotate = k;
    var head = null;

    for (let i = 0; i < N; i++) {
        add(val[i]);
    }
    console.log(head.data);
    printList();
    rortateList(k);
    console.log("rotateLisr");
    printList();


    function add(element) {
        var node = new Node(element);
        var curerent;
        if (head == null) {
            this.head = node;
        }
        else {
            curerent = this.head;
            while (curerent != null) {
                curerent = curerent.next;
            }
            curerent.next = node;

        }
    }

    function printList() {
        var curerent = this.head;

        while (curerent != null) {
            console.log(curerent.data);
            curerent = curerent.next;
        }
    }

    function rortateList(upto) {
        if (upto == 0)
            return;
        var it = 1;
        var current = this.head;
        while (current != null && it < upto) {
            current = current.next;
            it++;
        }

        if (current == null)
            return;

        var demo = current;
        while (current.next != null) {
            current = current.next;
        }

        current.next = head;
        head = demo.node;
        demo = null;
    }

}
const value = [2, 4, 7, 8, 9];
let a = value.length;
rotate = 3

Rotate_List(a, value, rotate);