var fixmeTop = $('#aboutCol1').offset().top; // get initial position of the element
var fixmeBottom = $('#aboutCol1').height();

$(window).scroll(function () { // assign scroll event listener

  var currentScroll = $(window).scrollTop(); // get current position

  if (currentScroll >= fixmeTop && currentScroll <= fixmeBottom) { // apply position: fixed if you
    $('.callout').css({ // scroll to that element or below it
      position: 'fixed',
      top: '0px',
      left: '300px'
    });
    $('.bottom').css({
      visibility: 'hidden'
    });
  } else { // apply position: static
    $('.callout').css({ // if you scroll above it
      position: 'static'
    });
    $('.bottom').css({
      visibility: 'visible'
    });
  }

});
