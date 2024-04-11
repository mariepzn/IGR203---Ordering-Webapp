function languageSelection() {
    window.location.href = "languageSelection.html";
    localStorage.setItem('hasVisited', 'false'); //pour le pop up du menu
    }


    document.getElementById('tableForm').addEventListener('submit', function(event) {
        event.preventDefault();
        var tableNumber = document.getElementById('table').value;
        localStorage.setItem('tableNumber', tableNumber);
        languageSelection();
    });
    

    function submitForm() {
        var tableNumber = document.getElementById('table').value;
        localStorage.setItem('tableNumber', tableNumber); // Stocke dans local storage
        languageSelection();
    }