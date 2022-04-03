const inquirer = require('inquirer');

//const fs = require('fs');

//const generateMarkdown = require('./utils/generateMarkdown.js');

//const readme = generateMarkdown(name, github);
    
  //  fs.writeFile('./createdREADME.md', readme, err => {
    //    if (err) throw err;

      //  console.log('README complete! Look at the createdREADME.md!');

   // });

// TODO: Include packages needed for this application
//const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
        
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a detailed description for your project for the README. (Required)',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide instructions for the user to install and use your project. (Required)',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How will this project be used? (Required)',
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Choose a license that will best fit your project. (Required)',
            choices: ['MIT', 'GNU', 'Apache', 'BSD', 'Mozilla', 'None of the above'],
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'What are some guidlines to contribute to this project? (Required)',
        },
        {
            type: 'input',
            name: 'test',
            message: 'How will the user test this project? (Required)',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your gitHub username? (Required)',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address for any questions about this project. (Required)',
        }
    ]);
};

    questions().then(answers => console.log(answers));

// TODO: Create a function to write README file
//function writeToFile('./develop/README.md', data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();


