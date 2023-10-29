// Task1
class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Метод обхода дерева в прямом порядке (preorder traversal)
    preorderTraversal(node) {
        if (node !== null) {
            console.log(node.value); // Выводим значение текущего узла
            this.preorderTraversal(node.left); // Рекурсивно обходим левое поддерево
            this.preorderTraversal(node.right); // Рекурсивно обходим правое поддерево
        }
    }
}

// Пример использования:
const tree = new BinaryTree();
tree.root = new BinaryTreeNode(1);
tree.root.left = new BinaryTreeNode(2);
tree.root.right = new BinaryTreeNode(3);
tree.root.left.left = new BinaryTreeNode(4);
tree.root.left.right = new BinaryTreeNode(5);

console.log("Прямой обход дерева (preorder traversal):");
tree.preorderTraversal(tree.root);
// Task2
const getAllPermutations = (str) => {
    const results = [];

    if (str.length === 1) {
        results.push(str);
        return results;
    }

    for (let i = 0; i < str.length; i++) {
        const firstChar = str[i];
        const remainingChars = str.slice(0, i) + str.slice(i + 1);
        const innerPermutations = getAllPermutations(remainingChars);
        for (let j = 0; j < innerPermutations.length; j++) {
            results.push(firstChar + innerPermutations[j]);
        }
    }

    return results;
}

const str = "QWR";
const permutations = getAllPermutations(str);
console.log(permutations);