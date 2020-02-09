var pedidos = []

window.onload = function () {
	pedidos = JSON.parse(localStorage.getItem('items'));
	setarPedidos();
}

function setarPedidos() {
	pedidos.forEach(item => {
	let trElement = document.createElement('tr');
	let tdPedido = document.createElement('td');
	let tdLanche = document.createElement('td');
	let tdQuantidade = document.createElement('td');
	let tdPreco = document.createElement('td');

	let tdTextPedido = document.createTextNode(item.pedido);
	let tdTextLanche = document.createTextNode(item.lanche);
	let tdTextQuantidade = document.createTextNode(item.quantidade);
	let tdTextPreco = document.createTextNode(item.preco);

	tdPedido.appendChild(tdTextPedido);
	tdLanche.appendChild(tdTextLanche);
	tdQuantidade.appendChild(tdTextQuantidade);
	tdPreco.appendChild(tdTextPreco);

	trElement.appendChild(tdPedido);
	trElement.appendChild(tdLanche);
	trElement.appendChild(tdQuantidade);
	trElement.appendChild(tdPreco);

	corpo = document.querySelector('tbody');
	corpo.appendChild(trElement);
	})
}
	
