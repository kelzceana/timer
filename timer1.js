const userInput = process.argv
.splice(2)
.filter(x =>!isNaN(x))
.filter(x => x >= 0);
userInput.sort((a, b) =>  a - b)
 for (const time of userInput) {
   setTimeout(() => {
    process.stdout.write('\x07');
   }, time *1000)
 }

