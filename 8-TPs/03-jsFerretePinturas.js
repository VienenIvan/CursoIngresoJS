/*

Rudiferia Iván - DIV E
TP 03

3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
	
	var temperaturaCelcius;
	var temperaturaFahrenheit;

function FahrenheitCentigrados () 
{

	temperaturaFahrenheit = document.getElementById("txtIdTemperatura").value;
	temperaturaFahrenheit = parseFloat(temperaturaFahrenheit);

	temperaturaCelcius = document.getElementById("txtIdTemperatura").value;
	temperaturaCelcius = parseFloat(temperaturaCelcius);

	temperaturaCelcius = temperaturaFahrenheit - 32;
	temperaturaCelcius = temperaturaCelcius * 5;
	temperaturaCelcius = temperaturaCelcius / 9;

	document.getElementById("txtIdTemperatura").value = (temperaturaFahrenheit + " son " + temperaturaCelcius + " grados Celcius");

}

function CentigradosFahrenheit () 
{

	temperaturaFahrenheit = document.getElementById("txtIdTemperatura").value;
	temperaturaFahrenheit = parseFloat(temperaturaFahrenheit);

	temperaturaCelcius = document.getElementById("txtIdTemperatura").value;
	temperaturaCelcius = parseFloat(temperaturaCelcius);

	temperaturaFahrenheit = temperaturaCelcius * 9;
	temperaturaFahrenheit = temperaturaFahrenheit / 5;
	temperaturaFahrenheit = temperaturaFahrenheit + 32;

	document.getElementById("txtIdTemperatura").value = (temperaturaCelcius + " son " + temperaturaFahrenheit + " grados Fahrenheit");
}
