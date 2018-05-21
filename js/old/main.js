// Load the tile images from OpenStreetMap
var mytiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
});
// Initialise an empty map
var map = L.map('map')

// Read the GeoJSON data with jQuery, and create a circleMarker element for each tweet
$.getJSON("../data/maternelles.geojson", function(data) {
    var myStyle = {
        radius: 2,
        fillColor: "red",
        color: "red",
        weight: 1,
        opacity: 1,
        fillOpacity: 1
    };
 
    var geojson = L.geoJson(data, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, myStyle);
        }
    });
    geojson.addTo(map)
});
// Add the tiles to the map, and initialise the view in the middle of Europe
map.addLayer(mytiles).setView([47.08, 2.39], 6);



var map = L.map('map').setView([47.08, 2.39], 6);
var CM = L.tileLayer('http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    key: "xxxxxxxxxxxx",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    styleId: 22677
    }).addTo(map);

var myLayer = L.geoJSON().addTo(map);
myLayer.addData(geojsonFeatureCollection);

/*var map = L.map('map');
//var terrainTiles = L.tileLayer.provider('OpenTopoMap');
var terrainTiles =  L.tileLayer('http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    key: "xxxxxxxxxxxx",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    styleId: 22677
    })
terrainTiles.addTo(map);*/

// Set the initial viewport of the map. Here we're centering on Savas Labs' hometown and zooming out a bit.
//map.setView([35.9908385, -78.9005222], 8);

/*function addDataToMap(data, map) {
    var dataLayer = L.geoJson(data);
    dataLayer.addTo(map);
}*/


        
var map = L.map('map').setView([47.08, 2.39], 6);
/*var map = L.map('map', {
    center: [47.08, 2.39],
    zoom: 6,
    layers: [paris_age_layer]});*/

var CM = L.tileLayer('http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    key: "xxxxxxxxxxxx",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    styleId: 22677
    }).addTo(map);
  /*  var dataLayer = L.geoJson(data, {
        onEachFeature: function(feature, layer) {
            var popupText = "Secrétariat" + feature.features.secretariat
                + "<br" + feature.features.adresse
                + "<br" +  feature.features.code_postal + " " + feature.features.commune;
            layer.bindPopup(popupText); }
        });
        features
    dataLayer.addTo(map);
}*/