const translations = {
  fr: {
    title: "Bienvenue sur Izitek Haïti",
    link1: "Profils Netflix",
    link2: "Lèt & Produits",
    link3: "Services Tech",
    link4: "Blog"
  },
  en: {
    title: "Welcome to Izitek Haiti",
    link1: "Netflix Profiles",
    link2: "Milk & Products",
    link3: "Tech Services",
    link4: "Blog"
  }
};

document.getElementById('language').addEventListener('change', function () {
  const lang = this.value;
  localStorage.setItem('lang', lang);
  updateTexts(lang);
});

function updateTexts(lang) {
  document.getElementById('title').textContent = translations[lang].title;
  document.getElementById('link1').lastChild.textContent = ' ' + translations[lang].link1;
  document.getElementById('link2').lastChild.textContent = ' ' + translations[lang].link2;
  document.getElementById('link3').lastChild.textContent = ' ' + translations[lang].link3;
  document.getElementById('link4').lastChild.textContent = ' ' + translations[lang].link4;
}
