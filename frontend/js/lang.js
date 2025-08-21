// frontend/js/lang.js

export async function loadLanguage(lang) {
  try {
    const response = await fetch(`/locales/${lang}.json`);
    const translations = await response.json();

    // Traducir elementos
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[key]) {
        el.textContent = translations[key];
      }
    });

    // Actualizar el selector si existe
    const selector = document.getElementById("langSelector");
    if (selector) {
      selector.value = lang;
    }
  } catch (error) {
    console.error("Error al cargar traducciones:", error);
  }
}

// Configurar selector y cargar idioma almacenado
export function initLanguage() {
  const lang = localStorage.getItem("language") || "es";
  loadLanguage(lang);

  const selector = document.getElementById("langSelector");
  if (selector) {
    selector.addEventListener("change", (e) => {
      const selectedLang = e.target.value;
      localStorage.setItem("language", selectedLang);
      loadLanguage(selectedLang);
    });
  }
}
