/*
Rudiferia Iván DIV-E
Iteracion While 01

al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.
*/

	var contador;

function mostrar()
{
	
	contador = 10

	while(contador > 0)
	{
		console.log("Numero: " + contador);
		contador = contador - 1;
	}

}