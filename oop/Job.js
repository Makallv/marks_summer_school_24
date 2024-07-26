const Person = require("./Person");

class Job extends Person {
  constructor(testAutomation, developer, janitor) {
    super();
    this.testAutomation = testAutomation;
    this.developer = developer;
    this.janitor = janitor;
  }

  changeJob(Job) {
    let result;
    result = !this.testAutomation
      ? Job.lower() === "test automation"
      : this.testAutomation;
    result = !this.developer
      ? Job.lower() === "developer" || Job.lower() === "dev"
      : this.developer;
    result = !this.janitor ? Job.lower() === "janitor" : this.janitor;
    return result;
  }

  leaveJob() {
    const RESULT = `${this.name} is assigned only to 1 active job`;
    return RESULT
      ? this.testAutomation === true ||
          this.developer === true ||
          this.janitor === false
      : `${this.name} has two or more jobs`;
    if (
      (this.testAutomation === true && this.developer === true) ||
      (this.testAutomation === true && this.janitor === true)
    ) {
      !this.testAutomation;
    }
    if (
      (this.janitor === true && this.developer === true) ||
      (this.testAutomation === true && this.janitor === true)
    ) {
      !this.janitor;
    }
    if (
      (this.testAutomation === true && this.developer === true) ||
      (this.developer === true && this.janitor === true)
    ) {
      !this.developer;
    }
  }

  getActiveJob() {
    let result;
    return (result = `Active job is test automation`
      ? this.janitor === false && this.developer === false
      : (result = `Active job is developer`
          ? this.janitor === false && this.testAutomation === false
          : (result = `Active job is janitor`
              ? this.testAutomation === false && this.developer === false
              : (result = -1))));
  }
}

module.exports = Job;
