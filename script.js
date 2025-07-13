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

  // ========= DESLIZAMIENTO EN MÓVIL (corrige saltos) =========
if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
  const contenedor = document.getElementById("contenedorCategorias");
  const tarjeta    = contenedor.querySelector(".categoria");
  const anchoElem  = tarjeta.offsetWidth + 16; // ‑ gap

  let isDown   = false;
  let startX   = 0;
  let scrollIni= 0;

  contenedor.addEventListener("touchstart", (e)=>{
    isDown    = true;
    startX    = e.touches[0].pageX;
    scrollIni = contenedor.scrollLeft;
  });

  contenedor.addEventListener("touchmove", (e)=>{
    if(!isDown) return;
    const x     = e.touches[0].pageX;
    const walk  = (x - startX) * 0.4;   // 0 .4 → más suave
    contenedor.scrollLeft = scrollIni - walk;
  });

  contenedor.addEventListener("touchend", snapAlMasCercano);
  contenedor.addEventListener("touchcancel", snapAlMasCercano);

  function snapAlMasCercano(){
    if(!isDown) return;
    isDown = false;

    // índice de tarjeta más cercana
    const indice = Math.round(contenedor.scrollLeft / anchoElem);
    const destino = indice * anchoElem;

    contenedor.scrollTo({ left: destino, behavior: "smooth" });
  }
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