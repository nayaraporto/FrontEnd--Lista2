const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Informe o dia da semana (de 1 a 7): ', (dia) =>{
let diaSemana = Number(dia);
if (diaSemana == 7 || diaSemana == 1) {
    console.log('É fim de semana!!');
} else if (dia >1 && dia < 7) {
console.log('É dia de semana!!');
}
else{
    console.log('Número inválido!!');
}
rl.close();
});
