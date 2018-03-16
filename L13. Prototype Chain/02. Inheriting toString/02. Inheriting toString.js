function inheritingToString() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        //override
        toString() {
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        //override
        toString() {
            return super.toString().slice(0, -1) + `, subject: ${this.subject})`
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        //override
        toString() {
            return super.toString().slice(0, -1) + `, course: ${this.course})`
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}