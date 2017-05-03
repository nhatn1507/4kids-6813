 /*
  * Chooses the tab and shows the content
  *
  */
  // A short jQuery extension to read query parameters from the URL.
  $.extend({
    getUrlVars: function() {
      var vars = [], pair;
      var pairs = window.location.search.substr(1).split('&');
      for (var i = 0; i < pairs.length; i++) {
        pair = pairs[i].split('=');
        vars.push(pair[0]);
        vars[pair[0]] = pair[1] &&
            decodeURIComponent(pair[1].replace(/\+/g, ' '));
      }
      return vars;
    },
    getUrlVar: function(name) {
      return $.getUrlVars()[name];
    }
  });

  var open = $.getUrlVar('open');

 function openContent(name, elmnt, color) {
     // Hide all elements with class="tabcontent" by default */
     var i, tabcontent, tablinks;
     tabcontent = document.getElementsByClassName("tabcontent");
     for (i = 0; i < tabcontent.length; i++) {
         tabcontent[i].style.display = "none";
     }

     // Remove the background color of all tablinks/buttons
     tablinks = document.getElementsByClassName("tablink");
     for (i = 0; i < tablinks.length; i++) {
         tablinks[i].style.backgroundColor = "";
     }

     // Show the specific tab content
     document.getElementById(name).style.display = "block";

     // Add the specific color to the button used to open the tab content
     elmnt.style.backgroundColor = color;
 }




 function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


$(document).ready(function () {
   // Get the element with id="defaultOpen" and click on it
   if (open != null){
     document.getElementById(open).click();
   } else {
     document.getElementById("overview").click();
   }

    //SHOW MORE/SHOW LESS in review
    var showmoreClicked = true;
    $("#showmore").click(function() {
        if (showmoreClicked) {
            $("#extraReview1").show("fast");
            $("#extraReview2").show("fast");
            showmoreClicked = false;
            $("#showmore").text("Show Less...");
        } else {
            $("#extraReview1").hide("fast");
            $("#extraReview2").hide("fast");
            showmoreClicked = true;
            $("#showmore").text("Show More...");
        }
    });

    //User review rating and comments
    var star = "";
    $(".leavereview").click(function() {
        var ratings = ["onestar", "twostar", "threestar", "fourstar", "fivestar"];
        num_stars = ratings.indexOf(this.id) + 1;
        for (rating = 0; rating<=4; rating++) {
            star = "#" + ratings[rating];
            if (rating<=ratings.indexOf(this.id)) {
                $(star).removeClass("fa fa-star-o");
                $(star).addClass("fa fa-star");
            } else {
                $(star).removeClass("fa fa-star");
                $(star).addClass("fa fa-star-o");
            }
        }

         $("#stargroup").animate({"font-size": "0.75em"});
        $("#textreview").show("fast");
        $("#submitreview").show("fast");
    });
    //only allow submit button
    $("#textreview").keyup(function() {
        if ($("#textreview").val().trim()!=='') {
             $("#submitreview").removeClass("disabled");
        } else {
            $("#submitreview").addClass("disabled");
        }
    })

    //Switching between submiting and editing review
    $("#submitreview").click(function() {
        if ($("#submitreview").text() === "Submit") {
            var content = $("#textreview").val();
            var $div = $("<div>", {id: "textreviewed", class: "unknown"});
            $div.text(content);
            $("#textreview").replaceWith($div);
            $("#submitreview").text("Edit review");
        } else {
            var content = $("#textreviewed").text();
            var $text =$("<textarea />");
            $text.css('font-size','.75em');
            $text.attr('id', 'textreview');
            $text.val(content);
            $("#textreviewed").replaceWith($text);
            $("#submitreview").text("Submit");
        }
    });
});

var num_stars = 0;

var reviewMouseOver = function(index){
  var reviewStars = [document.getElementById('onestar'), document.getElementById('twostar'), document.getElementById('threestar'), document.getElementById('fourstar'), document.getElementById('fivestar')]
  for (var i = 0; i < 5; i++){
    star = reviewStars[i]
    if (i < index){
      star.classList.remove('fa-star-o');
      star.classList.add('fa-star');
    } else{
      star.classList.remove('fa-star');
      star.classList.add('fa-star-o');
    }
  }
}

var reviewMouseOut = function(){
  var reviewStars = [document.getElementById('onestar'), document.getElementById('twostar'), document.getElementById('threestar'), document.getElementById('fourstar'), document.getElementById('fivestar')]
  for (var i = 0; i < 5; i++){
    star = reviewStars[i]
    if (i < num_stars){
      star.classList.remove('fa-star-o');
      star.classList.add('fa-star');
    } else {
      star.classList.remove('fa-star');
      star.classList.add('fa-star-o');
    }
  }
}
