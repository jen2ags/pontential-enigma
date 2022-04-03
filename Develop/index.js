const fs = require('fs');
const profileDataArgs = process.argv.slice(2, process.argv.length);
 const [name, github] = profileDataArgs;

const generatePage = (projectName, githubName) => {
    return `
    

    # ${projectName}

    ## Website
    ${githubName}
    `;
    };
    
    fs.writeFile('createdREADME.md', generatePage(name, github), err => {
        if (err) throw err;

        console.log('README complete! Look at the createdREADME.md!');

    });

// TODO: Include packages needed for this application
//const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
//const questions = () => {
  //  return inquirer.prompt([
    //    {
      //      type: 'input',
        //    name: 'title',
          //  message: 'What is the title of your README? (Required)',
        
        //},
        //{
         //   type: 'input',
           // name: 'description',
           // message: 'Provide a detailed description for your README. (Required)',
        //},
    //]};

// TODO: Create a function to write README file
//function writeToFile('./develop/README.md', data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();


