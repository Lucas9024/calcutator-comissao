const label = document.querySelector(".content #lab");
const input = document.querySelector(".content #inp");
const btn = document.querySelector(".content .btn");
const valor = document.querySelector(".values #labValor");

//comissões



btn.onclick = ev => {
    ev.preventDefault();
    if(input.value === '' && input.value == 0){
        alert("Digite um valor");
    }else if(input.value < 500){
     let comissao =  (input.value / 100) * 15;
      valor.innerHTML = comissao;
    }else if(input.value < 1000){
      let comissao = (input.value / 100) * 14;
      valor.innerHTML = comissao;
    }else if(input.value < 1500){
      let comissao = (input.value / 100) * 13;
      valor.innerHTML = comissao;
    }else if(input.value < 2000){
      let comissao = (input.value / 100) * 12;
      valor.innerHTML = comissao;
    }else if(input.value < 2500){
      let comissao = (input.value / 100) * 11;
      valor.innerHTML = comissao;
    }else {
      ler comissao = (input.value / 100) * 10;
      valor.innerHTML = comissao;
    }

}
