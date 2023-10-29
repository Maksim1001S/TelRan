class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Создание простого двоичного дерева
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(3);





function isSymmetric(root) {
    if (!root) {
        return true;
    }

    return isMirror(root.left, root.right);
}

function isMirror(node1, node2) {
    if (!node1 && !node2) {
        return true;
    }

    if (node1 && node2) {
        return (
            node1.val === node2.val &&
            isMirror(node1.left, node2.right) &&
            isMirror(node1.right, node2.left)
        );
    }
    return false;
}

const result = isSymmetric(root);
console.log(result);
