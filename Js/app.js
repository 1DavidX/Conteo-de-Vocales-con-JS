// Recibir frase del usuario
let frase = prompt("Ingresa una frase:");

// Inicializar variables
let vocales = ["a", "e", "i", "o", "u"];
let arregloVocales = [];
let contadorVocales = 0;

// Contar vocales y almacenarlas en el arreglo
for (let letra of frase.toLowerCase()) {
    if (vocales.includes(letra)) {
        arregloVocales.push(letra);
        contadorVocales++;
    }
}

// Mostrar resultados
console.log("Cantidad de vocales encontradas:", contadorVocales);
console.log("Vocales específicas encontradas:", arregloVocales);
