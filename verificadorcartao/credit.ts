"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline"); // pra input e output no nodejs
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o numero do cartão: ", (input) => {
    const cartao = String(input)
    if (verificacartao(cartao) == 0){ // se true
        if ((cartao.length == 16 || cartao.length == 13) && cartao.startsWith("4")) {
            console.log("VISA")
        }
        else if (cartao.length == 15 && (cartao.startsWith("34") || cartao.startsWith("37"))) { 
            console.log("AMEX")
        }
        else if (cartao.length == 16 && (cartao.startsWith("51") || cartao.startsWith("52") || cartao.startsWith("53")
            || cartao.startsWith("54") || cartao.startsWith("55"))) {
        console.log("MASTERCARD")
    }
}
    else{
        console.log("CARTAO INVALIDO")
    }
    verificacartao(cartao); 
    rl.close();
});

function verificacartao(cartao: string) { // algoritmo de luhn
    let somadigito = 0;
    let reverso = cartao.split('').reverse().join('');

    for (let i = 0; i < reverso.length; i++) {
        let digito = parseInt(reverso[i], 10);
        if (i % 2 == 1) { // a cada segundo dígito, começando do final
            digito = digito * 2;
            if (digito > 9) {
                digito = digito - 9; // isso transforma qlqr digito 18(1+8) em 9, 17(1+7) em 8 
            }
        }
        somadigito += digito; // isso soma todos os digitos do cartão
    }
    if (somadigito % 10 == 0) { 
        return 0; // cartao valido retorna 0(true)
    } else {
        return 1; // cartao invalido retorna 1(false)
    }
}

//let cartao = "400360000000014"; //16 length começa 40
//VISA
//let cartao = "341234567890123"; //15 length começa com 34
//AMEX
//let cartao = "5123456789012345"; //16 length começa com 51 a 55
//MASTERCARD
//let cartao = "6176292929"; // length menor e n começa com nada
//INVALID*/

