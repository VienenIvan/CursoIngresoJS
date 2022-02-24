/*
Rudiferia Iván DIV-E
While 09

Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/

	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

function mostrar()
{	
	banderaDelPrimero=true;
	respuesta="si";

	numeroMaximo = -999999999;
	numeroMinimo = 999999999;

	while(respuesta=="si")
	{
		do
		{
			numeroIngresado = parseInt(prompt("Ingrese un numero"));
		}while(isNaN(numeroIngresado)==true);

		if (numeroMaximo < numeroIngresado || banderaDelPrimero == true)
		{
			numeroMaximo = numeroIngresado;
		}

		if (numeroMinimo > numeroIngresado || banderaDelPrimero == true)
		{
			numeroMinimo = numeroIngresado;

			banderaDelPrimero = false;
		}

		respuesta = prompt("¿Desea continuar? Ingrese \"si\" o \"no\"");
		respuesta = respuesta.toLowerCase();

		while (respuesta != "si" && respuesta != "no")
		{
			alert("¡ERROR!");
			respuesta = prompt("¿Desea continuar? Ingrese \"si\" o \"no\"");
			respuesta = respuesta.toLowerCase();
		}
	}

	txtIdMaximo.value = numeroMaximo;
	txtIdMinimo.value = numeroMinimo;
}