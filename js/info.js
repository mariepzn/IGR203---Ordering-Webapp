function addToCart(id) {
    if (id === 4) {
        const platId = "4";
        const platName = "fraiche";
        const platPrice = "7";
        addItemToCart(platId, platName, platPrice);
        
    }
    if (id === 3) {
        const platId = "3";
        const platName = "provencale";
        const platPrice = "10";
        addItemToCart(platId, platName, platPrice);
        
    }
    
    

}
function addItemToCart(id, name, price) {
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
    if (cart[id]) {
        cart[id].quantity += 1;
    } else {
        cart[id] = {name: name, price: price, quantity: 1};
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = "menu.html";
}