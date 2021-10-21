// Ejercicio 1
// Mostrar por consola, tu nombre, apellido, comisión y hobbies
function ejercicio1() {
    console.log("Nombre: Jorge");
    console.log("Apellido: Moscardi");
    console.log("Comisión: 1115");
    console.log("Hobbies: Andar en bicicleta, tocar el piano.");
}

// Ejercicio 2
// Escribe un programa que le pida al usuario ingresar una frase y la imprima en la consola.
function ejercicio2() {
    let fraseIngresada = prompt("Ingresá una frase:");
    console.log(fraseIngresada);
}

// Ejercicio 3
// Escribe un programa que le pregunte al usuario su nombre e imprima "Hola " seguido del nombre y un signo de exclamación.
function ejercicio3() {
    let nombreIngresado = prompt("Ingresá tu nombre:");
    console.log("Hola " + nombreIngresado + "!");
}

// Ejercicio 4
// Escribe un programa que le pida al usuario su nombre y apellido y lo imprima por consola
function ejercicio4() {
    let nombreCompletoIngresado = prompt("Ingresá tu nombre y apellido:");
    console.log(nombreCompletoIngresado);
}

// Ejercicio 5
// Escribe un programa que le pida al usuario su año de nacimiento e imprima su edad actual en la consola con la frase "Tienes X años".
function ejercicio5() {
    let anoActual = (new Date).getFullYear();
    let anoIngresado = prompt("Ingresá tu año de nacimiento:");
    let edad = anoActual - anoIngresado;

    if (isNaN(anoIngresado)) {
        console.log("No ingresaste un año. Escribiste '" + anoIngresado + "'.");
    } else {
        console.log("Tenés " + edad + " años.");
    }
}

// Ejercicio 6
// El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.
// El BMI se calcula con la siguiente formula: peso / altura^2. Escribe un programa que le pida al usuario su peso y su altura para calcular su BMI e imprima la frase "Tu BMI es X".
function ejercicio6() {
    let peso = prompt("Indique su peso (en kg):");
    let altura = prompt("Indique su altura (en centímetros):");

    let alturaEnMetros = altura / 100;
    let bmi = peso / (alturaEnMetros ** 2); // (Exponenciación: a ** 2)

    // El método toFixed(2) convierte un número en string, redondeando el número para dejarlo con 2 decimales:
    console.log("TU BMI es " + bmi.toFixed(2));
}

// Ejercicio 7
// Declarar una variable de nombre cantidadDeVentanas y asignarle la cantidad de ventanas que hay en tu casa. Mostrar el valor de la variable por la consola.
function ejercicio7() {
    let cantidadDeVentanas = 6;
    console.log("Cantidad de ventanas: " + cantidadDeVentanas);
}

// Ejercicio 8
// Declarar una variable de nombre soyHumano y asignarle el valor true (verdadero). Mostrar el valor de la variable por la consola.
function ejercicio8() {
    let soyHumano = true;
    console.log("Eres humano: " + soyHumano);
}

// Ejercicio 9
// Declarar una variable de nombre miGustoDePizza y asignarle la variedad de pizza que más te guste usando un String (cadena de caracteres). Mostrar el valor de la variable por la consola.
function ejercicio9() {
    let miGustoDePizza = "Margarita";
    console.log("Gusto favorito de pizza: " + miGustoDePizza + ".");
}

// Ejercicio 10
// Mostrar por la consola los siguientes valores: false, 'Hola', 0 y 'Minions' usando la misma variable.
function ejercicio10() {
    let variableValores = [false, "Hola", 0, "Minions"];
    console.log(variableValores[0]);
    console.log(variableValores[1]);
    console.log(variableValores[2]);
    console.log(variableValores[3]);
}

// Ejercicio 11
// Crear un programa que dado la base y la altura de un triangulo calcule la superficie y el perímetro.
function ejercicio11() {
    let baseTriangulo;
    let alturaTriangulo;
    let superficie;
    let hipotenusa;
    let perimetro;

    baseTriangulo = prompt("Ingresá la base del triángulo (en cm.):");
    alturaTriangulo = prompt("Ingresá la altura del triángulo (en cm.):");

    baseTriangulo = parseInt(baseTriangulo);
    alturaTriangulo = parseInt(alturaTriangulo);

    superficie = (baseTriangulo * alturaTriangulo) / 2;
    hipotenusa = Math.sqrt( (alturaTriangulo ** 2) + (baseTriangulo ** 2) );
    perimetro = hipotenusa + alturaTriangulo + baseTriangulo;

    console.log("Superficie: " + superficie + " cm².");
    console.log("Perímetro: " + perimetro.toFixed(2) + " cm. Suponiendo que estamos hablando de un triángulo rectángulo :)");
}

// Ejercicio 12
// Crear un programa que, al pasar los datos del peso de una persona en libras, haga la conversión a kilogramos
function ejercicio12() {
    const libraAkilos = 0.453592;
    let suPeso = prompt("Cuál es tu peso en libras?")
    let conversionKg = suPeso * libraAkilos;
    console.log("Tu peso en kg. es " + conversionKg.toFixed(2));
}

// Ejercicio 13
// Crear un programa que al ingresar el sueldo de un trabajador, aplique el 15% de aumento y lo muestre en la consola
function ejercicio13() {
    let suSueldo = prompt("Ingrese su sueldo:");
    let aumentoSueldo = suSueldo * 1.15;
    console.log("El sueldo con el 15% de aumento es de $" + aumentoSueldo.toFixed(2));
}

// Ejercicio 14
// Crear un programa que al ingresar una nota de un alumno, muestre con un alert() si el alumno esta “aprobado” (se aprueba con una nota mayor a 7) y “reprobado” en caso contrario
function ejercicio14() {
    let nota = prompt("Ingrese nota del alumno:");
    if (nota > 7 ) {
        alert("Aprobado");
    } else {
        alert("Reprobado");
    }
}

// Ejercicio 15
// Crear un programa tal que dado como datos la categoría y el sueldo de un trabajador, calcule el aumento correspondiente teniendo en cuenta la siguiente tabla. Mostrar con un Alert() la categoría y el nuevo sueldo
/*
Categoría 1 10%
Categoría 2 20% 
Categoría 3 30%
*/

function ejercicio15() {
    // Array con los datos de las categorias
    const numeroCategoria = [10,20,30];

    // Preguntar por el sueldo
    let sueldo = parseFloat(prompt("Ingrese sueldo:"));

    if ( (!isNaN(sueldo)) && (sueldo > 0) ) {
        // Si ingresó un sueldo válido que pregunte por la categoría
        let categoria = parseInt(prompt("Ingrese categoría (1 a 3):"));

        if ( (!isNaN(categoria)) && (categoria > 0) && (categoria < 4) ) {
            // Si ingresó categoría válida que continúe con el cálculo
            let aumentoSueldo = sueldo + ((sueldo * numeroCategoria[categoria - 1]) / 100);
            alert("El trabajador categoría " + categoria + " tendrá un aumento del " + numeroCategoria[categoria - 1] + "%,  siendo de $" + aumentoSueldo + ".");
        } else {
            alert("Por favor, ingrese la categoría correctamente.");
        }
    } else {
        alert("Por favor, ingrese sueldo correctamente.");
    }
}

// Ejercicio 16
// Crear un programa tal que dado como datos la matrícula y 5 calificaciones de un alumno; imprima la matricula, el promedio y la palabra “aprobado” si el alumno tiene un promedio mayor o igual que 7, y la palabra “no aprobado” en caso contrario

function ejercicio16() {
    // Declaro variables y su tipo
    const cantidadCalificaciones = 5;
    var sumaTotalCalificaciones = 0;
    var promedio = 0;
    var estadoCalificacion = ""; 

    let matricula = prompt("Ingrese la matrícula");

    for (var i = 1; i <= cantidadCalificaciones; i++) {
        let calificacion = parseInt(prompt("Ingrese calificación " + i + " de " + cantidadCalificaciones));
        sumaTotalCalificaciones = sumaTotalCalificaciones + calificacion;
    };

    promedio = sumaTotalCalificaciones / cantidadCalificaciones;

    if (promedio >= 7) {
        estadoCalificacion = "Ha aprobado."
    } else {
        estadoCalificacion = "No ha aprobado."
    };

    alert("El alumno con matrícula '" + matricula + "' finalizó con un promedio de " + promedio + ". " + estadoCalificacion);
}

// Ejercicio 17
// Dado 3 números enteros, determinar cual de ellos es el mayor, tenga en cuenta que los números pueden ser iguales.

function ejercicio17() {
    var numeroFinal = 0;

    for (var i = 1; i <= 3; i++) {
        let numeroIngresado = parseInt(prompt("Ingrese número " + i));
        // Si el número que va ingresando es mayor a numeroFinal (que empieza en 0), que éste tome su valor:
        if (numeroIngresado > numeroFinal) {
            numeroFinal = numeroIngresado;
        } 
    };

    alert("El mayor de los números ingresados es " + numeroFinal);
}