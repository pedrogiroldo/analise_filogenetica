// Pega os elementos do canvas
const cnv = document.getElementById('cladograma');
const ctx = cnv.getContext('2d');

const WIDTH = cnv.width;
const HEIGHT = cnv.height;

/* 
==================
VARIÁVEIS GLOBAIS
==================
*/
const lineLength = Math.sqrt(500000)

// Recebe o botão e cria constantes dos animais
let animal_1 = ''
let animal_2 = ''
let animal_3 = ''
let animal_4 = ''
let button = document.getElementById('gerar-button')

// Vetor q vai abrigar os inputs
let animais = []

// Coloca os dados dos inputs no vetor animais
function animaisVector ()  {
    // Atualiza os inputs no momento em que o botão é clicado
    animal_1 = document.getElementById('animal-1-input').value
    animal_2 = document.getElementById('animal-2-input').value
    animal_3 = document.getElementById('animal-3-input').value
    animal_4 = document.getElementById('animal-4-input').value
    // Os ifs servem para não add "" no vetor, oq atrapalha o cálculo
    // ainda não ta funcionando
    if (animal_1){
    animais.push(animal_1);
    }
    if (animal_2){
    animais.push(animal_2);
    }
    if (animal_3){
    animais.push(animal_3);
    }
    if (animal_4){
    animais.push(animal_4);
    }
}

// Função que desenha
function drawCladograma () {
    // Desenha a primeira linha
    ctx.beginPath();
    ctx.moveTo(0, 500);
    ctx.lineTo(500, 0);
    ctx.stroke();

    // Coordenadas que serão reutilizadas:
    let x1 = '';
    let y1 = '';
    let x2 = '';
    let y2 = '';

    for(let i in animais){
        // Define x e y do primeiro ponto
        x1 = lineLength / (animais.length + 1) * (i + 1);
        console.log(x1)
        console.log(animais.length)
        y1 = -x1 + 500;

        // Define x e y do segundo ponto
        x2 = -x1 * Math.sqrt(2);
        y2 = x2;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }

}

button.addEventListener('click', (e) => {
    e.preventDefault();
    animaisVector();
    drawCladograma();
})