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