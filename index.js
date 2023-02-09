const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const htmlGenerator = require("./dist/htmlGenerator")


const teamArray =[];
//function runApp(){
const managerQuestion = [{
  type: "input",
  name: "name",
  message: "What is your Manager name?"
},
{
  type: "input",
  name: "id",
  message: "What is your Manager ID?"

},
{
  type: "input",
  name: "email",
  message: "What is the managers email?"
},
{
  type: "input",
  name: "officeNumber",
  message: "What is the managers officeNumber?"
},
]

const engineerQuestion = [{
  type: "input",
  name: "name",
  message: "What is your Engineer name?"
},
{
  type: "input",
  name: "id",
  message: "What is your Engineer ID?"

},
{
  type: "input",
  name: "email",
  message: "What is the Engineer email?"
},
{
  type: "input",
  name: "github",
  message: "What is the Engineer github?"
},
]

const InternQuestion = [{
  type: "input",
  name: "name",
  message: "What is your Intern's name?"
},
{
  type: "input",
  name: "id",
  message: "What is your Intern's ID?"

},
{
  type: "input",
  name: "email",
  message: "What is the Intern's email?"
},
{
  type: "input",
  name: "school",
  message: "What is the Intern's school?"
},
]

function init(){
  inquirer.prompt(managerQuestion).then(response=> {
    const manager = new Manager(response.name,response.id, response.email, response.officeNumber);
    teamArray.push(manager);
    menu();
  })
}
init();

function addEngineer(){
  inquirer.prompt(engineerQuestion).then(response=>{
    const engineer = new Engineer(response.name,response.id, response.email, response.github);
    teamArray.push(engineer);
    menu();
  })
}

function addIntern(){
  inquirer.prompt(InternQuestion).then(response=>{
    const intern = new Intern (response.name,response.id, response.email, response.school);
    teamArray.push(intern);
    menu();
  })
}

function newTeam(){
  console.log(teamArray);
}
function menu(){
  inquirer.prompt([{
    type: "list",
    name: "Selection",
    message: "Do you want to add a new Employee?",
    choices: ["Engineer", "Intern", "Quit"]
  }]).then(response=>{
    if (response.Selection === "Engineer"){
      addEngineer();
    } else if(response.Selection === "Intern"){
      addIntern();

    } else {
      newTeam();
    }
  })
}

 function htmlBuilder () {
  console.log("Team created!")

fs.writeFileSync("./dist/team.html", htmlGenerator(teamArray),)


};

//Menu();


//}