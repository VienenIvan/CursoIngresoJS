

//Rudiferia Iván - DIV E
//Instruccion if 05

	var edadIngresada;
	var edadAdolescente;

function mostrar()
{

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	edadAdolescente = (edadIngresada < 13) || (edadIngresada > 17);


	if (edadAdolescente) {

		alert("La persona NO es adolescente.");

	}

}	
