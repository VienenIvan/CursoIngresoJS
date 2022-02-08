
//Rudiferia Iván - DIV E
//Instruccion if 10

	var numeroRandom;

function mostrar()
{
	numeroRandom = Math.floor(Math.random() * (10 - 1 + 1) ) + 1;	

	console.log(numeroRandom)

	if (numeroRandom >= 9) 
	{
		alert("Su nota es: Excelente");
	}
	
	else if (numeroRandom >= 4)
	{
		alert("Su nota es: Aprobado");
	}
	else
	{
		alert("Su nota es: Desaprobado");
	}
}
