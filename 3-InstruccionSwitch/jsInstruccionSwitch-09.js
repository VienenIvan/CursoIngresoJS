/*
Rudiferia Iván DIV-E
Instruccion switch 09
*/

	var precioViaje;
	var destinoIngresado;
	var estacionIngresada;
	var mensaje;
	var aModificar;
	var precioViajeModificado;
	
function mostrar()
{
	estacionIngresada=document.getElementById("txtIdEstacion").value;
	destinoIngresado=document.getElementById("txtIdDestino").value;

	precioViaje = 15000

	switch(estacionIngresada)
	{
		case "Invierno":
			switch (destinoIngresado)
			{
				case "Bariloche":
					aModificar=0.2;
					break;

				case "Cordoba":
				case "Cataratas":
					aModificar=-0.1;
					break;

				case "Mar del plata":
					aModificar=-0.2;
					break;
			}
			break;

		case "Verano":
			switch (destinoIngresado)
			{
				case "Bariloche":
					aModificar=-0.2;
					break;

				case "Cataratas":
				case "Cordoba":
					aModificar=0.1;
					break;

				case "Mar del plata":
					aModificar=0.2;
					break;
			}
			break;

		case "Otoño":
		case "Primavera":
			switch (destinoIngresado)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					aModificar=0.1;
					break;
				default :
					aModificar=0;
			}
			break;
	}

	precioViajeModificado = precioViaje * (1 + aModificar);
	
	mensaje =  precioViajeModificado;
	alert(mensaje);

}