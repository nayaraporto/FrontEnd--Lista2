const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Insira um numero (1 a 7): ', (valor1) => {
    let diaSemana = Number(valor1);
    switch (diaSemana) {
        case 1:
            console.log("Domingo");
            break;
        case 2:
            console.log("Segunda");
            break;
        case 3:
            console.log("Terça");
            break;
        case 4:
            console.log("Quarta");
            break;
        case 5:
            console.log("Quinta");
            break;
        case 6:
            console.log("Sexta");
            break;
        case 7:
            console.log("Sábado");
            break;
        default:
            console.log("Numero invalido")
    }
    rl.close();
}); 