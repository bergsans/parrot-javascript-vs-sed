const ANSI_CODES = {
    black: 30,
    red: 31,
    green: 32,
    yellow: 33,
    blue: 34,
    purple: 35,
    cyan: 36,
    white: 37,
    start: '\x1b[',
    bold: '1;',
    reset: '\x1b[0m',
    background: 10,
    ending: 'm'   
};

function highlight(word) {
    const { 
        start,
        purple,
        ending,
    reset
} = ANSI_CODES;
        return ''.concat(start, purple, ending, word, reset);
}

module.exports = highlight;
