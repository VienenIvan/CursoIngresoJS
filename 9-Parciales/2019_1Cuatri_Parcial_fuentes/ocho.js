/*
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar)
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.x
b) La cantidad de números impares.x
c) La cantidad de ceros.x
d) El promedio de todos los números positivos ingresados.x
e) La suma de todos los números negativos.x
f) El número y la letra del máximo y el mínimo.
*/

	var numeroIngresado;
	var letraIngresada;
	var respuesta;
	var cantidadPares = 0;
	var cantidadImpares = 0;
	var cantidadCeros = 0;
	var acumuladorPositivos = 0;
	var acumuladorNegativos = 0;
	var numeroMaximo = -100; 
	var numeroMinimo = 100;
	var letraMaximo;
	var letraMinimo;
	var contadorPositivos = 0;

function mostrar()
{

	do
	{
		letraIngresada = prompt("Ingrese una letra: ");
		letraIngresada = letraIngresada.toLowerCase();
	
		numeroIngresado = parseInt(prompt("Ingrese un numero: "));
	
		while(numeroIngresado < -100 || numeroIngresado > 100)
		{
			alert("ERROR");
			numeroIngresado = parseInt(prompt("Reingrese un numero: "));
		}

		if (numeroIngresado == 0) 
		{
			cantidadCeros = cantidadCeros + 1;
		}
		else
		{
			if (numeroIngresado % 2 == 0) 
			{
				cantidadPares = cantidadPares + 1;
			}
			else
			{
				cantidadImpares = cantidadImpares + 1;
			}
		}

		if (numeroIngresado > 0) 
		{
			acumuladorPositivos = acumuladorPositivos + numeroIngresado;
			contadorPositivos = contadorPositivos + 1;
		}
		else
		{
			acumuladorNegativos = acumuladorNegativos + numeroIngresado;
		}


		if (numeroIngresado < numeroMinimo) 
		{
			numeroMinimo = numeroIngresado;
			letraMinimo = letraIngresada;
		}
		else
		{
			if (numeroIngresado > numeroMaximo) 
			{
				numeroMaximo = numeroIngresado;
				letraMaximo = letraIngresada;
			}
		}

		promedioPositivos = acumuladorPositivos / contadorPositivos;


		respuesta = prompt("¿Desea seguir ingresando numeros? ingrese \"si\" o \"no\".");
		while(respuesta != "si" && respuesta != "no")
		{
			alert("ERROR");
			respuesta = prompt("¿Desea seguir ingresando numeros? ingrese \"si\" o \"no\".");
		}
	}while(respuesta == "si")

	document.write("La cantidad de numeros pares es " + cantidadPares + ". <br>");
	document.write("La cantidad de numeros impares es " + cantidadImpares + ". <br>");
	document.write("La cantidad de ceros es " + cantidadCeros + ". <br>");
	document.write("El promedio de los numeros positivos es " + promedioPositivos + ". <br>");
	document.write("La suma de los negativos es " + acumuladorNegativos + ". <br>");
	document.write("El numero y la letra del maximo es " + numeroMaximo + ", " + letraMaximo + ". <br>");
	document.write("El numero y la letra del minimo es " + numeroMinimo + ", " + letraMinimo + ". <br>");

}
