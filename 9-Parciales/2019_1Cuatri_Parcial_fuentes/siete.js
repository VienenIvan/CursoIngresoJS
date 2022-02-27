/*
Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250)
El sexo (validar el sexo “f” o “m”) de 5 jugadores de básquet, 
Informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona. x
c) La cantidad de mujeres que su altura supere los 190 centimetros. x
*/

	var sexoIngresado;
	var sexoFinal;
	var alturaIngresada;
	var contador = 1;
	var contadorMujeres = 0;
	var menorAltura = 250;
	var sexoMenorAltura;
	var acumulador = 0;

function mostrar()
{

	do
	{
		sexoIngresado = prompt("Ingrese el sexo del jugador mediante \"F\" o \"M\".");
		sexoIngresado = sexoIngresado.toUpperCase();

		while(sexoIngresado != "F" && sexoIngresado != "M")
		{
			alert("¡ERROR!");
			sexoIngresado = prompt("Reingrese el sexo del jugador mediante \"F\" o \"M\".");
			sexoIngresado = sexoIngresado.toUpperCase();
		}

		if (sexoIngresado = "M") 
		{
			sexoFinal = "masculino";
		}
		else
		{
			sexoFinal = "femenino";
		}

		alturaIngresada = parseInt(prompt("Ingrese la altura de el jugador: "));

		while(isNaN(alturaIngresada) || alturaIngresada < 0 || alturaIngresada >250)
		{
			alert("¡ERROR!");
			alturaIngresada = parseInt(prompt("Reingrese la altura de el jugador: "));
		}

		if(alturaIngresada < menorAltura)
		{
			menorAltura = alturaIngresada;
			sexoMenorAltura = sexoIngresado;
		}

		if (sexoIngresado = "F" && alturaIngresada > 190)
		{
			contadorMujeres = contadorMujeres + 1;
		}


		acumulador = alturaIngresada + acumulador;
		contador = contador + 1


	}while (contador <= 5)

	alert("El total de las alturas es de: " + acumulador);
	alert("La altura mas baja es " + menorAltura + " y es una persona de sexo " + sexoFinal + ".");
	alert("La cantidad de mujeres que mieden mas de 190 es de " + contadorMujeres + ".");

}
