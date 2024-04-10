document.addEventListener('DOMContentLoaded', function() {
    const lang = localStorage.getItem('selectedLang') || 'en'; // 'en' comme valeur par défaut
    fetch(`json/${lang}.json`)
        .then(response => response.json())
        .then(translations => {
            document.querySelectorAll('[data-translate]').forEach(element => {
                const key = element.getAttribute('data-translate');
                if(translations[key]) {
                    element.textContent = translations[key];
                }
            });
        })
        .catch(error => console.error("Erreur de chargement du fichier de langue:", error));
});

