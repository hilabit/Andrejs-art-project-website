var topPage = $( ".content__screen--video" );
$( ".nav__element--video" ).on( "click", function( event ) {
  slideIn(topPage);
});



function slideIn(sectionClassName) {
     sectionClassName.animate({left: '250px'});
}
