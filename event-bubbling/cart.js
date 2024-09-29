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

//Create and append the "Delete" button next to each "Add to Cart" button:

const productDivs = document.querySelectorAll('.product'); 

productDivs.forEach(productDiv => {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete';
    
    productDiv.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
        productDiv.remove(); 
    });
});