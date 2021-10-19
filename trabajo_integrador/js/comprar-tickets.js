// Defino valor de ticket
valorTicket = 200;

// Defino porcentajes de descuento según categoría
var descuentoEstudiante = 80;
var descuentoTrainee    = 50;
var descuentoJunior     = 15;

// Elementos en variables
var cantidadTickets = document.getElementById("cantidadTickets");
var categoria       = document.getElementById("categoriaSelect");

// Cálculo total a pagar
function total_a_pagar() {
    // Multiplico cantidad de tickets por el valor
    let totalPesosTickets = (cantidadTickets.value) * valorTicket;

    // Aplico descuentos según categoría
    if (categoria.value == 1){
        totalPesosTickets = totalPesosTickets - (descuentoEstudiante / 100 * totalPesosTickets);
    }
    if (categoria.value == 2){
        totalPesosTickets = totalPesosTickets - (descuentoTrainee / 100 * totalPesosTickets);
    }
    if (categoria.value == 3){
        totalPesosTickets = totalPesosTickets - (descuentoJunior / 100 * totalPesosTickets);
    }

    // Inserto el valor en el HTML
    totalPago.innerHTML = totalPesosTickets;
}

// Botón Resumen recibe un escuchador y la funcion del cálculo
btnResumen.addEventListener('click', total_a_pagar);

// Función para el botón Borrar para que borre el valor
function resetTotalaPagar() {
    totalPago.innerHTML = "";
}
btnBorrar.addEventListener('click', resetTotalaPagar);