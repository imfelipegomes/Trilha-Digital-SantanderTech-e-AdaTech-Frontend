console.log("Antes da criação da promise...")

function lerArquivoPromise() {
    return new Promise((resolve, reject) => {
        fs.readFile("Javascript/arquivo.txt", (erro, conteudoDoArquivo) => {
            if (erro) {
                reject("Ocorreu um erro ao tentar ler o arquivo", erro);
            } else {
                resolve(String(conteudoDoArquivo));
            }
        });
});
}


// Foco a partir daqui...:
lerArquivoPromise().then((retornoDoResolveDaPromise) => {
    console.log("Deu certo:", retornoDoResolveDaPromise);
}).catch((erro) => {
    console.log("Deu ruim", erro);
}).finally(() => {
    console.log('Isso aqui vai ser executado independente do francasso ou promessa no final dela.');
});