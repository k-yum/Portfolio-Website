var aboutTop = $('#aboutCol1').offset().top; // get initial position of the element
var aboutBottom = $('#aboutCol1').height();
//var aboutMargin = 

var projectTop = $('#projectCol1').offset().top;
var projectBottom = $('#projectCol1').height() + projectTop - 750;

$(window).scroll(function () { // assign scroll event listener

  var currentScroll = $(window).scrollTop(); // get current position

  if (currentScroll >= aboutTop && currentScroll <= aboutBottom) { // apply position: fixed if you
    $('.callout').css({ // scroll to that element or below it
      position: 'fixed',
      top: '0px',
      left: '14.4%'
    });
    $('.aboutSbottom').css({
      visibility: 'hidden'
    });
  } else { // apply position: static
    $('.callout').css({ // if you scroll above it
      position: 'static'
    });
    $('.aboutSbottom').css({
      visibility: 'visible'
    });
  }
  
  //For when I have more than 1 project
  /*if (currentScroll >= projectTop && currentScroll <= projectBottom) { // apply position: fixed if you
    $('.projectScroll').css({ // scroll to that element or below it
      position: 'fixed',
      top: '0px',
      left: '10.5%'
    });
    $('.projectSbottom').css({
      visibility: 'hidden'
    });
  } else { // apply position: static
    $('.projectScroll').css({ // if you scroll above it
      position: 'static'
    });
    $('.projectSbottom').css({
      visibility: 'visible'
    });
  }*/

});
