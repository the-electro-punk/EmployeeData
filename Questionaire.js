const fs = require('fs')
const inquirer = require('inquirer');

inquirer.prompt (
    [
    {
    type: 'input', 
    name:"input_type", 
    message:'what is filename.html?',
    validate: (answer) => {
        if(answer === '') {
            return 'please enter a valid name'
        }
        return true
        }
    },
    {
    type:'input',
    name:'check_question',
    message: 'employee name?',
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
    message: 'employee data',
    validate: (answer) => {
        if(answer === '') {
            return 'please enter a valid name'
        }
        return true
        }
    },
]).then(answers => {
    const fileName = answers.input_type;
    const table = answers.check_question;
    const content = answers.content_question;
    const fullstring = '# '+ table + '\n' + content

    // this adds the content to a new file
    console.log(answers)
    fs.appendFile(fileName, fullstring, function (err) {
        if (err) throw err;
        console.log('saved')
    })
})
