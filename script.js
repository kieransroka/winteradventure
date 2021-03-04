if($("body").is("#index")) {
$('body').scrollspy({
    target: '#main-nav'
});

// Add smooth scrolling
$('#main-nav a').on('click', function (e) {
    // Check for a hash value
    if (this.hash !== '') {
        // Prevent default behavior
        e.preventDefault();

        // Store hash
        const hash = this.hash;
        
        // Animate smooth scroll
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function () {
            // Add hash to URL after scroll
            window.location.hash = hash;
        });
    }
});
}
$('.carousel').carousel({
    interval: 3000, //interval between image change
    keyboard: true, //change image when key is presssed ... unsure of keys
    pause: 'hover', //pause carousel slider when mouse pointer hovers over image
    wrap: true //stop when get to last slide if set to false. Set to true by default keeps looping
  });
  // fires a function when slider 4 using an event and calls a call back function
  $('#slider4').on('slide.bs.carousel', function () {
    console.log('SLIDE!'); //every time image changes / takes off write SLIDE! to console
  });
  // fires a function when slider 4 using an event and calls a call back function
  $('#slider4').on('slid.bs.carousel', function () {
    console.log('SLID!'); //every time image changes / stops write SLID! to console
  });