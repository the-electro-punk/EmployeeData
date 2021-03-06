// const fs = require('fs')
// const inquirer = require('inquirer');
// inquirer.registerPrompt('loop', require('inquirer-loop')(inquirer));

const fs = require('fs')
const inquirer = require('inquirer');
inquirer.registerPrompt('loop', require('inquirer-loop')(inquirer));

let path = require('path')
const PORT = 3001

var express = require('express');
var app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.get('/', function(req,res) {
  res.sendFile(__dirname+'C:/Users/Ben/Desktop/_Coding BootCamp/_weeks lessons/week 10/EmployeeData/testing.html');
  res.send()
})

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});

inquirer.prompt({
    type:'loop',
    name:'items',
    message: 'add more?',
    questions: 
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
    // add code to fill data to new HTML file based on template
    // pass data and template html
    for (let i=0; i < answers.items.length; i++) {
        // let empData = webPage.createElement('p')
        console.log(answers.items[i].input_name)
        const fileName = answers.items[i].input_name;
        console.log('file is '+fileName.file+'type')
        // console.log(fileName + 'is saved')
        const nameEmp = answers.items[i].name_question;
        // console.log('employee is ' + nameEmp)
        const ageEmp = answers.items[i].age_question;
        const htEmp = answers.items[i].height_question;
        const jobEmp = answers.items[i].role_question;
        const fullstring = '\n' + '# '+ nameEmp + '\n' + 'age: ' + ageEmp + '\n' + 'height: ' + htEmp + '\n' + 'position: ' + jobEmp;
        // webPage.textcontent = fullstring

        console.log(answers)
        fs.appendFile(fileName, fullstring, function (err) {
            if (err) throw err;
            console.log('saved')

          // app.get('/', (req, res) => {
          //     res.sendFile(path.join(__dirname, 'index.html'));
          // });
              
          //     app.post('/api/employees', (req, res) => {
          //       return res.json(fullstring);
          // })
              
    })
    }
    // if statement to see what type of file is created

    // this constructor creates the data into an employee variable
    // let newEmp = new employee('name_question', 'age_question', 'height_question', 'role_question');
    // const nameEmp = newEmp.name;
    // console.log('name is ' + nameEmp)
    // const ageEmp = newEmp.age;
    // console.log('age is ' + ageEmp)
    // const htEmp = newEmp.height;
    // console.log('height is ' + htEmp)
    // const jobEmp = newEmp.position;
    // console.log('job is ' + jobEmp)
    // const fullstring = '# '+ nameEmp + '\n' + 'age: ' + ageEmp + '\n' + 'height: ' + htEmp + '\n' + 'position: ' + jobEmp; 
    
    // this adds the content to a new file
    
})

    // if statement to see what type of file is created
    
// })

// <!-- need pre-built HTML and assign classes -->
// <!-- can use <p> -->


// used for ref https://codeforgeek.com/render-html-file-expressjs/