import * as readline from 'readline'; // pra input e output no nodejs

const rl = readline.createInterface({ // cria uma variavel pra chamar o input e output
    input: process.stdin,
    output: process.stdout
})

function desenhaescada(altura: number) { //temq definir que altura é um numero pra funçao 
    for (let i = 1; i < altura + 1; i++){
        const espaco = ' '.repeat(altura - i)
        const hash = '#'.repeat(i)
        console.log(espaco + hash + ' ' + hash)
    }
    
}

function qualaltura() {
    rl.question('Coloca a altura da escada: ', (input) => {
        const altura = Number(input)

        if (isNaN(altura) || altura < 0){
            console.log("Insira uma altura válida")
            qualaltura()
            }
        else{
            desenhaescada(altura) // pode escrever tudo aqui mas decidi criar 2 funções separadas
            rl.close() //isso meio que serve como um while, fica repetindo ate eu fechar
        }
    });
} 
// função (mini aplicativinho feito)
// chamar a função / miniaplicativinho
qualaltura();