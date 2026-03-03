const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Faça uma escolha do nosso menu (1 - Pizza | 2 - Hambúrguer | 3 - Salada): ', (escolha) => {
    let opcao = Number(escolha);
    switch (opcao) {
        case 1:
            console.log('Voce escolheu Pizza!!');
            break;
        case 2:
            console.log('Voce escolheu Hambúguer!!');
            break;
        case 3:
            console.log('Voce escolheu Salada!!');
            break;
        default:
            console.log('Numero inválido!');
    }
    rl.close();
});