//  ==========================================================================  Banner
var Parallax = (function() {

  var $wndwHght, $wndwWdth, $bnnr, $fadeStart, $fadeUntil, $fading, $arrow, $menu;

  var init = function() {
    loadElements();
    addListeners();
  };

  var loadElements = function() {
    $bnnr = $('.bnnr');
    $wndwHght = $(window).height();
    $wndwWdth = $(window).width();
    $fadeUntil = $(window).height()/2;
    $fadeStart = 0;
    $fading = $('.bnnr .logo, .arrow');
    $menu = $('.menu');
    $arrow = $('.arrow');
  };

  var addListeners = function(offset) {
    resize();
    $(window).resize(function() {
      resize();
    });
    $(window).bind('scroll', function(){
      fadeLogo();
    });
    $arrow.bind('click', function(){
      $('html,body').animate({ scrollTop: $('#band').offset().top - $menu.height()}, 'slow');
    });
  };

  var resize = function() {
    $wndwHght = $(window).height();
    $wndwWdth = $(window).width();
    $bnnr.css('height', $wndwHght);
    $bnnr.css('width', $wndwWdth);
  }

  var fadeLogo = function() {  
    var offset = $(document).scrollTop(), opacity = 0;
    if( offset <= $fadeStart ){
      opacity = 1;
    } else if( offset <= $fadeUntil ){
      opacity = 1 - offset/$fadeUntil;
    }
    $fading.css('opacity',opacity);
  } 

  return {
    init: init
  };
})();

window.onload = function() {
  // Parallax.init();
}