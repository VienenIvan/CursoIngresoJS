/*
Iván Rudiferia DIV-E
Instruccion switch 02
*/

	var mesDelAnio;
	var mensaje;

function mostrar()
{
	mesDelAnio = document.getElementById("txtIdMes").value;

	switch(mesDelAnio)
	{
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			mensaje = "Falta para el Invierno.";
			break;

		case "Julio":
		case "Agosto":
			mensaje = "Abrigate que hace frio.";
			break;

		case "Enero":
		case "Febrero":
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			mensaje = "Ya pasamos el frio, ahora calor!!!";
			break;
	}

	alert(mensaje);

}