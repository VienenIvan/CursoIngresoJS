/*
Rudiferia Iván DIV-E
Instruccion switch 03
*/

	var mesDelAnio;
	var mensaje;

function mostrar()
{
	mesDelAnio=document.getElementById("txtIdMes").value;
	
	switch(mesDelAnio)
	{
		case "Febrero":
			mensaje = "Este mes no tiene más de 29 días.";
			break;

		default:
			mensaje = "Este mes tiene 30 o más días";
	}

	alert(mensaje);

}