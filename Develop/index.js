const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js');

//const readme = generateMarkdown(name, github);

//  fs.writeFile('./createdREADME.md', readme, err => {
//    if (err) throw err;

//  console.log('README complete! Look at the createdREADME.md!');

// });

// TODO: Include packages needed for this application
//const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [

        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a detailed description for your project for the README. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter your description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide instructions for the user to install and use your project. (Required)',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please enter your installation instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How will this project be used? (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter your usage!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Choose a license that will best fit your project. (Required)',
            choices: ['MIT', 'GNU', 'Apache', 'BSD', 'Mozilla', 'None of the above'],
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Please select a license!');
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'contribute',
            message: 'What are some guidelines to contribute to this project? (Required)',
            validate: contributeInput => {
                if (contributeInput) {
                    return true;
                } else {
                    console.log('Please enter your contribute guidelines!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'How will the user test this project? (Required)',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please enter your test!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'yourName',
            message: 'What is your first and last name? (Required)',
            validate: yourNameInput => {
                if (yourNameInput) {
                    return true;
                } else {
                    console.log('Please enter your first and last name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your gitHub username? (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your github!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address for any questions about this project. (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        }
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

    console.log("You can preview your README file now!");

});
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile('./createdREADME.md', generateMarkdown(userInput));
    });
};


// Function call to initialize app
init();


