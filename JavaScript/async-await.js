async function leituraDeDados() {
    console.log("Isso é executado ANTES da promise ser resolvida!");


try {
const retornoDaPromessa = await lerArquivoPromise(); // Só pode ser executado dentro de uma função assíncrona. Espera a promessa ser resolvida para avançar no código!

console.log(retornoDaPromessa);
console.log("Isso é executado DEPOIS da promise ser resolvida!");
} catch (err) {
    console.log(err)
    console.log("Isso aqui é executado depois da promise (com erro.");
    } finally {
        console.log("Dentro do finally");
    }
}

leituraDeDados();