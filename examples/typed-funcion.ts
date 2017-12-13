// Regular js function
function greetTo (person) {
  return `Hello ${person}`
}

const user = 'Juan'

document.body.innerHTML = greetTo(user)

// Typed function
function greetToTyped (person: string) {
  return `Hello ${person}`
}

let numbers = [0, 1, 2]

// Boommer!! we can't send an number to greetToTyped
// it's waiting for a string!
document.body.innerHTML = greetToTyped(numbers)

// NOTE: this file won't be compiled without errors by ts
// because we have an error on greetToTyped sending
// numbers and not a string as expected
