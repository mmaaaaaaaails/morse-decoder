const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};


function decode(expr) {
    let array = [];

    let start = 0;
    for (let i = 0; i < expr.length/10; i++) {
    array.push(expr.slice(start, start + 10));
    start += 10;
    }

    for (let i = 0; i < array.length; i++) {
        let flag = true;
        while(flag) {
            flag = false;
            if (array[i].includes("10")) {
                array[i] = array[i].replace("10", ".");
                flag = true;
            }
            if (array[i].includes("11")) {
                array[i] = array[i].replace("11", "-");
                flag = true;
            }
        }
        while(array[i].includes("0")) {
            array[i] = array[i].replace("0", "");
        }

        for (let key in MORSE_TABLE) {
            if (array[i] === key) {
                array[i] = MORSE_TABLE[key];
                break;
            }
        }
        if (array[i] === "**********"){
            array[i] = " ";
        }
    }

return array.join('');
}
module.exports = {
    decode
};