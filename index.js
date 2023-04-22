// TODO: Include packages needed for this application3
const fs = require("fs");
const inquirer = require("inquirer")
const utility = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
