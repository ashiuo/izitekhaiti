// Appliquer le thème sauvegardé
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

// Appliquer la langue sauvegardée
const savedLang = localStorage.getItem('lang');
if (savedLang) {
  document.getElementById('language').value = savedLang;
  updateTexts(savedLang);
}
