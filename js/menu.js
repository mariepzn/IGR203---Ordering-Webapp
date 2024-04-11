document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBar');
    const categories = document.querySelectorAll('#categories li');
    const dishes = document.querySelectorAll('.dish');

        // filtrage des categories de plats
        categories.forEach(category => {
            category.addEventListener('click', () => {
                if (!category.classList.contains('selected')) {
                    // Remove the 'selected' class from all categories
                    categories.forEach(cat => cat.classList.remove('selected'));
                    
                    // Add the 'selected' class to the clicked category
                    category.classList.add('selected');
                    
                    const categoryValue = category.getAttribute('data-category');
                    dishes.forEach(dish => {
                        if (dish.classList.contains(categoryValue) || categoryValue === 'all') {
                            dish.style.display = '';
                        } else {
                            dish.style.display = 'none';
                        }
                    });
                }
            });
        });
    // afficher les plats qui contiennent le texte de la searchbar
    searchBar.addEventListener('input', () => {
        const searchText = searchBar.value.toLowerCase();
        dishes.forEach(dish => {
            const dishName = dish.querySelector('.dish-info p').textContent.toLowerCase();
            if (dishName.includes(searchText)) {
                dish.style.display = '';
            } else {
                dish.style.display = 'none';
            }
         });
     });
});

// pour le panier et ajouter les articles

document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.btn-add');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const platId = this.getAttribute('data-id');
            const platName = this.getAttribute('data-name');
            const platPrice = parseFloat(this.getAttribute('data-price'));
            addItemToCart(platId, platName, platPrice);
            updateTotal();
        });
    });

    function addItemToCart(id, name, price) {
        let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
        if (cart[id]) {
            cart[id].quantity += 1;
        } else {
            cart[id] = {name: name, price: price, quantity: 1};
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function updateTotal() {
        let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
        let total = 0;
        Object.keys(cart).forEach(key => {
            total += cart[key].price * cart[key].quantity;
        });
        document.querySelector('footer#Total p').textContent = `Total : ${total}€`;
    }

    updateTotal();
});


document.getElementById('clear-cart').addEventListener('click', function() {
    localStorage.removeItem('cart'); // vide la panier
    window.location.reload(); //actualise pour paneir vide
});



//affichage du pop up

document.addEventListener('DOMContentLoaded', function() {
    //const hasVisited = localStorage.getItem('hasVisited');
    const overlayPage = document.getElementById('overlayPage');
    const closeOverlayButton = document.getElementById('closeOverlay');

        overlayPage.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // on peut pas scroll la page deriere
        //localStorage.setItem('hasVisited', 'true');

    closeOverlayButton.addEventListener('click', function() {
        overlayPage.style.display = 'none';
        document.body.style.overflow = 'auto'; // autorise de nouveau le scroll
    });
});



function goToFidelite(){
    window.location.href = "fidelite.html";
}
function goToHome(){
    window.location.href = "menu.html";
}

function close(){
    window.close();
}
function goToHabitude(){
    window.location.href = "habitude.html";}
    function goToInfoP(){
        window.location.href = "info-provencale.html";}
        function goToInfoF(){
            window.location.href = "info-fraiche.html";}