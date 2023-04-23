// Packages for app
const fs = require("fs");
const inquirer = require("inquirer")
const utility = require("./utils/generateMarkdown")

// Array to be used in prompts for user input
const questions = [
    // Title of project which will be used as title of READ.ME
    {
        type: "input", 
        name: "title",
        message: "What is the title of your project?"
    },
    // Description of app
    {
        type: "input", 
        name: "description",
        message: "Enter a brief description of your app."
    },
    // Installation Instructions
    {
        type: "input", 
        name: "installation",
        message: "Please write instructions for installation."
    },
    // Usage Instructions
    {
        type: "input", 
        name: "usage",
        message: "Please write usage instructions."
    },
    //License type chosen from a list
    {
        type: "list", 
        name: "license",
        message: "What license will your project be available under?",
        choices: ["a", "b", "c"]
    },
    //Contributing: instructions on how users can contribute
    {
        type: "input", 
        name: "title",
        message: "What is the title of your project?"
    },
    // Tests: instructions on how users can use tests of the app
    {
        type: "input", 
        name: "usage",
        message: "Please write instructions for testing your app."
    },
    // User email
    {
        type: "input", 
        name: "email",
        message: "What is your email address?"
    },
    // Instructions on how users can contact you with questions
    {
        type: "input", 
        name: "questInstruc",
        message: "Please write instructions on how users may contact you."
    },
    // GitHub Username
    {
        type: "input", 
        name: "githubUser",
        message: "What is your GitHub Username?"
    }
];

// TODO: Convert lists to proper format
function convert(arr) {

}

// Creates md file
function writeToFile(fileName, data) {
    // creates text from data to populate READ.ME
    const mdText = utility.generateMarkdown(data)
    // saves file to folder
    fs.writeFile(fileName, mdText, (err) => {
        err ? console.log(err) : console.log("Success!")
    });
}

// Initialize app function
const init = async() => {
    try{
        // creates data filled by prompt answers
        const data = await inquirer.prompt(questions)
        // Data is then used to populate readme file
        .then((data) => {
            // creates file name by changing all letters to lower and removing spaces
            const fileName = `${data.title.toLowerCase().split(' ').join('')}.md`;
            // TODO: call to fix lists
            // create README
            writeToFile(fileName, data);
        })
    } catch (err) {
        console.log(err)
    }
}
// Function call to initialize app
init();
