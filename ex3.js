const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

    rl.question('Insira um número de 1 a 7: ', (valor) => {
        let dia = Number(valor);
   if(dia == 1) {
console.log(`É domingo!`);
   }
 else if(dia == 2) {
console.log(`É segunda!`);
}else if(dia == 3) {
console.log(`É terça!`);
   }
   else if(dia == 4) {
console.log(`É quarta!`);
   }
   else if(dia == 5) {
console.log(`É quinta!`);
   }
   else if(dia == 6) {
console.log(`É sexta!`);
   }
   else if(dia == 7) {
console.log(`É sábado!`);
   }});