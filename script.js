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

  // Solo aplicar si es pantalla táctil
  const esMovil = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (esMovil) {
    let isDragging = false;
    let startX;
    let scrollLeft;

    contenedor.addEventListener("touchstart", (e) => {
      isDragging = true;
      startX = e.touches[0].pageX - contenedor.offsetLeft;
      scrollLeft = contenedor.scrollLeft;
    });

    contenedor.addEventListener("touchend", () => {
      isDragging = false;
    });

    contenedor.addEventListener("touchmove", (e) => {
      if (!isDragging) return;
      const x = e.touches[0].pageX - contenedor.offsetLeft;
      const walk = (x - startX) * 1.5;
      contenedor.scrollLeft = scrollLeft - walk;
    });
  }

function filtrarHerramientasGlobal(){
  const entrada   = document.getElementById('busquedaGlobal').value.toLowerCase();
  const tarjetas  = document.querySelectorAll('.grid-productos .producto');

  let visibles = 0;
  tarjetas.forEach(card=>{
    const texto = card.textContent.toLowerCase();
    if(texto.includes(entrada)){
      card.style.display='block';
      visibles++;
    }else{
      card.style.display='none';
    }
  });

  /* centra si queda solo una tarjeta visible */
  const grid = document.querySelector('.grid-productos');
  grid.style.justifyContent = (visibles===1)?'center':'';
}




