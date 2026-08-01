import { mouseClick } from './src/actions/mouseClick.js';
import { personagem } from "./src/character/personagem.js";

window.addEventListener('click', (evento) => {
    const orientacaoEvento = mouseClick.orientacaoMouse(evento);
    const img = personagem.img('flor');

    document.getElementById('app').innerHTML =
        `<img src="${img}" alt="flor" class="orientacaoImagem">`;

    const imgEl = document.querySelector('.orientacaoImagem');
    imgEl.style.left = `${orientacaoEvento.X}px`;
    imgEl.style.top = `${orientacaoEvento.Y}px`;
});