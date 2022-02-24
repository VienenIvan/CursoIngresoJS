/*
Rudiferia Iván DIV-E
Iteracion While 07
*/

	var numeroIngresado;
	var contador;
	var acumulador;
	var respuesta;

function mostrar()
{
	contador = 0;
	acumulador = 0
	respuesta = "si";

	while(respuesta == "si")
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero: "));

		acumulador = acumulador + numeroIngresado;

		contador = contador + 1;

		respuesta = prompt("¿Desea seguir ingresando numeros? Ingrese \"si\" o \"no\"");
		respuesta = respuesta.toLowerCase();

		while(respuesta != "si" && respuesta != "no")
		{
			respuesta = prompt("¡ERROR! Ingrese si o no \"si\" o \"no\"");
			respuesta = respuesta.toLowerCase();
		}

	}

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / contador;	

}