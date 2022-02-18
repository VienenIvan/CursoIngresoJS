/*
Rudiferia Iván DIV-E
Instruccion switch 10
*/

	var destinoIngresado;
	var estacionIngresada;
	var mensaje;
	
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
					mensaje="Se viaja";
					break;

				default:
					mensaje="No se viaja";
			}
			break;

		case "Verano":
			switch (destinoIngresado)
			{
				case "Bariloche":
				case "Cordoba":
					mensaje="No se viaja";
					break;


				default:
					mensaje="Se viaja";
			}
			break;

		case "Otoño":
			mensaje="Se viaja";
			break;

		case "Primavera":
			switch (destinoIngresado)
			{
				case "Bariloche":
					mensaje="No se viaja";
					break;

				default:
					mensaje="Se viaja";
			}
			break;
	}

	alert(mensaje);

}