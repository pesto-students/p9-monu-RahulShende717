class BinaryTree{
    constructor(items){

        this.data=items;
        this.left = this.right=null;

    }
}
 
var maxDepth = function(root) {
    if (root === null) return 0;
    return 1 + Math.max(maxDepth(root.left) , maxDepth(root.right));
};


let root;
root=new BinaryTree(3);
root.left=new BinaryTree(9);
root.right=new BinaryTree(20);
root.left.left=new BinaryTree(null);
root.left.right=new BinaryTree(null);
root.right.left=new BinaryTree(15);
root.right.right=new BinaryTree(7);


console.log(maxDepth(root));