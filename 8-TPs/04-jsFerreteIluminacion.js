/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos e informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el mpuesto que se pagó. 
*/

    var cantidadLamparas;
    var marcaIngresada;
    var precioSinDescuento;
    var ingresosBrutos;
    var precioConIngresosBrutos;

function CalcularPrecio () 
{
 	cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas = parseInt(cantidadLamparas);

    marcaIngresada = document.getElementById("Marca").value;

    precioSinDescuento = cantidadLamparas * 35;

    ingresosBrutos = precioSinDescuento * 0.10;

    precioConIngresosBrutos = precioSinDescuento + ingresosBrutos;

    if (cantidadLamparas >= 6) 
    {
        document.getElementById("txtIdprecioDescuento").value = precioSinDescuento * 0.5;
    }

    else if ((cantidadLamparas == 5) && (marcaIngresada == "ArgentinaLuz"))
    {

        document.getElementById("txtIdprecioDescuento").value = precioSinDescuento * 0.6;
    }

    else if ((cantidadLamparas == 5) && (marcaIngresada != "ArgentinaLuz")) 
    {
        document.getElementById("txtIdprecioDescuento").value = precioSinDescuento * 0.7;
    }

    else if ((cantidadLamparas == 4) && (marcaIngresada == "ArgentinaLuz" || "FelipeLamparas"))
    {
        document.getElementById("txtIdprecioDescuento").value = precioSinDescuento * 0.75;
    }

    else if ((cantidadLamparas == 4) && (marcaIngresada !== "ArgentinaLuz" || "FelipeLamparas")) 
    {  
        document.getElementById("txtIdprecioDescuento").value = precioSinDescuento * 0.80;
    }

    else if ((cantidadLamparas == 3) && (marcaIngresada == "ArgentinaLuz"))
    {
        document.getElementById("txtIdprecioDescuento").value = precioSinDescuento * 0.85;
    }

    else if ((cantidadLamparas == 3) && (marcaIngresada == "FelipeLamparas")) 
    {
        document.getElementById("txtIdprecioDescuento").value = precioSinDescuento * 0.90;
    } 
         
    else if ((cantidadLamparas == 4) && (marcaIngresada !== "ArgentinaLuz" || "FelipeLamparas"))
    {
        document.getElementById("txtIdprecioDescuento").value = precioSinDescuento * 0.95;
    }

    if (precioSinDescuento >= 120)
    {
        alert("Usted pago " + ingresosBrutos + " de IIBB.");
    }

}
