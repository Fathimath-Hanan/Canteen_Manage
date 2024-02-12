// script.js

document.addEventListener('DOMContentLoaded', function () {
    console.log('External JavaScript file linked successfully!');

    // Function to calculate the total amount based on the selected items and quantities
    function calculateTotal() {
        var items = document.querySelectorAll('.cart-item');
        var totalAmount = 0;

        items.forEach(function (item) {
            var price = parseFloat(item.querySelector('.item-price').innerText.slice(1)); // Extract price and convert to float
            var quantity = parseInt(item.querySelector('.item-quantity').innerText); // Get selected quantity

            totalAmount += price * quantity;
        });

        return totalAmount;
    }

    // Function to update the shopping cart
    function updateCart() {
        var cartItems = document.getElementById('cart-items');
        var cartTotal = document.getElementById('cart-total');

        // Clear previous items
        cartItems.innerHTML = '';

        // Get items from localStorage
        var items = JSON.parse(localStorage.getItem('cartItems')) || [];

        // Update cart in the HTML
        items.forEach(function (item) {
            var li = document.createElement('li');
            li.className = 'cart-item';

            li.innerHTML = `
                <span>${item.name} - $${item.price.toFixed(2)}</span>
                <span>Quantity: <span class="item-quantity">${item.quantity}</span></span>
                <button class="remove-from-cart" data-name="${item.name}">Remove</button>
            `;

            cartItems.appendChild(li);
        });

        // Update total
        var totalAmount = calculateTotal();
        cartTotal.innerText = totalAmount.toFixed(2);
    }

    // Function to handle adding items to the cart
    function addToCart(name, price) {
        // Get items from localStorage
        var items = JSON.parse(localStorage.getItem('cartItems')) || [];

        // Check if the item is already in the cart
        var existingItem = items.find(function (item) {
            return item.name === name;
        });

        if (existingItem) {
            existingItem.quantity += 1; // Increment quantity
        } else {
            items.push({ name: name, price: price, quantity: 1 });
        }

        // Save items to localStorage
        localStorage.setItem('cartItems', JSON.stringify(items));

        // Update the shopping cart
        updateCart();
    }

    // Function to handle removing items from the cart
    function removeFromCart(name) {
        // Get items from localStorage
        var items = JSON.parse(localStorage.getItem('cartItems')) || [];

        // Remove the item from the array
        items = items.filter(function (item) {
            return item.name !== name;
        });

        // Save updated items to localStorage
        localStorage.setItem('cartItems', JSON.stringify(items));

        // Update the shopping cart
        updateCart();
    }

    // Attach event listener to Add to Cart buttons
    var addToCartButtons = document.querySelectorAll('.add-to-cart');
    if (addToCartButtons) {
        addToCartButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                var itemName = button.getAttribute('data-name');
                var itemPrice = parseFloat(button.getAttribute('data-price'));
                addToCart(itemName, itemPrice);
            });
        });
    }

    // Attach event listener to Remove from Cart buttons
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('remove-from-cart')) {
            var itemName = event.target.getAttribute('data-name');
            removeFromCart(itemName);
        }
    });

    // Attach event listener to the Confirm Order button
    var confirmOrderButton = document.getElementById('confirmOrderButton');
    if (confirmOrderButton) {
        confirmOrderButton.addEventListener('click', function () {
            var totalAmount = calculateTotal();
            var confirmation = confirm('Confirm your order?\nTotal Amount: $' + totalAmount.toFixed(2));

            if (confirmation) {
                // Redirect to the token page or perform other actions
                window.location.href = 'getToken.html?totalAmount=' + totalAmount.toFixed(2);
            }
        });
    }

    // Initial update of the shopping cart
    updateCart();
});
