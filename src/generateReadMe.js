const fs = require("fs");
const getLicenseData = require("./licenseGenData.js");

function genTOC(data) {
    if (data.includeTOC) {
        return `## Table of Contents:
* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [Testing](#testing)
* [License](#license)
* [Questions](#questions)
`   } else {
            return "";
        }
}

function usageImage(data) {
    if (data.addPhotos) {
        return `## Image:
![alt text](assets/images/${data.photo})
        `;
    } else {
        return "";
    }
}

function genLicense(data) {
    if (data.license === "MIT") {
        let license = getLicenseData(data, "MIT");
        fs.writeFileSync("./src/dev/LICENSE", license)

        return `
© ${data.name}, ${data.company}
Licensed under the [MIT License](LICENSE)
        `
    } else if (data.license === "Apache") {
        let license = getLicenseData(data, "Apache");
        fs.writeFileSync("./src/dev/LICENSE", license);
        
        return `
© ${data.name}, ${data.company}
Licensed under the [Apache License](LICENSE)
        `
    } else if (data.license === "GNU") {
        let license = getLicenseData(data, "GNU");
        fs.writeFileSync("./src/dev/LICENSE", license);
        
        return `
© ${data.name}, ${data.company}
Licensed under the [GNU GPLv3 License](LICENSE)
        `
    }  else {
        return `
        © ${data.name}, ${data.company}
        `
    }
}


// TODO: Create a function to generate markdown for README
module.exports = data => {
    return `# ${data.title}
##  Description
${data.descriptionMain}

${genTOC(data)}
## Installation
${data.descriptionInstall}

## Usage
${data.descriptionUsage}
${usageImage(data)}

## Contributions
If you would like to contribute to this project, please follow the guidelines below:
${data.descriptionContrib}

## Testing
${data.descriptionTesting}

## License
${genLicense(data)}

## Questions
GitHub: [${data.username}](https://github.com/${data.username})
Email: <${data.email}>
`
}