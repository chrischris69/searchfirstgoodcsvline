/*var mymap = L.map('map').setView([47.08, 2.39], 6);

L.tileLayer('http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    key: "xxxxxxxxxxxx",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    styleId: 22677
    }).addTo(mymap);*/

var mymap = L.map('map').setView([47.08, 2.39], 6);

var CM = L.tileLayer('http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    key: "xxxxxxxxxxxx",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    styleId: 22677
    }).addTo(mymap);

L.marker([45.0, 3.0]).addTo(mymap);

// Read the GeoJSON data with jQuery, and create a circleMarker element for each tweet
/*$.getJSON("../data/maternelles.geojson", function(data) {
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
            //return L.marker(latlng);
        }
    });
    geojson.addTo(mymap)
});*/

/*var geojsonLayer = new L.GeoJSON.AJAX("../data/maternelles.geojson");       
geojsonLayer.addTo(mymap);*/

var geojsonLayer = {
    "type": "FeatureCollection",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "gml_id": "1", "id": 29, "secretariat": "SAINT-OUEN-ILE-SAINT-DENIS", "adresse": "4 rue Henri Barbusse", "code_postal": 93400, "commune": "SAINT-OUEN", "num_tel": "01 40 12 09 85", "code_insee": 93070, "geo_x": 2.33161, "geo_y": 48.90776 }, "geometry": { "type": "Point", "coordinates": [ 2.33157319778903, 48.907828004313629 ] } },
    { "type": "Feature", "properties": { "gml_id": "2", "id": 10, "secretariat": "GAGNY", "adresse": "23 rue Henri Barbusse", "code_postal": 93220, "commune": "GAGNY", "num_tel": "01 43 81 07 10", "code_insee": 93032, "geo_x": 2.53063, "geo_y": 48.8854 }, "geometry": { "type": "Point", "coordinates": [ 2.531105270899288, 48.885251968239118 ] } },
    { "type": "Feature", "properties": { "gml_id": "3", "id": 32, "secretariat": "TREMBLAY-EN-FRANCE-VAUJOURS", "adresse": "13 bis Cour de la République", "code_postal": 93290, "commune": "TREMBLAY-EN-FRANCE", "num_tel": "01 71 29 44 62", "code_insee": 93073, "geo_x": 2.56649, "geo_y": 48.9493 }, "geometry": { "type": "Point", "coordinates": [ 2.567151241501289, 48.950412336465746 ] } },
    { "type": "Feature", "properties": { "gml_id": "4", "id": 3, "secretariat": "BAGNOLET", "adresse": "6 rue Sadi Carnot", "code_postal": 93170, "commune": "BAGNOLET", "num_tel": "01 71 29 55 74", "code_insee": 93006, "geo_x": 2.4183, "geo_y": 48.86619 }, "geometry": { "type": "Point", "coordinates": [ 2.418088299646446, 48.86625636091334 ] } },
    { "type": "Feature", "properties": { "gml_id": "5", "id": 17, "secretariat": "MONTREUIL", "adresse": "14 rue de la Beaune", "code_postal": 93100, "commune": "MONTREUIL", "num_tel": "01 71 29 57 31", "code_insee": 93048, "geo_x": 2.43608, "geo_y": 48.86219 }, "geometry": { "type": "Point", "coordinates": [ 2.436080002340861, 48.862189972634667 ] } },
    { "type": "Feature", "properties": { "gml_id": "6", "id": 22, "secretariat": "NOISY-LE-SEC", "adresse": "54-60 avenue Gallieni", "code_postal": 93130, "commune": "NOISY-LE-SEC", "num_tel": "01 71 29 20 42", "code_insee": 93053, "geo_x": 2.46565, "geo_y": 48.90137 }, "geometry": { "type": "Point", "coordinates": [ 2.464861382819307, 48.899677166242725 ] } },
    { "type": "Feature", "properties": { "gml_id": "7", "id": 1, "secretariat": "AUBERVILLIERS", "adresse": "50 rue Heurtault", "code_postal": 93300, "commune": "AUBERVILLIERS", "num_tel": "01 71 29 52 95", "code_insee": 93001, "geo_x": 2.37721, "geo_y": 48.9151 }, "geometry": { "type": "Point", "coordinates": [ 2.377210045105197, 48.915099965104254 ] } },
    { "type": "Feature", "properties": { "gml_id": "8", "id": 8, "secretariat": "DRANCY", "adresse": "21 rue Voltaire", "code_postal": 93700, "commune": "DRANCY", "num_tel": "01 71 29 43 58", "code_insee": 93029, "geo_x": 2.43442, "geo_y": 48.91416 }, "geometry": { "type": "Point", "coordinates": [ 2.434526298278556, 48.914362608476644 ] } },
    { "type": "Feature", "properties": { "gml_id": "9", "id": 4, "secretariat": "BLANC-MESNIL", "adresse": "2 place de la Libération", "code_postal": 93150, "commune": "BLANC-MESNIL", "num_tel": "01 71 29 20 46", "code_insee": 93007, "geo_x": 2.46687, "geo_y": 48.94323 }, "geometry": { "type": "Point", "coordinates": [ 2.466514705302931, 48.943218908026587 ] } },
    { "type": "Feature", "properties": { "gml_id": "10", "id": 11, "secretariat": "LA COURNEUVE", "adresse": "76 rue de la Convention", "code_postal": 93120, "commune": "LA COURNEUVE", "num_tel": "01 71 29 43 34", "code_insee": 93027, "geo_x": 2.39263, "geo_y": 48.92708 }, "geometry": { "type": "Point", "coordinates": [ 2.392205504092483, 48.927257114347157 ] } },
    { "type": "Feature", "properties": { "gml_id": "11", "id": 35, "secretariat": "VILLETANEUSE", "adresse": "3 rue Etienne Fajon", "code_postal": 93430, "commune": "VILLETANEUSE", "num_tel": "01 48 26 09 88", "code_insee": 93079, "geo_x": 2.34635, "geo_y": 48.96084 }, "geometry": { "type": "Point", "coordinates": [ 2.346622322537153, 48.960660835100057 ] } },
    { "type": "Feature", "properties": { "gml_id": "12", "id": 9, "secretariat": "EPINAY-SUR-SEINE", "adresse": "31 rue de l'Avenir", "code_postal": 93800, "commune": "EPINAY-SUR-SEINE", "num_tel": "01 71 29 57 29", "code_insee": 93031, "geo_x": 2.32845, "geo_y": 48.95607 }, "geometry": { "type": "Point", "coordinates": [ 2.329108010012126, 48.95600275942688 ] } },
    { "type": "Feature", "properties": { "gml_id": "13", "id": 12, "secretariat": "LE BOURGET-DUGNY", "adresse": "4 avenue Marcel-Dassault", "code_postal": 93350, "commune": "LE BOURGET", "num_tel": "01 71 29 43 52", "code_insee": 93013, "geo_x": 2.42874, "geo_y": 48.93594 }, "geometry": { "type": "Point", "coordinates": [ 2.428999687271405, 48.932255462810112 ] } },
    { "type": "Feature", "properties": { "gml_id": "14", "id": 16, "secretariat": "MONTFERMEIL", "adresse": "64 rue Henri Barbusse", "code_postal": 93370, "commune": "MONTFERMEIL", "num_tel": "01 71 29 23 06", "code_insee": 93047, "geo_x": 2.56919, "geo_y": 48.90077 }, "geometry": { "type": "Point", "coordinates": [ 2.569595069099418, 48.900939193939415 ] } },
    { "type": "Feature", "properties": { "gml_id": "15", "id": 25, "secretariat": "PIERREFITTE-SUR-SEINE", "adresse": "3 avenue du Général Galliéni", "code_postal": 93380, "commune": "PIERREFITTE-SUR-SEINE", "num_tel": "01 71 29 21 64", "code_insee": 93059, "geo_x": 2.36181, "geo_y": 48.96811 }, "geometry": { "type": "Point", "coordinates": [ 2.361810013484828, 48.968110005484242 ] } },
    { "type": "Feature", "properties": { "gml_id": "16", "id": 24, "secretariat": "LES PAVILLONS-SOUS-BOIS", "adresse": "1 allée Louis Calmanovic", "code_postal": 93320, "commune": "LES PAVILLONS-SOUS-BOIS", "num_tel": "01 71 29 23 96", "code_insee": 93057, "geo_x": 2.50275, "geo_y": 48.90993 }, "geometry": { "type": "Point", "coordinates": [ 2.502665438852938, 48.909625392080592 ] } },
    { "type": "Feature", "properties": { "gml_id": "17", "id": 21, "secretariat": "GOURNAY-SUR-MARNE", "adresse": "17 rue de l'Université", "code_postal": 93160, "commune": "NOISY-LE-GRAND", "num_tel": "01 71 29 22 44", "code_insee": 93051, "geo_x": 2.5754, "geo_y": 48.84546 }, "geometry": { "type": "Point", "coordinates": [ 2.552734503557438, 48.83754397959666 ] } },
    { "type": "Feature", "properties": { "gml_id": "18", "id": 30, "secretariat": "SEVRAN", "adresse": "15bis rue Salvador Allende", "code_postal": 93270, "commune": "SEVRAN", "num_tel": "01 71 29 24 31", "code_insee": 93071, "geo_x": 2.53528, "geo_y": 48.94697 }, "geometry": { "type": "Point", "coordinates": [ 2.535206421762691, 48.946902983341921 ] } },
    { "type": "Feature", "properties": { "gml_id": "19", "id": 13, "secretariat": "LE PRÉ SAINT-GERVAIS-LES LILAS", "adresse": "63 rue de Paris", "code_postal": 93310, "commune": "LE PRE SAINT-GERVAIS", "num_tel": "01 71 29 58 45", "code_insee": 93061, "geo_x": 2.41164, "geo_y": 48.87904 }, "geometry": { "type": "Point", "coordinates": [ 2.411628892691334, 48.878796376294808 ] } },
    { "type": "Feature", "properties": { "gml_id": "20", "id": 28, "secretariat": "SAINT-DENIS", "adresse": "22 place du Caquet", "code_postal": 93200, "commune": "SAINT-DENIS", "num_tel": "01 49 33 66 41", "code_insee": 93066, "geo_x": 2.35897, "geo_y": 48.93665 }, "geometry": { "type": "Point", "coordinates": [ 2.359153157800903, 48.936675287611216 ] } },
    { "type": "Feature", "properties": { "gml_id": "21", "id": 5, "secretariat": "BOBIGNY", "adresse": "8-22 rue du Chemin Vert", "code_postal": 93000, "commune": "BOBIGNY", "num_tel": "01 71 29 22 34", "code_insee": 93008, "geo_x": 2.44724, "geo_y": 48.90476 }, "geometry": { "type": "Point", "coordinates": [ 2.447289372793278, 48.904903085579669 ] } },
    { "type": "Feature", "properties": { "gml_id": "22", "id": 23, "secretariat": "PANTIN", "adresse": "30 rue Hoche", "code_postal": 93500, "commune": "PANTIN", "num_tel": "01 71 29 23 87", "code_insee": 93055, "geo_x": 2.40206, "geo_y": 48.89348 }, "geometry": { "type": "Point", "coordinates": [ 2.402060033994343, 48.893479960462479 ] } },
    { "type": "Feature", "properties": { "gml_id": "23", "id": 19, "secretariat": "NEUILLY-SUR-MARNE", "adresse": "10 avenue Léon Blum", "code_postal": 93330, "commune": "NEUILLY-SUR-MARNE", "num_tel": "01 71 29 58 04", "code_insee": 93050, "geo_x": 2.53335, "geo_y": 48.85546 }, "geometry": { "type": "Point", "coordinates": [ 2.538147653142239, 48.869503210099523 ] } },
    { "type": "Feature", "properties": { "gml_id": "24", "id": 14, "secretariat": "LE RAINCY", "adresse": "87 boulevard de l'Ouest", "code_postal": 93340, "commune": "LE RAINCY", "num_tel": "01 43 02 33 10", "code_insee": 93062, "geo_x": 2.51099, "geo_y": 48.90052 }, "geometry": { "type": "Point", "coordinates": [ 2.510989996396235, 48.900520002886275 ] } },
    { "type": "Feature", "properties": { "gml_id": "25", "id": 18, "secretariat": "NEUILLY-PLAISANCE", "adresse": "3 square Jean Mermoz", "code_postal": 93360, "commune": "NEUILLY-PLAISANCE", "num_tel": "01 71 29 23 67", "code_insee": 93049, "geo_x": 2.50873, "geo_y": 48.86154 }, "geometry": { "type": "Point", "coordinates": [ 2.508824942258749, 48.861327476628787 ] } },
    { "type": "Feature", "properties": { "gml_id": "26", "id": 34, "secretariat": "VILLEPINTE", "adresse": "2 avenue Salvador Allende", "code_postal": 93420, "commune": "VILLEPINTE", "num_tel": "01 71 29 24 46", "code_insee": 93078, "geo_x": 2.54865, "geo_y": 48.9551 }, "geometry": { "type": "Point", "coordinates": [ 2.548402509908688, 48.955044672643218 ] } },
    { "type": "Feature", "properties": { "gml_id": "27", "id": 27, "secretariat": "ROSNY-SOUS-BOIS", "adresse": "36 rue du Général Leclerc", "code_postal": 93110, "commune": "ROSNY-SOUS-BOIS", "num_tel": "01 71 29 43 49", "code_insee": 93064, "geo_x": 2.48814, "geo_y": 48.8699 }, "geometry": { "type": "Point", "coordinates": [ 2.488140057297987, 48.869900015825948 ] } },
    { "type": "Feature", "properties": { "gml_id": "28", "id": 31, "secretariat": "STAINS", "adresse": "3 boulevard Maxime Gorki", "code_postal": 93240, "commune": "STAINS", "num_tel": "01 71 29 54 18", "code_insee": 93072, "geo_x": 2.38332, "geo_y": 48.95454 }, "geometry": { "type": "Point", "coordinates": [ 2.383504965001059, 48.955517913350342 ] } },
    { "type": "Feature", "properties": { "gml_id": "29", "id": 2, "secretariat": "AULNAY-SOUS-BOIS", "adresse": "49 avenue Jean Jaurès", "code_postal": 93600, "commune": "AULNAY-SOUS-BOIS", "num_tel": "01 71 29 23 18", "code_insee": 93005, "geo_x": 2.50137, "geo_y": 48.92527 }, "geometry": { "type": "Point", "coordinates": [ 2.501273114336495, 48.925150685605153 ] } },
    { "type": "Feature", "properties": { "gml_id": "30", "id": 33, "secretariat": "VILLEMOMBLE", "adresse": "1bis rue Saint-Louis", "code_postal": 93250, "commune": "VILLEMOMBLE", "num_tel": "01 71 29 22 57", "code_insee": 93077, "geo_x": 2.50991, "geo_y": 48.88852 }, "geometry": { "type": "Point", "coordinates": [ 2.509542705706908, 48.888230084693646 ] } },
    { "type": "Feature", "properties": { "gml_id": "31", "id": 7, "secretariat": "CLICHY-SOUS-BOIS-COUBRON", "adresse": "8 allée de Coubron", "code_postal": 93390, "commune": "CLICHY-SOUS-BOIS", "num_tel": "01 71 29 56 43", "code_insee": 93014, "geo_x": 2.55302, "geo_y": 48.91273 }, "geometry": { "type": "Point", "coordinates": [ 2.552947573134065, 48.912821649664657 ] } },
    { "type": "Feature", "properties": { "gml_id": "32", "id": 15, "secretariat": "LIVRY-GARGAN", "adresse": "26 rue Saint-Claude", "code_postal": 93190, "commune": "LIVRY-GARGAN", "num_tel": "01 71 29 22 61", "code_insee": 93046, "geo_x": 2.54413, "geo_y": 48.92122 }, "geometry": { "type": "Point", "coordinates": [ 2.544129972610725, 48.921220040305315 ] } },
    { "type": "Feature", "properties": { "gml_id": "33", "id": 6, "secretariat": "BONDY", "adresse": "2 rue Gaston Deferre", "code_postal": 93140, "commune": "BONDY", "num_tel": "01 71 29 59 43", "code_insee": 93010, "geo_x": 2.48633, "geo_y": 48.90082 }, "geometry": { "type": "Point", "coordinates": [ 2.486602520551106, 48.901095392492472 ] } },
    { "type": "Feature", "properties": { "gml_id": "34", "id": 26, "secretariat": "ROMAINVILLE", "adresse": "3 allée de la Prévoyance", "code_postal": 93230, "commune": "ROMAINVILLE", "num_tel": "01 71 29 24 06", "code_insee": 93063, "geo_x": 2.43654, "geo_y": 48.89037 }, "geometry": { "type": "Point", "coordinates": [ 2.436376179287522, 48.89185000992881 ] } },
    { "type": "Feature", "properties": { "gml_id": "35", "id": 20, "secretariat": "NOISY-LE-GRAND", "adresse": "17 rue de l'Université", "code_postal": 93160, "commune": "NOISY-LE-GRAND", "num_tel": "01 45 92 15 53", "code_insee": 93051, "geo_x": 2.55236, "geo_y": 48.83739 }, "geometry": { "type": "Point", "coordinates": [ 2.552734503557438, 48.83754397959666 ] } }
    ]
    }
    

var geojson = L.geoJson(geojsonLayer, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng);
    }
});
geojson.addTo(mymap)
console.log(geojsonLayer)