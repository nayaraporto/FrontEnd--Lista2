const readline = require('readline');  

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Informe um numero de 1 a 12 referente aos meses do ano: ", (escolha) => {
    let opcao = Number(escolha)

switch (opcao) {
    case 12:
        console.log("Verão");
        break;
    case 1:
        console.log("Verão");
        break
    case 2:
        console.log("Verão");
        break;

    case 3:
        console.log("Outono");
        break;
    case 4:
        console.log("Outono");
        break;
    case 5:
        console.log("Outono");
        break;

    case 6:
        console.log("Inverno");
        break;
    case 7:
        console.log("Inverno");
        break;
    case 8:
        console.log("Inverno");
        break;

    case 9:
        console.log("Primavera");
        break;
    case 10:
        console.log("Primavera");
        break;
    case 11:
        console.log("Primavera");
        break;

    default:
        console.log("Número inválido.");
}
rl.close()
});