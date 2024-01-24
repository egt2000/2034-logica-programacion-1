//Variables
let numeroSecreto = 5;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez';

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor:"); 

    console.log(numeroUsuario);
    /*
    Este codigo realiza
    la comparacion
    */
    if ( numeroUsuario == numeroSecreto) {
        // acertamos, fue verdadera la condicion
        alert(`Acertaste el numero es : ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`);
        } 
        else 
        {
            if (numeroUsuario > numeroSecreto) 
            {
                alert('El numero secreto es menor');
            } 
            else 
            {
                alert('El numero secreto es mayor');
            }
            //incrementamos el contador cuando no acierta
            intentos = intentos + 1;
            palabraVeces = 'veces';
        }
}

/*
alert('Bienvenido al juego del número secreto');

// Agrega un console.log para verificar el valor de "intento" después de la entrada del usuario
let intento = prompt('Elige un número entre 1 y 10');
console.log('Valor de intento:', intento);

let numeroSecreto = 4;

// Agrega un console.log para verificar la comparación entre "intento" y "numeroSecreto"
console.log('Resultado de la comparación:', intento == numeroSecreto);

if (intento == numeroSecreto) {
    alert('Adivinaste');
} else {
    // Agrega un console.log para verificar el valor de "numeroSecreto" cuando el jugador se equivoca
    console.log('Valor del número secreto:', numeroSecreto);
    alert('El número secreto era ' + numeroSecreto);
}
*/