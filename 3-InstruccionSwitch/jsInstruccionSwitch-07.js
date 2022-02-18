/*
Rudiferia Iván DIV-E
Instruccion switch 07
*/

	var destinoIngresado;
	var mensaje;

function mostrar()
{
	destinoIngresado =document.getElementById("txtIdDestino").value;

	switch(destinoIngresado)
	{
		case "Bariloche":
			mensaje="Bariloche se encuentra en el Oeste.";
			break;

		case "Cataratas":
			mensaje="Las cataratas se encuentran en el Norte.";
			break;

		case "Ushuaia":
			mensaje="Ushuaia se encuentra en el Sur.";
			break;

		case "Mar del plata":
			mensaje="Mar del plata se encuentra en el Este.";
			break;
	}

	alert(mensaje);

}