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

  const contenedor = document.getElementById("contenedorCategorias");
  let isDown = false;
  let startX;
  let scrollLeft;

  // Para mouse
  contenedor.addEventListener("mousedown", (e) => {
    isDown = true;
    contenedor.classList.add("active");
    startX = e.pageX - contenedor.offsetLeft;
    scrollLeft = contenedor.scrollLeft;
  });

  contenedor.addEventListener("mouseleave", () => {
    isDown = false;
    contenedor.classList.remove("active");
  });

  contenedor.addEventListener("mouseup", () => {
    isDown = false;
    contenedor.classList.remove("active");
  });

  contenedor.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - contenedor.offsetLeft;
    const walk = (x - startX) * 1.5; // Ajusta la velocidad aquí
    contenedor.scrollLeft = scrollLeft - walk;
  });

  // Para touch
  contenedor.addEventListener("touchstart", (e) => {
    isDown = true;
    startX = e.touches[0].pageX - contenedor.offsetLeft;
    scrollLeft = contenedor.scrollLeft;
  });

  contenedor.addEventListener("touchend", () => {
    isDown = false;
  });

  contenedor.addEventListener("touchmove", (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - contenedor.offsetLeft;
    const walk = (x - startX) * 1.5;
    contenedor.scrollLeft = scrollLeft - walk;
  });




