class Node {
	constructor(value){
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

export class BinarySearchTree {
	constructor(){
		this.root = null;
	}
	insert(value){
		let newNode = new Node(value);
		if (!this.root) {
			this.root = newNode;
			return this;
		}
		let curr = this.root;
		while (true) {
			if (value === curr.value) return undefined;
			if (value < curr.value) {
				if (!curr.left) {
					curr.left = newNode;
					return this;
				}
				curr = curr.left;
			} else {
				if (!curr.right) {
					curr.right = newNode;
					return this;
				}
				curr = curr.right;
			}
		}
	}
	find(value) {
		if (!this.root) return false;
		let curr = this.root;
		let found = false;
		while (curr & !found) {
			if (value < curr.value) {
					curr = curr.left;
			} else if (value > curr.value) {
					curr = curr.right;
			}
			if (value === curr.value) {
					return true;
			}
			return false;
		}
		if (!found) return false;
		return curr;
	}
	BFS() {
		let node = this.root;
		let data = [];
		let queue = [];
		queue.push(node);
		while (queue.length) {
			node = queue.shift();
			data.push(node.value);
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		return data;
	}
	DFSPreOrder() {
		let data = [];
		let curr = this.root;
		function traverse(node) {
			data.push(node.value);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		}
		traverse(this.root);
		return data;
	}
	DFSPostOrder() {
		let data = [];
		let curr = this.root;
		function traverse(node) {
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
			data.push(node.value);
		}
		traverse(this.root);
		return data;
	}
	DFSInOrder() {
		let data = [];
		let curr = this.root;
		function traverse(node) {
			if (node.left) traverse(node.left);
			data.push(node.value);
			if (node.right) traverse(node.right);
		}
		traverse(this.root);
		return data;
	}
}
