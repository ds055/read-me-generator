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
    // Content type for installation instructions
    {
        type: "list", 
        name: "installContent",
        message: "How would you like to format your installation instructions?",
        choices: ["Paragraph", "Unordered List", "Ordered List"]
    },
    // Installation Instructions
    {
        type: "input", 
        name: "installation",
        message: "Please write instructions for installation. For line breaks, use '/b'. For list items, prefix each item with '**'."
    },
    // Content type for usage instructions
    {
        type: "list", 
        name: "usageContent",
        message: "How would you like to format your usage instructions?",
        choices: ["Paragraph", "Unordered List", "Ordered List"]
    },
    // Usage Instructions
    {
        type: "input", 
        name: "usage",
        message: "Please write usage instructions. For line breaks, use '/b'. For list items, prefix each item with '**'."
    },
    //License type chosen from a list
    {
        type: "list", 
        name: "license",
        message: "What license will your project be available under?",
        choices: ["Apache 2.0", "Boost Software License", "CC0", "Eclipse Public License", "IBM Public License", "MIT", "Unilicense", "none"]
    },
    // Content type for contribution instructions
    {
        type: "list", 
        name: "contributionContent",
        message: "How would you like to format your contribution instructions?",
        choices: ["Paragraph", "Unordered List", "Ordered List"]
    },
    //Instructions on how users can contribute
    {
        type: "input", 
        name: "contribution",
        message: "How can users contribute to your project? For line breaks, use '/b'. For list items, prefix each item with '**'."
    },
    // Content type for testing instructions
    {
        type: "list", 
        name: "testContent",
        message: "How would you like to format your test instructions?",
        choices: ["Paragraph", "Unordered List", "Ordered List"]
    },
    // Test instructions
    {
        type: "input", 
        name: "test",
        message: "Please write instructions for testing your app. For line breaks, use '/b'. For list items, prefix each item with '**'."
    },
    // User email
    {
        type: "input", 
        name: "email",
        message: "What is your email address?"
    },
    // Content type for questions
    {
        type: "list", 
        name: "questionContent",
        message: "How would you like to format your questions and contact instructions?",
        choices: ["Paragraph", "Unordered List", "Ordered List"]
    },
    // Instructions on how users can contact you with questions
    {
        type: "input", 
        name: "questInstruc",
        message: "Please write instructions on how users may contact you. For line breaks and lists, refer to the README for formatting."
    },
    // GitHub Username
    {
        type: "input", 
        name: "githubUser",
        message: "What is your GitHub Username?"
    }
];

// Creates md file
function writeToFile(fileName, data) {
    // creates text from data to populate READ.ME
    const mdText = utility.generateMarkdown(data)
    // saves file to folder; confirms README creation in console
    fs.writeFile(fileName, mdText, (err) => {
        err ? console.log(err) : console.log("README Created!")
    });
}

// Cleans up formatting, allowing for easier paragraph breaks and lists in console entry; this is done so the user can more quickly enter data in the console without having
// to enter HTML tags. 
function fixContent(part, listType) {
    // replaces console entry with HTML for line breaks
    part = part.replaceAll("/b", "<br>");
    if (listType === "Paragraph"){
        return part;
    }
    // creates list tags via createList function below
    else if (listType === "Unordered List"){
        part = createList(part, "ul");
        return part;
    }
    else if (listType === "Ordered List"){
        part = createList(part, "ol");
        return part;
    }
}

// Removes console inputs indicating user's desire for a li; adds appropriate tags to user input for ordered or unordered list
function createList(part, listTag){
    part = part.split("**")
    for (let i = 0; i < part.length; i++) {
        if (part[i] !== "") {
            part[i] = "<li>" +part[i] + "</li>";
        }}
    part = part.join("");
    part = "<" + listTag + ">" + part + "</" + listTag + ">";
    return part;
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
            // Cleans up user entries to ensure proper HTML is inserted
            data.installation = fixContent(data.installation, data.installContent)
            data.usage = fixContent(data.usage, data.usageContent)
            data.contribution = fixContent(data.contribution, data.contributionContent)
            data.test = fixContent(data.test, data.testContent)
            data.questInstruc = fixContent(data.questInstruc, data.questionContent)
            // create README
            writeToFile(fileName, data);
        })
    } catch (err) {
        console.log(err)
    }
}

// Function call to initialize app
init();

