function addToCart(id) {
    if (id === 4) {
        const platId = "4";
        const platName = "Salade fraiche";
        const platPrice = "7";
        addItemToCart(platId, platName, platPrice);
        
    }
    if (id === 3) {
        const platId = "3";
        const platName = "Salade provencale";
        const platPrice = "10";
        addItemToCart(platId, platName, platPrice);
        
    }
    if (id === 1) {
        const platId = "1";
        const platName = "Sex on the Beach";
        const platPrice = "8";
        addItemToCart(platId, platName, platPrice);
        
    }
    if (id === 2) {
        const platId = "2";
        const platName = "Spritz";
        const platPrice = "7";
        addItemToCart(platId, platName, platPrice);
        
    }
    if (id === 5) {
        const platId = "5";
        const platName = "Tiramisu";
        const platPrice = "5.5";
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