// constructor class Intern  
const Employee = require ("./employee")
class Manager extends Employee {
  constructor(name, id, email, officeNumber ) {
    super (name, id, email);      //important function 

    this.officeNumber= officeNumber;
  }

getofficeNumber (){
  return this.officeNumber;
}
getRole (){         //child will overwrite if theres overlap
  return "Manager";
}
}
module.exports = Manager;