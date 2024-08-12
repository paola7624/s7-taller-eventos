document.getElementById('mi-div').addEventListener ('click', function() {
        alert('Hola! Soy un div');
    }
);

document.getElementById('mi-boton').addEventListener ('click', function(evento) {
    evento.stopPropagation();;
}
);