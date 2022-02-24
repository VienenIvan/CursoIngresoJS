/*

Rudiferia Iván DIV -E
While 10

Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos. (X)
2-Suma de los positivos. (X)
3-Cantidad de positivos. (X)
4-Cantidad de negativos. (X)
5-Cantidad de ceros. (X)
6-Cantidad de números pares. (X)
7-Promedio de positivos. (X)
8-Promedio de negativos. (X)
9-Diferencia entre positivos y negativos, (positvos-negativos). (X) 
*/

	var respuestaContinuar;
	var numeroIngresado;
	var sumaPositivos = 0;
	var sumaNegativos = 0;
	var cantidadPositivos = 0;
	var cantidadNegativos = 0;
	var cantidadCeros = 0;
	var cantidadPares = 0;
	var diferenciaPositivosNegativos = 0;
	var promedioPositivos;
	var promedioNegativos;

function mostrar()
{
	respuestaContinuar="si";

	while (respuestaContinuar=="si")
	{
		do
		{
			numeroIngresado = parseInt(prompt("Ingrese un numero: "));
		}while(isNaN(numeroIngresado)==true);

		if (numeroIngresado > 0)
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
			cantidadPositivos = cantidadPositivos + 1;
		}
		else
		{
			if (numeroIngresado < 0)
			{
				sumaNegativos = sumaNegativos + numeroIngresado;
				cantidadNegativos = cantidadNegativos + 1;
			}
			else
			{
				cantidadCeros = cantidadCeros + 1;
			}
		}

		if (numeroIngresado%2 == 0)
		{
			cantidadPares = cantidadPares + 1;
		}

		respuestaContinuar = prompt("desea continuar? Ingrese \"si\" o \"no\"");
		respuestaContinuar = respuestaContinuar.toLowerCase();

		while (respuestaContinuar != "si" && respuestaContinuar != "no")
		{
			alert("¡ERROR!");
			respuestaContinuar = prompt("desea continuar? Ingrese \"si\" o \"no\"");
			respuestaContinuar = respuestaContinuar.toLowerCase();
		}
	}


	

	if (cantidadNegativos != 0) 
	{
		promedioNegativos = sumaNegativos / cantidadNegativos;
	}
	else
	{
		promedioNegativos = 0;
	}


	if (cantidadPositivos != 0) 
	{
		promedioPositivos = sumaPositivos / cantidadPositivos;
	}	
	else
	{
		promedioPositivos = 0;
	}
	

	diferenciaPositivosNegativos = sumaPositivos + sumaNegativos;

	document.write("La suma de los negativos es: " + sumaNegativos + "<br>");
	document.write("La suma de los positivos es: " + sumaPositivos + "<br>");
	document.write("La cantidad de los negativos es: " + cantidadNegativos + "<br>");
	document.write("La cantidad de los positivos es: " + cantidadPositivos + "<br>");
	document.write("La cantidad de los ceros es: " + cantidadCeros + "<br>");
	document.write("La cantidad de los pares es: " + cantidadPares + "<br>");
	document.write("El promedio de los negativos es: " + promedioNegativos + "<br>");
	document.write("El promedio de los positivos es: " + promedioPositivos + "<br>");
	document.write("La diferencia entre los positivos y los negativos es: " + diferenciaPositivosNegativos + "<br>");

}