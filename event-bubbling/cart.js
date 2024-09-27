document.getElementById('cart').addEventListener('click', function() {
    alert('Shopping Cart clicked!');
});

document.querySelectorAll('.category').forEach(category => {
    category.addEventListener('click', function() {
        alert(`${this.querySelector('h3').innerText} clicked!`);
    });
});

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function(event) {
        alert(`${this.previousElementSibling.innerText} added to the cart!`);
        //event.stopPropagation(); //Stop the event from bubbling
    });
});