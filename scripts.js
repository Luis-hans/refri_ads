let list = document.querySelectorAll('.item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let contador = list.length;
let ativo = 0;

next.onclick = () => {
  let atual = document.querySelector('.ativo');
  atual.classList.remove('ativo');
  ativo = ativo >= contador - 1 ? 0 : ativo + 1;
  list[ativo].classList.add('ativo');
}

prev.onclick = () => {
  let atual = document.querySelector('.ativo');
  atual.classList.remove('ativo');
  ativo = ativo <= 0 ? contador - 1 : ativo - 1;
  list[ativo].classList.add('ativo');
}