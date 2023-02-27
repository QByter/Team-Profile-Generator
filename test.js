const inquirer = require("inquirer");

// addManager();


menu();

function addManager() {
    console.log("===========================");
    console.log("Adding team manager");
    console.log("===========================");
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
    .then(() => {
      menu();
    });
}

function menu() {
  console.clear();
  console.log("===========================");
  console.log("What would you like to do next?");
  console.log("===========================");
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
          break;
      }
    });
}

function addIntern() {
    console.clear();
    console.log("===========================");
    console.log("Adding intern");
    console.log("===========================");
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
    .then(() => {
      menu();
    });
}

function addEngineer() {
    console.clear();
    console.log("===========================");
    console.log("Adding engineer");
    console.log("===========================");
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
    .then(() => {
      menu();
    });
}
