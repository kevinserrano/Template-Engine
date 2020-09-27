const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const team = [];
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


const prompt = [{
    type: "list",
    name: "employee",
    message: "Who are you adding to your team?",
    choices: ["Manager", "Intern", "Engineer", "None"]
}];

const managerQuestions = [{
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
    inquirer.prompt(prompt)
        .then(function (data) {
            switch (data.employee) {
                case "Manager":
                    manager()
                    break;
                case "Intern":
                    intern()
                    break;
                case "Engineer":
                    engineer()
                    break;
                case "None":
                    render(team)
                    break;
            }
        });
}


function manager() {
    inquirer.prompt(managerQuestions)
        .then(function (data) {
            const newManager = new Manager(data.name, data.email, data.id, data.OfficeNumber)
            team.push(newManager)
            init()
        })
}

function intern() {
    inquirer.prompt(internQuestions)
        .then(function (data) {
            const newIntern = new Intern(data.name, data.email, data.id, data.school)
            team.push(newIntern)
            init()
        })
}

function engineer() {
    inquirer.prompt(engineerQuestions)
        .then(function (data) {
            const newEngineer = new Engineer(data.name, data.email, data.id, data.github)
            team.push(newEngineer)
            init()
        })
}


init();