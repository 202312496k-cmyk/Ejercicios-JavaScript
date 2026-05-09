let precio = 100;
let descuento = 20;

let montoDescuento = precio * (descuento / 100);
let precioFinal = precio - montoDescuento;

document.getElementById("resultado").innerHTML =
"Precio final: S/ " + precioFinal;