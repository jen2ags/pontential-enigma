
const generateMarkdown = () => {
  return `
  
  # ${data.title}

  ## License
  [![license](https://img.shields.io/badge/license-${data.license}-green.svg)] (https://shields.io/)

  ## Tabls of Contents
  - [Description] (#description)
  - [Istallation] (#installation)
  - [Usage] (#usage)
  - [Contribution] (#contribution)
  - [Test] (#test)
  - [Questions?] (#questions?)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contribution
  ${data.contribution}

  ## Test
  ${data.test}

  ## Questions?
  - GitHub: [${data.github}](https://github.com/${data.github})

  - Email: [${data.email}](mailto:user@example.com)
  `;
  };


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README



module.exports = generateMarkdown;
