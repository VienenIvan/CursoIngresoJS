/*
Rudiferia Iván DIV-E
Instruccion switch 04
*/

	var mesDelAnio;
	var mensaje;

function mostrar()
{
	mesDelAnio=document.getElementById("txtIdMes").value;
	
	switch(mesDelAnio)
	{
		case "Febrero":
			mensaje = "Este mes tiene 28 días.";
			break;

		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			mensaje = "Este mes tiene 31 días";
			break;

		default:
			mensaje = "Este mes tiene 30 días";
	}

	alert(mensaje);

}