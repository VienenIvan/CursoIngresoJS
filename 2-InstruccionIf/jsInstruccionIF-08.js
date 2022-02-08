
//Rudiferia Iván - DIV E
//instruccion if 08

	var edadIngresada;
	var estadoCivilIngresado;
	var solteroNoMenor;

function mostrar()
{
	
	edadIngresada = document.getElementById("txtIdEdad").value;
	estadoCivilIngresado = document.getElementById("estadoCivil").value;

	edadIngresada = parseInt(edadIngresada);

	solteroNoMenor = (edadIngresada >= 18 && estadoCivilIngresado == "Soltero");

	if (solteroNoMenor) 
	{
		alert("Es soltero y no es menor.");
	}


}

