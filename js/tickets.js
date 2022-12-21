let botonResumen = document.getElementById("botonResumen")
let botonComprar = document.getElementById("botonComprar")

botonResumen.addEventListener("click", ()=>{

	let cantidad = parseInt(document.getElementById("cantidad").value);
	let categoria = document.getElementById("categoria").value;

	let precio;

	switch(categoria){
		case "E": precio = 200 * 0.20; break;
		case "T": precio = 200 * 0.50; break;
		case "J": precio = 200 * 0.85; break;
		default: console.log("Elegir una opcion")
	}

	// alert("Resumen" + "\nCantidad Entradas a Comprar: " + cantidad + "\nPrecio Unitario: " +  precio + "\nTotal a Pagar: " + precio*cantidad
	// )


	let textoResumen = "\nCantidad Entradas a Comprar : " + cantidad + "\n\nPrecio Unitario:" +  precio + "\n\nTotal a Pagar : " +  precio*cantidad 

	document.getElementById("textoResumen").innerHTML = "";

	let pe = document.createElement("p")
	pe.innerText = textoResumen

	document.getElementById("textoResumen").appendChild(pe)

})


botonComprar.addEventListener("click", ()=>{
	let confirmacion = confirm("Confirma la compra de la entrada/s?");

	if (confirmacion){
		alert("Compra ralizada exitosamente")
	} else {
		alert("Compra cancelada")
	}
})
