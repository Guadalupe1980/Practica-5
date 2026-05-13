/*
EJERCICIO 1 – Calculadora de Promedio y Rendimiento

Pide al usuario cuatro notas (del 0 al 100).
Calcula el promedio y muestra un mensaje según el resultado:
- “Excelente” si el promedio es mayor o igual a 90
- “Bueno” si es mayor o igual a 75
- “Regular” si es mayor o igual a 60
- “Insuficiente” en caso contrario */

// let nota1 = Number(prompt("Ingrese la primera nota:"));
// let nota2 = Number(prompt("Ingrese la segunda nota:"));
// let nota3 = Number(prompt("Ingrese la tercera nota:"));
// let nota4 = Number(prompt("Ingrese la cuarta  nota:"));

// let promedio =(nota1 + nota2 + nota3 + nota4) /4;

// if(promedio >=90){
//     alert(`tu promedio es de ${promedio} tu resultado es excelente 👌` )
// }else if (promedio >= 75){
//     alert(`tu promedio es de ${promedio} tu resultado es Bueno 🙌`)
// }else if (promedio >= 60){
//     alert(`tu promedio es de ${promedio} tu resultado es Regular 👍`)
// }else if (promedio <60){
//      alert(`tu promedio es de ${promedio} tu resultado es Insuficiente 😒`)
// }else{
//     alert("Proporciona valores validos")
// }



/* 
EJERCICIO 2 – Calculadora de Tarifa de Transporte

El programa debe pedir al usuario:
- Su edad
- Si es estudiante (“sí” o “no”)
La distancia que recorrerá (en kilómetros)
Reglas del costo:
- Menores de 18 pagan 50% del precio base
- Estudiantes pagan 75% del precio base
- Mayores de 60 pagan 40% del precio base
Si el viaje es mayor a 30 km, se agrega un 10% adicional al total
*/

// let edad = Number(prompt("Ingrese su edad"));
// let estudiante = prompt("¿Eres estudiante? (si o no):").toLowerCase();
// let distancia = Number(prompt("Ingrese la distancia que recorre"));

// let precioBase = 120;
// let precioFinal = precioBase;

// if (edad < 18){
//     precioFinal = precioFinal * 0.5;
// }else if(estudiante === "si"){
//     precioFinal = precioFinal * 0.75;
// }else if(edad >= 60){
//     precioFinal = precioFinal * 0.4;
// }

// if(distancia > 30){
//    precioFinal =  precioFinal * 1.10;
// }

// alert(`El total a pagar por tu viaje es: ${precioFinal.toFixed(2)}`)


/* 
EJERCICIO 4 – Sistema de Descuentos en una Tienda

El usuario debe ingresar:
- El precio total de su compra
- Si tiene tarjeta de cliente frecuente (“sí” o “no”)

Reglas:
- Si el total es mayor a 500, aplica un 10% de descuento
- Si además tiene tarjeta, aplica un 5% adicional
- Si el total es menor o igual a 100, aplica un recargo del 5%
- El programa debe mostrar el precio final y un mensaje indicando qué descuento se aplicó.
*/

// let precioTotal = Number(prompt("Ingresa su compra total"));
// let tarjetaCliente = prompt("¿Tiene tarjeta de cliente frecuente? (si o no)").toLowerCase();

// let precioFinal = precioTotal;
// let mensajeAplicado = "No hay descuentos ni recargos.";

// if(precioTotal > 500){
//    precioFinal -= (precioTotal * 0.1);
//    mensajeAplicado = "Se aplicó un 10% de descuento.";

// }if(tarjetaCliente === "si"){
//     precioFinal -=  (precioFinal * 0.05);
//     mensajeAplicado = "Se aplicó un 10% de descuento + 5% adicional";
// }else if(precioTotal <= 100){
//     precioFinal += (precioTotal * 0.05);
//     mensajeAplicado = "Se aplicó un recargo del 5%";
// }

// alert(`${mensajeAplicado}\n el total a pagar es de $${precioFinal.toFixed(2)}`)


/* 
EJERCICIO 5 – Calculadora de Edad y Etapa de Vida
Pide al usuario:
- Su año de nacimiento
- El año actual
- Calcula su edad y muestra un mensaje según el rango:
- Menor de edad: menos de 18 años
- Adulto joven: entre 18 y 30 años
- Adulto: entre 31 y 59 años
- Adulto mayor: 60 años o más

BONUS:
Pregunta además si ya cumplió años este año (“sí” o “no”) y ajusta la edad si es necesario.*/

// let añoNacimiento = parseInt(prompt("Ingrese su año de Nacimiento"));
// let añoActual = parseInt(prompt("Ingrese el año Actual"));
// let añoCumplido = prompt("¿Cumplio años este año? (si o no)").toLowerCase();

// let edadActual = añoActual - añoNacimiento
// let mensajeRango = ""

// if(añoCumplido === "no"){
//     edadActual = edadActual - 1;
// }

// if(edadActual < 18){
//     mensajeRango = "Menor de edad";
// }else if(edadActual <= 30){
//     mensajeRango = "Adulto Joven";
// }else if(edadActual <= 50){
//     mensajeRango = "Adulto";
// }else{
//     mensajeRango = "Adulto Mayor";
// }

// alert(`Tu edad es ${edadActual} \n y tu rango es de ${mensajeRango}`);