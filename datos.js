const {estudiante, obtenerPromedio} = require('./calculos');
const fs = require('fs');


console.log("El promedio del estudiante es: " + obtenerPromedio(estudiante.notas.ingles, estudiante.notas.matematicas, estudiante.notas.programacion));

let {nombre, edad : anios, notas: {matematicas, ingles, programacion}} = estudiante;

console.log("El nombre del estudiante es: " + nombre);
console.log("El promedio del estudiante es: " + obtenerPromedio(matematicas, ingles, programacion));
console.log("La edad del estudiante es: " + anios);

let crearArchivo = (estudiante) => {
    texto = "El nombre del estudiante es: " + nombre + "\n" +
            "ha obtenido un promedio de: " + obtenerPromedio(matematicas, ingles, programacion);
    fs.writeFile("promedio.txt", texto, (err) =>{
        if(err) throw (err);
        console.log("Se ha credo el archivo");
    });
}

crearArchivo(estudiante);