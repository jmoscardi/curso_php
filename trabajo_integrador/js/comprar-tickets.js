// Defino valor de ticket
var valorTicket = 200;

// Defino porcentajes de descuento según categoría
var descuentoEstudiante = 80;
var descuentoTrainee    = 50;
var descuentoJunior     = 15;

// Elementos en variables
var cantidadTickets = document.getElementById("cantidadTickets");
var categoria       = document.getElementById("categoriaSelect");

// Cálculo total a pagar
function total_a_pagar() {

    // Verifico si está ingresado al menos 1 ticket, sino que se detenga
    if ( (cantidadTickets.value == 0) || (isNaN(cantidadTickets.value)) ) {
        alert("Por favor, ingresá correctamente cantidad de tickets.");
        return
    }

    // Verifico que haya seleccionado una categoría
    if (categoria.value == "") {
        alert("Por favor, seleccioná una categoría.");
        return
    }

    // Multiplico cantidad de tickets por el valor
    var totalValorTickets = (cantidadTickets.value) * valorTicket;

    // Aplico descuentos según categoría
    if (categoria.value == 1) {
        totalValorTickets = totalValorTickets - (descuentoEstudiante / 100 * totalValorTickets);
    }
    if (categoria.value == 2) {
        totalValorTickets = totalValorTickets - (descuentoTrainee / 100 * totalValorTickets);
    }
    if (categoria.value == 3) {
        totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets);
    }

    // Inserto el valor en el HTML
    totalPago.innerHTML = totalValorTickets;
}

// Botón Resumen recibe un escuchador y la funcion del cálculo
btnResumen.addEventListener('click', total_a_pagar);

// Función para el botón Borrar para que borre el valor
function reset_total_a_pagar() {
    totalPago.innerHTML = "";
}
btnBorrar.addEventListener('click', reset_total_a_pagar);