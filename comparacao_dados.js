
// constantes universais
const cnv = document.getElementById('cladograma');
const ctx = cnv.getContext('2d');

const WIDTH = cnv.width/1.25
const HEIGHT = cnv.height/1.25

ctx.strokeStyle = 'black'
ctx.strokeRect(10, 10, WIDTH, HEIGHT)

//desenho testes
ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(20, 50);
ctx.lineTo(50, 20);
ctx.stroke();






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