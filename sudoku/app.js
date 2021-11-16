const pantInicial = document.querySelector('.pant-inicial');
const pantSudoku = document.querySelector('.pant-sudoku');

document.querySelector('#btn-new').addEventListener('click', () => {
    if (nombre.value.trim().length > 0) {
        pantInicial.classList.add('trans');
        pantSudoku.classList.remove('trans');
        cronometro();
        setDificultad();
        rellenarCasilla(setSudoku);

    } else {
        nombre.classList.add('input-err');
        setTimeout(() => {
            nombre.classList.remove('input-err');
            nombre.focus();
        }, 500);
    }
})