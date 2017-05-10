
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
    var clickedstar = false;
    $(".leavereview").click(function() {
        clickedstar = true;
        $("#textreview").keyup();

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
        if (($("#textreview").val().trim()!=='') && clickedstar) {
            $("#submitreview").prop('disabled', false); // Disables visually + functionally
        } else {
            $("#submitreview").prop('disabled', true);
        }
    })


    if (localStorage.toscihadreview === "true") {
        $("#numreview").text('by 7 reviewers');

        $("#textreview").val(localStorage.toscireview);

        var userreview = $("#textreview").val();
        $("#newreview").text(userreview);

        var ratings = ["1s", "2s", "3s", "4s", "5s"];
        var ratings2 = ["onestar", "twostar", "threestar", "fourstar", "fivestar"];


        var rated = Number(localStorage.toscistar);


        var fakeClick = "#" + ratings2[rated-1];
        $(fakeClick).click();

        for (rating = 0; rating<=4; rating++) {
            var star = "#" + ratings[rating];
            if (rating <= rated -1) {
                $(star).removeClass("fa fa-star-o");
                $(star).addClass("fa fa-star");
            } else {
                $(star).removeClass("fa fa-star");
                $(star).addClass("fa fa-star-o");
            }

        }

        $("#usernewreview").show('fast');
            $("#submitreview").text("Update review");
    }


    //Update user new review into List of reviews
    //ALSO update localStorage
    $("#submitreview").click(function() {
        $("#numreview").text('by 7 reviewers');
        var userreview = $("#textreview").val();
        $("#newreview").text(userreview);

        //localStorage to save review
        localStorage.toscireview = userreview;
        localStorage.toscihadreview = "true";
        localStorage.toscistar = num_stars;


        var ratings = ["1s", "2s", "3s", "4s", "5s"];
        for (rating = 0; rating<=4; rating++) {
            star = "#" + ratings[rating];
            if (rating <= num_stars -1) {
                $(star).removeClass("fa fa-star-o");
                $(star).addClass("fa fa-star");
            } else {
                $(star).removeClass("fa fa-star");
                $(star).addClass("fa fa-star-o");
            }

        }

        $("#usernewreview").show('fast');
            $("#submitreview").text("Update review");

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
