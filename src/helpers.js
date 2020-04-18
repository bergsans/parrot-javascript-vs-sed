const { readFileSync } = require('fs');

function readFile(fileName) {
    try {
        return readFileSync(fileName, 'utf8');
    } catch (errorMessage) {
        throw new Error(errorMessage);
    }
}

module.exports = readFile;
