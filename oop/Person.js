class Person extends Job {
  constructor(name, surname, age, testAutomation, developer, janitor) {
    super(testAutomation, developer, janitor);
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  setName(newName) {
    this.name = newName;
  }
}

module.exports = Person;
