/* Set the width of the sidebar to 250px (show it) */
function openNav() {
         $("#content").animate({marginLeft: '215px'},200);
         $(".sidepanel").show(200);  

}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
       $("#content").animate({marginLeft: '0px'},200);
    $(".sidepanel").hide(200);

}