/*
Rudiferia Iván DIV-E
While 8
*/

	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numeroIngresado;
	var acumulador;

function mostrar()
{

	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta="si";

	while(respuesta == "si")
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero: "));

		acumulador = acumulador + numeroIngresado;

		respuesta = prompt("¿Desea seguir ingresando numeros? Ingrese \"si\" o \"no\"");
		respuesta = respuesta.toLowerCase();

		while(respuesta != "si" && respuesta != "no")
		{
			respuesta = prompt("¡ERROR! Ingrese si o no \"si\" o \"no\"");
			respuesta = respuesta.toLowerCase();
		}

		if (numeroIngresado < 0) 
		{
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}
		else
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
		}
	}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}