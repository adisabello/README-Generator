// TODO: Include packages needed for this application
let inquirer = require('inquirer')
let fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter the title of the project"
    },
    {
        type: "input",
        name: "description",
        message: "Enter the description of the project"
    },
    {
        type: "input",
        name: "installation",
        message: "Enter the installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "Enter the usage information"
    },
    {
        type: "input",
        name: "contribution",
        message: "Enter the contribution guidelines"
    },
    {
        type: "input",
        name: "test",
        message: "Enter the test instructions"
    },
    {
        type: "list",
        name: "license",
        message: "Select the license type",
        choices: ['GNU General Public License',
                    'MIT License',
                    'GNU Lesser General Public License',
                    'Apache License',
                    'GNU Affero General Public License'
                    ]
    },
    {
        type: "input",
        name: "git_user",
        message: "Enter your git-hub username"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address"
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    var license = {
        badge: "",
        description: ""
    }
  
    if(data.license == "GNU General Public License"){
        license.badge = "GPL"
        license.description = "The end-user is guaranteed the freedom to run, study, share, and modify the software."
    }else if(data.license == "MIT License"){
        license.badge = "MIT"
        license.description = "The end-user has been provided with the software for them to use as they please without any restrictions"
    }else if(data.license == 'GNU Lesser General Public License'){
        license.badge = "LGPL"
        license.description = "End users can modify the contents of the library but have to make their changes available publicly using the same license"
    }else if(data.license == 'Apache License'){
        license.badge = "Apache"
        license.description = "The end user can use, modify and distribute the software without any concern for royalties"
    }else if(data.license == 'GNU Affero General Public License'){
        license.badge = "AGPL"
        license.description = "Allows users that access the software over the network to have access to the source code"
    }

    var writeString = "# "+data.title+"\n"
    writeString+= "License ("+license.badge+")\n\n"
    writeString+= "## Description\n"+data.description+"\n\n"
    writeString+= "### Table of Content\n"
    writeString+="* [Installation](#installation)\n"
    writeString+="* [Usage](#usage)\n"
    writeString+="* [License](#license)\n"
    writeString+="* [Contributing](#contributing)\n"
    writeString+="* [Tests](#tests)\n"
    writeString+="* [Questions](#questions)\n"

    writeString+="\n"

    writeString+="# <a name='installation'></a>Installation\n"
    writeString+=data.installation+"\n\n";

    writeString+="# <a name='usage'></a>Usage\n"
    writeString+=data.usage+"\n\n";

    writeString+="# <a name='contributing'></a>Contributing\n"
    writeString+=data.contributing+"\n\n";

    writeString+="# <a name='tests'></a>Tests\n"
    writeString+=data.tests+"\n\n";

    writeString+="# <a name='license'></a>License\n"
    writeString+="NOTICE: "+license.description+"\n\n";

    writeString+="# <a name='questions'></a>Questions\n"
    writeString+="[Github Link](https://www.github.com/"+data.username+")\n"
    writeString+="If you have any more questions, you can reach me on "+data.email

    fs.writeFileSync(fileName, writeString)
    console.log("ReadMe file generated")
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers =>{
        writeToFile("ReadMe.md", answers);
    })
}

// Function call to initialize app
init();
