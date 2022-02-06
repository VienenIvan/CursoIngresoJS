/*

Rudiferia Iván - DIV E
TP 01

1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;
	var iva;

function Sumar () 
{
	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioTres = document.getElementById("txtIdPrecioTres").value;

	precioUno = parseFloat(precioUno);
	precioDos = parseFloat(precioDos);
	precioTres = parseFloat(precioTres);

	resultado = precioUno + precioDos + precioTres;

	alert("La suma de los productos es: " + resultado);
}
function Promedio ()
{
	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioTres = document.getElementById("txtIdPrecioTres").value;

	precioUno = parseFloat(precioUno);
	precioDos = parseFloat(precioDos);
	precioTres = parseFloat(precioTres);

	resultado = precioUno + precioDos + precioTres;


resultado = precioUno + precioDos
resultado = resultado + precioTres
resultado = resultado / 3

	alert("El promedio de los productos es: " + resultado / 3);
}
function PrecioFinal () 
{
	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioTres = document.getElementById("txtIdPrecioTres").value;

	precioUno = parseFloat(precioUno);
	precioDos = parseFloat(precioDos);
	precioTres = parseFloat(precioTres);

	resultado = precioUno + precioDos + precioTres;
	iva = resultado*(1.21);

	alert("El total de los productos (más IVA) es: " + iva);
}








