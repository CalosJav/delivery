const products = [
    { id: 1, name: "Pizza", price: 10 },
    { id: 2, name: "Burger", price: 8 },
    { id: 3, name: "Salad", price: 6 }
];

// Función para mostrar productos en la página
function showProducts() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "<h2>Products</h2>";
    
    // Generar HTML para cada producto
    products.forEach(product => {
        contentDiv.innerHTML += `
            <div>
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
    });
}

// Función para agregar productos al carrito
function addToCart(productId) {
    // Lógica para agregar productos al carrito
}

// Mostrar productos al cargar la página
window.onload = showProducts;