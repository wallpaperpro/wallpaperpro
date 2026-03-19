const wallpapers = [
    {
        title: "Mountain Sunset",
        category: "nature",
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b", // Replace with your image link
        download: "https://shrinkme.io/example1" // Replace with your Ad-shortlink
    },
    {
        title: "Neon Sportscar",
        category: "cars",
        url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
        download: "https://shrinkme.io/example2"
    }
    // ADD NEW WALLPAPERS HERE
];

function displayWallpapers(filter = 'all') {
    const grid = document.getElementById('wallpaper-grid');
    grid.innerHTML = '';

    const filtered = filter === 'all' ? wallpapers : wallpapers.filter(w => w.category === filter);

    filtered.forEach(w => {
        grid.innerHTML += `
            <div class="card">
                <img src="${w.url}" alt="${w.title}">
                <div class="card-info">
                    <h3>${w.title}</h3>
                    <a href="${w.download}" target="_blank" class="download-btn">Download Free</a>
                </div>
            </div>
        `;
    });
}

function filterCategory(cat) {
    displayWallpapers(cat);
}

// Start the site
displayWallpapers();