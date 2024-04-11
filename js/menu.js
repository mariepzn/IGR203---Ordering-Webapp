
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
            const quantityDisplay = document.querySelector('.quantity[data-id="' + platId + '"]');
            let quantity = parseInt(quantityDisplay.textContent);
            quantityDisplay.textContent = ++quantity;
      

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

    

    updateTotal();
});
//Substract Item from the cart
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.btn-sub');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
    
            const platId = this.getAttribute('data-id');
            const platName = this.getAttribute('data-name');
            const platPrice = parseFloat(this.getAttribute('data-price'));
            const quantityDisplay = document.querySelector('.quantity[data-id="' + platId + '"]');
            let quantityDispl = parseInt(quantityDisplay.textContent);
            if (quantityDispl > 0) {
                quantityDisplay.textContent = --quantityDispl;
                subItemToCart(platId, platName, platPrice);
                updateTotal();
            }
            
        });
    });
    function subItemToCart(id, name, price) {
        let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
        if (cart[id]) {
            cart[id].quantity -= 1;
        } else {
            cart[id] = {name: name, price: price, quantity: 1};
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    
 
});
function updateTotal() {
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
    let total = 0;
    Object.keys(cart).forEach(key => {
        total += cart[key].price * cart[key].quantity;
    });
    document.querySelector('footer#Total p').textContent = `Total : ${total}€`;
}
document.getElementById('clear-cart').addEventListener('click', function() {
    localStorage.removeItem('cart'); // vide la panier
    window.location.reload(); //actualise pour paneir vide
});



//affichage du pop up

document.addEventListener('DOMContentLoaded', function() {
    const hasVisited = localStorage.getItem('hasVisited');
    if (hasVisited=='false'){   

    const overlayPage = document.getElementById('overlayPage');
    const closeOverlayButton = document.getElementById('closeOverlay');

        overlayPage.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // on peut pas scroll la page deriere
        localStorage.setItem('hasVisited', 'true');

    closeOverlayButton.addEventListener('click', function() {
        overlayPage.style.display = 'none';
        document.body.style.overflow = 'auto'; // autorise de nouveau le scroll

    });  }
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
            function goToInfoS(){
                window.location.href = "info-sexOnTheBeach.html";}
                function goToInfoSp(){
                    window.location.href = "info-spritz.html";}
                    function goToInfoT(){
                        window.location.href = "info-tiramisu.html";}





//pour garder les quantités affichées quand on recharge la page

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.quantity').forEach(element => {
        const id = element.getAttribute('data-id');
        const storedQuantity = localStorage.getItem('product_' + id);
        if (storedQuantity) {
            element.textContent = storedQuantity;
        }
    });


    document.querySelectorAll('.btn-add').forEach(button => {
        button.addEventListener('click', () => {
            const id = button.getAttribute('data-id');
            const quantitySpan = document.querySelector('.quantity[data-id="' + id + '"]');
            let quantity = parseInt(quantitySpan.textContent);

            quantitySpan.textContent = quantity;
   
            localStorage.setItem('product_' + id, quantity);
        });
    });

 
    document.querySelectorAll('.btn-sub').forEach(button => {
        button.addEventListener('click', () => {
            const id = button.getAttribute('data-id');
            const quantitySpan = document.querySelector('.quantity[data-id="' + id + '"]');
            let quantity = parseInt(quantitySpan.textContent);

                quantitySpan.textContent = quantity;
                
                localStorage.setItem('product_' + id, quantity);
    
        });
    });
});




//vider le panier correction

document.getElementById('clear-cart').addEventListener('click', () => {
    document.querySelectorAll('.quantity').forEach(element => {
        const id = element.getAttribute('data-id');
        element.textContent = '0';
        localStorage.removeItem('product_' + id);
    });
    document.querySelector('#Total .bold_text').textContent = 'Total : 0€';
});



//


// Function to update menu item quantities based on cart data
function updateMenuQuantities() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || {};
    document.querySelectorAll('.dish .quantity').forEach(item => {
        const itemId = item.getAttribute('data-id');
        if (cartItems[itemId]) {
            item.textContent = cartItems[itemId].quantity;
        }
    });
}

// Call this function when the page loads
document.addEventListener('DOMContentLoaded', updateMenuQuantities);

document.querySelectorAll('.btn-add').forEach(button => {
    button.addEventListener('click', function() {
        const itemId = this.getAttribute('data-id');
        const itemName = this.getAttribute('data-name');
        const itemPrice = parseFloat(this.getAttribute('data-price'));
        const cartItems = JSON.parse(localStorage.getItem('cart')) || {};
        if (!cartItems[itemId]) {
            cartItems[itemId] = {name: itemName, price: itemPrice, quantity: 0};
        }

        localStorage.setItem('cart', JSON.stringify(cartItems));
        updateMenuQuantities();
    });
});

