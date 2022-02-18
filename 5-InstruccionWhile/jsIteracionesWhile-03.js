/*
Rudiferia Iván DIV-E
Iteracion While 03

al presionar el botón pedir la CLAVE (ayuda: es utn750)
*/

	var claveIngresada

function mostrar()
{
	claveIngresada = prompt("Ingrese la clave: ");

	while(claveIngresada != "utn750")
	{
		alert("Clave erronea");

		claveIngresada = prompt("Ingrese la clave: ");

	}

	alert("Clave correcta");

}
