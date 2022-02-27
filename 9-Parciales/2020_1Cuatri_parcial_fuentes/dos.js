/*
Rudiferia Iván
Parcial 2

2. Se necesita llevar el registro de un vacunatorio. Para ello se podrá registrar los datos de las
personas vacunadas mientras el usuario quiera.
De cada vacunado se solicita:
Nombre
Edad (mayor o igual a 12)
Vacuna (“rusa”, “china”, “americana”)
Si la edad esta entre 12 y 17 años ambos incluidos solo se permite la vacuna americana
Dosis (“P” en caso de ser la primera dosis o “S” en caso de ser la segunda dosis)
Genero (Femenino, Masculino)
Informar:
a- Promedio de edad de los que se vacunaron con la china.
b- Nombre y vacuna del masculino más joven.
c- De las personas que recibieron la vacuna americana que porcentaje son menores de edad
d- Porcentaje de los que están vacunados con 1 dosis sobre el total de vacunados
e- Vacuna más inoculada
*/

	var nombreIngresado;
	var vacunaIngresada;
	var edadIngresada;
	var dosisIngresada;
	var respuesta;
	var promedioChina;
	var contadorEdad = 0;
	var acumuladorEdadMasculino = 0;
	var masculinoJoven = 1000;
	var nombreMasculino;
	var vacunaMasculino;
	var acumuladorEdad = 0;
	var acumuladorEdadMenor = 0;


function mostrar()
{
  
	do
	{	
		nombreIngresado=prompt("Ingrese su nombre: ");
		nombreIngresado=nombreIngresado.toLowerCase();

		edadIngresada=parseInt(prompt("Ingrese su edad"));

		while (isNaN(edadIngresada) || edadIngresada <= 0)
		{
			alert("Edad no valida.");
			edadIngresada=parseInt(prompt("Ingrese su edad"));
		}

		if (edadIngresada >=12 || edadIngresada <=17)
		{
			vacunaIngresada = "americana";
		}

		else
		{
			vacunaIngresada=prompt("Ingrese su vacuna: ");
			vacunaIngresada=vacunaIngresada.toLowerCase();


			while(vacunaIngresada != "americana" && vacunaIngresada != "china" && vacunaIngresada != "rusa")
			{
				alert("Error.");
				vacunaIngresada=prompt("Reingrese su vacuna: ");
				vacunaIngresada=vacunaIngresada.toLowerCase();
			}
		}

		dosisIngresada = prompt("Ingrese cual es su dosis; P(primera) o S(segunda): ");
		dosisIngresada = dosisIngresada.toUpperCase();

		while(dosisIngresada != "S" && dosisIngresada != "P")
		{
			alert("Error.");
			dosisIngresada = prompt("Reingrese cual es su dosis; P(primera) o S(segunda): ");
			dosisIngresada = dosisIngresada.toUpperCase();
		}

		generoIngresado=prompt("Ingrese su genero con F para femenino y M para masculino: ");
		generoIngresado=generoIngresado.toUpperCase();

		while (generoIngresado != "F" && generoIngresado != "M")
		{
			alert("Error.");
			generoIngresado=prompt("Reingrese su genero con F para femenino y M para masculino: ");
			generoIngresado=generoIngresado.toUpperCase();

			if (generoIngresado == "M" && edadIngresada < masculinoJoven)
			{
				masculinoJoven = edadIngresada;
				nombreMasculino = nombreIngresado;
				vacunaMasculino = vacunaIngresada;

			}
		}

		if (vacunaIngresada == "china")
		{
			contadorEdad = contadorEdad + 1;
			acumuladorEdad = acumuladorEdadMasculino + edadIngresada;
			promedioChina = acumuladorEdadMasculino / contadorEdad;
		}

		if (vacunaIngresada == "americana") 
		{
			acumuladorEdad= acumuladorEdad + edadIngresada;
			if (edadIngresada < 18) 
			{
				acumuladorEdadMenor = acumuladorEdadMenor + edadIngresada;

			}
		}

		
		respuesta = prompt("¿Desea seguir ingresando personas? responda con si/no");
	}while(respuesta == "si")

	alert("El promedio de edad de los vacunados con la china es: " + promedioChina);
	alert("El nombre del masculino mas joven es " + nombreMasculino + " y la vacuna que tiene es " + vacunaMasculino);
	alert("El porcentaje de menores con americana es: " + acumuladorEdadMenor * 100/acumuladorEdad);


}
