let products = JSON.parse(localStorage.getItem("fleaMarketProducts")) ||[
  {
    name: "Handmade Necklace",
    price: "Ksh 1000",
    image: "Images/Handmade Necklace.jpg",
    alt: "Handmade beaded necklace with colorful stones"
  },
  {
    name: "Vintage T-Shirt",
    price: "Ksh 1500",
    image: "Images/Vintage T-shirt.jpg",
    alt: "Vintage band t-shirt from the 1990s"
  },
  {
    name: "Art Poster",
    price: "Ksh 800",
    image: "Images/Art-Poster.png",
    alt: "Modern art poster featuring abstract design"
  }
];

// Create header
const header = document.createElement("header");
header.className = "site-header";
header.innerHTML = `
  <div class="container">
    <div class="branding">
      <h1 class="site-title">Flea Market</h1>
      <p class="site-tagline">Connecting vendors with potential customers</p>
      <span class="vendor-welcome">Welcome, Vendor!</span>
    </div>
    <div class="logout-container">
      <button class="btn btn-danger">Logout</button>
    </div>
  </div>
`;

// Create main section
const main = document.createElement("main");
main.innerHTML = `
  <div class="container welcome">
    <section class="dashboard-header">
      <h2>My Products</h2>
      <button class="btn btn-danger add-product" aria-label="Add new product">+ Add Product</button>
    </section>
    <section class="product-grid" id="productGrid"></section>
  </div>
`;

// Append header and main to app
const app = document.getElementById("app");
app.appendChild(header);
app.appendChild(main);

// Populate product cards
const productGrid = document.getElementById("productGrid");

function saveProducts() {
  localStorage.setItem("fleaMarketProducts", JSON.stringify(products));
}
function renderProducts() {
  productGrid.innerHTML = "";
  products.forEach((product, index) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.alt}">
      <div class="product-details">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <div class="card-actions">
          <button class="btn btn-edit" data-index="${index}">Edit</button>
          <button class="btn btn-danger btn-delete" data-index="${index}">Delete</button>
        </div>
      </div>
    `;
    productGrid.appendChild(card);

    // Delete button
    card.querySelector(".btn-delete").addEventListener("click", () => {
      products.splice(index, 1);
      saveProducts(); // Save after deletion
      renderProducts();
    });

    // Edit button
    card.querySelector(".btn-edit").addEventListener("click", () => {
      editProduct(index);
    });
  });
}

// Edit Product Function
function editProduct(index) {
  const product = products[index];
  
  // Create a modal or form for editing
  const editForm = document.createElement("div");
  editForm.className = "edit-form";
  editForm.innerHTML = `
    <h3>Edit Product</h3>
    <form id="editProductForm">
      <label>Name: <input type="text" name="name" value="${product.name}" required></label>
      <label>Price: <input type="text" name="price" value="${product.price}" required></label>
      <label>Image URL: <input type="text" name="image" value="${product.image}" required></label>
      <label>Alt Text: <input type="text" name="alt" value="${product.alt}" required></label>
      <div class="form-actions">
        <button type="submit">Save</button>
        <button type="button" class="cancel-btn">Cancel</button>
      </div>
    </form>
  `;

  // Append form to the body (or use a modal)
  document.body.appendChild(editForm);

  // Handle form submission
  const form = editForm.querySelector("#editProductForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    
    // Update the product
    products[index] = {
      name: formData.get("name"),
      price: formData.get("price"),
      image: formData.get("image"),
      alt: formData.get("alt")
    };

    // Re-render products and remove the form
    renderProducts();
    editForm.remove();
  });

  // Handle cancel
  editForm.querySelector(".cancel-btn").addEventListener("click", () => {
    editForm.remove();
  });
}

// Initial render
renderProducts();

// Add new product button functionality (optional)
document.querySelector(".add-product").addEventListener("click", () => {
  const newProduct = {
    name: "New Product",
    price: "$0.00",
    image: "Images/placeholder.jpg",
    alt: "New product image"
  };
  products.push(newProduct);
  renderProducts();
});
