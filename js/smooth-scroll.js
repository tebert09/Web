/*
Smooth scroll for navigation.
From: http://css-tricks.com/snippets/jquery/smooth-scrolling/
*/


(function ($) {
  // Select all links with hashes
  $('.navbar a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var targetHash = this.hash;
        var target = $(targetHash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

        // Stop jank scroll to top of the page if the targeted element is already at the top
        if (target.length && target.offsetTop == 0) {
          return;
        }

        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();

          // Sometimes the element won't have a computed scrolltop, if that's the case
          // reset the target to the parent element
          if (target.offset().top == 0) {
            target = target.parent();
          }

          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            // $target.focus();

            window.location.hash = targetHash;
            window.dispatchEvent(new HashChangeEvent("hashchange"));

            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
})(jQuery);