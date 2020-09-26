const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");



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
    .then(
        app.get('../', function (req, res) {

            var name = 'hello';

            res.render(__dirname + "/views/layouts/main.html", {
                name: name
            });

        }));