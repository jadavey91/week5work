let PersonP = function(nm, id) {
    this.name = nm;
    this.id = id;
}

PersonP.prototype.getDetails = function() {
    return `Name: ${this.name} / id: ${this.id}`
}

let EmployeeP = function(nm, id, salary) {
    PersonP.call(this, nm, id);
    this.salary = salary;
};

EmployeeP.prototype=Object.create(PersonP.prototype);

// EmployeeP.prototype = Person.prototype also works. The Object.create is extra work.

let fred = new PersonP("Fred", 321);
console.log(fred.getDetails());

const bob = new EmployeeP("Bob", 4321, 25000);
console.log(bob.getDetails(), bob.salary);