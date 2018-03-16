class Stringer{
    constructor(string, length){
        this.innerString = string;
        this.length = length;
    }

    set length(length){
        length = Number(length);
        this.innerLength = Math.max(length, 0);
    }

    increase(length){
        this.length = this.innerLength + length;
    }

    decrease(length){
        this.length = this.innerLength - length;
    }

    // override
    toString(){
        const dots = '...';
        return this.innerString.length <= this.innerLength ? this.innerString : this.innerString.substring(0, this.innerLength) + dots;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test