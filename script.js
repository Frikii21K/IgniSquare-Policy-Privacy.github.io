const THEME_STORAGE_KEY = "selectedTheme";

function safeStorageGet(key) {
  try {
    return window.localStorage ? window.localStorage.getItem(key) : null;
  } catch (_) {
    return null;
  }
}

function safeStorageSet(key, value) {
  try {
    if (window.localStorage) {
      window.localStorage.setItem(key, value);
    }
  } catch (_) {
    // Ignore storage errors in restricted WebViews
  }
}

function getSystemTheme() {
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getEffectiveTheme() {
  const attr = document.documentElement.getAttribute("data-theme");
  if (attr === "light" || attr === "dark") return attr;
  return getSystemTheme();
}

function syncMetaThemeColor(theme) {
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute("content", theme === "dark" ? "#0c111a" : "#f3f5f8");
  }
}

function applyTheme(theme) {
  if (theme === "light" || theme === "dark") {
    document.documentElement.setAttribute("data-theme", theme);
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
  syncMetaThemeColor(getEffectiveTheme());
}

// Aplicar preferencia guardada de inmediato para evitar parpadeos
applyTheme(safeStorageGet(THEME_STORAGE_KEY));

// Función requerida por Google Translate para inicializar el widget.
window.googleTranslateElementInit = function () {
  const g = window.google;
  if (g && g.translate && g.translate.TranslateElement) {
    window._googleTranslateElement = new g.translate.TranslateElement({
      pageLanguage: 'es',
      autoDisplay: false
    }, 'google_translate_element');
  }

  // Espera hasta que el widget esté listo
  setTimeout(triggerTranslation, 1000);
};

function triggerTranslation() {
  const googleCombo = document.querySelector('.goog-te-combo');
  if (!googleCombo) {
    setTimeout(triggerTranslation, 500);
    return;
  }

  const savedLang = safeStorageGet("selectedLanguage");
  if (savedLang) {
    googleCombo.value = savedLang;
  } else {
    let userLang = (navigator.language || "en").slice(0, 2);
    const allowedLanguages = ["es", "en", "fr", "pt-BR", "de", "it"];
    if (!allowedLanguages.includes(userLang)) {
      userLang = "en";
    }
    googleCombo.value = userLang;
  }

  googleCombo.dispatchEvent(new Event('change', { bubbles: true }));
}

document.addEventListener("DOMContentLoaded", function () {
  const selectElement = document.getElementById('custom_translate');
  const wrapper = document.getElementById('custom_translate_wrapper');

  const savedLang = safeStorageGet("selectedLanguage");
  if (selectElement && savedLang) {
    selectElement.value = savedLang;
  }

  const THEME_LABELS = {
    es: { toLight: "Claro", toDark: "Oscuro", ariaLight: "Cambiar a tema claro", ariaDark: "Cambiar a tema oscuro" },
    en: { toLight: "Light", toDark: "Dark", ariaLight: "Switch to light theme", ariaDark: "Switch to dark theme" },
    fr: { toLight: "Clair", toDark: "Sombre", ariaLight: "Passer au thème clair", ariaDark: "Passer au thème sombre" },
    "pt-BR": { toLight: "Claro", toDark: "Escuro", ariaLight: "Mudar para tema claro", ariaDark: "Mudar para tema escuro" },
    de: { toLight: "Hell", toDark: "Dunkel", ariaLight: "Zum hellen Design wechseln", ariaDark: "Zum dunklen Design wechseln" },
    it: { toLight: "Chiaro", toDark: "Scuro", ariaLight: "Passa al tema chiaro", ariaDark: "Passa al tema scuro" }
  };

  function getActiveLang() {
    if (selectElement && selectElement.value) return selectElement.value;
    const stored = safeStorageGet("selectedLanguage");
    if (stored) return stored;
    const nav = (navigator.language || "es").toLowerCase();
    if (nav.startsWith("pt")) return "pt-BR";
    const short = nav.slice(0, 2);
    return THEME_LABELS[short] ? short : "es";
  }

  const SUN_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>';
  const MOON_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>';

  let themeBtn = document.getElementById('theme_toggle');
  if (wrapper && !themeBtn) {
    themeBtn = document.createElement('button');
    themeBtn.id = 'theme_toggle';
    themeBtn.type = 'button';
    themeBtn.className = 'theme-toggle notranslate';

    const iconSlot = document.createElement('span');
    iconSlot.className = 'theme-toggle-icon';
    iconSlot.style.display = 'inline-flex';
    iconSlot.setAttribute('aria-hidden', 'true');

    const textSlot = document.createElement('span');
    textSlot.className = 'theme-toggle-label';

    themeBtn.appendChild(iconSlot);
    themeBtn.appendChild(textSlot);
    wrapper.insertBefore(themeBtn, selectElement || wrapper.firstChild);

    function renderThemeButton() {
      const effective = getEffectiveTheme();
      const lang = getActiveLang();
      const dict = THEME_LABELS[lang] || THEME_LABELS.es;
      const isDark = effective === "dark";

      iconSlot.innerHTML = isDark ? SUN_SVG : MOON_SVG;
      textSlot.textContent = isDark ? dict.toLight : dict.toDark;
      const aria = isDark ? dict.ariaLight : dict.ariaDark;
      themeBtn.setAttribute('aria-label', aria);
      themeBtn.setAttribute('title', aria);
      themeBtn.setAttribute('aria-pressed', String(isDark));
    }

    themeBtn.addEventListener('click', function () {
      const next = getEffectiveTheme() === "dark" ? "light" : "dark";
      safeStorageSet(THEME_STORAGE_KEY, next);
      applyTheme(next);
      renderThemeButton();
    });

    if (window.matchMedia) {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      if (mq.addEventListener) {
        mq.addEventListener("change", function () {
          if (!safeStorageGet(THEME_STORAGE_KEY)) {
            syncMetaThemeColor(getEffectiveTheme());
            renderThemeButton();
          }
        });
      }
    }

    renderThemeButton();
    themeBtn._renderThemeButton = renderThemeButton;
  }

  if (selectElement) {
    selectElement.addEventListener('change', function () {
      const lang = this.value;
      if (!lang) return;

      safeStorageSet("selectedLanguage", lang);
      if (themeBtn && themeBtn._renderThemeButton) {
        themeBtn._renderThemeButton();
      }

      const googleCombo = document.querySelector('.goog-te-combo');
      if (googleCombo) {
        googleCombo.value = lang;
        googleCombo.dispatchEvent(new Event('change', { bubbles: true }));
      }
    });
  }
});
