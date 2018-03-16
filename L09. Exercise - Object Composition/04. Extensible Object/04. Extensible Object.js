function extensibleObject(obj) {
    let myObj = {
        extend: function (obj){
            for (let prop in obj) {
                if (typeof obj[prop] === 'function') {
                    Object.getPrototypeOf(this)[prop] = obj[prop];
                } else {
                    this[prop] = obj[prop];
                }
            }

            return myObj;
        }
    };

    return myObj.extend(obj);
}

console.log(extensibleObject({
    extensionMethod: function () {
    },
    extensionProperty: 'someString'
}));

