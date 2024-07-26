const Person = require("./oop/Person");

let person1 = new Person("Marks", "Cimermanis", 23);

let person2 = new Person("Marks", "Cimermanis", 23, true, false, false);

console.log(person1.name);
console.log(person2.getActiveJob);
