
//Rudiferia Iván - DIV E
//instruccion if 06

	var edadIngresada;
	var edadAdolescente;
	var edadNiño;
	var mayorEdad;

function mostrar()
{
	
	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	mayorEdad = edadIngresada >= 18;
	edadAdolescente = (edadIngresada <=17 ) && (edadIngresada >= 13);

	if (mayorEdad) 
	{
		alert("La persona es mayor de edad.");
	}

	else if (edadAdolescente)
	{
		alert("La persona es adolescente.");
	}

	else
	{
		alert("La persona es un niño.");
	}

}