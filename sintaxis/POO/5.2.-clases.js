//Basic syntax for classes in JavaScript

class Person {
    // Constructor method to initialize properties
    // This method is called when a new instance of the class is created
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Example of creating an instance of the class
const person1 = new Person("Alice", 30);
person1.greet(); // Output: Hello, my name is Alice and I am 30

//#region Inheritance example with super constructor
class Employee extends Person {
    constructor(name, age, position) {
        // Call the parent class constructor
        super(name, age); // Call the constructor of the Person class
        this.position = position;
    }
    greet() {
        // Call the parent class greet method (Polymorphism)
        super.greet(); // Call the greet method of the Person class
        console.log(`I work as a ${this.position}.`);
    }
}

// Example of creating an instance of the Employee class
const employee1 = new Employee("Bob", 25, "Software Engineer");
employee1.greet(); // Output: Hello, my name is Bob and I am 25 years old. I work as a Software Engineer.
//#endregion