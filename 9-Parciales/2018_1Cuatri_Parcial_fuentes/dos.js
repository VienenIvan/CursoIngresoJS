//Rudiferia Iván
//2 2018

	var localidadIngresada;
	var nombreIngresado;

function mostrar()
{
	nombreIngresado = document.getElementById("elNombre").value;
	localidadIngresada = document.getElementById("laLocalidad").value;

	alert("Su nombre es " + nombreIngresado + " y vive en " + localidadIngresada);
}
