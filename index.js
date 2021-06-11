/*
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
*/
var title;
var description;
var table;
var installation;
var usage;
var credits;
var license;
var features;
var contribute;

var licenseOptions = ['MIT License','GNU LGPLv3','Mozilla Public License 2.0','Apache License 2.0','The Unlicense']

const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'title: ',
      name: 'title',
    },
    {
      type: 'input',
      message: 'description:  ',
      name: 'description',
    },
    {
        type: 'input',
        message: 'installation:  ',
        name: 'installation',
    },
    {
      type: 'input',
      message: 'usage: ',
      name: 'usage',
    },
    {
        type: 'input',
        message: 'credits: ',
        name: 'credits',
    },
    {
      type: 'list',
      message: 'license: ',
      name: 'license',
      choices: licenseOptions
    },
    {
        type: 'input',
        message: 'features: ',
        name: 'features',
    },
    {
        type: 'input',
        message: 'contribute: ',
        name: 'contribute',
    },
    {
      type: 'input',
      message: 'github: ',
      name: 'github',
    },
    {
      type: 'input',
      message: 'email: ',
      name: 'email',
    },

  ])
  .then((response) =>
    {
        title = response.title;
        description = response.description;
        table;
        installation = response.installation;
        usage = response.usage;
        credits = response.credits;
        license = response.license;
        features = response.features;
        contribute = response.contribute;
        github = response.github;
        email = response.email;

        var readme = 
`
# ${title}

## Description
${description}

## Table of Contents
If your README is long, add a table of contents to make it easy for users to find what they need.
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [Contribute](#contribute)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}   
    
## Credits
${credits}

## License
${license}

## Features
${features}

## Contribute
${contribute}

## Questions
Github: ${github}

Email: ${email}
`

    fs.writeFile('read.md', readme, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
    }
  );
