// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const generateReadme = require("./src/dev/generateReadMe");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter the title for your project: (required)",
        validate: input => {
            if (input) {
              return true;
            } else {
              console.log('Please enter your github username!');
              return false;
            }
          }
    },
    {
        type: "input",
        name: "descriptionMain",
        message: "Please enter a description of your project, what it does, what you learned, how it was made, etc: (required)",
        validate: input => {
            if (input) {
              return true;
            } else {
              console.log('Please enter your github username!');
              return false;
            }
          }
    },
    {
        type: "confirm",
        name: "includeTOC",
        message: "Would you like to include a Table of Contents in your readMe?"
    },
    {
        type: "input",
        name: "descriptionInstall",
        message: "Please enter a description of how to install your project: (required)",
        validate: input => {
            if (input) {
              return true;
            } else {
              console.log('Please enter a description for installation!');
              return false;
            }
          }
    },
    {
        type: "input",
        name: "descriptionUsage",
        message: "Please enter a description of how to use your project: (required)",
        validate: input => {
            if (input) {
              return true;
            } else {
              console.log('Please enter a description for how to use your project!');
              return false;
            }
          }
    },
    {
        type: "confirm",
        name: "addPhotos",
        message: "Would you like to add a photo to your project to the usage section?",
        default: false
    },
    {
        type: "input",
        name: "photo",
        message: "Please enter the file name of the image located in ./scr/dev/assets/images",
        when: ({ addPhotos }) => {
            if (addPhotos) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "input",
        name: "descriptionContrib",
        message: "Please enter guidelines for people contributing to your project: (required)",
        validate: input => {
            if (input) {
              return true;
            } else {
              console.log('Please enter a description for how people can contribute to your project');
              return false;
            }
          }
    },
    {
        type: "input",
        name: "descriptionTesting",
        message: "Please enter instructions for testing the project:"
    },
    {
        type: "list",
        name: "licence",
        message: "Please chose what type of licence you would like your project to have:",
        choices: ["MIT License", "GNU General License", "No License"],
        validate: input => {
            if (input) {
              return true;
            } else {
              console.log('Please pick a licence type!');
              return false;
            }
          }
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your github username: (required)",
        validate: input => {
            if (input) {
              return true;
            } else {
              console.log('Please enter your github username!');
              return false;
            }
        }
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your github username: (required)",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter your github username!');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answer) => {
        console.log(answer);

    })
    .catch((error) => {
        if (error.isTtyError) {
            //Prompt couldn't be rendered in the current environment
        } else {
            //something else went wrong
        }
    })
}

// Function call to initialize app
init();