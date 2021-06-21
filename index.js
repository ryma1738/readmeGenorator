
const inquirer = require("inquirer");
const generateReadme = require("./src/generateReadMe.js");
const fs = require("fs");

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
              console.log('Please enter a description for you project!');
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
        message: "Enter a description of how to install your project: (required)",
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
        message: "Enter a description of how to use your project: (required)",
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
        message: "Enter the file name of the image located in ./scr/dev/assets/images",
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
        message: "Enter guidelines for people contributing to your project: (required)",
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
        message: "Enter instructions for testing the project:"
    },
    {
        type: "list",
        name: "license",
        message: "Chose what type of license you would like your project to have: (required)",
        choices: ["MIT", "Apache", "GNU", "None"],
        validate: input => {
            if (input) {
              return true;
            } else {
              console.log('Please pick a license type!');
              return false;
            }
          }
    },
    {
        type: "input",
        name: "name",
        message: "Enter your full name for the copyright license: "
    },
    {
        type: "input",
        name: "company",
        message: "Enter your company name or other identifying name for the copyright license:"
    },
    {
        type: "input",
        name: "username",
        message: "Enter your github username: (required)",
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
        name: "email",
        message: "Enter your preferred email: (required)",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter your Email!');
                return false;
            }
        }
    }
];

function writeToFile(data) {
    const content = generateReadme(data);
    fs.writeFile("./src/dev/README.md", content, err => { 
        if (err) throw err;
        console.log("README file created! find it under (./src/dev)!")
    });
}

function init() {
    inquirer
    .prompt(questions)
    .then(answer => {
        writeToFile(answer);
    })
    .catch((error) => {
        if (error.isTtyError) {
          console.log(error)
        } else {
          console.log("Something went wrong! Please try again")
        }
    });
}

init();