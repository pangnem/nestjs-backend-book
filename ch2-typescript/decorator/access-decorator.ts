function Enumerable(enumerable: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = enumerable;
    };
}

class Person {
    constructor(private name: string) {
    }

    @Enumerable(true)
    get getName() {
        return this.name;
    }

    @Enumerable(false)
    set setName(name: string) {
        this.name = name;
    }
}

const person = new Person('Dexter');
console.log(person); // TODO: ??? getName()은 안나온다.
for (let key in person) {
    console.log(key);
}
