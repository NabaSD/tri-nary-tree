class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.middle = null;
        this.right = null;
    }
}

class Tree {
    constructor(){
        this.root = null;
    }
    insert(data) {
        const newNode = new Node(data);
        if(this.root === null){
            console.log('Tree Root Node', newNode.data);
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }      
    }

    insertNode(node, newNode) {
        if(newNode.data < node.data) {
            if(node.left === null){
                console.log('Node ',newNode.data, 'Left child of ', node.data);
                node.left = newNode;
            } else{
                this.insertNode(node.left, newNode);
            }      
        }else if(newNode.data === node.data) {
            if(node.middle === null){
                console.log('Node ',newNode.data, 'Middle child of ', node.data);
                node.middle = newNode;
            } else{
                this.insertNode(node.middle, newNode);
            }  
        }else {
            if(node.right === null) {
                console.log('Node ',newNode.data, 'Right child of ', node.data);
                node.right = newNode;
            } else {
                this.insertNode(node.right,newNode);
            }            
        }
    }

    delete(data){
        this.root = this.deleteNode(this.root, data);
    }
    deleteNode(node, deletableNodeData) {
        if(node === null){
            return null;
        } else if(deletableNodeData < node.data) {
            node.left = this.deleteNode(node.left, deletableNodeData);
            return node;
        } else if(node.middle && deletableNodeData === node.data) {
            node.middle = this.deleteNode(node.middle, deletableNodeData);
            return node;
        } else if(deletableNodeData > node.data) {
            node.right = this.deleteNode(node.right, deletableNodeData);
            return node;
        } else {
            if(node.left === null && node.middle === null && node.right === null) {
                node = null;
                return node;
            }
            if(node.left === null && node.middle === null) {
                node = node.right;
                return node;
            } else if(node.left === null && node.right === null) {
                node = node.middle;
                return node;
            } else if(node.right === null && node.middle === null) {
                node = node.left;
                return node;
            } else if(node.middle !== null) {
                node = node.middle;
                return node;
            }
            const minNode = this.findMinNode(node.right);
            node.data = minNode.data;
            node.right = this.deleteNode(node.right, minNode.data);
            return node;
        }
    
    }

    findMinNode(node) {
        if(node.left === null) {
            return node;
        } else{
            return this.findMinNode(node.left);
        }
    }

    inorder(node) {
        if(node !== null)
        {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.middle);
            this.inorder(node.right);
        }
    }
}


const treeNodes = [5,4,9,5,7,10,2,2];
const tree = new Tree();
treeNodes.forEach((node)=>{
    tree.insert(node);
});
tree.delete(4);
tree.inorder(tree.root);




