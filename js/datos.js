document.addEventListener("DOMContentLoaded", () => {
  // Elementos del DOM
  const servicio = document.getElementById("servicio");
  const subservicio = document.getElementById("subservicio");
  const detalle = document.getElementById("detalle");
  const fechaHoraContainer = document.getElementById("fechaHoraContainer");
  const fecha = document.getElementById("fecha");
  const hora = document.getElementById("hora");
  const linkWhatsApp = document.getElementById("linkWhatsApp");
  const languageSelect = document.getElementById("langSelector");

  // Datos de servicios
  const datosPorIdioma = {
    es: {
      manicura: {
        "Manicura Semipermanente": [
          "Retirar Semipermanente (30 minutos)",
          "Semipermanente Express (30 minutos)",
          "Retirar Semi + Esmaltar Tradicional (30 minutos)",
          "Semipermanente Base Fiber (30 minutos)",
          "Semipermanente Francesa (30 minutos)",
          "Semipermanente Doble Línea Francesa (30 minutos)",
          "Semipermanente Francesa En Pico (30 minutos)",
          "Semipermanente Multicolor (30 minutos)",
          "Semipermanente + Deco Basic 2 Uñas (30 minutos)",
          "Semipermanente + Deco Premium 2 Uñas (1 hora)",
          "Semipermanente Baby Boomer (1 hora)",
          "Semipermanente Efecto Carey Francesa (1 hora)",
          "Nivelación de Uñas (1 hora)",
          "Semipermanente Multidot (1 hora)",
          "Refuerzo de Gel (1 hora)",
          "Semipermanente Efecto Carey (1 hora)",
          "Manicura Completa Semipermanente (1 hora)",
        ],
        "Manicura Tradicional": [
          "Manicura Kids (30 minutos)",
          "Esmalte Tradicional Express (30 minutos)",
          "Manicura Básica (30 minutos)",
          "Manicura Completa Men (1 hora)",
          "Manicura Completa Tradicional (1 hora)",
        ],
      },
      pedicura: {
        "Pedicura Semipermanente": [
          "Retirar Semipermanente Pies (30 minutos)",
          "Retirar Semi Pies + Esmaltado Tradicional (30 minutos)",
          "Semipermanente Pies Express (1 hora)",
          "Pedicura Completa En Seco (1 hora)",
        ],
        "Pedicura Tradicional": [
          "Pedicura Completa En Mojado (1 hora)",
          "Pedicura Completa Con Spa (1 hora)",
          "Pedicura Completa Tradicional En Mojado (1 hora)",
          "Pedicura Completa Tradicional Con Spa (1 hora)",
        ],
      },
      acrilicas: {
        "Uñas Acrilicas": [
          "(Repaso Acrilicas/Gel/Acrigel) Tiempo 30 minutos",
          "(Retirar Acrilico/Gel/Acrigel) Tiempo 30 minutos",
          "(Retirar Acrilico/Gel/Acrigel+Semi Un Color) Tiempo 1 hora",
          "(Acrilicas/Gel/Acrigel Sin Extensiones) Tiempo 1 hora",
          "(Relleno Acrilico/Gel/Acrigel) Tiempo 1/30 hora",
          "(Uñas Nuevas Acrilicas/Gel/Acrigel) Tiempo 1/30 hora",
          "(Uñas Mordidas) Tiempo 2 hora",
          "(Uñas Nuevas Francesa Encapsulada) Tiempo 2 hora",
          "(Uñas Nuevas XXL) Tiempo 2 hora",
          "(Retirar Acrilico/Gel/Acrigel+Uñas Nuevas) Tiempo 2 hora",
          "(Uñas Nuevas Encapsuladas) Tiempo 2 hora",
        ],
      },
      decoracion: {
        Decoración: [
          "(Decoracion Basica 2Uñas) Tiempo 30 minutos",
          "(Francesa Doble Linea) Tiempo 30 minutos",
          "(Francesa En Pico) Tiempo 30 minutos",
          "(Francesa Invertida) Tiempo 30 minutos",
          "(Decoracion Disney 1Uña) Tiempo 30 minutos",
          "(Decoracion Premium 2Uñas) Tiempo 30 minutos",
          "(Efecto Carey Francesa) Tiempo 30 minutos",
          "(Decoracion Basica 10 Uñas) Tiempo 30 minutos",
          "(Efecto Carey) Tiempo 30 minutos",
          "(Decoracion Premium 10 Uñas) Tiempo 1 hora",
        ],
      },
    },

    ca: {
      manicura: {
        "Manicura Semipermanent": [
          "Retirar Semipermanent (30 minuts)",
          "Semipermanent Express (30 minuts)",
          "Retirar Semi + Esmaltar Tradicional (30 minuts)",
          "Semipermanent Base Fiber (30 minuts)",
          "Semipermanent Francesa (30 minuts)",
          "Semipermanent Doble Línia Francesa (30 minuts)",
          "Semipermanent Francesa En Pic (30 minuts)",
          "Semipermanent Multicolor (30 minuts)",
          "Semipermanent + Deco Basic 2 Ungles (30 minuts)",
          "Semipermanent + Deco Premium 2 Ungles (1 hora)",
          "Semipermanent Baby Boomer (1 hora)",
          "Semipermanent Efecte Carey Francesa (1 hora)",
          "Nivelació d'Ungles (1 hora)",
          "Semipermanent Multidot (1 hora)",
          "Reforç de Gel (1 hora)",
          "Semipermanent Efecte Carey (1 hora)",
          "Manicura Completa Semipermanent (1 hora)",
        ],
        "Manicura Tradicional": [
          "Manicura Kids (30 minuts)",
          "Esmalt Tradicional Express (30 minuts)",
          "Manicura Bàsica (30 minuts)",
          "Manicura Completa Men (1 hora)",
          "Manicura Completa Tradicional (1 hora)",
        ],
      },
      pedicura: {
        "Pedicura Semipermanent": [
          "Retirar Semipermanent Peus (30 minuts)",
          "Retirar Semi Peus + Esmaltat Tradicional (30 minuts)",
          "Semipermanent Peus Express (1 hora)",
          "Pedicura Completa En Sec (1 hora)",
        ],
        "Pedicura Tradicional": [
          "Pedicura Completa En Mullar (1 hora)",
          "Pedicura Completa Amb Spa (1 hora)",
          "Pedicura Completa Tradicional En Mullar (1 hora)",
          "Pedicura Completa Tradicional Amb Spa (1 hora)",
        ],
      },
      acrilicas: {
        "Ungles Acríliques": [
          "(Repàs Acríliques/Gel/Acrigel) Temps 30 minuts",
          "(Retirar Acrílic/Gel/Acrigel) Temps 30 minuts",
          "(Retirar Acrílic/Gel/Acrigel+Semi Un Color) Temps 1 hora",
          "(Acríliques/Gel/Acrigel Sense Extensions) Temps 1 hora",
          "(Replè Acrílic/Gel/Acrigel) Temps 1/30 hora",
          "(Ungles Noves Acríliques/Gel/Acrigel) Temps 1/30 hora",
          "(Ungles Mossegades) Temps 2 hora",
          "(Ungles Noves Francesa Encapsulada) Temps 2 hora",
          "(Ungles Noves XXL) Temps 2 hora",
          "(Retirar Acrílic/Gel/Acrigel+Ungles Noves) Temps 2 hora",
          "(Ungles Noves Encapsulades) Temps 2 hora",
        ],
      },
      decoracion: {
        Decoració: [
          "(Decoració Bàsica 2 Ungles) Temps 30 minuts",
          "(Francesa Doble Línia) Temps 30 minuts",
          "(Francesa En Pic) Temps 30 minuts",
          "(Francesa Invertida) Temps 30 minuts",
          "(Decoració Disney 1 Ungla) Temps 30 minuts",
          "(Decoració Premium 2 Ungles) Temps 30 minuts",
          "(Efecte Carey Francesa) Temps 30 minuts",
          "(Decoració Bàsica 10 Ungles) Temps 30 minuts",
          "(Efecte Carey) Temps 30 minuts",
          "(Decoració Premium 10 Ungles) Temps 1 hora",
        ],
      },
    },

    en: {
      manicure: {
        "Semi-permanent Manicure": [
          "Remove Semi-permanent (30 minutes)",
          "Semi-permanent Express (30 minutes)",
          "Remove Semi + Traditional Polish (30 minutes)",
          "Semi-permanent Fiber Base (30 minutes)",
          "French Semi-permanent (30 minutes)",
          "Double French Line Semi-permanent (30 minutes)",
          "Pointed French Semi-permanent (30 minutes)",
          "Multicolor Semi-permanent (30 minutes)",
          "Semi-permanent + Basic Deco 2 Nails (30 minutes)",
          "Semi-permanent + Premium Deco 2 Nails (1 hour)",
          "Baby Boomer Semi-permanent (1 hour)",
          "Carey Effect French Semi-permanent (1 hour)",
          "Nail Leveling (1 hour)",
          "Multidot Semi-permanent (1 hour)",
          "Gel Reinforcement (1 hour)",
          "Carey Effect Semi-permanent (1 hour)",
          "Complete Semi-permanent Manicure (1 hour)",
        ],
        "Traditional Manicure": [
          "Kids Manicure (30 minutes)",
          "Traditional Polish Express (30 minutes)",
          "Basic Manicure (30 minutes)",
          "Complete Men Manicure (1 hour)",
          "Complete Traditional Manicure (1 hour)",
        ],
      },
      pedicure: {
        "Semi-permanent Pedicure": [
          "Remove Semi-permanent Feet (30 minutes)",
          "Remove Semi Feet + Traditional Polish (30 minutes)",
          "Semi-permanent Feet Express (1 hour)",
          "Complete Dry Pedicure (1 hour)",
        ],
        "Traditional Pedicure": [
          "Complete Wet Pedicure (1 hour)",
          "Complete Pedicure With Spa (1 hour)",
          "Complete Traditional Wet Pedicure (1 hour)",
          "Complete Traditional Pedicure With Spa (1 hour)",
        ],
      },
      acrylics: {
        "Acrylic Nails": [
          "(Acrylics/Gel/Acrigel Touch-up) Time 30 minutes",
          "(Remove Acrylic/Gel/Acrigel) Time 30 minutes",
          "(Remove Acrylic/Gel/Acrigel+Semi One Color) Time 1 hour",
          "(Acrylics/Gel/Acrigel Without Extensions) Time 1 hour",
          "(Acrylic/Gel/Acrigel Fill) Time 1/30 hour",
          "(New Acrylic/Gel/Acrigel Nails) Time 1/30 hour",
          "(Bitten Nails) Time 2 hours",
          "(New French Encapsulated Nails) Time 2 hours",
          "(New XXL Nails) Time 2 hours",
          "(Remove Acrylic/Gel/Acrigel+New Nails) Time 2 hours",
          "(New Encapsulated Nails) Time 2 hours",
        ],
      },
      decoration: {
        Decoration: [
          "(Basic Decoration 2 Nails) Time 30 minutes",
          "(Double French Line) Time 30 minutes",
          "(Pointed French) Time 30 minutes",
          "(Inverted French) Time 30 minutes",
          "(Disney Decoration 1 Nail) Time 30 minutes",
          "(Premium Decoration 2 Nails) Time 30 minutes",
          "(Carey Effect French) Time 30 minutes",
          "(Basic Decoration 10 Nails) Time 30 minutes",
          "(Carey Effect) Time 30 minutes",
          "(Premium Decoration 10 Nails) Time 1 hour",
        ],
      },
    },
  };

  // Idioma actual desde localStorage o selector
  let idiomaActual = localStorage.getItem("language") || (languageSelect ? languageSelect.value : "es");

  // Datos traducibles por idioma
  let datos = datosPorIdioma[idiomaActual] || datosPorIdioma["es"];

  // Función para actualizar variable `datos` según idioma
  function actualizarDatosPorIdioma(idioma) {
    datos = datosPorIdioma[idioma] || datosPorIdioma["es"];
  }

  // Función para llenar el select de servicios
  function refrescarSelectServicio() {
    servicio.innerHTML = '<option value="">--Selecciona--</option>';
    for (const categoria in datos) {
      const option = document.createElement("option");
      option.value = categoria;
      option.textContent = categoria;
      servicio.appendChild(option);
    }
    subservicio.innerHTML = '<option value="">--Selecciona un subservicio--</option>';
    detalle.innerHTML = '<option value="">--Selecciona un detalle--</option>';
  }

  // Función para llenar subservicios según servicio
  function refrescarSubservicios() {
    subservicio.innerHTML = '<option value="">--Selecciona un subservicio--</option>';
    detalle.innerHTML = '<option value="">--Selecciona un detalle--</option>';
    if (datos[servicio.value]) {
      for (const sub in datos[servicio.value]) {
        const option = document.createElement("option");
        option.value = sub;
        option.textContent = sub;
        subservicio.appendChild(option);
      }
    }
  }

  // Listener para cambio de idioma
  if (languageSelect) {
    languageSelect.value = idiomaActual;
    languageSelect.addEventListener("change", () => {
      idiomaActual = languageSelect.value;
      localStorage.setItem("language", idiomaActual);
      actualizarDatosPorIdioma(idiomaActual);
      refrescarSelectServicio();
    });
  }
document.querySelectorAll('.categoria').forEach(categoria => {
  const detalles = categoria.querySelectorAll('details');

  categoria.addEventListener('mouseover', e => {
    // Si el cursor está sobre un summary
    const summary = e.target.closest('summary');
    if (!summary) return;

    detalles.forEach(detail => {
      const sublista = detail.querySelector('.sublista');
      if (detail.contains(summary)) {
        // Mostrar la sublista correspondiente
        sublista.style.display = 'block';
        detail.open = true;
      } else {
        // Ocultar todas las otras sublistas
        const s = detail.querySelector('.sublista');
        s.style.display = 'none';
        detail.open = false;
      }
    });
  });

  categoria.addEventListener('mouseleave', () => {
    // Al quitar el cursor de la categoría, cerrar todas las sublistas
    detalles.forEach(detail => {
      const sublista = detail.querySelector('.sublista');
      sublista.style.display = 'none';
      detail.open = false;
    });
  });
});



});
