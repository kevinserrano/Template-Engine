const fs = require("fs");

const inquirer = require("inquirer");

const util = require("./library")





inquirer.prompt = [{
        type: "input",
        name: "name",
        message: "Manager name?"
    },
    {
        type: "input",
        name: "managerEmail",
        message: "Managers email?"
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
        type: "input",
        name: "employee",
        message: "Who else are you adding to your team?",
        choices: ["Intern", "Engineer", "None"]
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
];