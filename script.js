//your code here
// Get references to HTML elements
const cartItemsList = document.getElementById("cart-items");
const clearCartButton = document.getElementById("clear-cart");

// Load items from Local Storage when the page loads
document.addEventListener("DOMContentLoaded", () => {
    loadCartItems();
});

// Function to load cart items from Local Storage
function loadCartItems() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Clear the cart items list
    cartItemsList.innerHTML = "";

    // Display each item in the cart
    cartItems.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
            removeFromCart(index);
        });

        li.appendChild(removeButton);
        cartItemsList.appendChild(li);
    });
}

// Function to add an item to the cart
function addToCart(name, price) {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const newItem = { name, price };
    cartItems.push(newItem);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    loadCartItems(); // Reload the cart items list
}

// Function to remove an item from the cart
function removeFromCart(index) {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    loadCartItems(); // Reload the cart items list
}

// Clear the entire cart
clearCartButton.addEventListener("click", () => {
    localStorage.removeItem("cart");
    loadCartItems(); // Reload the cart items list
});

