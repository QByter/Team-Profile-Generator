// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
// const path = require("path");
 const fs = require("fs/promises");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./src/page-template.js");
// const { type } = require("os");


// TODO: Write Code to gather information about the development team members, and render the HTML file.


const {
name,
id,
email,
officeNumber

} =  inquirer.prompt([


{
    
type: "input",
name: "name",
message: "Enter the team manager's name: ",
validate: input=> {
if (input) {
    return true;
} else {

    console.log("Enter a valid name")
}

}
},

{    
type: "input",
name: "id",
message: "Enter employee ID: ",
},


{        
type: "input",
name:  "email",
message: "Enter employee email address: ",
},

{
    
type: "input",
name: "officeNumber",
message: "Enter the office numebr: ",
},


]);















