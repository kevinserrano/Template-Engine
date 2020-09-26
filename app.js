const fs = require("fs");
const inquirer = require("inquirer");
const employeeLib = require("./library/employee.js");
const engineerLib = require("./library/engineer.js");
const internLib = require("./library/intern.js");
const managerLib = require("./library/manager.js");
const managerTemp = require("./Templates/manager.thml");
const internTemp = require("./Templates/intern.html");
const engineerTemp = require("./Templates/engineer.html");





var prompts = [{
        type: "input",
        name: "name",
        message: "Team Manager name?"
    },
    {
        type: "input",
        name: "managerEmail",
        message: "Team Managers email?"
    },
    {
        type: "input",
        name: "ID",
        message: "Enter your ID number."
    },
    {
        type: "input",
        name: "OfficeNumber",
        message: "Enter office number."
    },
    {
        type: "list",
        name: "employee",
        message: "Who else are you adding to your team?",
        choices: ["Intern", "Engineer", "None"]
    }
];

/*const internQuestions = [{
        type: "input",
        name: "name",
        message: "Enter your name."
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email."
    },
    {
        type: "input",
        name: "ID",
        message: "Enter your ID number."
    },
    {
        type: "input",
        name: "school",
        message: "What college did you graduate from?"
    }
];
const engineerQuestions = [{
        type: "input",
        name: "name",
        message: "Enter your name."
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email."
    },
    {
        type: "input",
        name: "ID",
        message: "Enter your ID number."
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    }
];*/

inquirer.prompt(prompts)
    .then(function (data) {
        fs.writeFile("index.html", JSON.stringify(data),
            function (err) {
                if (err) {
                    return console.log(err);
                }
            })
    });