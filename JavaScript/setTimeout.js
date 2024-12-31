// setTimeout - Função que cria um timer - é uma função assíncrona...

console.log("Antes do setTimeout...");

setTimeout(() => {
    console.log("Isso vai ser executado após 2 segundos!")
}, 2 * 1000)

console.log("DEPOIS do setTimeout...");