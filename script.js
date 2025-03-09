// Función requerida por Google Translate para inicializar el widget.
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'es',
      autoDisplay: false
    }, 'google_translate_element');
    
    // Una vez inicializado el widget, se dispara la traducción automática
    triggerTranslation();
  }
  

  
  function triggerTranslation() {
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
    
    // Función para disparar la traducción cuando el widget esté listo.
    function doTranslate() {
      const googleCombo = document.querySelector('.goog-te-combo');
      if (googleCombo) {
        // Establece el idioma en el combo de Google Translate
        googleCombo.value = userLang;
        // Dispara el evento change usando el constructor moderno de Event
        googleCombo.dispatchEvent(new Event('change', { bubbles: true }));
        // Actualiza el select personalizado
        document.getElementById('custom_translate').value = userLang;
      } else {
        // Si el elemento no está disponible, reintenta en 500ms
        setTimeout(doTranslate, 500);
      }
    }
    
    doTranslate();
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    // Listener para el cambio manual del idioma mediante el widget personalizado.
    document.getElementById('custom_translate').addEventListener('change', function() {
      const lang = this.value;
      const googleCombo = document.querySelector('.goog-te-combo');
      if (googleCombo) {
        googleCombo.value = lang;
        googleCombo.dispatchEvent(new Event('change', { bubbles: true }));
      }
    });
  });
  