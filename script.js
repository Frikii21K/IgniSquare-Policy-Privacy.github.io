// Función requerida por Google Translate para inicializar el widget.
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'es',
    autoDisplay: false
  }, 'google_translate_element');
  
  // Espera hasta que el widget esté listo
  setTimeout(triggerTranslation, 1000);  // Esto puede ajustarse para ser más preciso
}

function triggerTranslation() {
  const googleCombo = document.querySelector('.goog-te-combo');
  if (!googleCombo) {
    // Si el elemento no está disponible, vuelve a intentarlo en 500ms
    setTimeout(triggerTranslation, 500);
    return;
  }

  // Si el combo de Google Translate está disponible, realiza la traducción
  const savedLang = localStorage.getItem("selectedLanguage");
  if (savedLang) {
    googleCombo.value = savedLang;
  } else {
    // Detecta el idioma del usuario
    let userLang = navigator.language.slice(0, 2);
    const allowedLanguages = ["es", "en", "fr", "pt", "de"];
    if (!allowedLanguages.includes(userLang)) {
      userLang = "en"; // Traducir a inglés por defecto
    }
    googleCombo.value = userLang;
  }

  // Simula el cambio de valor
  googleCombo.dispatchEvent(new Event('change', { bubbles: true }));
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
