
const buildteamMembers = (data) => {
    const teamProfile = [];


//manager here 
    const generateManager = (manager) => {
        console.log(manager)
        let managerProfile = `
        <div class="card employeeCard">
    <div class="card-header text-white">
        <h2 class="card-title Name">${manager.name} </h2>
        <h3 class="card-title"><i class="cup-hot-fill"></i>Manager</h3>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item"> ID: ${manager.id}</li>
            <li class="list-group-item">Email: <a href="${manager.email}">${manager.email}</a></li>
            <li class="list-group-item">Office number: ${manager.officeNumber}</li>
        </ul>
    </div>
    </div>`
    teamProfile.push(managerProfile);
    };

    //engineer card here 
    const generateEngineer = (engineer) => {  // need to edit all these chanege it up. the html on the inside is fine tho. 
        console.log(engineer)

        let engineerProfile = `<div class="card employeeCard">
        <div class="card-header text-white">
            <h2 class="card-title Name">${engineer.name} </h2>
            <h3 class="card-title"><i class="cup-hot-fill"></i>Engineer</h3>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:${engineer.id}</li>
                <li class="list-group-item">Email: <a href="${engineer.email}">${engineer.email}</a></li>
                <li class="list-group-item">Github:${engineer.github} </li>
            </ul>
        </div>
        </div>`

teamProfile.push(engineerProfile);

    }


    //Intern card here 
    const generateIntern = (intern) => {  // need to edit all these chanege it up. the html on the inside is fine tho. 
        console.log(intern)

        let internProfile = `<div class="card employeeCard">
        <div class="card-header text-white">
            <h2 class="card-title Name">${intern.name} </h2>
            <h3 class="card-title"><i class="cup-hot-fill"></i>Engineer</h3>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:${intern.id}</li>
                <li class="list-group-item">Email: <a href="${intern.email}">${intern.email}</a></li>
                <li class="list-group-item">Github:${intern.school} </li>
            </ul>
        </div>
        </div>`

teamProfile.push(internProfile);

    }

    //Intern card here 
    const generateEmployee = (employee) => {  // need to edit all these chanege it up. the html on the inside is fine tho. 
        console.log(employee)

        let employeeProfile = `<div class="card employeeCard">
        <div class="card-header text-white">
            <h2 class="card-title Name">${employee.name} </h2>
            <h3 class="card-title"><i class="cup-hot-fill"></i>Engineer</h3>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:${employee.id}</li>
                <li class="list-group-item">Email: <a href="${employee.email}">${employee.email}</a></li>
                <li class="list-group-item"> </li>
            </ul>
        </div>
        </div>`

teamProfile.push(employeeProfile);

    }

    for (let i=0; i <data.length; i++) {
        if (data[i].getRole() === "Manager") {
          managerProfile(data[i])
        }
        if (data[i].getRole() === "Intern") {
          internProfile(data[i])
        }
        if (data[i].getRole() === "Engineer") {
          engineerProfile(data[i])
        }
        if (data[i].getRole() === "Employee") {
          employeeProfile(data[i])
        }
      }

      return teamProfile.join('')
    

};



module.exports = teamArray => {
    return `
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="./style.css">
</head>
<body>

<header>
    <div class="row">
        <div class="col-12 mb-3 team-heading bg-danger">
            <h1 class="text-center text-white">My Team</h1>
        </div>
    </div>

</header>


<div class="container">
    <div class="row">
        <div class="row col-12 d-flex justify-content-center"> <!-- team-area was inside this -->
        
        ${buildteamMembers(teamArray)}




</div>
</div>
</div>

</body>
</html> `

};