// Initialize map when document is ready
document.addEventListener('DOMContentLoaded', init);

function init() {
	// Get the HTML DOM element that will contain your map
	var mapElement = document.getElementById('map');

	if (!mapElement) return;

	// Create Leaflet map with OpenStreetMap
	var map = L.map('map').setView([40.6700, -73.9410], 11);

	// Add OpenStreetMap tiles
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		maxZoom: 19
	}).addTo(map);

	// Add a marker
	L.marker([40.6700, -73.9410]).addTo(map)
		.bindPopup('Hello!')
		.openPopup();
}