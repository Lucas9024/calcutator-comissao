const label = document.querySelector(".content #lab");
const input = document.querySelector(".content #inp");
const btn = document.querySelector(".content .btn");
const valor = document.querySelector(".values #labValor");

btn.onclick = ev => {
    ev.preventDefault();
    if(input.value === ''){
        alert("Digite um valor");
    }else {
     let comissao =  (input.value / 100) * 15;
        valor.innerHTML = comissao;
    }

}