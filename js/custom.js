document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.querySelectorAll('.btn-add');
    const subtractButton = document.querySelectorAll('.btn-sub');
    const totalPriceElement = document.querySelector('footer p');

    // actualiser le prix total du produit
    function updateTotalPrice() {
        let totalPrice = 6;
        document.querySelectorAll('.quantity').forEach(quantityElement => {
            const id = quantityElement.getAttribute('data-id');
            const price = parseFloat(document.querySelector('.btn-add[data-id="' + id + '"]').getAttribute('data-price'));
            const quantity = parseInt(quantityElement.textContent);
            totalPrice += price * quantity;
        });
        totalPriceElement.textContent = `Total : ${totalPrice.toFixed(2)}€`;
    }

    addButton.forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            const quantityDisplay = document.querySelector('.quantity[data-id="' + id + '"]');
            let quantity = parseInt(quantityDisplay.textContent);
            quantityDisplay.textContent = ++quantity;
            updateTotalPrice();
        });
    });

    subtractButton.forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            const quantityDisplay = document.querySelector('.quantity[data-id="' + id + '"]');
            let quantity = parseInt(quantityDisplay.textContent);
            if (quantity > 0) {
                quantityDisplay.textContent = --quantity;
                updateTotalPrice();
            }
        });
    });
});
