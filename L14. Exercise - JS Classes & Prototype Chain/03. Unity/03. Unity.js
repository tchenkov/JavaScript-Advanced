class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }

    getRats() {
        return this.unitedRats;
    }

    unite(otherRat) {
        if (otherRat.constructor.name === Rat.name) {
            this.unitedRats.push(otherRat);
        }
    }

    // override
    toString() {
        let result = this.name;
        for (let rat of this.unitedRats) {
            result += `\n##${rat.name}`;
        }

        return result;
    }
}

let test = new Rat("Pesho");
console.log(test.toString()); //Pesho

console.log(test.getRats()); //[]

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

console.log(test.toString());
// Pesho
// ##Gosho
// ##Sasho


