//Rudiferia Iván
//3 2018

	var precioIngresado;
	var descuentoIngresado;
	var resultado;
	var precioFinal;

function mostrar()
{
	precioIngresado=prompt("Ingrese el precio: ");
	descuentoIngresado=prompt("Ingrese el descuento deseado: ")

	resultado = (descuentoIngresado * precioIngresado) / 100;
	precioFinal = precioIngresado - resultado;

	elPrecioFinal.value=precioFinal;

}
