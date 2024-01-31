alert(" Boas vindas ao jogo do número secreto ");
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo+ 1 );
console.log(numeroSecreto);
let chute;
let tentativas = 1; 

//enquanto chute não fot igual ao n.s (ficar repetindo enquanto estiver errando o num)
while (chute != numeroSecreto ) {
    chute = prompt(`Escolha um número de 1 e ${numeroMaximo}`);
    // if se chute for igual ao número secreto
    if(numeroSecreto == chute){
        break;
      }else {
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        }else{
            alert(`O número secreto é maior que ${chute}`);
        } 
        //tentativas = tentativas + 1;
        tentativas++ ;
    }
}

    let palavraTentiva = tentativas > 1 ? "tentativas" : "tentativa"; // operador ternário
    alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentiva}.`);
    
    // if(tentativas > 1){
    //     alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
    // }else{
    // alert(`Parabéns! Você acertou o número secreto ${numeroSecreto}com ${tentativas} tentativa.`);
    // }
