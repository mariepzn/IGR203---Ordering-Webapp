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