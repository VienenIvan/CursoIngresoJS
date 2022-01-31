/*

Rudiferia Iván - DIV E
E/S 06

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;

	numeroDos = document.getElementById("txtIdNumeroUno").value;
	numeroUno = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	alert(numeroDos+numeroUno);
}

