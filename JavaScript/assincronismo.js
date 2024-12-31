const fs = require('fs')

// * 1. Callbacks

console.log('ANTES de ler o arquivo...')

// Função assíncrona (ler um arquivo leva um tempo)

fs.readFile("Javascript/arquivo.txt", (erro, conteudoDoArquivo) => {
    if (erro) {
        console.log("Ocorreu um erro ao tentar ler o arquivo", erro);
    } else {
        console.log(String(conteudoDoArquivo));
    }
});

console.log('DEPOIS da função de ler o arquivo...')

// Se executarmos a função, ele vai executar a linha 5, em seguida a linha 17 e só depois ele entra nessa callback e imprime esse arquivo, porque demora para ler...

// O site latenfilip.com mostra como o Javascript funciona e executa de maneira sequencial e assíncrona, muito interessante