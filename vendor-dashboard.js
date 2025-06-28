let products = [
  {
    name: "Handmade Necklace",
    price: "Ksh 500",
    image: "./Images/Handmade Necklace.jpg",
    alt: "Handmade beaded necklace with colorful stones"
  },
  {
    name: "Vintage T-Shirt",
    price: "Ksh 1500",
    image: "./Images/Vintage T-shirt.jpg",
    alt: "Vintage band t-shirt from the 1990s"
  },
  {
    name: "Art Poster",
    price: "Ksh 1000",
    image: "./Images/Art  Poster.png",
    alt: "Modern art poster featuring abstract design"
  }
];

function createProductCard(product, index) {
  const article = document.createElement("article");
  article.className = "product-card";

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.alt;

  const details = document.createElement("div");
  details.className = "product-details";

  const title = document.createElement("h3");
  title.textContent = product.name;

  const price = document.createElement("p");
  price.textContent = product.price;

  const actions = document.createElement("div");
  actions.className = "card-actions";

  const editBtn = document.createElement("button");
  editBtn.className = "edit-btn";
  editBtn.setAttribute("aria-label", "Edit product details");
  editBtn.textContent = "Edit";
  editBtn.onclick = () => editProduct(index);

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.setAttribute("aria-label", "Delete product");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => deleteProduct(index);

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  details.appendChild(title);
  details.appendChild(price);
  details.appendChild(actions);

  article.appendChild(img);
  article.appendChild(details);

  return article;
}

function renderProducts() {
  const productGrid = document.querySelector(".product-grid");
  productGrid.innerHTML = ""; // Clear old content
  products.forEach((product, index) => {
    productGrid.appendChild(createProductCard(product, index));
  });
}

function deleteProduct(index) {
  if (confirm("Are you sure you want to delete this product?")) {
    products.splice(index, 1);
    renderProducts();
  }
}

function editProduct(index) {
  const current = products[index];
  const name = prompt("Enter product name:", current.name);
  const price = prompt("Enter product price:", current.price);
  const image = prompt("Enter image URL or path:", current.image);
  const alt = prompt("Enter image alt text:", current.alt);

  if (name && price && image && alt) {
    products[index] = { name, price, image, alt };
    renderProducts();
  }
}

function addProduct() {
  const name = prompt("Enter product name:");
  const price = prompt("Enter product price:");
  const image = prompt("Enter image URL or path:");
  const alt = prompt("Enter image alt text:");

  if (name && price && image && alt) {
    products.push({ name, price, image, alt });
    renderProducts();
  }
}

function buildDashboard() {
  const container = document.createElement("div");

  // Header
  const header = document.createElement("header");
  header.className = "site-header";

  const headerContainer = document.createElement("div");
  headerContainer.className = "container";

  const branding = document.createElement("div");
  branding.className = "branding";
  branding.innerHTML = `
    <h1 class="site-title">Flea Market</h1>
    <p class="site-tagline">Connecting vendors with potential customers</p>
    <span class="vendor-welcome">Welcome, Vendor!</span>
  `;

  const logoutContainer = document.createElement("div");
  logoutContainer.className = "logout-container";
  const logoutBtn = document.createElement("button");
  logoutBtn.className = "btn btn-danger";
  logoutBtn.textContent = "Logout";
  logoutContainer.appendChild(logoutBtn);

  headerContainer.appendChild(branding);
  headerContainer.appendChild(logoutContainer);
  header.appendChild(headerContainer);
  container.appendChild(header);

  // Main
  const main = document.createElement("main");
  const mainContainer = document.createElement("div");
  mainContainer.className = "container welcome";

  const dashboardHeader = document.createElement("section");
  dashboardHeader.className = "dashboard-header";
  dashboardHeader.innerHTML = `<h2>My Products</h2>`;
  const addBtn = document.createElement("button");
  addBtn.className = "btn btn-danger add-product";
  addBtn.setAttribute("aria-label", "Add new product");
  addBtn.textContent = "+ Add Product";
  addBtn.onclick = addProduct;
  dashboardHeader.appendChild(addBtn);

  const productGrid = document.createElement("section");
  productGrid.className = "product-grid";

  mainContainer.appendChild(dashboardHeader);
  mainContainer.appendChild(productGrid);
  main.appendChild(mainContainer);
  container.appendChild(main);

  document.getElementById("app").appendChild(container);

  renderProducts(); // Initial render
}

// Run
buildDashboard();
