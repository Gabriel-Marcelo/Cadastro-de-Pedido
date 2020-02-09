
var pedido = [];
var i = 1;

function salvarLocalStorage() {
	localStorage.setItem('items', JSON.stringify(pedido));
}


function setarPedido() {
	if(validar()) {
		let valores = capturarValores();
		let obj = {
			pedido: i,
			lanche: valores[0],
			preco: (valores[1] * valores[2]),
			quantidade: valores[2]
		}
		pedido.push(obj);
		i++;
		console.log(pedido);
		alert("Pedido feito com sucesso");
		limparCampos();
		salvarLocalStorage();
	}
}

function limparCampos() {
	document.querySelector("select").value = "";
	document.querySelector("#quantidade").value = "";
	document.querySelector("#preco").value = "";
}

function capturarValores() {
	let valores = [];
	valores.push(document.querySelector("select").value);
	valores.push(document.querySelector("#preco").value);
	valores.push(document.querySelector("#quantidade").value);
	return valores;
}

/* Setar Precos */

function setarPreco() {
	valores = capturarValores(); 
	lancheEscolhido = valores[0];
	if(lancheEscolhido == "x-burguer") 
		document.querySelector("#preco").value = "10.00";
	else if(lancheEscolhido == "x-salada")
		document.querySelector("#preco").value = "15.00";
	else if(lancheEscolhido == "x-bacon")
		document.querySelector("#preco").value = "20.00";
	else if(lancheEscolhido == "")
		document.querySelector("#preco").value = "";
}

/* VALIDAÇÕES */
function validar() {
	return validarSelect() && validarQuantidade();
}

function validarSelect() {
	let valores = capturarValores();
	if(valores[0] == "") alert("Selecione seu lanche.");
	return (valores[0] != "") ? true : false;
}


function obterQuantidade() {
	let valores = capturarValores();
	let qtd = valores[2];
	return Array.from(String(qtd), Number);
}

function checarQuantidadeVazio() {
	let qtd = obterQuantidade();
	 if(qtd == ""){
	 	alert("Preencha a quantidade");
	 	return false;
	 }
	 return true;
}

function checarQuantidadeNumero() {
	let arrayDeNumeros = [0,1,2,3,4,5,6,7,8,9];
	let qtd = obterQuantidade();
	let eValido = true;
	 for(let i=0 ; i < qtd.length; i++) {
	 	if(arrayDeNumeros.includes(qtd[i])) eValido = eValido;
	 	else eValido = false;
	 }
	if(!eValido) alert("Preencha a quantidade apenas com números inteiros.");
	return eValido;
}

function validarQuantidade() {
	 return checarQuantidadeNumero() && checarQuantidadeVazio();
}
