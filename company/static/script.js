// Sample data (can be fetched dynamically from an API)
const products = [
    { id: 1, name: "Smartphone", description: "High-end smartphone.", price: "699", category: "electronics" },
    { id: 2, name: "Laptop", description: "Powerful Laptop for Work.", price: "1299", category: "electronics" },
    { id: 3, name: "T-Shirt", description: "Cotton T-Shirt.", price: "25", category: "clothing" },
    { id: 4, name: "Jeans", description: "Denim Jeans.", price: "50", category: "clothing" },
    { id: 5, name: "Coffee Maker", description: "Automatic Coffee Maker.", price: "99", category: "home" }
  ];
  
  // Function to display products
  function displayProducts(productList) {
    const productContainer = document.getElementById("product-list");
    productContainer.innerHTML = ""; // Clear existing products
  
    productList.forEach(product => {
      const productDiv = document.createElement("div");
      productDiv.className = "product";
  
      productDiv.innerHTML = `
        <div>
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p><strong>Price:</strong> ${product.price}</p>
        </div>
        <button class="details-button" onclick="showDetails('${product.name}')">Details</button>
      `;
  
      productContainer.appendChild(productDiv);
    });
  }
  
  // Filter products by name
  function filterProducts() {
    const searchValue = document.getElementById("search-bar").value.toLowerCase();
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchValue)
    );
    displayProducts(filteredProducts);
  }
  
  // Fetch and filter products by category
  function fetchProducts() {
    const category = document.getElementById("category-filter").value;
    const filteredProducts = category
      ? products.filter(product => product.category === category)
      : products;
    displayProducts(filteredProducts);
  }
  
  // Show product details in modal
  function showDetails(productName) {
    const product = products.find(p => p.name === productName);
    if (product) {
      const modalDetails = document.getElementById("modal-details");
      modalDetails.innerHTML = `
        <h2>${product.name}</h2>
        <p><strong>Description:</strong> ${product.description}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Category:</strong> ${product.category}</p>
      `;
      openModal();
    }
  }
  
  // Open modal
  function openModal() {
    document.getElementById("product-modal").style.display = "block";
  }
  
  // Close modal
  function closeModal() {
    document.getElementById("product-modal").style.display = "none";
  }
  
  // Close modal when clicking outside content
  window.onclick = function(event) {
    const modal = document.getElementById("product-modal");
    if (event.target === modal) {
      closeModal();
    }
  };
  
  // Initial product display
  displayProducts(products);
  