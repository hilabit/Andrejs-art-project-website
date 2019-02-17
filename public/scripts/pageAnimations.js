const videoContent = $( ".content__screen--video" );
const artistContent = $( ".content__screen--artist" );
const projectContent = $( ".content__screen--project" );
const intervieweesContent = $( ".content__screen--interviewees" );
const videoButton = $( ".nav__button--video" );
const artistButton = $( ".nav__button--artist" );
const projectButton = $( ".nav__button--project" );
const intervieweesButton = $( ".nav__button--interviewees" );

$( videoButton ).on( "click", function( event ) {
  slide(videoContent, '0%');
  slide(artistContent, '-100%');
  slide(projectContent, '100%');
  slide(intervieweesContent, '-100%');
});

$( artistButton ).on( "click", function( event ) {
    slide(videoContent, '100%');
    slide(artistContent, '0%');
    slide(projectContent, '100%');
    slide(intervieweesContent, '-100%');
});

$( projectButton ).on( "click", function( event ) {
    slide(videoContent, '100%');
    slide(artistContent, '-100%');
    slide(projectContent, '0%');
    slide(intervieweesContent, '-100%');
});

$( intervieweesButton ).on( "click", function( event ) {
    slide(videoContent, '100%');
    slide(artistContent, '-100%');
    slide(projectContent, '100%');
    slide(intervieweesContent, '0%');
});

function slide(sectionClassName, newXValue) {
    sectionClassName.css({transform: "translateX(" + newXValue + ")"});
}
