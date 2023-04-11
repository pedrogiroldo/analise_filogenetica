//teste
// constantes universais
const cnv = document.getElementById('cladograma');
const ctx = cnv.getContext('2d');

const WIDTH = cnv.width
const HEIGHT = cnv.height

//desenho testes penis
// ctx.beginPath();
// ctx.strokeStyle = 'red';
// ctx.moveTo(20, 50);
// ctx.lineTo(200, 20);
// ctx.stroke();



// CODIGO CHAT GPT

function desenharCladograma(canvas, dados) {

  // Configurações do cladograma
  const width = canvas.width;
  const height = canvas.height;
  const margin = 20;
  const escalaAltura = 50;

  // Posições horizontais dos nós
  const maxProfundidade = Math.max(...dados.map((no) => no.profundidade));
  const posicoesHorizontais = dados.map(
    (no) => ((no.profundidade + 1) / (maxProfundidade + 2)) * (width - 2 * margin) + margin
  );

  // Desenha as linhas que conectam os nós
  ctx.beginPath();
  dados.forEach((no) => {
    const x = posicoesHorizontais[no.indice];
    const y = no.altura * escalaAltura + margin;
    no.filhos.forEach((filho) => {
      const fx = posicoesHorizontais[filho.indice];
      const fy = filho.altura * escalaAltura + margin;
      ctx.moveTo(x, y);
      ctx.lineTo(fx, y);
      ctx.lineTo(fx, fy);
    });
  });
  ctx.stroke();

  // Desenha os nós
  ctx.fillStyle = "#000";
  dados.forEach((no) => {
    const x = posicoesHorizontais[no.indice];
    const y = no.altura * escalaAltura + margin;
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, 2 * Math.PI);
    ctx.fill();
  });

  // Escreve o texto em cada nó
  ctx.fillStyle = "#666";
  ctx.textAlign = "center";
  ctx.font = "12px Arial";
  dados.forEach((no) => {
    const x = posicoesHorizontais[no.indice];
    const y = no.altura * escalaAltura + margin;
    ctx.fillText(no.nome, x, y - 8);
  });
}









const GE = {
	
	A: '+',
	B: '-',
	C: '-'
}
const one = {
	A: '-',
	B: '+',
	C: '-'	
}



function compare (anc, obj1, obj2, c){
	if (anc[c] == obj1[c]){
	return 'sin'}
	if (obj1[c] == obj2[c]){
		return 'ples'}
	if (anc[c] == obj1[c]){
		return 'apo'}
}


// testes
console.log(WIDTH)
console.log(HEIGHT)