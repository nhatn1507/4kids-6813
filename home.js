$(document).ready(function() {
  $("#searchselect").change(function () {
    $("#searchtext").val('');
    if ($("#searchselect").val().includes("R")) {
      document.getElementById('searchtext').placeholder='Search Restaurant';
    };
    if ($("#searchselect").val().includes("F")) {
      document.getElementById('searchtext').placeholder='Search Food';
    };
    if ($("#searchselect").val().includes("I")) {
      document.getElementById('searchtext').placeholder='Search Ingredient';
    };
  });

  $("#searchsubmit").click(function() {

    google.maps.event.trigger(pepperSkyMarker, 'click', {
      latLng: new google.maps.LatLng(0, 0)
    });

  });

});



var adphi = {lat: 42.362895, lng: -71.099049};
function CenterControl(controlDiv, map) {

  // Set CSS for the control border.
  var controlUI = document.createElement('div');
  controlUI.style.backgroundColor = '#fff';
  controlUI.style.border = '2px solid #fff';
  controlUI.style.borderRadius = '3px';
  controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
  controlUI.style.cursor = 'pointer';
  controlUI.style.marginBottom = '22px';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Click to recenter the map';
  controlDiv.appendChild(controlUI);

  //TODO: remove this TEMPORARILTY MAKE THIS GLOBAL FOR ACCESS IN HOME.JS
  var pepperSkyMarker;

  // Set CSS for the control interior.
  var controlText = document.createElement('div');
  controlText.style.color = 'rgb(25,25,25)';
  controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
  controlText.style.fontSize = '16px';
  controlText.style.lineHeight = '38px';
  controlText.style.paddingLeft = '5px';
  controlText.style.paddingRight = '5px';
  controlText.innerHTML = 'Center Map';
  controlUI.appendChild(controlText);

  controlUI.addEventListener('click', function() {
    map.setCenter(adphi);
  });

}
function initMap() {
  var peppersky = {lat: 42.364211, lng: -71.102915};
  var beantown = {lat:42.361812, lng: -71.097237};
  var veggiegalaxy = {lat: 42.363424, lng: -71.101296}
  var marychung = {lat: 42.363517, lng: -71.101396}
  var toscanini = {lat: 42.363601, lng: -71.09938}
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: adphi
  });

  var yourLocationContent = '<div id="content">'+
  '<h3>Your Location</h3>'+
  '</div>';

  var pepperSkyContent = '<div>'+
  '<h1>Pepper Sky</h1>'+
  '<div>'+
  '<p><b>Rating: </b> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true" ></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i>' +
  '<p><b>Price: $$ </b> </p>'+
  '<p><b>Distance: </b> 0.3 mi'+
  '<br></br>'+
  '<a href="restaurants/peppersky/overview.html" class="btn btn-primary">See More</a>'
  '</div>'+
  '</div>';

  var beanTownContent = '<div>' +
  '<h1>Beantown Taqueria</h1>'+
  '<div>'+
  '<p><b>Rating: </b> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true" ></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i>' +
  '<p><b>Price: $ </b> </p>'+
  '<p><b>Distance: </b> 0.2 mi'+
  '<br></br>'+
  '<a href="restaurants/peppersky/PepperSky.html" class="btn btn-primary">See More</a>'
  '</div>'+
  '</div>';

  var veggieGalaxyContent = '<div>' +
  '<h1>Veggie Galaxy</h1>'+
  '<div>'+
  '<p><b>Rating: </b> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true" ></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>' +
  '<p><b>Price: $$ </b> </p>'+
  '<p><b>Distance: </b> 0.2 mi'+
  '<br></br>'+
  '<a href="restaurants/peppersky/PepperSky.html" class="btn btn-primary">See More</a>'
  '</div>'+
  '</div>';

  var maryChungContent = '<div>' +
  '<h1>Mary Chung</h1>'+
  '<div>'+
  '<p><b>Rating: </b> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true" ></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i>' +
  '<p><b>Price: $ </b> </p>'+
  '<p><b>Distance: </b> 0.2 mi'+
  '<br></br>'+
  '<a href="restaurants/peppersky/PepperSky.html" class="btn btn-primary">See More</a>'
  '</div>'+
  '</div>';

  var toscaniniContent = '<div>' +
  '<h1>Toscanini</h1>'+
  '<div>'+
  '<p><b>Rating: </b> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true" ></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>' +
  '<p><b>Price: $ </b> </p>'+
  '<p><b>Distance: </b> 0.1 mi'+
  '<br></br>'+
  '<a href="restaurants/peppersky/PepperSky.html" class="btn btn-primary">See More</a>'
  '</div>'+
  '</div>';


  var pepperSkyInfoWindow = new google.maps.InfoWindow({
    content: pepperSkyContent
  });

  var beanTownInfoWindow = new google.maps.InfoWindow({
    content: beanTownContent
  });

  var veggieGalaxyInfoWindow = new google.maps.InfoWindow({
    content: veggieGalaxyContent
  });

  var maryChungInfoWindow = new google.maps.InfoWindow({
    content: maryChungContent
  });

  var toscaniniInfoWindow = new google.maps.InfoWindow({
    content: toscaniniContent
  });

  var yourLocationWindow = new google.maps.InfoWindow({
    content: yourLocationContent
  });

  pepperSkyMarker = new google.maps.Marker({
    position: peppersky,
    map: map,
    title: 'Pepper Sky'
  });

  var beanTownMarker = new google.maps.Marker({
    position: beantown,
    map: map,
    title: 'Beantown'
  });

  var veggieGalaxyMarker = new google.maps.Marker({
    position: veggiegalaxy,
    map: map,
    title: 'Veggie Galaxy'
  });

  var maryChungMarker = new google.maps.Marker({
    position: marychung,
    map: map,
    title: 'Mary Chung'
  });

  var toscaniniMarker = new google.maps.Marker({
    position: toscanini,
    map: map,
    title: "Toscanini's"
  });

  var image = {
    url: 'img/bluedot.png',
    scaledSize: new google.maps.Size(30, 30),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(15, 15)
  }

  var adPhi = new google.maps.Marker({
    position: adphi,
    map: map,
    title: 'Your Location',
    icon: image
  });

  var openWindow;

  pepperSkyMarker.addListener('click', function() {
    if (openWindow != null){
      openWindow.close();
      if (openWindow == pepperSkyInfoWindow){
        openWindow = null;
        return;
      }
    }
    pepperSkyInfoWindow.open(map, pepperSkyMarker);
    openWindow = pepperSkyInfoWindow;
  });

  beanTownMarker.addListener('click', function() {
    if (openWindow != null){
      openWindow.close();
      if (openWindow == beanTownInfoWindow){
        openWindow = null;
        return;
      }
    }
    beanTownInfoWindow.open(map, beanTownMarker);
    openWindow = beanTownInfoWindow;
  });

  veggieGalaxyMarker.addListener('click', function() {
    if (openWindow != null){
      openWindow.close();
      if (openWindow == veggieGalaxyInfoWindow){
        openWindow = null;
        return;
      }
    }
    veggieGalaxyInfoWindow.open(map, veggieGalaxyMarker);openWindow
    openWindow = veggieGalaxyInfoWindow;
  });

  maryChungMarker.addListener('click', function() {
    if (openWindow != null){
      openWindow.close();
      if (openWindow == maryChungInfoWindow){
        openWindow = null;
        return;
      }
    }
    maryChungInfoWindow.open(map, maryChungMarker);
    openWindow = maryChungInfoWindow;
  });

  toscaniniMarker.addListener('click', function() {
    if (openWindow != null){
      openWindow.close();
      if (openWindow == toscaniniInfoWindow){
        openWindow = null;
        return;
      }
    }
    toscaniniInfoWindow.open(map, toscaniniMarker);
    openWindow = toscaniniInfoWindow;
  });

  adPhi.addListener('click', function() {
    if (openWindow != null){
      openWindow.close();
      if (openWindow == yourLocationWindow){
        openWindow = null;
        return;
      }
    }
    yourLocationWindow.open(map, adPhi);
    openWindow = yourLocationWindow;
  });

  var centerControlDiv = document.createElement('div');
  var centerControl = new CenterControl(centerControlDiv, map);

  centerControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);

}
