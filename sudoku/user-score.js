const divScore = document.querySelector('.score');
const nombre = document.querySelector('.nombre');
let userScores = [];

class userScore {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
}

function getScore() {
    let dificultad = (document.querySelector('#dificultad').value) / 2;
    let tiempo = count;
    let score = 1000 * dificultad / tiempo;
    return score;
}

function imprScore() {
    getScore() = divScore.innerHTML;
}

function crearUserScores() {
    userScores.push(new userScore(nombre.value, getScore()))
}

function guardarUserScores() {
    crearUserScores();
    localStorage.setItem('userScores', JSON.stringify(userScores));
}

function cargarUserScores() {
    let recuperarScore = localStorage.getItem('userScores');
    userScores = JSON.parse(recuperarScore);
}

function imprHighScore() {
    let tablaHighScores = document.querySelector('#HighScore');
    for (i = 0; i < userScores.length; i++) {
        tablaHighScores.innerHTML += `<tr>
        <td>${userScore[i].name}</td>
        <td>${userScore[i].score}</td>
    </tr>`
    }
}