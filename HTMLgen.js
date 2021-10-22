const fs = require('fs')
const inquirer = require('inquirer');
inquirer.registerPrompt('loop', require('inquirer-loop')(inquirer));

var fileName = 'C:/Users/Ben/Desktop/_Coding BootCamp/_weeks lessons/week 10/EmployeeData/HTMLgen.html';
var stream = fs.createWriteStream(fileName);

stream.once('open', function(fd) {
  var html = buildHtml();

  stream.end(html);
});