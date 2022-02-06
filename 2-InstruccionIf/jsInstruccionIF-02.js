
//Rudiferia Iván - DIV E
//Instruccion if 02


	var edadIngresada;
	var mayorEdad;

function mostrar()
{

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	mayorEdad = edadIngresada >= 18;

	if (mayorEdad) {

		alert("La persona es mayor de edad.");

	}

}