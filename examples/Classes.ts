class Student {
  fullName: string

  constructor (public firstName: string, public middleInital: string, public lastName: string) {
    this.fullName = `${firstName} ${middleInital} ${lastName}`
  }
}

interface Person {
  firstName: string
  lastName: string
}

function greeter (person: Person) {
  return `Hello ${person.firstName} ${person.lastName}`
}

// We can see that Student implements
// Person interface so is right send a 
// student as param to greeter
const juanPerson = new Student('Juan', 'J', 'Arobleda')

document.body.innerHTML = greeter(juanPerson)
