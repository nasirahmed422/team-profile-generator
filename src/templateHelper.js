// create Manager tile
const genManager = function (manager) {
  return `
    <div class="tile" style="max-width: 30rem;">
      <div class="tile-header">
        <h2 style="text-align: center;">${manager.name}</h2>
        <div class="tile-title">
        <i style="padding-top: 20px; padding-right: 10px;" class="fas fa-mug-hot"></i><h4>Manager</h4>
      </div>
      </div>
      <div class="tile-body">
        <div >
          <p class="tile-text">ID: ${manager.id}</p>
          <p class="tile-text">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
          <p class="tile-text">Office Number: ${manager.officeNumber}</p>
        </div>       
      </div>
    </div>
    `
};

// create Engineer tile
const genEngineer = function (engineer) {
  return `
    <div class="tile" style="max-width: 25rem;">
      <div class="tile-header">
        <h2 style="text-align: center;">${engineer.name}</h2>
        <div class="tile-title">
        <i style="padding-top: 20px; padding-right: 10px;" class="fas fa-glasses"></i><h4>Engineer</h4>
      </div>
      </div>
      <div class="tile-body">
        <div >
          <p class="tile-text">ID: ${engineer.id}</p>
          <p class="tile-text">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
          <p class="tile-text">GitHub: <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></p>
        </div>       
      </div>
    </div>
    `
};

// create Intern tile
const genIntern = function (intern) {
  return `
    <div class="tile" style="max-width: 20rem;">
      <div class="tile-header">
        <h2 style="text-align: center;">${intern.name}</h2>
        <div class="tile-title">
        <i style="padding-top: 20px; padding-right: 10px;" class="fas fa-graduation-cap"></i><h4>Intern</h4>
      </div>
      </div>
      <div class="tile-body">
        <div >
          <p class="tile-text">ID: ${intern.id}</p>
          <p class="tile-text">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
          <p class="tile-text">School: ${intern.school}</p>
        </div>       
      </div>
    </div>
    `
};

templateHelper = (data) => {
  dataArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    if (role === "Manager") {
      const managerTile = genManager(employee);
      dataArray.push(managerTile);
    }

    if (role === "Engineer") {
      const engineerTile = genEngineer(employee);
      dataArray.push(engineerTile);
    }

    if (role === "Intern") {
      const internTile = genIntern(employee);
      dataArray.push(internTile);
    }
  }

  const employeeTile = dataArray.join("");
  const genTeam = templateHelperpage(employeeTile);
  return genTeam;
};

const templateHelperpage = function (employeeTile) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" type="text/css" href="./style.css">
      <script src="https://kit.fontawesome.com/59cf3fa460.js" crossorigin="anonymous"></script>
      <title>Team Profiles</title>
    </head>
    <body>
      <header class="banner">
        <h1 style="text-align: center;">My Team</h1>
      </header>
      <div class="container">
        ${employeeTile}
      </div>
    </body>
    </html>
    `
};

module.exports = templateHelper;