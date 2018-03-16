let Extensible = (function () {
    class Extensible{
        constructor(){
            this.id = Extensible.getID();
        }

        extend(obj){
            for (let prop in obj) {
                if (typeof obj[prop] === 'function') {
                    Object.getPrototypeOf(this)[prop] = obj[prop];
                } else {
                    this[prop] = obj[prop];
                }
            }

            return this;
        }

        static getID(){
            return id++;
        }
    }

    let id = 0;

    return Extensible;
})();


let obj1 = new Extensible();
let obj2 = new Extensible();
let obj3 = new Extensible();
console.log(obj1.id);
console.log(obj2.id);
obj3.extend({
    extensionMethod: function () {},
    extensionProperty: 'someString'
});
console.log(obj3);