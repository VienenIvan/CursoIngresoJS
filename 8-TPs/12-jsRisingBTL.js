/*
Rudiferia Iván DIV-E
TP 12

RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
*/

    var edadIngresada;
    var sexoIngresado;
    var estadoCivilIngresado;
    var sueldoIngresado;
    var legajoIngresado;
    var nacionalidadIngesada;

function ComenzarIngreso () 
{

    edadIngresada = parseInt(prompt("Ingrese su edad: "));

    while (isNaN(edadIngresada) || edadIngresada < 18 || edadIngresada > 90)
    {
        alert("¡Edad no permitida!");
        edadIngresada = parseInt(prompt("Ingrese su edad: "));
    }


    sexoIngresado = prompt("Ingrese su sexo, siedo \"F\" femenino y \"M\" masculino: ");
    sexoIngresado = sexoIngresado.toUpperCase();

    while (sexoIngresado != "M" && sexoIngresado != "F")
    {
        alert("¡Sexo erroneo!");
        sexoIngresado = prompt("Ingrese su sexo, siedo \"F\" femenino y \"M\" masculino: ");
        sexoIngresado = sexoIngresado.toUpperCase();
    }


    estadoCivilIngresado = parseInt(prompt("Ingrese su estado civil, siendo 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos: "));

    while (estadoCivilIngresado < 1 || estadoCivilIngresado > 4)
    {
        alert("¡Error!");
        estadoCivilIngresado = parseInt(prompt("Ingrese su estado civil, siendo 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos: "));
    }


    sueldoIngresado = prompt("Ingrese su sueldo bruto (no menor a $8000): ");

    while (isNaN(sueldoIngresado) || sueldoIngresado < 8000)
    {
        alert("Sueldo no valido");
        sueldoIngresado = prompt("Ingrese su sueldo bruto (no menor a $8000): ");
    }


    legajoIngresado = parseInt(prompt("Ingrese su legajo: "));

    while (isNaN(legajoIngresado) || legajoIngresado <1000 || legajoIngresado >9999)
    {
        alert("legajo incorrecto. deben ser 4 cifras, sin ceros a la izquierda.");
        legajoIngresado = parseInt(prompt("Ingrese su legajo: "));
    }


    nacionalidadIngesada = prompt("Ingrese su nacionalidad, siendo \"A\" para argentinos, \"E\" para extranjeros, \"N\" para nacionalizados: ");
    nacionalidadIngesada = nacionalidadIngesada.toUpperCase();

    while (nacionalidadIngesada != "A" && nacionalidadIngesada != "E" && nacionalidadIngesada != "N")
    {
        alert("Nacionalidad incorrecta, ingrese \"A\" para argentinos, \"E\" para extranjeros, \"N\" para nacionalizados.")
        nacionalidadIngesada = prompt("Ingrese su nacionalidad, siendo \"A\" para argentinos, \"E\" para extranjeros, \"N\" para nacionalizados: ");
        nacionalidadIngesada = nacionalidadIngesada.toUpperCase();
    }

    txtIdEdad.value = edadIngresada;
    txtIdSexo.value = sexoIngresado;
    txtIdEstadoCivil.value = estadoCivilIngresado;
    txtIdSueldo.value = sueldoIngresado;
    txtIdLegajo.value = legajoIngresado;
    txtIdNacionalidad.value = nacionalidadIngesada;

}
