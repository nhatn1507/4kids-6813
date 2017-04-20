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