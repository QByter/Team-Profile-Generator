const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// addManager();

let team = [];

addManager();

// menu();
function addManager() {
  console.log("                           ");
  console.log("===========================");
  console.log("Add team manager");
  console.log("===========================");
  console.log("                           ");
  const { name, id, email, officeNumber } = inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the team manager's name: ",
      },

      {
        type: "input",
        name: "id",
        message: "Enter ID: ",
      },
      {
        type: "input",
        name: "email",
        message: "Enter email: ",
      },
      {
        type: "inout",
        name: "officeNumber",
        message: "Enter office number: ",
      },
    ])
    .then((response) => {
      let manager = new Manager(
        response.name,
        response.id,
        response.email,
        response.officeNumber
      );
      team.push(manager);
      console.log(team);
    })
    .then(() => {
      menu();
    });
}

function menu() {
  //   console.clear();
  console.log("                           ");
  console.log("===========================");
  console.log("What would you like to do next?");
  console.log("===========================");
  console.log("                           ");
  const { choice } = inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        // message: "What would you like to do next?",
        choices: [
          "Add an engineer",
          "Add an intern",
          "Finish building the team",
        ],
      },
    ])
    .then((answers) => {
      console.log(answers.choice);
      switch (answers.choice) {
        case "Add an engineer":
          addEngineer();
          break;
        case "Add an intern":
          addIntern();
          break;
        case "Finish building the team":
          console.log(id, email, officeNumber);
          break;
      }
    });
}

function addIntern() {
  console.clear();
  console.log("                           ");
  console.log("===========================");
  console.log("Add intern");
  console.log("===========================");
  console.log("                           ");
  const { name, id, email, school } = inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter intern's name: ",
      },

      {
        type: "input",
        name: "id",
        message: "Enter ID: ",
      },
      {
        type: "input",
        name: "email",
        message: "Enter email: ",
      },
      {
        type: "input",
        name: "school",
        message: "Enter the intern's school: ",
      },
    ])
    .then((response) => {
      let intern = new Intern(
        response.name,
        response.id,
        response.email,
        response.school
      );
      team.push(intern);
      console.log(team);
    })
    .then(() => {
      menu();
    });
}

function addEngineer() {
  console.clear();
  console.log("                           ");
  console.log("===========================");
  console.log("Add engineer");
  console.log("===========================");
  console.log("                           ");
  const { name, id, email, github } = inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter engineer's name: ",
      },

      {
        type: "input",
        name: "id",
        message: "Enter ID: ",
      },
      {
        type: "input",
        name: "email",
        message: "Enter email: ",
      },
      {
        type: "input",
        name: "github",
        message: "Enter engineer's github ID: ",
      },
    ])
    .then((response) => {
      let engineer = new Engineer(
        response.name,
        response.id,
        response.email,
        response.github
      );
      team.push(engineer);
      console.log(team);
    })
    .then(() => {
      menu();
    });
}
