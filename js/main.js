$.ajaxSetup({beforeSend: function(xhr){
    if (xhr.overrideMimeType)
    {
      xhr.overrideMimeType("application/json");
    }
  }
  });

var mymap = L.map('map').setView([47.08, 2.39], 6);
var CM = L.tileLayer('http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    key: "xxxxxxxxxxxx",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    styleId: 22677
    }).addTo(mymap);

function addDataToMap(data, mymap) {
    var geoJson = L.geoJson(data, {
        pointToLayer: function (feature, latlng) {
            switch (feature.geometry.type) {
                case "Point":
                    var marker = L.marker(latlng);
                    break;
                case "Polygon":
                    var marker = L.circleMarker(latlng);
                    break;
                }
            return marker;
            }
    });
    geoJson.addTo(mymap);
  }

$.getJSON("maternelles.geojson", function(data) {addDataToMap(data, mymap); });

$.getJSON("maternelles.geojson", {},function(data) {
    console.log(typeof Object.keys(data.features[0].properties));
    var prop_array = Array.from(Object.keys(data.features[0].properties));
    len = prop_array.length;
    for (i=0; i<len; ++i){
        prop_name = prop_array[i];
        var div = document.createElement("div");
        div.id = prop_name + "_div"; // Définition de son identifiant
        div.textContent = ""
        inputEl = document.createElement("input");
        inputEl.id = prop_name + "_input";
        inputEl.class ="messageCheckbox";
        inputEl.type = "checkbox";
        inputEl.name = "properties";
        inputEl.value = prop_name;
        labelEl = document.createElement("label");
        labelEl.for = prop_name;
        labelEl.textContent = prop_name;
        div.appendChild(inputEl);
        div.appendChild(labelEl);
        document.getElementById("fieldset_tickbox").appendChild(div);
    }
});

var input_array = Array.from(document.getElementsByTagName("input"));
len = input_array.length;
var true_check_list = [];
for (i=0; i<len; ++i){
    if (input_array[i].checked == true){
        true_check_list.push(input_array[i].name);
    }
}
//var checkedValue = document.querySelector('.messageCheckbox:checked').value;




