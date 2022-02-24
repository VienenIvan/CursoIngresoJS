/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos e informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el mpuesto que se pagó. 
*/

//Rudiferia Iván - DIV E
// TP 4 switch

/*    
function CalcularPrecio () 
{
    var cantidadLamparitas;
    var precioDescontado;
    var marcaLamparitas;
    var precioLamparas;
    var precioImpuestos;
    var iibb;
    var descuento;
    var aDescontar;

    cantidadLamparitas = parseInt(document.getElementById("txtIdCantidad").value);
    marcaLamparitas = document.getElementById("Marca").value; 

    if (cantidadLamparitas >= 6) 
    {
        aDescontar = 50;
    }
    else 
    {
            if (cantidadLamparitas == 5)
            {
               if (marcaLamparitas == "ArgentinaLuz") 
               {
                    aDescontar = 40;
               }
               else  
               {
                    aDescontar = 30;
               }  
            }

            else 
            {
                if (cantidadLamparitas == 4)
                {
                    if (marcaLamparitas == "ArgentinaLuz" || marcaLamparitas == "FelipeLamparas") 
                    {
                        aDescontar = 25;
                    }

                    else 
                    {
                        aDescontar = 20;
                    }
                }

                else
                {
                    if (cantidadLamparitas == 3) 
                    {
                        if (marcaLamparitas == "ArgentinaLuz") 
                        {
                            aDescontar = 15;
                        }
                        else 
                        {
                            if (marcaLamparitas == "FelipeLamparas") 
                            {
                                aDescontar = 10;
                            }
                            else 
                            {
                                aDescontar = 5;
                            }   
                        }
                                      
                    }

                    else
                    {
                        aDescontar = 0;
                    }            
                }
            } 
    }  

    precioLamparas = 35 * cantidadLamparitas;
    descuento = precioLamparas * aDescontar *1/100;
    precioDescontado = precioLamparas - descuento;
    document.getElementById("txtIdprecioDescuento").value = precioDescontado;

    if (precioDescontado > 120) 
    {
        iibb = precioDescontado * 10*(1/100);
        precioImpuestos = precioDescontado + iibb;

        document.getElementById("txtIdprecioDescuento").value = precioDescontado + iibb;

        alert("Usted pagó $" + iibb + " de IIBB");
    }
}
*/

/*
    var cantidadLamparas;
    var marcaIngresada;
    var precioSinDescuento;
    var precioConDescuento;
    var ingresosBrutos;
    var precioConIngresosBrutos;
    var aDescontar;
    var operacionDescuento;


function CalcularPrecio () 
{

    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas = parseInt(cantidadLamparas);

    marcaIngresada = document.getElementById("Marca").value;

    precioSinDescuento = cantidadLamparas * 35;


    if (cantidadLamparas >= 6) 
    {
        aDescontar = 50;
    }

    else
    {
        switch (cantidadLamparas)
        {
            case 5: 
                if (marcaIngresada == "ArgentinaLuz") 
                {
                    aDescontar = 40;
                }
                else
                {
                    aDescontar = 30;
                }
                break;

            case 4:
                if (marcaIngresada == "ArgentinaLuz" || "FelipeLamparas") 
                {
                    aDescontar = 25;
                }
                else
                {
                    aDescontar = 20;
                }
                break;

            case 3:
                if (marcaIngresada == "ArgentinaLuz") 
                {
                    aDescontar = 15;
                }
                else if (marcaIngresada == "FelipeLamparas") 
                {
                    aDescontar = 10;
                }
                else
                {
                    aDescontar = 5;
                }
                break; 

            default:
                aDescontar = 0;
        }   
    }

    operacionDescuento =  aDescontar /100;

    precioConDescuento = precioSinDescuento - (precioSinDescuento * operacionDescuento);


    if (precioConDescuento >= 120)
    {
        ingresosBrutos = precioConDescuento * 0.10;

        precioConIngresosBrutos = precioConDescuento + ingresosBrutos;

        alert("Usted pago $" + ingresosBrutos + " de IIBB.");

        document.getElementById("txtIdprecioDescuento").value = precioConIngresosBrutos - operacionDescuento;
    }
    else
    {
        document.getElementById("txtIdprecioDescuento").value = precioConDescuento; 
    }

}


*/


    var cantidadLamparas;
    var marcaIngresada;
    var precioSinDescuento;
    var precioConDescuento;
    var ingresosBrutos;
    var precioConIngresosBrutos;
    var aDescontar;
    var operacionDescuento;


function CalcularPrecio () 
{

    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas = parseInt(cantidadLamparas);

    marcaIngresada = document.getElementById("Marca").value;

    precioSinDescuento = cantidadLamparas * 35;

    switch (cantidadLamparas)
    {
        case 6:
            aDescontar = 50;
        case 5: 
            switch (marcaIngresada)
            {    
                case "ArgentinaLuz":
                    aDescontar = 40;
                    break;
                default:
                    aDescontar = 30;
                break;
            }

        case 4:
            switch (marcaIngresada)
            {    
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    aDescontar = 25;
                    break; 
                default:
                    aDescontar = 20;
                break;
            }

        case 3:
            switch (marcaIngresada)
            {   
                case "ArgentinaLuz":
                    aDescontar = 15;
                    break;
                case "FelipeLamparas":
                    aDescontar = 10;
                    break;
                default:
                    aDescontar = 5;
                break;
            }
            break;

        case 2:
        case 1:
        case 0:
            aDescontar = 0;
            break;

        default:
            aDescontar = 50;
    }

    operacionDescuento =  aDescontar /100;

    precioConDescuento = precioSinDescuento - (precioSinDescuento * operacionDescuento);
 
    if (precioConDescuento >= 120)
    {
        ingresosBrutos = precioConDescuento * 0.10;

        precioConIngresosBrutos = precioConDescuento + ingresosBrutos;

        alert("Usted pago $" + ingresosBrutos + " de IIBB.");

        document.getElementById("txtIdprecioDescuento").value = precioConIngresosBrutos - operacionDescuento;
    }
    else
    {
        document.getElementById("txtIdprecioDescuento").value = precioConDescuento; 
    }

}

