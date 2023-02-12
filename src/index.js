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
  const splitExpr = [];
  let transExpr = [];
  for (let i = 0; i < expr.length; i += 2) {
      const chunk = expr.slice(i, i + 2);
      splitExpr.push(chunk);
  }

  for (let i = 0; i < splitExpr.length; i += 5) {
    const chunk = splitExpr.slice(i, i + 5);
    transExpr.push(chunk);
  }

  for (let i = 0; i < transExpr.length; i++) {
    for (let b = 0; b < transExpr[i].length; b++) {
      if (transExpr[i][b] === '00') {transExpr[i][b] = ''};
      
      if (transExpr[i][b] === '10') {transExpr[i][b] = '.'};

      if (transExpr[i][b] === '11') {transExpr[i][b] = '-'};
    }
  }

  for (let i = 0; i < transExpr.length; i++) {
    transExpr[i] = transExpr[i].join('');
    if (transExpr[i] === '**********') {transExpr[i] === ' '};
  }
  let result = transExpr.map((value) => MORSE_TABLE[value] !== undefined ? MORSE_TABLE[value] : ' ').join('').toString('');

  return result;

}

module.exports = {
    decode
}