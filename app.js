alert("Boas vindas ao Jogo Número Secreto!");
let numeroMaximo = 2000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo
 + 1);
console.log(numeroSecreto);
let numeroEscolhido;
let tentativas = 1;

while (numeroEscolhido != numeroSecreto) {
    numeroEscolhido = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if (numeroEscolhido == numeroSecreto) {
        break;
    } else {
        if (numeroEscolhido > numeroSecreto) {
            alert(`O Número Secreto é menor que ${numeroEscolhido}`);
        } else {
            alert(`O Número Secreto é maior que ${numeroEscolhido}`);
        }
            tentativas++;
    }
}
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Você acertou o Número Secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

