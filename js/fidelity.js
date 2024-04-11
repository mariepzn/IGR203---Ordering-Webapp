document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBar');
    const categories = document.querySelectorAll('#categories li');
    const dishes = document.querySelectorAll('.dish');

        // filtrage des categories de plats
    categories.forEach(category => {
        category.addEventListener('click', () => {
            const categoryValue = category.getAttribute('data-category');
            dishes.forEach(dish => {
                if (dish.classList.contains(categoryValue) || categoryValue === 'all') {
                        dish.style.display = '';
                } else {dish.style.display = 'none';}
                });
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

});


document.addEventListener('DOMContentLoaded', function() {
    const userPoints = 22;
    document.querySelectorAll('.category').forEach(function(category) {
        const pointsNeeded = parseInt(category.getAttribute('data-points'), 10);
        if (pointsNeeded > userPoints) {
            category.classList.add('disabled');
        }
    });
});



document.querySelectorAll('.category h2').forEach(header => {
    header.addEventListener('click', function() {
        const category = this.parentNode;
        const dishes = category.querySelectorAll('.dish');
        dishes.forEach(dish => {
            dish.style.display = dish.style.display === 'none' ? 'flex' : 'none';
        });
    });
});


document.querySelectorAll('.dish').forEach(dish => {
    dish.style.display = 'none';
});


document.querySelectorAll('.category h2').forEach(function(header) {
    header.addEventListener('click', function() {

        this.parentNode.classList.toggle('open');

        //pour cnhager l'icone de sens
        var icon = this.querySelector('.dropdown-icon');
        if (this.parentNode.classList.contains('open')) {
            icon.style.backgroundImage = "url('../media/v.png')";
        } else {
            icon.style.backgroundImage = "url('../media/inv.png')";
        }
    });
});
