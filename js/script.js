//----------mapboxJS only----------------
L.mapbox.accessToken = 'pk.eyJ1Ijoic2FuZGVyaGEiLCJhIjoiYTNlMjlhOGEwNDY2YTlmYzNlNzhkOWYxZTUxOWE0ZmIifQ.yK-bfV5jZuMas5A_upETDg';
var map = L.mapbox.map('map', 'mapbox.streets')
    .setView([29.950, -90.066], 13);

var marker;

var createMarker = function(e) {
	console.log('in else');
	var coord = e.latlng;
	console.log('lat: ' + coord.lat + ' long: ' + coord.lng);
	marker = new L.Marker(coord);
	map.addLayer(marker);

	//L.marker([coord.lat, coord.lng]).addTo(map);
};

map.on('click', function(e) {
	if (marker) {
		map.removeLayer(marker);
		marker = null;
		createMarker(e);
	} else {
		createMarker(e);
	}
});


//----------------------leaflet
/*
var map = L.map('map').setView([29.932, -90.01], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/sanderha.mnb1ejnn.json?access_token=pk.eyJ1Ijoic2FuZGVyaGEiLCJhIjoiYTNlMjlhOGEwNDY2YTlmYzNlNzhkOWYxZTUxOWE0ZmIifQ.yK-bfV5jZuMas5A_upETDg', {
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'sanderha.mnb1ejnn',
    accessToken: 'pk.eyJ1Ijoic2FuZGVyaGEiLCJhIjoiYTNlMjlhOGEwNDY2YTlmYzNlNzhkOWYxZTUxOWE0ZmIifQ.yK-bfV5jZuMas5A_upETDg'
}).addTo(map);
*/
