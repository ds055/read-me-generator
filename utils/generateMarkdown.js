// If there is no license, return an empty string
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

// If there is no license, return an empty string
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return ""
  }
  else {
    return `## License
This app was created using a ${license} license. 
\n[Link to license](${renderLicenseLink(license)})`
  }
}

//Generates read.me text; proper indentation is not utilized to avoid formatting errors in md. 
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

${renderLicenseSection(data.license)}

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
