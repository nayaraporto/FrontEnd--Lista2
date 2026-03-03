const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Insira a sua idade: ', (valor) => {
 let idade = Number(valor);
    if (valor >= 18) {
  console.log(`Você tem maioridade!`);
  }else {
console.log(`Você é menor de idade!`)
  }
  rl.close();
});