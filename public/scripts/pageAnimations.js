var topPage = $( ".content__screen--artist" );
$( ".nav__element--artist" ).on( "click", function( event ) {
  slideIn(topPage);
});

function slideIn(sectionClassName) {
  sectionClassName.css({transform: 'translateY(0%)'});
}
