import Node from "./node.js";

class DoublyNode extends Node {
	constructor(element, next, prev) {
		super(element, next);

		this.prev = prev;
	}
}

export default DoublyNode;