class myList {
    constructor() {
        this.list = [];
        this.size = this.list.length;
    }

    add(element) {
        this.list.push(element);
        this.list = this.list.sort((a, b) => a - b);
        this.size++;
    }

    remove(index) {
        if (0 <= index && index < this.list.length) {
            this.list.splice(index, 1);
            this.size--;
        }
    }

    get(index) {
        if (0 <= index && index <= this.list.length) {
            return this.list[index];
        }
    }
}