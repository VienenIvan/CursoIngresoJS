/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;

	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioTres = document.getElementById("txtIdPrecioTres").value;

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	resultado = precioUno + precioDos + precioTres;

	alert("La suma de los productos es: " + resultado);
}
function Promedio ()
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;

	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioTres = document.getElementById("txtIdPrecioTres").value;

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	resultado = precioUno + precioDos + precioTres;

	alert("El promedio de los productos es: " + resultado / 3);
}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;
	var iva;

	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioTres = document.getElementById("txtIdPrecioTres").value;

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	resultado = precioUno + precioDos + precioTres;
	iva = resultado*(1.21);

	alert("El total de los productos (más IVA) es: " + iva);
}








