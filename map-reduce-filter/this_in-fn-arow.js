const person = {
  firstName: "Lucas",
  lastName: "Santos",
};

function completeName() {
  return `${this.firstName} ${this.lastName}`;
}

const boundCompleteName = completeName.bind(person);

console.log(boundCompleteName());
