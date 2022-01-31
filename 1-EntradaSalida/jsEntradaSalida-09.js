/*

Rudiferia Iván - DIV E
E/S 09

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var resultado;
	var adicionalSueldo;

	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = document.getElementById("txtIdSueldo").value;

	sueldo = parseInt(sueldo);
	resultado = parseInt(resultado);

	adicionalSueldo = sueldo*0.10;	
	sueldo = adicionalSueldo + sueldo;


	document.getElementById("txtIdResultado").value = ("El sueldo más el adicional es de: $" + sueldo);
}
