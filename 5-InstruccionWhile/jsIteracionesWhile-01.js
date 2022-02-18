/*

Rudiferia Iván DIV-E
Iteracion While 01

al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/


	var contador;

function mostrar()
{

	contador = 1;

	while (contador < 11 )
	{
		console.log("Numero: " + contador);
		contador = contador + 1;
	}
}