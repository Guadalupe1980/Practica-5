/*
! Se utilizo while, swith-case, if-else if
* CUENTA BANCARIA
 */

let saldoActual = 500; //Tenemos un activo en la cuenta
let historial =""; // Registra la consulta del saldo
let activa = true; //crea el bucle del menu

while(activa){
   let menu = `--  BANCO JL --
    1. Ingresar dinero
    2. Retirar dinero
    3. Consultar el saldo
    4. Historial de Transacciones
    5. Finalizar accion `;

let opcion = Number(prompt(menu))

switch (opcion) {
    case 1:
        let ingresar = Number(prompt("Cuanto deseas ingresar: "));
            if(ingresar > 0){
                saldoActual = ingresar + saldoActual;
                historial = historial + `Realizaste un deposito de: ${ingresar}\n`  
                alert(`Deposito Exitoso\n Ingresaste: ${ingresar}\n Tu saldo actual es de ${saldoActual}`);
            }
            break;
    case 2:
        let retirar = Number(prompt("Cuando deseas retirar: "))
            if(retirar > 0 && retirar <= saldoActual ){
                saldoActual = saldoActual - retirar;
                historial = historial + `Realizaste un retiro de: ${retirar}\n`
                alert(`Retiraste ${retirar}\n Tu saldo actual es de ${saldoActual}`)
            }else if(retirar > saldoActual){
                alert("Tu saldo es insuficiente")
        }
            break;
    case 3:
        alert(`Tu saldo actual es de ${saldoActual}`)
            break;
    case 4:
        if(historial === ""){
            alert("Tu historial no tiene transacciones")
        }else {
            alert(`TUS TRANSACCIONES\n ${historial}\n Tu saldo restante: ${saldoActual}`) 
        }
            break;
    case 5:
        alert(`Sesion Finalizada\n Gracias por su preferencia, vuelva pronto.`)
        activa = false;
            break;
    }
}

