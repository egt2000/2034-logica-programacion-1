//Variables
let numeroSecreto = Math.floor(Math.random()*10)+1;
//console.log(numeroSecreto);
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 3;

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt("Me indicas un numero entre 1 y 10 por favor:")); 

    console.log(typeof(numeroUsuario));
    /*
    Este codigo realiza
    la comparacion
    */
    if ( numeroUsuario == numeroSecreto) {
        // acertamos, fue verdadera la condicion
        alert(`Acertaste el numero es : ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
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
            //intentos = intentos + 1;
            intentos++;
            //palabraVeces = 'veces';
            if (intentos > 3) {
                alert(`llegaste al numero maximo de ${maximosIntentos} intentos`);
                break;
            }
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