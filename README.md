# EmployeeData

# Description
This is meant to be a frofile generator for employees in a business. This program use an inquirer prompt with the questionaire.js code to gather an employee's name, age, height, and position. Once the information is gathered, it creates a new HTML file with the data displayed in a small gray box. The code can be run again to add more employee data. It was challenging to add the basic HTML format to the created file. I resolved this issue by creating a const variable which was the entire base HTML content (with breaks included) tand had the program ask the user if the format was needed (was unable to NOT exclude it from the first use).

# How to run
Open questionaire.js and then open the command prompt. Enter "node.questionaire.js" into the prompt to begin the process. It'll first ask if the user wants to add another employee, then the filename (include ".html" at the end), then whether or not the base HTML format is needed (only use the first time a file is created then answer no when appending). Next it'll ask four questions asking about the employees name, age, height, and position. Once that's all answered, the program will ask agin if the user wants to add another person; answer yes to repeat the process or no to create/append the file. The user can then open the new HTML file created (it uploads in the same location as the questionaire.js file) and see gray boxes on a blank background filled with employee info.

# Credits

While I was the sole person working most of these assignments, I usually received help from classmates, instructors, and online tutorials for help better understanding certain concepts

# MIT License

Copyright (c) [2021] [Ben Ramey]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.