export class MouseClick {
    orientacaoMouse(evento) {
        let x = evento.clientX;
        let y = evento.clientY;

        return { "X": x, "Y": y }
    }
}

export const mouseClick = new MouseClick();