// Exercise: Employee Management System

// Create a class called Employee. Each Employee object should have the following properties:

// Employee ID (an integer)
// Department (a string)
// Salary (a float)
// The Employee class should have the following methods:

// display_inf(): Prints the name, employee ID, department, and salary of the employee.
// Create a class called EmployeeManagementSystem. Each EmployeeManagementSystem object should have the following properties:

// Company name (a string)
// List of employees (an empty list to start with)
// The EmployeeManagementSystem class should have the following methods:

// hire_employee(employee): Adds the given employee to the list of employees.
// fire_employee(employee_id): Removes the employee with the given ID from the list of employees.
// display_employees(): Prints the information of all the employees in the system.
// Create a few instances of the Employee class and add them to an instance of the EmployeeManagementSystem class. Test out the methods to hire and fire employees, and display the employee information.

function Employee(employeeID, department, salary){
  return{
  employeeID : employeeID,
  department : department,
  salary : salary,
display_inf: function(){
    return this.employeeID+" "+this.department+" "+this.salary

}
  }
      }


function EmployeeManagementSystem(company) {
    return{
  company :company,
  listOfemployees : [],
  hire_employee : function(employee) {
    this.listOfemployees.push(employee)
      console.log(employee)
    return employee.employeeID
  },fire_employee:function(employee_id){
    this.employee_id.slice()
    },
    display_employees:function()
        return this.employee
}
   }
  


