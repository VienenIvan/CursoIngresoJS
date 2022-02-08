
//Rudiferia Iván - DIV E
//instruccion if 07

	var edadIngresada;
	var estadoCivilIngresado;
	var menorEdad;

function mostrar()
{
	
	edadIngresada = document.getElementById("txtIdEdad").value;
	estadoCivilIngresado = document.getElementById("estadoCivil").value;

	edadIngresada = parseInt(edadIngresada);

	menorEdad = (edadIngresada < 18 && estadoCivilIngresado != "Soltero");

	if (menorEdad) 
	{
		alert("Es muy chico para no ser soltero.");
	}


}