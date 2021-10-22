const fs = require('fs')
const inquirer = require('inquirer');
inquirer.registerPrompt('loop', require('inquirer-loop')(inquirer));


inquirer.prompt(
    [
        {
        type: 'input', 
        name:"input_name", 
        message:'what is filename.md?',
        validate: (answer) => {
            if(answer === '') {
                return 'please enter a valid name'
            }
                return true
            }
        },
        {
        type:'input',
        name:'content_question',
        message: 'what will the ReadMe file contain?',
        validate: (answer) => {
            if(answer === '') {
                    return 'please enter a valid name'
            }
                return true
            }
        },
    ]
).then(answers => {
    const fileName = answers.input_name;
    const content = answers.content_question;

    const empHTML = document.implementation.createHTMLDocument(fileName)
})
