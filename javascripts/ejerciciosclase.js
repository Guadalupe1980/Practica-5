/*
 * 1. Número positivo, negativo o cero
Pide un número mediante un prompt y muestra:
"Positivo"
"Negativo"
"Es cero"
Según corresponda
*/
/*
 let variable = Number(prompt("Ingrese un numero: "));

 if(variable > 0){
    alert("positivo");
 }else if(variable < 0) {
    alert("Negativo");
 }else {
    alert("Es cero");
 }
*/

 
/* 
* 2. Numero par o impar
Determina si un numero es par o impar usando %.
*/

/*
 let numero = Number(prompt("Ingrese un numero: "));
if(numero % 2  === 0){
    alert("Es par")
}else{
    alert("Es 6")
}
*/


/*
*  3. mayor de edad
Pide una edad y muestra
"mayor de edad"
"menor de edad" */

/*
let age = parseInt(prompt("Ingrese su edad: "));

if(age >= 18){
    alert("Eres mayor de edad");
}else{
    alert("Eres menor de edad");
}
*/

 
/* 
* 4. Comparar dos numeros
Pide dos numeros y muestra cual es mayor.
si son iguales, mostrar "Son iguales".-*/
 
/*
let num1 = Number(prompt("Ingrese un numero: "));
let num2 = Number(prompt("Ingrese el segundo numero: "));

if(num1 > num2){
    alert(`El numero ${num1} es mayor`)
}else if(num2 > num1){
    alert(`El numero ${num2} es mayor`)
}else{
    alert("Los numeros son iguales")
}
*/


/* 
* 5 Calculadora Basica
pide:
numero 1
numero 2
operacion (+, -, *, /)
Muestra el resultado*/
 
/*
let menu = Number(prompt(`Que operacion Realizara: 
    1. suma
    2. resta
    3. multiplicacion
    4. division`)); 

let num1 = Number(prompt("Valor 1"));
let num2 = Number(prompt("Valor 2"));

if(menu === 1){
    alert(num1 + num2);
}else if(menu === 2){
    alert(num1 - num2);
 }else if(menu === 3){
    alert(num1 * num2);
 }else if(menu === 4){
    alert(num1 / num2);
 }
*/


/*
* 6. Descuento en tienda
Si una compra supera 100 soles:
aplicar 10% de descuento
Si supera 200 soles:
aplicar 20%
Mostrar total a pagar.*/
 
/*
let monto = Number(prompt("Ingrese su monto: "));
let totalPagar = monto

if(monto > 200){
    totalPagar = monto * 0.8
}else if(monto > 100){
    totalPagar = monto * 0.9
}
 alert("Tu total a pagar es " + (totalPagar))
*/


/* 
* 7. Número dentro de rango
Verifica si un número está entre 10 y 50.
Usa &&.*/

/*
let numero = Number(prompt("Ingrese un numero: "))

if(numero >= 10 && numero <=50){
 alert(`El numero ${numero} esta en el rango entre 10 y 50 `)
}else{
    alert(`El numero ${numero} esta fuera del rango`)
}
*/

 