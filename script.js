// Función requerida por Google Translate para inicializar el widget.
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'es',
    autoDisplay: false
  }, 'google_translate_element');

  // Esperar un poco antes de intentar traducir automáticamente
  setTimeout(triggerTranslation, 1000);
}

function triggerTranslation() {
  // Si el usuario ha seleccionado manualmente un idioma, no forzar traducción
  const savedLang = localStorage.getItem("selectedLanguage");
  if (savedLang) return;

  // Detecta el idioma del usuario (tomando los dos primeros caracteres)
  let userLang = navigator.language.slice(0, 2);

  // Idiomas permitidos para traducción
  const allowedLanguages = ["es", "en", "fr", "pt", "de"];

  // Si el usuario tiene español, no se realiza traducción automática.
  if (userLang === "es") {
    return;
  }

  // Si el idioma detectado no está entre los permitidos, se traduce a inglés por defecto.
  if (!allowedLanguages.includes(userLang)) {
    userLang = "en";
  }

  function doTranslate() {
    const googleCombo = document.querySelector('.goog-te-combo');
    if (googleCombo) {
      googleCombo.value = userLang;
      googleCombo.dispatchEvent(new Event('change', { bubbles: true }));
    } else {
      // Si el elemento no está disponible, reintenta en 500ms
      setTimeout(doTranslate, 500);
    }
  }

  doTranslate();
}

document.addEventListener("DOMContentLoaded", function () {
  const selectElement = document.getElementById('custom_translate');

  // Restaurar el idioma seleccionado previamente
  const savedLang = localStorage.getItem("selectedLanguage");
  if (savedLang) {
    selectElement.value = savedLang;
  }

  // Listener para el cambio manual del idioma mediante el widget personalizado.
  selectElement.addEventListener('change', function () {
    const lang = this.value;
    if (!lang) return;

    // Guardar la selección en localStorage
    localStorage.setItem("selectedLanguage", lang);

    const googleCombo = document.querySelector('.goog-te-combo');
    if (googleCombo) {
      googleCombo.value = lang;
      googleCombo.dispatchEvent(new Event('change', { bubbles: true }));
    }
  });
});
