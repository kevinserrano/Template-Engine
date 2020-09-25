const fs = require("fs");
const inquirer = require("inquirer");
const inquire = require("inquirer");



inquirer.prompt([{
        type: "input",
        name: "manager",
        message: "Manager name?"
    },
    {
        type: "input",
        name: "email",
        message: "Managers email?"
    }
]);