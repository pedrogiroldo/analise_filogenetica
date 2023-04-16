const cnv = document.getElementById('cladograma');
const ctx = cnv.getContext('2d');

const WIDTH = cnv.width;
const HEIGHT = cnv.height;

const GE = {
  A: '+',
  B: '-',
  C: '-'
};
const one = {
  A: '-',
  B: '+',
  C: '-'
};

function compare (anc, obj1, obj2, c){
  if (anc[c] == obj1[c]) {
    return 'sin';
  }
  if (obj1[c] == obj2[c]) {
    return 'ples';
  }
  if (anc[c] == obj1[c]) {
    return 'apo';
  }
}

// Para desenhar a linha de uma espécie ancestral para duas espécies descendentes
function desenhaLinha(x1, y1, x2, y2, strokeStyle) {
  ctx.beginPath();
  ctx.strokeStyle = strokeStyle;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

// Função para desenhar o cladograma
function drawCladogram(tribo, esp1, esp2, esp3, especiador) {
  const anc = GE;
  const obj1 = especiador;
  const obj2 = one;
  const obj3 = GE;

  const xAnc = (esp1+esp2)/2;
  const yAnc = 20;
  
  const x1 = esp1;
  const y1 = 70;
  
  const xEspec = esp2;
  const yEspec = 130;
  
  const x2 = esp3;
  const y2 = 190;

  // desenha a linha de esp1 para o ancestral, e colore de vermelho se for uma espécie irmã
  if (compare(anc, obj1, obj2, tribo) === 'sin' || compare(anc, obj1, obj2, tribo) === 'ples') {
    desenhaLinha(xAnc, yAnc, x1, y1, 'red');
  } else {
    desenhaLinha(xAnc, yAnc, x1, y1, 'black');
  }

  // desenha a linha de esp2 para o ancestral, e colore de vermelho se for uma espécie irmã
  if (compare(anc, obj2, obj3, tribo) === 'sin' || compare(anc, obj2, obj3, tribo) === 'ples') {
    desenhaLinha(xAnc, yAnc, x2, y2, 'red');
  } else {
    desenhaLinha(xAnc, yAnc, x2, y2, 'black');
  }

  // desenha a linha do especiador para o ancestral, e colore de vermelho se for uma espécie irmã
  if (compare(anc, obj1, obj2, tribo) === 'apo' && compare(anc, obj2, obj3, tribo) === 'apo') {
    desenhaLinha(xEspec, yEspec, xAnc, yAnc, 'black');
  } else {
    desenhaLinha(xEspec, yEspec, xAnc, yAnc, 'red');
  }

  // desenha os nomes das espécies
  ctx.font = '14px Arial';
  ctx.fillText('Especiador', xEspec-30, yEspec-20);
  ctx.fillText('Espécie 1', x1-30, y1-20);
}
