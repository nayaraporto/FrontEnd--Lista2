const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Insira o primeiro numero: ', (valor1) => {
    rl.question('Insira o segundo numero: ', (valor2) => {
        rl.question('Qual operação matemática voce vai querer utilizar (1: + | 2: -)? ', (escolha) => {
            let numero1 = Number(valor1);
            let numero2 = Number(valor2);
            let simbolo = Number(escolha);
            if (simbolo == 1) {
                let resultado = numero1 + numero2;
                console.log('Resultado: ' + resultado);
            } else if (simbolo == 2) {
                let resultado = numero1 - numero2;
                console.log('Resultado: ' + resultado);
            } else {
                console.log('Numero invalido');
            }
            rl.close();
        });
    });
});
