/*
Rudiferia Iván DIV-E
Instruccion switch 05
*/

	var horaDelDia;
	var mensaje;

function mostrar()
{
	horaDelDia=document.getElementById("txtIdHora").value;
	horaDelDia=parseInt(horaDelDia);


	switch(horaDelDia)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje="Es de mañana.";
			break;
	}

	alert(mensaje);

}