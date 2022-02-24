//Rudiferia Iván
//1 2018

 	var anchoTerreno;
 	var largoTerreno;
 	var perimetroTerreno;

function mostrar()
{
	do
	{
		alert("¡Error!");
		anchoTerreno = parseInt(prompt("Ingrese el ancho del terreno"));
	}while(isNaN(anchoTerreno)==true);

	do
	{
		alert("¡Error!");
		largoTerreno = parseInt(prompt("Ingrese el largo del terreno"));
	}while(isNaN(largoTerreno)==true);

	perimetroTerreno = (largoTerreno * 2);
	perimetroTerreno = perimetroTerreno + (anchoTerreno * 2);

	alert("El perimetro del terreno es: " + perimetroTerreno);
}
