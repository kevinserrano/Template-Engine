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
        type: "list",
        name: "employee",
        message: "Who are you adding to your team?",
        choices: ["Manager", "Intern", "Engineer", "None"]
    },
    {
        type: "input",
        name: "name",
        message: "Team Manager name?"
    },
    {
        type: "input",
        name: "email",
        message: "Team Managers email?"
    },
    {
        type: "input",
        name: "id",
        message: "Enter your ID number."
    },
    {
        type: "input",
        name: "OfficeNumber",
        message: "Enter office number."
    }

];


const internQuestions = [{
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
        name: "id",
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
        name: "id",
        message: "Enter your ID number."
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    }
];

function init() {
    inquirer.prompt(prompts)
        .then(function (data) {
            if (data.choices === "Intern") {
                prompt.internQuestions
            } else if (data.choices === "Engineer") {
                prompt.engineerQuestions
            } else {
                return console.log("nope")
            }
        });
}



init();