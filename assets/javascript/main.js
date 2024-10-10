const products = {
    category1: [
        {image: "./assets/images/painting.png", link: "google.com"},
        {image: "./assets/images/painting.png"},
    ],
    category2: [
        {image: "./assets/images/painting2.png"},
        {image: "./assets/images/painting2.png"},
    ],
    category3: [
        {image: "./assets/images/painting3.png"},
        {image: "./assets/images/painting3.png"},
    ],
    category4: [
        {image: "./assets/images/painting4.png"},
        {image: "./assets/images/painting4.png"},
    ],
    category5: [
        {image: "./assets/images/painting5.png"},
        {image: "./assets/images/painting5.png"},
    ],
    category6: [
        {image: "./assets/images/painting2.png"},
        {image: "./assets/images/painting2.png"},
    ]
};

// Reference to the category menu and product display
const categoryMenu = document.querySelector('.category-menu');
const productDisplay = document.querySelector('.product-display');

// Function to display products based on selected category
function displayProducts(category) {
    productDisplay.innerHTML = ''; // Clear the display
    products[category].forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <a href="${product.link || '#'}">
                <img src="${product.image}" alt="${product.name || 'Product'}" />
            </a>
        `;
        productDisplay.appendChild(productItem);
    });
}

// Event listener for category selection
categoryMenu.addEventListener('click', function(event) {
    event.preventDefault();
    const category = event.target.getAttribute('data-category');
    if (category) {
        displayProducts(category); // Update display based on the selected category
    }
});

// Display category1 by default when the page loads
displayProducts('category1');
