// If there is no license, return an empty string; otherwise, find the chosen license.
function renderLicenseBadge(license) {
    switch(license) {
      case "Apache 2.0":
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
        break;
      case "Boost Software License":
        return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
        break;
      case "CC0":
        return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`;
        break;
      case "Eclipse Public License":
        return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
        break;
      case "IBM Public License":
        return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
        break;
      case "MIT":
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
        break;
      case "Unilicense":
        return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
        break;
      case "none":
        return "";
    }
  }

// If there is no license, return an empty string; otherwise, find the chosen license url. 
function renderLicenseLink(license) {
  switch(license) {
    case "Apache 2.0":
      return `https://opensource.org/licenses/Apache-2.0`;
      break;
    case "Boost Software License":
      return `https://www.boost.org/LICENSE_1_0.txt`;
      break;
    case "CC0":
      return `http://creativecommons.org/publicdomain/zero/1.0/`;
      break;
    case "Eclipse Public License":
      return `https://opensource.org/licenses/EPL-1.0`;
      break;
    case "IBM Public License":
      return `https://opensource.org/licenses/IPL-1.0`;
      break;
    case "MIT":
      return `https://opensource.org/licenses/MIT`;
      break;
    case "Unilicense":
      return `http://unlicense.org/`;
      break;
    case "none":
      return "";
      break;
  }
}

// If there is no license, return an empty string; otherwise, populates date based on selection in node.js.
function renderLicenseSection(license) {
  if (license === "none") {
    return ""
  }
  else {
    return `## License \nThis app was created using a ${license} license. 
    \n[Link to license](${renderLicenseLink(license)})`
  }
}

// If data is present, renders description data in template literal; called in generateMarkdown()
function renderDescription(data) {
  if (data === undefined || data == ""){return "";}
  else {
    return `## Description \n ${data}`
  }
  
}

// If data is present, renders installation info in template literal; called in generateMarkdown()
function renderInstallation(data) {
  if (data === undefined || data == ""){return "";}
  else {
    return `## Installation \n ${data}`
  }
}

// If data is present, renders usage instructions in template literal; called in generateMarkdown()
function renderUsage(data) {
  if (data === undefined || data == ""){return "";}
  else {
    return `## Usage \n ${data}`
  }
}

// If data is present, renders contribution instructions in template literal; called in generateMarkdown()
function renderContribution(data) {
  if (data === undefined || data == ""){return "";}
  else {
    return `## Contributing \n ${data}`
  }
}

// If data is present, renders testing instructions in template literal; called in generateMarkdown()
function renderTest(data) {
  if (data === undefined || data == ""){return "";}
  else {
    return `## Test \n ${data}`
  }
}

// If data is present, renders email, question info, and Git info in template literal; called in generateMarkdown()
function renderQuestions(data) {
  if (data.email === undefined && data.questInstruc === undefined && data.githubUser === undefined){return ""}
  else if (data.email == "" && data.questInstruc == "" && data.githubUser == ""){return ""}
  else {
    return `## Questions

  ${renderEmail(data.email)}

  ${renderquestInstr(data.questInstruc)}
    
  ${renderGit(data.githubUser)}`
  }
}

// If data is present, renders email info in template literal; called in renderQuestions()
function renderEmail(data){
  if (data === undefined){return ""}
  else {
    return `**Email:** ${data}`
  }
}

// If data is present, renders questions forwarding instructions in template literal; called in renderQuestions()
function renderquestInstr(data){
  if (data === undefined){return ""}
  else {
    return `${data}`
  }
}

// If data is present, renders Git info in template literal; called in renderQuestions()
function renderGit(data){
  if (data === undefined){return ""}
  else {
    return `**GitHub Username:** ${data}
    \n[My GitHub]('https://github.com/${data}')`
  }
}

//Generates read.me text; proper indentation is not utilized to avoid formatting errors in md. 
function generateMarkdown(data) {
  // Sets info based on prompts responses
  return `# ${data.title}
${renderLicenseBadge(data.license)}

\n${renderDescription(data.description)}

## Table of Contents

* [Installation](#installation) 
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)

${renderInstallation(data.installation)}

${renderUsage(data.installation)}

${renderLicenseSection(data.license)}

${renderContribution(data.contribution)}

${renderTest(data.test)}

${renderQuestions(data)}
`;
}

// Export generateMarkdown function for use in index.js
module.exports = {generateMarkdown};

