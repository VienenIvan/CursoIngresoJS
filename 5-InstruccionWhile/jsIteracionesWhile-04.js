/*
Rudiferia Iván DIV-E
Iteracion While 04

al presionar el botón 
pedir un número entre 0 y 9 inclusive.
*/

	var numeroIngresado;

function mostrar()
{
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");

	while (numeroIngresado < 0 || numeroIngresado > 10)
	{
		alert("Numero fuera del rango solicitado.");

		numeroIngresado = prompt("ingrese un número entre 0 y 10.");

	}

	alert("¡Numero correcto!");

	document.getElementById("txtIdNumero").value = numeroIngresado;
	
}