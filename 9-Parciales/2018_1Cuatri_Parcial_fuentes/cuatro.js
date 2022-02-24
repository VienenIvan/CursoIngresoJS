//Rudiferia Iván
//4 2018

/*Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y supero el 10".
*/

	var primerNumero;
	var segundoNumero;
	var resultado;

function mostrar()
{

	primerNumero=parseInt(prompt("Ingrese un numero: "));
	segundoNumero=parseInt(prompt("Ingrese otro numero: "));

	resultado=primerNumero+segundoNumero;

	if (primerNumero == segundoNumero) 
	{
		alert(primerNumero+", "+segundoNumero);
	}
	else
	{
		if (primerNumero > segundoNumero)
		{
			alert(primerNumero - segundoNumero);
		}
		else
		{
			if (resultado <= 10)
			{
				alert(resultado);
			}
			else
			{
				alert("La suma es: " + resultado + ", y supero 10");
			}
		}
	}
}
