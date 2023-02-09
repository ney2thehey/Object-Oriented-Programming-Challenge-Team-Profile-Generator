// constructor class Engineer 
const Employee = require ("./employee")
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super (name, id, email);

    this.github = github;
  }

getGithub (){
  return this.github;
}
getRole (){
  return "Engineer";   //why is this not in the constructor 
}
}
module.exports = Engineer;