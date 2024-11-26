// Check if the map container exists
const mapContainer = document.getElementById('interactive-map');
if (mapContainer) {
    // Initialize the map
    const map = L.map('interactive-map').setView([0, 0], 2);

    // Add a tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add markers
    const locations = [
        { name: "Ocean Cleanup", coords: [51.505, -0.09] },
        { name: "Green Building Initiative", coords: [48.8566, 2.3522] },
        { name: "Coral Reef Restoration", coords: [-25.2744, 133.7751] }
    ];

    locations.forEach(location => {
        L.marker(location.coords).addTo(map)
            .bindPopup(`<b>${location.name}</b>`);
    });
}



// Highlight active navigation link
const currentLocation = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentLocation.split('/').pop()) {
        link.classList.add('active');
    }
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


