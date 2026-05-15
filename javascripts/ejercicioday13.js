/* 
* Ejercicio con IF */

// let UserRole ="admin"
// let UserName = "guadalupe"

// if (UserRole === "admin"){
//     alert("Bienvenido admin")
//     if(UserName === "guadalupe"){
//         alert("estas despedido")
//     }
// }else {
//     alert("Bienvenido colaborador")
// }

/* 
* Ejercicio con Swith-case */
// switch(UserRole){
//     case "admin":
//     alert("Bienvenido admin")
//         switch (userName){
//             case "guadalupe":
//             alert("Estas despedido")
//             break;
//         }
//         break;
//         default:
//             alert("Bienvenido colaborador")
//             break;
// }

/* 
* Ejercicio  */

// let password = "1234"
// let user = "Guadalupe"

// let studentName = prompt("Ingrese su nombre");
// let studentPassword = prompt("Ingrese su contraseña");
// let studentAge = parseInt(prompt("Ingrese su edad"));

// if(studentName === user && studentPassword === password){
//     if(studentAge >= 18){
//         alert("Bienvenido al sistema")
//     }else{
//         alert("Acceso restringido para menores")
//         alert(`No pudes ingresar por que tienes ${studentAge}`)
//     }
// }else {
//      alert("Credenciales Incorrectas")
// }


/* 
* 2. Sistema de descuentos en una tienda
Una tienda ofrece descuentos dependiendo del monto de compra y si el cliente tiene membresía.
Reglas:
- Si la compra es mayor a 100:
obtiene 10% de descuento.
- Pero si además tiene membresía premium:
obtiene 20% de descuento en vez de solo 10%.
- Si la compra supera 300:
y tiene membresía premium:
obtiene 30%.
- Debe mostrar:
subtotal
descuento aplicado
total final*/
 
// let monto = parseFloat(prompt("Ingrese su monto de compra: "));
// let membresia = prompt("¿tiene membresia Premium? (si o no)").toLowerCase();
// let total = monto;

// if(monto >100){
//     if(membresia === "si"){
//         if(monto >= 300){
//             total = monto * 0.7
//         }else{
//             total = monto * 0.8
//         }
//     }else{
//         total = monto * 0.9
//     }
// }
// alert(`
//     subtotal: ${monto}
//     descuento: ${monto - total}
//     Total: ${total}`)

/* 
* segunda opcion del ejercicio de descuentos en una tienda*/
// if(subtotal > 300 && membresia === "si"){
//     porcentajeDescuento = 0.30;
// }else if(subtotal > 100){
//     if(membresia === "si")
//         porcentajeDescuento = 0.20;
// }else {
//     porcentajeDescuento = 0.10;
// }

// let descuentoAplicado = subtotal * porcentajeDescuento;
// let totalFinal = subtotal - descuentoAplicado;

// alert(
//     `Resumen de compra:\n` +
//     `----------------------------\n` +
//     `Subtotal: $${subtotal.toFixed(2)}\n` +
//     `Descuento aplicado: $${descuentoAplicado.toFixed(2)} (${porcentajeDescuento * 100}%)\n` +
//     `Total final: $${totalFinal.toFixed(2)}`
// );





