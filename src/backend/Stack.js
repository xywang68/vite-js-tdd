class Stack {
    constructor() {
        this.top = -1;
        this.items = {};
    }
    push(item) {
        this.top += 1;
        this.items[this.top] = item;
    }
    get peek() {
        let peek_item = null;
        if (this.top > -1) peek_item = this.items[this.top];
        return peek_item;;
    }
    get pop() {
        let pop_item = this.peek;
        this.top -= 1;
        return pop_item;;
    }
}

module.exports = Stack;