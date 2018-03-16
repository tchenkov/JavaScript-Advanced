function classHierarchy() {
    // abstract
    class Figure{
        constructor(){
            if (new.target === Figure){
                throw new Error('Cannot create instance of abstract class.');
            }
        }

        // abstract method/getter
        get area(){
            return undefined;
        }

        // override
        toString(){
            return `${this.constructor.name} - `;
        }
    }

    class Circle extends Figure{
        constructor(radius){
            super();
            this.radius = radius;
        }

        // override
        toString(){
            return super.toString() + `radius: ${this.radius}`;
        }

        // override
        get area(){
            return Math.PI * this.radius * this.radius;
        }
    }

    class Rectangle extends Figure{
        constructor(width, height){
            super();
            this.width = width;
            this.height = height;
        }

        // override
        toString(){
            return super.toString() + `width: ${this.width}, height: ${this.height}`;
        }

        // override
        get area(){
            return this.width * this.height;
        }
    }

    return {Figure, Circle, Rectangle};
}