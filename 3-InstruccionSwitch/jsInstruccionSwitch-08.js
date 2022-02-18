/*
Rudiferia Iván DIV-E
Instruccion switch 08
*/

	var destinoIngresado;
	var mensaje;

function mostrar()
{
	destinoIngresado =document.getElementById("txtIdDestino").value;

	switch(destinoIngresado)
	{
		case "Bariloche":
			mensaje="En Bariloche hace frio.";
			break;

		case "Cataratas":
			mensaje="En las cataratas hace calor.";
			break;

		case "Ushuaia":
			mensaje="En Ushuaia hace frio.";
			break;

		case "Mar del plata":
			mensaje="En Mar del Plata hace calor.";
			break;
	}

	alert(mensaje);

}