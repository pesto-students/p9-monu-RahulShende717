class Node{
    constructor(val){
        this.data=val;
        this.left=null;
        this.right=null;
    }
}
let prev=0;
let flag=true;

function checkValidBinarytree(node){
    if (node == null)
    return;
    checkValidBinarytree(node.left);
    if(prev>=node.data)
    {
        flag=false;
    }
    prev=node.data;
    
    checkValidBinarytree(node.right);
}



var root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.left = new Node(4);
        root.left.right = new Node(5);


checkValidBinarytree(root);
if(flag){
    console.log("valid binary tree");
}
else
console.log("not a valid binary tree");