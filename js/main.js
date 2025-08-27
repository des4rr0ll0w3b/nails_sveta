// IMPORTS
import { rotulos, imagenes } from './datosGaleria.js';

// SESIÓN NOSOTROS (ventana nueva)
function abrirNosotrosEnVentana() {
  const div = document.getElementById("nosotros");
  if (!div) {
    alert("No se encontró la sección 'nosotros'");
    return;
  }
  const nuevaVentana = window.open("", "_blank");
  nuevaVentana.document.write(`
    <html>
      <head><title>Nosotros</title><link rel="stylesheet" href="css/styles.css"></head>
      <body>${div.outerHTML}</body>
    </html>
  `);
}

// GALERÍA DE IMÁGENES
function getSlidesPersonalizados() {
  return imagenes.map((img, i) => ({
    titulo: rotulos[i * 2] || `Título ${i+1}`,
    subtitulo: rotulos[i * 2 + 1] || `Subtítulo ${i+1}`,
    imagenes: [img]  // cada slide tendrá solo 1 imagen
  }));
}

function crearSlide(titulo, subtitulo, imagenesSlide) {
  const slide = document.createElement("div");
  slide.className = "slide";
  slide.innerHTML = `
    <div class="slide-content">
      <!-- fondo detrás de la imagen -->
      <div class="background-image" style="background-image: url('${imagenesSlide[0]}');"></div>

      <!-- imagen principal -->
      <img src="${imagenesSlide[0]}" alt="${titulo}" />

      <div class="rotulo-container">
        <h2 class="rotulo-titulo">${titulo}</h2>
        <p class="rotulo-subtitulo">${subtitulo}</p>
      </div>
    </div>
  `;
  return slide;
}


function initGaleria() {
  const galeria = document.getElementById("galeria");
  if (!galeria) return;

  const slidesData = getSlidesPersonalizados();
  slidesData.forEach(({ titulo, subtitulo, imagenes }) => {
    const slide = crearSlide(titulo, subtitulo, imagenes);
    galeria.appendChild(slide);
  });

  let currentIndex = 0;
  const slides = document.querySelectorAll(".slide");

  slides.forEach((slide, i) => {
    if (i === 0) slide.classList.add("active");
  });

  setInterval(() => {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");
  }, 3000);
}
document.addEventListener("DOMContentLoaded", initGaleria);

// TRADUCCIÓN E IDIOMA

async function loadLanguage(lang) {
  try {
    const response = await fetch(`/locales/${lang}.json`);
    const traducciones = await response.json();
    console.log("traducciones cargadas:", traducciones);

    window.traducciones = traducciones;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (traducciones[key]) {
        el.textContent = traducciones[key];
      }
    });

    if (typeof initServicios === "function") {
      initServicios(lang); // desde datos.js
    }

  } catch (error) {
    console.error(`Error cargando traducciones para idioma: ${lang}`, error);
  }
}

window.loadLanguage = loadLanguage;  // <--- Esta línea

function initLanguageSystem() {
  const selector = document.getElementById('langSelector');
  if (!selector) return;

  const storedLang = localStorage.getItem('language') || 'es';
  selector.value = storedLang;
  loadLanguage(storedLang);

  selector.addEventListener('change', (e) => {
    const selectedLang = e.target.value;
    localStorage.setItem('language', selectedLang);
    loadLanguage(selectedLang);
  });
}


// =========================
// CARGAR HEADER Y FOOTER + INICIALIZAR TODO
// =========================
async function cargarHeaderFooterYInicializar() {
  try {
    await Promise.all([
      fetch("header.html")
        .then(res => res.text())
        .then(data => {
          document.getElementById("header").innerHTML = data;
        }),

        // FOOTER//
      fetch("footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;

          
        }),
    ]);

    const lang = localStorage.getItem("language") || "es";
    await loadLanguage(lang);
    initLanguageSystem();
    initGaleria();
    initHamburgerMenus(); // inicializa hamburguesa después de cargar header/footer

  } catch (err) {
    console.error("Error inicializando la app:", err);
  }
}


// ✅ INICIO ÚNICO
document.addEventListener("DOMContentLoaded", () => {
  cargarHeaderFooterYInicializar();
});


// Exponer funciones si es necesario
window.loadLanguage = loadLanguage;
window.initLanguageSystem = initLanguageSystem;
window.abrirNosotrosEnVentana = abrirNosotrosEnVentana;
