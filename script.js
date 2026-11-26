const person = { name: "Jack", age: 43, city: "New York City" };

const { name, age, city, country = "Unknown" } = person;

console.log(name);
console.log(age);
console.log(city);
console.log(country);


function employee(name, position) {
  return { name, position }
}

let crewMember = employee("Marcus", "Dolly Grip")
console.log(crewMember)