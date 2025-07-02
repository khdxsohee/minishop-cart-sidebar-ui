document.addEventListener("DOMContentLoaded", () => {
  const cartBtn = document.getElementById("cart-toggle");
  const closeBtn = document.getElementById("close-cart");
  const cartSidebar = document.getElementById("cart-sidebar");
  const cartItemsContainer = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const totalPrice = document.getElementById("total-price");

  let cart = [];
  let total = 0;

  // Toggle cart sidebar
  cartBtn.addEventListener("click", () => {
    cartSidebar.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    cartSidebar.classList.remove("active");
  });

  // Add to cart
  document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".product-card");
      const name = card.dataset.name;
      const price = parseFloat(card.dataset.price);

      // Update cart
      cart.push({ name, price });
      total += price;

      // Render
      updateCartUI();
    });
  });

  function updateCartUI() {
    // Update cart count and total
    cartCount.textContent = cart.length;
    totalPrice.textContent = total.toFixed(2);

    // Clear previous items
    cartItemsContainer.innerHTML = "";

    // Render new items
    cart.forEach(item => {
      const div = document.createElement("div");
      div.classList.add("cart-item");
      div.innerHTML = `
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">$${item.price}</div>
      `;
      cartItemsContainer.appendChild(div);
    });
  }
});
