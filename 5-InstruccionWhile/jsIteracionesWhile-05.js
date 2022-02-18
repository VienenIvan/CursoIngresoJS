/*
Rudiferia Iván DIV-E
Iteracion While 05

Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.
*/

	var sexoIngresado;

function mostrar()
{
	sexoIngresado = prompt("Ingrese su sexo (f ó m): ");
	sexoIngresado = sexoIngresado.toLowerCase();

	while(sexoIngresado != "f" && sexoIngresado != "m")
	{
		alert("¡Valor incorrecto!");
		sexoIngresado = prompt("Ingrese su sexo (f ó m): ");

	}	

	alert("¡Valor correcto!");
	document.getElementById("txtIdSexo").value = ("Su sexo es: " + sexoIngresado);
}
