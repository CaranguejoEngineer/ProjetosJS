"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline"); // pra input e output no nodejs
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function desenhaescada(altura) {
    for (var i = 1; i < altura + 1; i++) {
        var espaco = ' '.repeat(altura - i);
        var hash = '#'.repeat(i);
        console.log(espaco + hash + ' ' + hash);
    }
}
function qualaltura() {
    rl.question('Coloca a altura da escada: ', function (input) {
        var altura = Number(input);
        if (isNaN(altura) || altura < 0) {
            console.log("Insira uma altura válida");
            qualaltura();
        }
        else {
            desenhaescada(altura); // pode escrever tudo aqui mas decidi criar 2 funções separadas
            rl.close(); //isso meio que serve como um while, fica repetindo ate eu fechar
        }
    });
}
// função (mini aplicativinho feito)
// chamar a função / miniaplicativinho
qualaltura();
