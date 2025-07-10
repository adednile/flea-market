 let products = [
      {
        id: Date.now(),
        name: "Handmade Necklace",
        price: "Ksh 800",
        image: "Images/Handmade Necklace.jpg",
        alt: "Handmade beaded necklace with colorful stones"
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
          <button class="btn btn-danger add-product">+ Add Product</button>
        </section>
        
        <div id="productModal" class="modal" style="display:none;">
          <div class="modal-content">
            <div class="modal-header">
              <h3 id="modalTitle">Add New Product</h3>
              <span class="close-modal">&times;</span>
            </div>
            
            <div class="modal-body">
              <form id="productForm">
                <input type="hidden" id="productId">
                <div class="form-group">
                  <label for="productName">Product Name</label>
                  <input type="text" id="productName" required>
                </div>
                <div class="form-group">
                  <label for="productPrice">Price</label>
                  <input type="text" id="productPrice" required>
                </div>
                <div class="form-group">
                  <label for="productDescription">Description</label>
                  <textarea id="productDescription"></textarea>
                </div>
                
                <div id="dropzone" class="dropzone">
                  <p>Drag and drop product image here</p>
                  <p>or</p>
                  <button type="button" class="btn btn-danger select-files">Select Image</button>
                  <input type="file" id="fileInput" accept="image/*" style="display:none">
                </div>
                
                <div id="filePreview"></div>
              </form>
            </div>
            
            <div class="modal-footer">
              <button type="submit" form="productForm" class="btn btn-danger" id="submitBtn">Save Product</button>
            </div>
          </div>
        </div>
        
        <section class="product-grid" id="productGrid"></section>
      </div>
    `;

    // Append to app
    document.getElementById("app").append(header, main);

    // DOM elements
    const elements = {
      dropzone: document.getElementById('dropzone'),
      fileInput: document.getElementById('fileInput'),
      filePreview: document.getElementById('filePreview'),
      selectFilesBtn: document.querySelector('.select-files'),
      productModal: document.getElementById('productModal'),
      addProductBtn: document.querySelector('.add-product'),
      closeModal: document.querySelector('.close-modal'),
      productForm: document.getElementById('productForm'),
      productGrid: document.getElementById('productGrid'),
      modalTitle: document.getElementById('modalTitle'),
      submitBtn: document.getElementById('submitBtn'),
      productId: document.getElementById('productId')
    };

    let uploadedFile = null;
    let isEditing = false;
    let currentProductId = null;

    // Initialize the app
    function init() {
      renderProducts();
      setupEventListeners();
    }

    // Render all products
    function renderProducts() {
      elements.productGrid.innerHTML = '';
      products.forEach(product => {
        renderProduct(product);
      });
    }

    // Render single product
    function renderProduct(product) {
      const productCard = document.createElement('article');
      productCard.className = 'product-card';
      productCard.dataset.id = product.id;
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.alt}">
        <div class="product-details">
          <h3>${product.name}</h3>
          <p>${product.price}</p>
          <div class="card-actions">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
          </div>
        </div>
      `;
      elements.productGrid.appendChild(productCard);
    }

    // Setup event listeners
    function setupEventListeners() {
      // File upload handlers
      elements.dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        elements.dropzone.classList.add('hover');
      });

      elements.dropzone.addEventListener('dragleave', () => {
        elements.dropzone.classList.remove('hover');
      });

      elements.dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        elements.dropzone.classList.remove('hover');
        handleFiles(e.dataTransfer.files);
      });

      elements.fileInput.addEventListener('change', () => handleFiles(elements.fileInput.files));
      elements.selectFilesBtn.addEventListener('click', () => elements.fileInput.click());

      // Modal controls
      elements.addProductBtn.addEventListener('click', () => openAddModal());
      elements.closeModal.addEventListener('click', closeModal);
      window.addEventListener('click', (e) => {
        if (e.target === elements.productModal) closeModal();
      });

      // Form submission
      elements.productForm.addEventListener('submit', handleFormSubmit);

      // Delegated event listeners for edit/delete buttons
      elements.productGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
          const productCard = e.target.closest('.product-card');
          deleteProduct(productCard.dataset.id);
        } else if (e.target.classList.contains('edit-btn')) {
          const productCard = e.target.closest('.product-card');
          openEditModal(productCard.dataset.id);
        }
      });
    }

    // Handle file selection
    function handleFiles(files) {
      if (files.length) {
        uploadedFile = files[0];
        elements.filePreview.innerHTML = `
          <div class="preview-item">
            <img src="${URL.createObjectURL(uploadedFile)}" alt="Preview">
            <p>${uploadedFile.name} (${Math.round(uploadedFile.size / 1024)} KB)</p>
          </div>
        `;
      }
    }

    // Open modal for adding new product
    function openAddModal() {
      isEditing = false;
      elements.modalTitle.textContent = 'Add New Product';
      elements.submitBtn.textContent = 'Save Product';
      elements.productModal.style.display = 'block';
    }

    // Open modal for editing product
    function openEditModal(productId) {
      const product = products.find(p => p.id == productId);
      if (!product) return;

      isEditing = true;
      currentProductId = productId;
      elements.modalTitle.textContent = 'Edit Product';
      elements.submitBtn.textContent = 'Update Product';
      
      // Fill form with product data
      elements.productId.value = product.id;
      document.getElementById('productName').value = product.name;
      document.getElementById('productPrice').value = product.price;
      document.getElementById('productDescription').value = product.description || '';
      
      // Show current image if exists
      elements.filePreview.innerHTML = `
        <div class="preview-item">
          <img src="${product.image}" alt="Current Image">
          <p>Current product image</p>
        </div>
      `;
      
      elements.productModal.style.display = 'block';
    }

    // Handle form submission
    function handleFormSubmit(e) {
      e.preventDefault();
      
      const productData = {
        id: isEditing ? currentProductId : Date.now(),
        name: document.getElementById('productName').value,
        price: document.getElementById('productPrice').value,
        description: document.getElementById('productDescription').value,
        image: uploadedFile ? URL.createObjectURL(uploadedFile) : 
              (isEditing ? products.find(p => p.id == currentProductId).image : 'Images/placeholder.jpg'),
        alt: `Image of ${document.getElementById('productName').value}`
      };
      
      if (isEditing) {
        // Update existing product
        const index = products.findIndex(p => p.id == currentProductId);
        if (index !== -1) {
          products[index] = productData;
        }
      } else {
        // Add new product
        products.push(productData);
      }
      
      renderProducts();
      closeModal();
    }

    // Delete product
    function deleteProduct(productId) {
      if (confirm('Are you sure you want to delete this product?')) {
        products = products.filter(product => product.id != productId);
        renderProducts();
      }
    }

    // Close modal and reset form
    function closeModal() {
      elements.productModal.style.display = 'none';
      resetForm();
    }

    // Reset form
    function resetForm() {
      elements.productForm.reset();
      elements.filePreview.innerHTML = '';
      uploadedFile = null;
      isEditing = false;
      currentProductId = null;
      elements.productId.value = '';
    }

    // Initialize the application
    init();
 
