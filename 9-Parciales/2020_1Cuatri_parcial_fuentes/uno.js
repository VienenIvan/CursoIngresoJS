/*
Rudiferia Iván
Simulacro Parcial 1

1. Una empresa de venta de cosméticos necesita un programa que permita la carga de productos
vendidos, junto a los datos del vendedor. Se requiere ingresar los siguientes campos:
• Vendedor: Juan, María, Lucrecia
• Tipo producto: Perfume, Shampoo o Maquillaje
• Importe de la venta (Numero mayor que cero)
No hay un límite total de ventas, y cada vendedor puede realizar varias ventas.
Una vez finalizada la carga de productos vendidos se debe calcular la comisión del vendedor.
Si la suma de las ventas realizadas por cada vendedor está entre 5000 y 10000, la comisión será del 15%.
Si la comisión supera los 10000, la comisión será del 20%. En caso contrario la comisión será del 5%.
Se debe mostrar:
a. Promedio de ventas por cada vendedor.
b. Cantidad de perfumes que vendió María (X)
c. El importe más barato junto con el vendedor que lo vendió. (X)
d. El nombre del vendedor con menor comisión.
*/

	var productoIngresado;
	var vendedorIngresado;
	var importeIngresado;;;;;
	var banderaMasBarato;
	var productoMasBarato = 0;
	var vendedorProductoMasBarato;
	var banderaMenorComision;
	var banderaPerfumeMaria;
	var contadorPerfumeMaria = 0;
	var contador = 0;
	var respuesta;


function mostrar()
{
	banderaPrecioMaximo = true;
	banderaMenorComision = true;

	do 
	{
		productoIngresado = prompt("Ingrese un producto: ");
		productoIngresado = productoIngresado.toLowerCase();

		while (productoIngresado != "perfume" && productoIngresado != "shampoo" && productoIngresado != "maquillaje")
		{
			alert("Error.");
			productoIngresado = prompt("Ingrese un producto valido: ");
			productoIngresado = productoIngresado.toLowerCase();
		}

		vendedorIngresado = prompt("Ingrese un vendedor: ");
		vendedorIngresado = vendedorIngresado.toLowerCase();

		while(vendedorIngresado != "juan" && vendedorIngresado != "maria" && vendedorIngresado != "lucrecia")
		{
			alert("Error.");
			vendedorIngresado = prompt("Ingrese un vendedor valido: ");
			vendedorIngresado = vendedorIngresado.toLowerCase();
		}

		if(banderaMasBarato == true)
		{
			if(productoIngresado < productoMasBarato)
			{
				productoMasBarato = productoIngresado;
			}
		}

		if(banderaPerfumeMaria == true)
		{
			if(productoIngresado == "perfume" && vendedorIngresado == "maria")
			{
				contadorPerfumeMaria = contadorPerfumeMaria + 1;
			}
		}

		if (banderaMasBarato == true)
		{
			if (productoMasBarato < importeIngresado)
			{
				vendedorProductoMasBarato = vendedorIngresado;
			}
		}


		


		respuesta=prompt("Desea seguir ingresando productos? ingrese \"si\" o \"no\".")
	}while (respuesta == "si")



}
