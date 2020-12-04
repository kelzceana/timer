const readline = require('readline');
readline.emitKeypressEvents(process.stdin)
const stdin = process.stdin;
const stdout = process.stdout

stdin.setRawMode(true);
stdin.setEncoding('utf8');
stdin.resume();

stdin.on('keypress', key => {
  let secArr = []
  if (key === '\u0003') {
    stdout.write("Thanks for using me, ciao!")
      process.exit();
  } 
  if (key === 'b'){
    stdout.write('beep\n')
  } 
  if (!isNaN(key)) {
    stdout.write(`setting timer for ${key} seconds...\n`)
    secArr.push(key)
    for (const time of secArr) {
      setTimeout(() => {
      stdout.write('beep\n')
      }, time *1000)
    }
  }

})
