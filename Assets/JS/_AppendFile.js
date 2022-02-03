// global.document = new JSDOM('html').window.document;
// var jsdom = require("jsdom");
// var JSDOM = jsdom.JSDOM;

const fs = require('fs')
const inquirer = require('inquirer');
inquirer.registerPrompt('loop', require('inquirer-loop')(inquirer));

let webpage = "C:/Users/Ben/Desktop/_Coding BootCamp/_weeks lessons/week 10/EmployeeData/testing.html"

inquirer.prompt({
    // this loops the questions, allowing for multiple employee data inputs
    type:'loop',
    name:'items',
    message: 'add more?',
    questions: 
    [
        {
            // asks for filename; didn't know how to use ONLY at start so must input for every employee entered
            type: 'input', 
            name:"input_name", 
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
            name: 'name_question',
            message: 'employee name?',
            validate: (answer) => {
                if(answer === '') {
                    return 'please enter a valid name'
                }
                return true
                }
        },
        {
        type:'number',
        name: 'age_question',
        message: 'employee age?',
        validate: (answer) => {
            if(answer === '') {
                return 'please enter a valid name'
            }
            return true
            }
        },
        {
        type:'input',
        name: 'height_question',
        message: 'employee height?',
        validate: (answer) => {
            if(answer === '') {
                return 'please enter a valid name'
            }
            return true
            }
        },
        {
        type:'input',
        name: 'role_question',
        message: 'employee position?',
        validate: (answer) => {
            if(answer === '') {
                return 'please enter a valid name'
            }
            return true
            }
        },
    ]
}).then(answers => { 
    
    // this for loop is designed to go thru each employee submitted so as to ensure all are included; without this for loop, only the first or last employee entered would be added to the html
    for (let i=0; i < answers.items.length; i++) {
        // let empData = webPage.createElement('p')
        console.log(answers.items[i].input_name)
        const fileName = answers.items[i].input_name;

        const nameEmp = answers.items[i].name_question;
    
        const ageEmp = answers.items[i].age_question;
        const htEmp = answers.items[i].height_question;
        const jobEmp = answers.items[i].role_question;

        const webContent = '\n' + '<div>' + '<h1>' + nameEmp + '<h1>' + '\n' + '<p>' + 'age: ' + ageEmp + '<p>' + '\n' + '<p>' + 'height: ' + htEmp + '<p>' + '\n' + '<p>' + 'position: ' + jobEmp + '<p>' + '\n' + '</div>';


        console.log(answers)
        // this writes the data to the file and can add to it if the program is run again
        fs.appendFile(fileName, webContent, function (err) {
            if (err) throw err;
            console.log('saved')
    })
    } 
})


// `(ny name is ${name}`)
// let JohnDoe = new employee('John Doe', 27, 5, 9, 'office clerk')


// add code to fill data to new HTML file based on template
// pass data and template html
// if statement to see what type of file is created