//Desafíos:
/*
1- Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'.
   Muestra cada número.
*/
let contador = 1;
while(contador <= 10) {
    console.log(contador);
    contador = contador + 1; 
}
/*
2- Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'.
   Muestra cada número.
*/
//let
contador = 10;
while(contador >= 0) {
    console.log(contador);
    contador = contador - 1; 
}

/*
3- Crea un programa de cuenta progresiva.
   Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
*/
//let 
numeroMaximo = prompt("Ingresa un número para la cuenta progresiva:");
//let 
contador = 0;
while (contador <= numeroMaximo) {
    console.log(contador);
    contador++;
}

/*
4- Crea un programa de cuenta progresiva. 
Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
*/
// cuenta regresiva
let numeroMaximo = prompt("Ingresa un número para la cuenta regresiva:");
while (numeroMaximo >= 0) {
    console.log(numeroMaximo);
    numeroMaximo--;
}