function setLanguage(lang) {
    localStorage.setItem('selectedLang', lang);
    window.location.href = "login.html";
}