const Employee = require("./employee.js")

class Manager extends Employee  {
constructor(name, salary, title, manager = null, employees = []) {
    super(name, salary, title, manager = null)
    this.employees = employees
}

addEmployee(employee) {
    return this.employees.push(employee)
}


}

const splinter = new Manager('Splinter', 100000, 'Sensei');
console.log(splinter);

module.exports = Manager