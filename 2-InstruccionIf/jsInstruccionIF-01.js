
//Rudiferia Iván - DIV E

//Instruccion if 01
	

	var edadIngresada;
	var niñaBonita;

function mostrar()
{

	edadIngresada = document.getElementById("txtIdEdad").value;

	niñaBonita = edadIngresada == 15;

	if (niñaBonita) {

		alert("Niña Bonita");
	}
}