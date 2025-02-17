// Initialize Feather Icons
feather.replace();

// Categories data
const categories = [
    { id: 1, name: 'Lehenga', image: "lehenga.jpg" },
    { id: 2, name: 'Anarkali', image: 'anarkali.jpg' },
    { id: 3, name: 'Gowns', image: 'goun.jpg' },
    { id: 4, name: 'Sarees', image: 'saare.jpg' },
    { id: 5, name: 'Plazo', image: 'plazo.jpg' },
    { id: 6, name: 'Traditional', image: 'traditional.jpg' },
    { id: 7, name: 'Western', image: 'western.jpg' },
    { id: 8, name: 'Jump Suit', image: 'jumpsuit.jpg' },
    { id: 9, name: 'Suits & Blazers', image: 'suits and blazers.jpg' },
    { id: 10, name: 'Kurta', image: 'kurta.jpg' },
    { id: 11, name: 'Sherwani', image: 'sherwani.jpg' },
    { id: 12, name: 'Accessories', image: 'access.jpg' },
];

// Populate categories
const categoriesGrid = document.getElementById('categoriesGrid');

categories.forEach(category => {
    const categoryElement = document.createElement('div');
    categoryElement.className = 'category-item';
    
    categoryElement.innerHTML = `
        <div class="category-image-container">
            <img src="${category.image}" alt="${category.name}" class="category-image">
            <div class="category-overlay"></div>
        </div>
        <h3 class="category-name">${category.name}</h3>
    `;
    
    categoriesGrid.appendChild(categoryElement);
});

// Add hover effects and interactions
document.querySelectorAll('.category-item').forEach(item => {
    item.addEventListener('click', () => {
        // Add click handling here
        console.log('Category clicked:', item.querySelector('.category-name').textContent);
    });
});

document.querySelectorAll('.gender-item').forEach(item => {
    item.addEventListener('click', () => {
        // Add click handling here
        console.log('Gender section clicked:', item.querySelector('h2').textContent);
    });
});

// Add search functionality
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    // Add search handling here
    console.log('Searching for:', searchTerm);
});

// Add icon button interactions
document.querySelectorAll('.icon-button').forEach(button => {
    button.addEventListener('click', () => {
        // Add click handling here
        console.log('Icon button clicked:', button.querySelector('i').dataset.feather);
    });
});
