document.addEventListener('DOMContentLoaded', function() {
    const cartItemsEl = document.querySelector('#cart-items');
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
    let total = 0;

    Object.keys(cart).forEach(key => {
        const item = cart[key];
        total += item.price * item.quantity;
        const itemEl = document.createElement('div');
        itemEl.textContent = `${item.name} x ${item.quantity} = ${item.price * item.quantity}€`;
        cartItemsEl.appendChild(itemEl);
    });

    document.querySelector('#total').textContent = `Total : ${total}€`;
});


window.addEventListener('DOMContentLoaded', (event) => {
    var tableNumber = localStorage.getItem('tableNumber');
    document.getElementById('tableNumberDisplay').textContent = tableNumber;
});
