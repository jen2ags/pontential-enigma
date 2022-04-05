
function generateMarkdown (data) {
  return `
  
  # ${data.title}[![license](https://img.shields.io/badge/license-${data.license}-green.svg)](https://shields.io/)

  ## Table of Contents
  - [Description](#description)
  - [Istallation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test](#test)
  - [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project is under the ${data.license} license.

  ## Test
  ${data.test}

  ## Questions?
  Please email if you have any other questions about ${data.title}.

  - GitHub: [${data.github}](https://github.com/${data.github})

  - Email: [${data.email}](mailto:user@example.com)

  ## Contribution
  Created by ${data.yourName}
  ${data.contribute}
  `;
  };

module.exports = generateMarkdown;
