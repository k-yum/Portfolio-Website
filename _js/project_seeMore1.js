function main() {
  var body = document.body;
    var overlay = document.querySelector('.overlay');
    var overlayBtts = document.querySelectorAll('button[class$="overlay"]');

    [].forEach.call(overlayBtts, function (btt) {

    btt.addEventListener('click', function () {

      /* Detect the button class name */
      var overlayOpen = this.className === 'open-overlay';

      /* Toggle the aria-hidden state on the overlay and the 
         no-scroll class on the body */
      overlay.setAttribute('aria-hidden', !overlayOpen);
      body.classList.toggle('noscroll', overlayOpen);

      /* On some mobile browser when the overlay was previously
         opened and scrolled, if you open it again it doesn't 
         reset its scrollTop property */
      overlay.scrollTop = 0;


    }, false);

  });

}

$(document).ready(main);
