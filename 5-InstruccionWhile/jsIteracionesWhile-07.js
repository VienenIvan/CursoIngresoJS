/*
Rudiferia Iván DIV-E
Iteracion While 07
*/

	var numeroIngresado;
	var contador;
	var acumulador;

function mostrar()
{
	contador = 0;
	acumulador = 0

	while(contador < 5)
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero: "));

		acumulador = acumulador + numeroIngresado;
		contador = contador + 1;

	}

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / 5;	

}