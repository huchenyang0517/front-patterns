//Share properties among many objects of the same type
class Dog {
    constructor(name) {
        this.name = name;
    }

    bark() {
        return `Woof!`;
    }
}

class SuperDog extends Dog {
    constructor(name) {
        super(name);
    }

    fly() {
        return "Flying!";
    }
}

const dog1 = new SuperDog("Daisy");
console.log(dog1.bark());
console.log(dog1.fly());
