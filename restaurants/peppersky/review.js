
$(document).ready(function () {
 
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
