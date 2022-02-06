/*

Rudiferia Iván - DIV E
TP 02

2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

	var anchoTerreno;
	var largoTerreno;
	var perimetroTerreno;
	var radioTerreno;
	var pi;
	var perimetroTerreno;
	var areaTerreno;
	var bolsaCemento;
	var bolsaCal;

function Rectangulo () 
{
	anchoTerreno = document.getElementById("txtIdAncho").value;
	largoTerreno = document.getElementById("txtIdLargo").value;

	anchoTerreno = parseFloat(anchoTerreno);
	largoTerreno = parseFloat(largoTerreno);

	perimetroTerreno = largoTerreno*2;
	perimetroTerreno = perimetroTerreno + anchoTerreno*2;
	perimetroTerreno = perimetroTerreno*3; //son tres alambres

	alert("Se necesitan " + perimetroTerreno + "m de alambre.");

}

function Circulo () 
{
	pi = Math.PI;

	radioTerreno = document.getElementById("txtIdRadio").value;
	radioTerreno = parseFloat(radioTerreno);

	perimetroTerreno = radioTerreno*2;
	perimetroTerreno = perimetroTerreno*pi;
	perimetroTerreno = perimetroTerreno*3 //son tres alambres
	alert("Se necesitan " + perimetroTerreno + "m de alambre")
	
}

function Materiales () 
{
	anchoTerreno = document.getElementById("txtIdAncho").value;
	largoTerreno = document.getElementById("txtIdLargo").value;

	anchoTerreno = parseInt(anchoTerreno);
	largoTerreno = parseInt(largoTerreno);
	
	areaTerreno = anchoTerreno*largoTerreno;

	bolsaCemento = areaTerreno*2;
	bolsaCal = areaTerreno*3;


	alert("Se necesitan " + bolsaCemento + " bolsas de cemento y " + bolsaCal  + " bolsas de cal.");
}			


