
// Declaramos una constante llamada VALUE1 y mediante la función PROMPT obtenemos
// el valor que introduce el usuario y lo almacenamos en dicha constante VALUE1
const value1 = Number(window.prompt('Introduce operando 1'))
// El resultado lo enviamos a la Consola de JavasCript del Navegador web
// Instrucciones para abrir la Consola:
// https://developers.google.com/web/tools/chrome-devtools/console/?hl=es
console.log('Operando 1 es:', value1)
window.document.getElementById("value1").value = value1

// Declaramos la segunda constante llamada VALUE2 y almacenamos el segundo operador
// que obtenemos del usuario también utilizando la función PROMPT
const value2 = Number(window.prompt('Introduce operando 2'))
// Mostramos el valor obtenido por consola
console.log('Operando 2 es:', value2)
window.document.getElementById("value2").value = value2

// Declaramos una Función que obtiene 2 parámetros y la almacenamos en una constante llamada SUMA
const multiplicacion = function (a, b) {
    // Almacenamos en una constante llamada RESULT la suma de los parámetros A y B
    const result = a * b
    // Enviamos el Valor contenido en RESULT a la Consola
    console.log("El resultado de la multiplicación es:", result)
    // Cuando se invoca esta función devuelve el valor almacenado en la constante RESULT
    return result
}

// En esta constante almacenamos el resultado que retorna la ejecución de la función SUMA
// Le pasamos como parámetros los valores VALUE1 y VALUE2 obtenidos del Usuario mediante PROMPT
const result = multiplicacion(value1, value2)

// Enviamos el resultado que retorna la función SUMA al elemento INPUT que se encuentra en pantalla
window.document.getElementById("result").value = result