// مدیریت سبد خرید
let cart = JSON.parse(localStorage.getItem('cart')) || [];
updateCartCount();

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`${name} به سبد خرید اضافه شد!`);
}

function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

// جستجوی ساده
function searchProducts() {
    const query = document.getElementById('search-input').value;
    alert(`جستجو برای: ${query}`);
    // برای جستجوی واقعی، می‌توانید محصولات را فیلتر کنید
}