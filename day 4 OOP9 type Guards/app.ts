class PersonWithSingleName {
  firstName: string;
  constructor(name: string) {
    this.firstName = name;
  }
}

class PersonWithLastName extends PersonWithSingleName {
  lastName: string;
  constructor(firstName: string, lastName: string) {
    super(firstName);
    this.lastName = lastName;
  }
}

function getPersonName(name: PersonWithLastName | PersonWithSingleName): void {
  if ("lastName" in name) {
    console.log(`The Name is ${name.firstName} ${name.lastName}`);
  } else {
    console.log(`The Name is ${name.firstName}`);
  }
}

const person1 = getPersonName(new PersonWithSingleName("Dillah"));
const person2 = getPersonName(new PersonWithLastName("Dillah", "Codes"));
