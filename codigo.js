// Función para mostrar solo los compositores de la categoría seleccionada
function mostrarCompositores(categoria) {
    // Primero, ocultar todos los compositores
    const todosLosCompositores = document.querySelectorAll('.compositor');
    todosLosCompositores.forEach(function(compositor) {
        compositor.style.display = 'none';
    });

    // Mostrar solo los compositores de la categoría seleccionada
    const compositoresSeleccionados = document.querySelectorAll(`.compositor.${categoria}`);
    compositoresSeleccionados.forEach(function(compositor) {
        compositor.style.display = 'block';
    });
}

// Asignar los eventos de clic a los botones
document.getElementById('renacimiento').addEventListener('click', function() {
    mostrarCompositores('renacimiento');
});

document.getElementById('barroco').addEventListener('click', function() {
    mostrarCompositores('barroco');
});

document.getElementById('clasicismo').addEventListener('click', function() {
    mostrarCompositores('clasicismo');
});

function mostrarTodos() {
    // Mostrar todos los compositores
    const todosLosCompositores = document.querySelectorAll('.compositor');
    todosLosCompositores.forEach(function(compositor) {
        compositor.style.display = 'block';
    });
}

document.getElementById('todos').addEventListener('click', function() {
    mostrarTodos();  // Mostrar todos los compositores
});

//ocultar todos los compositores
document.querySelector("#estiloMusica").addEventListener("change", () => {
    const todosLosCompositores = document.querySelectorAll('.compositor');
    todosLosCompositores.forEach(function(compositor) {
        compositor.style.display = 'none';
    });

    //mostrar los compositores del estilo correspondiente
    let estiloMusica = document.querySelector('#estiloMusica').value;
    document.querySelectorAll("." + estiloMusica).forEach((compositor) => {
        compositor.style.display="Block";
    });

})

