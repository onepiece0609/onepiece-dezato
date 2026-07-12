// ==========================================================================
// MENU DATA SETUP
// ==========================================================================
const menuData = [
    // Waffles
    { id: 'w1', category: 'waffles', name: 'Belgian Chocolate Waffle', price: 180, desc: 'Classic golden waffle smothered in rich, warm classic melted Belgian dark chocolate.', img: 'https://images.unsplash.com/photo-1562376502-6f769499c886?auto=format&fit=crop&w=600&q=80' },
    { id: 'w2', category: 'waffles', name: 'Nutella Waffle', price: 210, desc: 'Freshly baked waffle layered generously with authentic creamy hazelnut Nutella spread.', img: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=600&q=80' },
    { id: 'w3', category: 'waffles', name: 'Lotus Biscoff Waffle', price: 240, desc: 'Topped with premium crushed Lotus Biscoff cookies and a warm cookie butter drizzle.', img: 'https://images.unsplash.com/photo-1621996346565-e3dc69149933?auto=format&fit=crop&w=600&q=80' },
    { id: 'w4', category: 'waffles', name: 'Oreo Waffle', price: 195, desc: 'Infused with chocolate cookie crumbles, vanilla cream glaze, and crushed Oreos.', img: 'https://images.unsplash.com/photo-1585502418236-df300d52f641?auto=format&fit=crop&w=600&q=80' },
    { id: 'w5', category: 'waffles', name: 'Red Velvet Waffle', price: 220, desc: 'Vibrant red velvet waffle base accented with a rich, sweet cream cheese frosting drop.', img: 'https://images.unsplash.com/photo-1614104030967-5ca61a54247b?auto=format&fit=crop&w=600&q=80' },

    // Pancakes
    { id: 'p1', category: 'pancakes', name: 'Classic Buttermilk Pancakes', price: 150, desc: 'Fluffy traditional pancakes served warm with whipped pure butter and rich maple syrup.', img: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=600&q=80' },
    { id: 'p2', category: 'pancakes', name: 'Chocolate Stack Pancakes', price: 180, desc: 'Deep chocolate batter pancakes laced with milk chocolate chips and fudge drizzle.', img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=600&q=80' },
    { id: 'p3', category: 'pancakes', name: 'Wild Blueberry Pancakes', price: 210, desc: 'Bursting with fresh local wild blueberries, finished with an elegant tart berry compote.', img: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=600&q=80' },
    { id: 'p4', category: 'pancakes', name: 'Strawberry Cream Pancakes', price: 195, desc: 'Layered with fresh bright strawberry slices and delicate, velvety chantilly cream.', img: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=600&q=80' },
    { id: 'p5', category: 'pancakes', name: 'Nutella Drizzle Pancakes', price: 220, desc: 'Our signature fluffy stack topped completely with rich Nutella and toasted hazelnuts.', img: 'https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?auto=format&fit=crop&w=600&q=80' },

    // Coffee
    { id: 'c1', category: 'coffee', name: 'Classic Espresso', price: 90, desc: 'A bold, concentrated shot of our premium darkly roasted custom Arabica blend beans.', img: 'https://images.unsplash.com/photo-1510707577719-cc7c146c80ad?auto=format&fit=crop&w=600&q=80' },
    { id: 'c2', category: 'coffee', name: 'Velvety Cappuccino', price: 140, desc: 'Equal parts aromatic espresso, steamed milk, and a luxurious top layer of thick foam.', img: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80' },
    { id: 'c3', category: 'coffee', name: 'Caffè Latte', price: 150, desc: 'Smooth, light espresso combined with plenty of steamed milk and a light foam touch.', img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80' },
    { id: 'c4', category: 'coffee', name: 'Caffè Mocha', price: 165, desc: 'Rich espresso blended with dark chocolate sauce, finished smoothly with steamed milk.', img: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=600&q=80' },

    // Milkshakes
    { id: 'm1', category: 'milkshakes', name: 'Oreo Crunch Shake', price: 170, desc: 'Thick vanilla bean ice cream blended with plenty of crispy crushed Oreo cookies.', img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80' },
    { id: 'm2', category: 'milkshakes', name: 'Classic Chocolate Shake', price: 160, desc: 'Creamy artisanal Dutch dark chocolate ice cream whipped to an ultra-smooth finish.', img: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=600&q=80' },
    { id: 'm3', category: 'milkshakes', name: 'KitKat Break Shake', price: 185, desc: 'Creamy shake loaded up with chunks of crisp, chocolate-covered wafer KitKat bars.', img: 'https://images.unsplash.com/photo-1532713107108-7b51c5a89dd4?auto=format&fit=crop&w=600&q=80' },
    { id: 'm4', category: 'milkshakes', name: 'Alphonso Mango Shake', price: 180, desc: 'Rich seasonal sweet Alphonso mango pulp blended perfectly into premium milk ice cream.', img: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=600&q=80' }
];

// ==========================================================================
// BUSINESS & STATE MANAGEMENT
// ==========================================================================
const WHATSAPP_NUMBER = "+916369020857";
let cart = JSON.parse(localStorage.getItem('dezato_cart')) || [];

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    updateCartCount();
    
    // Page specific assignments
    if (document.getElementById('menu-grid')) initMenuPage();
    if (document.getElementById('featured-waffles')) initHomePage();
    if (document.getElementById('cart-items')) renderCartPage();
});

// Navbar Responsive Toggle
function initNavbar() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

// ==========================================================================
// CORE CART LOGIC
// ==========================================================================
function updateCartCount() {
    const counts = document.querySelectorAll('#cart-count');
    const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);
    counts.forEach(el => el.textContent = totalQty);
    localStorage.setItem('dezato_cart', JSON.stringify(cart));
}

function addToCart(id) {
    const product = menuData.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartCount();
    alert(`${product.name} has been added to your cart!`);
}

function updateQuantity(id, change) {
    const item = cart.find(item => item.id === id);
    if (!item) return;

    item.quantity += change;
    if (item.quantity <= 0) {
        cart = cart.filter(i => i.id !== id);
    }
    updateCartCount();
    renderCartPage();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartCount();
    renderCartPage();
}

// ==========================================================================
// PAGE INITIALIZERS & RENDERERS
// ==========================================================================

// Home Page Elements Filtered
function initHomePage() {
    const fWaffles = menuData.filter(p => p.category === 'waffles').slice(0, 3);
    const fPancakes = menuData.filter(p => p.category === 'pancakes').slice(0, 3);
    const fCoffee = menuData.filter(p => p.category === 'coffee').slice(0, 2);

    renderCardGrid(document.getElementById('featured-waffles'), fWaffles);
    renderCardGrid(document.getElementById('featured-pancakes'), fPancakes);
    renderCardGrid(document.getElementById('coffee-pick'), fCoffee);
}

// Menu Catalog Dynamic Generation
function initMenuPage() {
    const grid = document.getElementById('menu-grid');
    renderCardGrid(grid, menuData);

    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            const category = e.target.dataset.filter;
            const filtered = category === 'all' ? menuData : menuData.filter(p => p.category === category);
            renderCardGrid(grid, filtered);
        });
    });
}

// General Card Generator
function renderCardGrid(container, items) {
    if (!container) return;
    container.innerHTML = items.map(item => `
        <div class="card">
            <div class="card-img">
                <img src="${item.img}" alt="${item.name}" loading="lazy">
            </div>
            <div class="card-info">
                <div>
                    <div class="card-title-row">
                        <h3>${item.name}</h3>
                        <span class="price">₹${item.price}</span>
                    </div>
                    <p>${item.desc}</p>
                </div>
                <button class="btn" onclick="addToCart('${item.id}')">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// Cart UI Assembly
function renderCartPage() {
    const itemsContainer = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    if (!itemsContainer) return;

    if (cart.length === 0) {
        itemsContainer.innerHTML = `<p style="text-align:center; padding: 2rem; color:var(--text-muted);">Your cart is empty. Let's add some desserts!</p>`;
        if (totalEl) totalEl.textContent = '₹0';
        return;
    }

    itemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img class="cart-item-img" src="${item.img}" alt="${item.name}">
            <div>
                <h4>${item.name}</h4>
                <span class="price">₹${item.price}</span>
            </div>
            <div class="qty-controls">
                <button class="qty-btn" onclick="updateQuantity('${item.id}', -1)">-</button>
                <span>${item.quantity}</span>
                <button class="qty-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
            </div>
            <button class="remove-btn" onclick="removeFromCart('${item.id}')">✕ Remove</button>
        </div>
    `).join('');

    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    if (totalEl) totalEl.textContent = `₹${total}`;
}

// ==========================================================================
// WHATSAPP OUTBOUND GATEWAY
// ==========================================================================
function checkoutWhatsApp() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let textMessage = `*New Order from OnePiece Dezato*%0A`;
    textMessage += `=========================%0A`;
    
    cart.forEach((item, index) => {
        textMessage += `${index + 1}. *${item.name}* x ${item.quantity} -> _₹${item.price * item.quantity}_%0A`;
    });

    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    textMessage += `=========================%0A`;
    textMessage += `*Grand Total: ₹${total}*%0A%0A`;
    textMessage += `Please process my order. Thank you!`;

    const cleanNumber = WHATSAPP_NUMBER.replace('+', '');
    const apiURL = `https://api.whatsapp.com/send?phone=${cleanNumber}&text=${textMessage}`;
    
    // Clear cart post-redirect intent
    localStorage.removeItem('dezato_cart');
    cart = [];
    updateCartCount();

    window.open(apiURL, '_blank');
}