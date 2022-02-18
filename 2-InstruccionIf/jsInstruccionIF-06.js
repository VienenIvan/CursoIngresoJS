/*
//Rudiferia Iván - DIV E
//instruccion if 06

	var edadIngresada;
	var edadAdolescente;
	var edadNiño;
	var mayorEdad;

function mostrar()
{
	
	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	mayorEdad = edadIngresada >= 18;
	edadAdolescente = (edadIngresada <=17 ) && (edadIngresada >= 13);

	if (mayorEdad) 
	{
		alert("La persona es mayor de edad.");
	}

	else if (edadAdolescente)
	{
		alert("La persona es adolescente.");
	}

	else
	{
		alert("La persona es un niño.");
	}

}
*/

/*
Ejercicio 6 bis(usar if else):
Al ingresar por prompt una edad debemos informar si
la persona es anciano(mas de 70), mayor de edad (entre 70 y 18 años),
adolescente (entre 13 y 17 años), niño (menor a 13 años), bebe (0 a 3 años).
mostrar por ID el resultado.
*/

	var edadIngresada;
	var mensaje;

function mostrar()
{
	edadIngresada = prompt("Ingrese su edad:");

	edadIngresada = parseInt(edadIngresada);

	if (edadIngresada >= 70)
	{
		mensaje = "La persona es anciana.";
	}
	else 
	{
		if (edadIngresada >= 18) 
		{
			mensaje = "La persona es mayor de edad.";
		}

		else 
		{
			if (edadIngresada >= 13)
			{
				mensaje = "La persona es adolescente.";
			}

			else 
			{
				if (edadIngresada > 3) 
				{
					mensaje = "La persona es un niño/a";
				}
				else
				{
					mensaje = "La persona es bebé.";
				}
			}
		}
	}

	document.getElementById("txtIdEdad").value = mensaje;
}


