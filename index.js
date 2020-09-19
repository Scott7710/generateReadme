const inquirer = require("inquirer");
const fs = require('fs');


function userPrompts() {
    return inquirer.prompt( [
        {
            type: "input",
            name: "title",
            message: "What is the title of this project?"
        }, 
        // is it possible to use a loop here for the other sections?
    }
