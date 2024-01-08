// Solicitar el nombre de usuario del alumno.

let nombreAlumno= prompt ("Ingrese el nombre del alumno")

// Solicitar el nombre de la materia.

let materia= prompt ("Ingrese el nombre de la materia")

// Solicitar las calificaciones.

let nota1= parseInt(prompt("Ingrese la primera nota (de 0 a 10)"))
let nota2= parseInt(prompt("Ingrese la primera nota (de 0 a 10)"))
let nota3= parseInt(prompt("Ingrese la primera nota (de 0 a 10)"))

// Validar

if (isNaN(nota1)|| isNaN(nota2) || isNaN(nota3) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10 ) {
    console.log("Porfavor, ingrese una nota valida dentro del rango de 0 a 10.");
} else {     
    console.log ("Nota1..." + nota1)
    console.log ("Nota2..." + nota2)
    console.log ("Nota3..." + nota3)
    let promedio= (nota1+nota2+nota3) / 3
    console.log ("Promedio..." + promedio)
   if (promedio>=7){
    console.log(` ${nombreAlumno} , ¡felicidades! Has aprobado con un promedio de  ${promedio}`)
    alert(` ${nombreAlumno}, "gracias por tu esfuerzo.  El promedio obtenido es " ${promedio} `);
   } else {
    console.log (` ${nombreAlumno}, "gracias por tu esfuerzo.  El promedio obtenido es " ${promedio} `)
    alert(` ${nombreAlumno}, "gracias por tu esfuerzo.  El promedio obtenido es " ${promedio} `);
   } 
    
   
}
{``}
