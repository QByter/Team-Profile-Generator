const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs/promises");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { type } = require("os");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

let team = [];

addManager();

// menu();

async function finish() {
  let htmlDoc = render(team);
  await fs.writeFile(outputPath, htmlDoc);
}

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
        validate: function(input) {
          if (!input) {
            return 'Please enter a name';
          }
          return true;
        },
      },

      {
        type: "input",
        name: "id",
        message: "Enter ID: ",
        validate: function(input) {
          if (!input) {
            return 'Please enter a valid ID';
          }
          return true;
        },
      },

      {
        type: "input",
        name: "email",
        message: "Enter email: ",
        validate: function (email) {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

          if (valid) {
            console.log("Great job");
            return true;
          } else {
            console.log(".  Please enter a valid email");
            return false;
          }
        },
      },

      {
        type: "inout",
        name: "officeNumber",
        message: "Enter office number: ",
        validate: function(input) {
          if (!input) {
            return 'Please enter the office number';
          }
          return true;
        },
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
          finish();
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
        validate: function(input) {
          if (!input) {
            return 'Please enter a name';
          }
          return true;
        },
      },

      {
        type: "input",
        name: "id",
        message: "Enter ID: ",
        validate: function(input) {
          if (!input) {
            return 'Please enter a valid ID';
          }
          return true;
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter email: ",
        validate: function (email) {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

          if (valid) {
            console.log("Great job");
            return true;
          } else {
            console.log(".  Please enter a valid email");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Enter the intern's school: ",
        validate: function(input) {
          if (!input) {
            return 'Please enter a school';
          }
          return true;
        },
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
        validate: function(input) {
          if (!input) {
            return 'Please enter a name';
          }
          return true;
        },
      },

      {
        type: "input",
        name: "id",
        message: "Enter ID: ",
        validate: function(input) {
          if (!input) {
            return 'Please enter a valid ID';
          }
          return true;
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter email: ",
        validate: function (email) {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

          if (valid) {
            console.log("Great job");
            return true;
          } else {
            console.log(".  Please enter a valid email");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Enter engineer's github ID: ",
        validate: function(input) {
          if (!input) {
            return 'Please enter GitHub username';
          }
          return true;
        },
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
