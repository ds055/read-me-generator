// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ";"
  }
}

//Generates read.me text
function generateMarkdown(data) {
  // Sets info based on prompts responses
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation) 
\n* [Usage](#usage)
\n* [License](#license)
\n* [Contributing](#contributing)
\n* [Test](#test)
\n* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
[License Link](${renderLicenseLink(data.license)})
\n${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Test
${data.test}

## Questions
**Email:** ${data.email}
\n${data.questInstruc}

\nGitHub Username: ${data.githubUser}
\n[My GitHub](${`https://github.com/${data.githubUser}`})
`;
}

// Export generateMarkdown function for use in index.js
module.exports = {generateMarkdown};
