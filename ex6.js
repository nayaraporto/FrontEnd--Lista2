const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Insira um número : ', (number) => {
    if (number >= 1) {
  console.log(`O número: ${number} é positivo`);
  }else if (number < 0) {
console.log(`O número: ${number}, é negativo`);
  } else {
    console.log(`O número: ${number}, é nulo`);
  }
  rl.close();
});
