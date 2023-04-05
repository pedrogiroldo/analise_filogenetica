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



function compare (anc, obj1, obj2,){
	if (anc.c1 == obj1.c1){
		return 'sin', console.log('sin')}
	if (obj1.c1 == obj2.c1){
		return 'ples', console.log('ples')}
	if (!anc.c1 == obj1.c1){
		return 'apo', console.log('apo')}
}

compare(GE, one)