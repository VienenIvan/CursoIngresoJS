/*
Rudiferia Iván
parcial 3

3. Llegan vuelos con vacunas de distintos lugares del mundo
Mientras el usuario quiera se debe registrar de cada vuelo:
-Origen (“Asia”, “Europa”, “América”)
-Cantidad de vacunas (entre 500000 y 2500000)
-Costo del vuelo (entre 1 millón y 5 millones de pesos)
Informar:
a- El origen que envió menor cantidad de vacunas
b- El total sin descuentos a pagar por los gastos de los viajes
c- Si en total se recibieron mas de 10 millones de vacunas se hace
un descuento de 25%, Si se recibieron entre 5 y 10 millones (inclusive) el
descuento es del 15% con menor cantidad no hay descuento.
Informar si hubo descuento de cuanto fue y el importe final con
Descuento.
*/

	var origenDelVuelo;
	var origenMenorCantidad;
	var cantidadVacunas;
	var costoVuelo;
	var acumuladorCostoVuelo = 0;
	var respuesta;
	var acumuladorVacunas = 0;
	var menorCantidadVacunas = 2500001;
	var descuentoRealizado;
	var precioConDescuento;


function mostrar()
{
	do
	{

		origenDelVuelo = prompt("Ingrese el origen del vuelo: ");
		origenDelVuelo = origenDelVuelo.toLowerCase();

		while(origenDelVuelo != "asia" && origenDelVuelo != "europa" && origenDelVuelo != "america")
		{
			alert("Error.");
			origenDelVuelo = prompt("Reingrese el origen del vuelo: ");
			origenDelVuelo = origenDelVuelo.toLowerCase();
		}

		cantidadVacunas = parseInt(prompt("Ingrese la cantidad de vacunas que llegan: "));

		while(isNaN(cantidadVacunas) || cantidadVacunas <500000 || cantidadVacunas > 2500000)
		{
			alert("Error.");
			cantidadVacunas = parseInt(prompt("Reingrese la cantidad de vacunas que llegan: "));

			if (cantidadVacunas < menorCantidadVacunas)
			{
				menorCantidadVacunas = cantidadVacunas;
				origenMenorCantidad 
				= origenDelVuelo;
			}

			acumuladorVacunas = acumuladorVacunas + cantidadVacunas;

		}

		costoVuelo = parseInt(prompt("Ingrese el costo del vuelo: "));

		while(costoVuelo < 1000000 || costoVuelo > 5000000)
		{
			alert("Error.");
			costoVuelo = parseInt(prompt("Reingrese el costo del vuelo: "));
		}

		acumuladorCostoVuelo = acumuladorCostoVuelo + costoVuelo;




		respuesta = prompt("¿Desea ingresar mas vuelos? escriba si o no: ");
		respuesta = respuesta.toLowerCase();
		while(respuesta != "si" && respuesta != "no")
		{
			alert("Error.");
			respuesta = prompt("¿Desea ingresar mas vuelos? reescriba si o no: ");
			respuesta = respuesta.toLowerCase();
		}
	}while (respuesta == "si")

	if (acumuladorVacunas > 10000000)
	{
		descuento = "25%";
		precioConDescuento = acumuladorCostoVuelo * 0.75;

	}
	else
	{
		if(acumuladorVacunas <= 10000000 || acumuladorVacunas >= 5000000)
		{
			descuento = "15%";
			precioConDescuento = acumuladorCostoVuelo * 0.85;
		}
		else
		{
			descuento = "0%";
			precioConDescuento = acumuladorCostoVuelo;
		}
	}

	alert("El origen que mando menos vacunas es: " + origenMenorCantidad);
	alert("El total a pagar sin descuentos es: $" + acumuladorCostoVuelo);
	alert("Hubo un descuento de " + descuento + ". El total con descuento es de: $" + precioConDescuento);
}
