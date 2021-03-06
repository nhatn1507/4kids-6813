//GLOBAL VARIABLES
var pepperSkyMarker, beanTownMarker, veggieGalaxyMarker, maryChungMarker, toscaniniMarker, openWindow;

var setToscanini = new Set("899 Main St, Cambridge, MA 02139 Toscanini Ice Cream Longtime favorite for espresso & gourmet ice cream in a range of unique flavors that changes often Green Tea ice cream green tea powder sugar  water milk Vanilla ice cream vanilla extract heavy whipping cream, milk, sugar, water Coffee ice cream  coffee, milk, sugar, water Strawberry ice cream strawbarry milk sugar water Mango ice cream mango milk sugar water ".toLowerCase().replace(/[^\w\s]/gi, '').split(' '));
var setPepper = new Set("555 Massachusetts Avenue, Cambridge, MA 02139 We serve great Thai food! Our specialty is pad thai, so please come and try out    noodles Pad Thai Noodles, Garlic, Eggs, Coffee, Soy Sauce, Lime Juice, Sugar, Fish Sauce, Green Onions, Cilantro, Pepper Flakes Potato Puffs Potatoes, Egg, Butter, Milk, Cheese, Nutmeg Spring Rolls Noodles, Green Onions, Garlic, Cabbage, Soy Sauce, Pepper, Carrot Scallion Pancake Flour, Salt, Green Onions Fresh Rolls Flour, Yeast, Sugar, Milk, Butter".toLowerCase().replace(/[^\w\s]/gi, '').split(' '));
var setMary = new Set("464 Massachusetts Ave, Cambridge, MA 02139 Mary Chung Humble, old-school cash-only Chinese mainstay specializing in spicy Sichuan plates Egg Drop - eggs, tomatoes, water, salt, pepper Savory tomatoes with eggs - tomatoes, eggs, salt, soy sauce, green onions Stir fried tofu - vegetable oil, tofu, onion, garlic, spinach, pepper, noodle, carrot Veggie Dumplings - spinach, flour, tofu, oil, salt, pepper, sugar Veggie Buns - spinach, flour, tofu, oil, salt, pepper, sugar".toLowerCase().replace(/[^\w\s]/gi, '').split(' '));
var setBean = new Set(" 245 Massachusetts Avenue, Cambridge, MA 02139 Beantown Taqueria American breakfasts plus Mexican & Tex-Mex dishes plated in local, low-key cafe with colorful decor Veggie Burrito - tortillas, onion, cumin, chili powder, red bell, carrot, black beans, salsa, cheese, sour cream, cilantro Veggie Chimi Changa - tortillas, onion, cumin, chili powder, red bell, carrot, black beans, salsa, cheese, sour cream, cilantro, deep fried Veggie Taco - taco shell, sour cream, cheese, salsa, black beans Veggie Omelet - Tomato, Onion, Bell Pepper. Served with home fries and toast Mexico Omelet - Onion, Tomato, Serrano Pepper. Served with home fries and toast".toLowerCase().replace(/[^\w\s]/gi, '').split(' '));
var setVeggie = new Set(" 450 Massachusetts Avenue, Cambridge, MA 02139 Veggie Galaxy Imaginative twist on an old-school diner specializing in from-scratch vegan & vegetarian options Great Galaxy - Hash Brown Potatoes, Over Easy Egg, Tempeh Bacon, Cheddar Cheese, Baby Arugula, Roasted Garlic Mayo, on a Griddled Bun Stuffed - Vanilla Vegan Cream Cheese, topped with Caramelized Banana Butter, Strawberry Sauce & Maple Syrup  Traditional - Farmer's Table bread with Caramelized Banana Butter & Maple Syrup The Club - Grilled Tempeh Bacon, Smoked Tofu, Fresh Tomato, Romaine, Raw Red Onion, Basil Pesto & Roasted Garlic Mayo Reuben - Grilled Shaved Corned-Beef Seitan, Green Cabbage ‘Kraut, Swiss Cheese, House-made Thousand Island Dressing Rachel - Grilled Shaved Corned-Beef Seitan, Green Cabbage Slaw, Swiss Cheese, House-made Thousand Island Dressing".toLowerCase().replace(/[^\w\s]/gi, '').split(' '));






$(document).ready(function() {
    
    initMap();
     
      RESTAURANTS_SET = {0: setPepper, 
                   1: setBean, 
                   2: setVeggie, 
                   3: setMary, 
                   4: setToscanini }
    RESTAURANTS_MARKER = [pepperSkyMarker, beanTownMarker, veggieGalaxyMarker, maryChungMarker, toscaniniMarker];
    RESTAURANTS_ID = ["#pepper", "#bean", "#veggie", "#mary", "#tos"]
    
    
    //CAN ALSO PRESS ENTER TO SUBMIT 
     $("#searchtext").keyup(function(e) {
        if  (e.key == 'Enter') {
            $("#searchsubmit").click();
        }
     });
    
    
    //CLICK on one of the list result buttons
    $(".list-group-item").click(function(e) {
       var idClicked = "#" + $(this).attr('id'); 
       var indexClicked = RESTAURANTS_ID.indexOf(idClicked);
 
        var markerToClick = RESTAURANTS_MARKER[indexClicked];
     google.maps.event.trigger(markerToClick, 'click', {
                    latLng: new google.maps.LatLng(0, 0)});
    });
    
    
    
 // CLICK SUBMIT BUTTON - show search result
  $("#searchsubmit").click(function() {
      if (openWindow != null) {
            openWindow.close();
        }
      RESTAURANTS_ID.forEach(function(id) { $(id).hide('fast'); })
      var query = $("#searchtext").val().toLowerCase();
      for (rest in RESTAURANTS_SET) {
          if (RESTAURANTS_SET[rest].has(query)) {
              var buttonToShow = RESTAURANTS_ID[parseInt(rest)];
              $(buttonToShow).show('medium');
          }
      }

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
  '<a href="restaurants/beantown/overview.html" class="btn btn-primary">See More</a>'
  '</div>'+
  '</div>';

  var veggieGalaxyContent = '<div>' +
  '<h1>Veggie Galaxy</h1>'+
  '<div>'+
  '<p><b>Rating: </b> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true" ></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>' +
  '<p><b>Price: $$ </b> </p>'+
  '<p><b>Distance: </b> 0.2 mi'+
  '<br></br>'+
  '<a href="restaurants/veggiegalaxy/overview.html" class="btn btn-primary">See More</a>'
  '</div>'+
  '</div>';

  var maryChungContent = '<div>' +
  '<h1>Mary Chung</h1>'+
  '<div>'+
  '<p><b>Rating: </b> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true" ></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i>' +
  '<p><b>Price: $ </b> </p>'+
  '<p><b>Distance: </b> 0.2 mi'+
  '<br></br>'+
  '<a href="restaurants/marychung/overview.html" class="btn btn-primary">See More</a>'
  '</div>'+
  '</div>';

  var toscaniniContent = '<div>' +
  '<h1>Toscanini</h1>'+
  '<div>'+
  '<p><b>Rating: </b> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true" ></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>' +
  '<p><b>Price: $ </b> </p>'+
  '<p><b>Distance: </b> 0.1 mi'+
  '<br></br>'+
  '<a href="restaurants/tosci/overview.html" class="btn btn-primary">See More</a>'
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

   beanTownMarker = new google.maps.Marker({
    position: beantown,
    map: map,
    title: 'Beantown'
  });

   veggieGalaxyMarker = new google.maps.Marker({
    position: veggiegalaxy,
    map: map,
    title: 'Veggie Galaxy'
  });

   maryChungMarker = new google.maps.Marker({
    position: marychung,
    map: map,
    title: 'Mary Chung'
  });

   toscaniniMarker = new google.maps.Marker({
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
