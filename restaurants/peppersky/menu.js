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

function openMenu(name, elmnt, color) {
    // Hide all elements with class="menucontent" by default */
    var i, menucontent, menulinks;
    menucontent = document.getElementsByClassName("menucontent");
    for (i = 0; i < menucontent.length; i++) {
        menucontent[i].style.display = "none";
    }

    // Remove the background color of all menulinks/buttons
    menulinks = document.getElementsByClassName("menulink");
    for (i = 0; i < menulinks.length; i++) {
        menulinks[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(name).style.display = "block";

    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
}
