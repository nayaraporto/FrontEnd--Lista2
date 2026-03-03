const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Insira o primeiro valor: ', (valor1) => {
rl.question('Insira o segundo valor: ', (valor2) => {
    let numero1 = Number (valor1);
    let numero2 = Number (valor2);
if (valor1> valor2) {
    console.log(`O primeiro número é maior que o segundo`);
   }
 else if(valor2> valor1) {
console.log(`O primeiro número é menor que o segundo`);
}
else {
    console.log('Os números são iguais')
}
rl.close();
})});