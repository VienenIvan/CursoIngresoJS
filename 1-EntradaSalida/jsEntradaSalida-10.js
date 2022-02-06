/*

Rudiferia Iván - DIV E
E/S 10

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var resultado;
	var descuentoImporte;

	importe = document.getElementById("txtIdImporte").value;
	importe = document.getElementById("txtIdImporte").value;

	importe = parseInt(importe);
	resultado = parseInt(resultado);

	descuentoImporte = importe*0.75;	


	document.getElementById("txtIdResultado").value = ("El importe con el -25% es de: " + descuentoImporte);
}
