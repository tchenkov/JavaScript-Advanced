function sortedList() {
    let result = {
        list: [],
        add: function (element) {
            this.list.push(element);
            this.list = this.list.sort((a, b)=>a-b);
            this.size++;
        },
        remove: function (index) {
            if (0 <= index && index < this.list.length){
                this.list.splice(index, 1);
                this.size--;
            }
        },
        size: 0,
        get: function(index) {
            if (0 <= index && index <= this.list.length){
                return this.list[index];
            }
        }
    };

    return result;
}

let myList = sortedList();

myList.add(5);
myList.add(3);
myList.remove(0);

console.log(myList.get(0));
