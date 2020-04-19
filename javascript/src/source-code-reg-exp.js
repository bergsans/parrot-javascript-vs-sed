const RESERVED_KEYWORDS = require('./reserved-keywords.js');
const partRegExp = RESERVED_KEYWORDS.join('|');

const keywords = new RegExp(`\\b(${partRegExp})\\b`, 'g');
const doubleQuote = /"(.*?)"/g;
const singleQuote = /'(.*?)'/g;
const dynamicQuote = /`(.*?)`/g;
const integer = /^[0-9]*$/;
const inlineComment = /(\/\/.*)/g;
const blockComment  = /(\/\*.*\*\/)/g;

module.exports = {
    keywords,
    doubleQuote,
    singleQuote,
    dynamicQuote,
    integer,
    inlineComment,
    blockComment
};

