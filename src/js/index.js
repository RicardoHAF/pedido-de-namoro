let buttonNo = document.querySelector('#buttonNo');
let tentativas = 0;
buttonNo.onmouseover = trocarLugar;
buttonNo.onclick = parabens;

let buttonYes = document.querySelector('#buttonYes');
buttonYes.onclick = alegrarSe;

function trocarLugar(){
    tentativas++;
    buttonNo.style.left = Math.floor(Math.random() * 75) + '%';
    buttonNo.style.top = Math.floor(Math.random() * 90) + '%';
    console.log(buttonNo.style.left);
    console.log(buttonNo.style.top);
}

function alegrarSe(){
    alert('🐰  🎀  Eu te amo  🎀  🐰 !')
}

function parabens(){
    alert("Parabéns, depois de "+ tentativas+" tentativas descobrimos que você realmente não gosta dele(a)");
}

