/*

Rudiferia Iván - DIV E
E/S 09 BIS

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

	var sueldo;
	var resultado;
	var adicionalSueldo;
	var aumento;

function mostrarAumento()
{
	aumento = prompt("Ingrese el porcentaje de aumento.");
	sueldo = document.getElementById("txtIdSueldo").value;

	sueldo = parseInt(sueldo);
	resultado = parseInt(resultado);

	adicionalSueldo = sueldo*aumento;
	adicionalSueldo = adicionalSueldo/100;
	sueldo = adicionalSueldo + sueldo;


	document.getElementById("txtIdResultado").value = sueldo;
}





