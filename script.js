function generarLetrasAnimadas(contenedorId) {
  const contenedor = document.getElementById(contenedorId);
  const total = 50; // Puedes cambiar el número de textos

  for (let i = 0; i < total; i++) {
    const span = document.createElement('span');
    span.classList.add('texto-animado');
    span.classList.add(i % 2 === 0 ? 'subir' : 'bajar');
    span.textContent = 'Ferretería Central';

    // Posiciones aleatorias
    const top = Math.random() * 100;
    const left = Math.random() * 100;

    span.style.top = `${top}%`;
    span.style.left = `${left}%`;

    contenedor.appendChild(span);
  }
}

// Ejecutar al cargar
document.addEventListener('DOMContentLoaded', () => {
  generarLetrasAnimadas('letras-header');
  generarLetrasAnimadas('letras-footer');
});

function moverCarrusel(direccion) {
  const contenedor = document.getElementById("contenedorCategorias");
  const anchoElemento = contenedor.querySelector(".categoria").offsetWidth + 16; // incluye gap
  contenedor.scrollBy({
    left: direccion * anchoElemento * 2, // mueve 2 tarjetas por clic
    behavior: "smooth"
  });
}

  function filtrarHerramientas() {
    const entrada = document.getElementById("buscar").value.toLowerCase();
    const herramientas = document.querySelectorAll("#listaHerramientas .herramienta");

    let coincidencias = 0;

    herramientas.forEach(herramienta => {
      const texto = herramienta.textContent.toLowerCase();
      if (texto.includes(entrada)) {
        herramienta.classList.remove("ocultar");
        coincidencias++;
      } else {
        herramienta.classList.add("ocultar");
      }
    });
  }



