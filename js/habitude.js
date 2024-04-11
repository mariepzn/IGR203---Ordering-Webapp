document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBar');
    const categories = document.querySelectorAll('#categories li');
    const dishes = document.querySelectorAll('.dish');

    
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


function goToHome(){
    window.location.href = "menu.html";
}

function close(){
    window.close();
}