alert("Boas vindas ao Jogo Número Secreto!");
let numeroSecreto = 1;
console.log(numeroSecreto);
let numeroEscolhido = prompt("Escolha um número entre 1 e 100");

if(numeroSecreto == numeroEscolhido){
    alert(`Você acertou o Número Secreto ${numeroSecreto}!`);
}else{
    if(numeroEscolhido>numeroSecreto){
        alert(`O Número Secreto é menor que ${numeroEscolhido}`);
    }else{
        alert(`O Número Secreto é maior que ${numeroEscolhido}`);
    }
   
}