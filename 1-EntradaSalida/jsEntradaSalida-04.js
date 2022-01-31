/* 

Rudiferia Iván - DIV E

Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()

{
	var datoIngresado;

	datoIngresado = prompt("Ingrese un dato:");

	document.getElementById("txtIdNombre").value = datoIngresado

	alert(datoIngresado);
}

