var refrescarVisor = false;

function enviarNum(numero) {
	var v = document.getElementById('visor');
	var op = document.getElementById('operaciones');
	var pn = document.getElementById('primernumero');

	if (numero == ',' && v.innerHTML.includes(',')) {
		return;
	}

	if (numero == 'signo') {
		v.innerHTML = aplicarSigno(v.innerHTML);
	} else if (
		v.innerHTML == '0' ||
		v.innerHTML == '-0' ||
		refrescarVisor
	) {
		v.innerHTML = numero;
	} else {
		v.innerHTML = v.innerHTML + numero;
	}
	refrescarVisor = false;
}

function aplicarSigno(numeroVisor) {
	if (numeroVisor.includes('-')) {
		return numeroVisor.replace('-', '');
	}
	return '-' + numeroVisor;
}

function almacenarNum(operacion) {
	var v = document.getElementById('visor');
	var pn = document.getElementById('primernumero');
	pn.value = v.innerHTML;

	var op = document.getElementById('operaciones');
	op.value = operacion;
	refrescarVisor = true;
}

function resultado() {
	var v = document.getElementById('visor');
	var pn = document.getElementById('primernumero');
	var op = document.getElementById('operaciones');

	if (op.value == '') return;

	var visor = parseFloat(v.innerHTML.replace(',', '.'));
	var primerNum = parseFloat(pn.value.replace(',', '.'));
	if (op.value == '+') {
		v.innerHTML = visor + primerNum;
	}
	if (op.value == '-') {
		v.innerHTML = primerNum - visor;
	}
	if (op.value == '/') {
		v.innerHTML = primerNum / visor;
	}
	if (op.value == '*') {
		v.innerHTML = primerNum * visor;
	}
	v.innerHTML = v.innerHTML.replace('.', ',');
	pn.value = '';
	op.value = '';
	refrescarVisor = true;
}

function borrarNum() {
	var v = document.getElementById('visor');
	if (v.innerHTML.replace('-', '').length > 1) {
		v.innerHTML = v.innerHTML.slice(0, v.innerHTML.length - 1);
	} else {
		v.innerHTML = '0';
	}
}
