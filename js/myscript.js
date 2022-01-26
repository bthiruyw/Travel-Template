// MY SCRIPT START


//	SLIDER SLICK 

$(document).ready(function(){
  $('.homeslider').slick({
    infinity: true,
    autoplay :true,
    autoplaySpeed : 2500,
    arrows : false,
    speed: 500,
  	fade: true,
  	cssEase: 'linear'
	});
});

// HAMBURGER
var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }

// STATS

var a = 0;
  $(window).scroll(function() {
    if ($('#counter').length) { // checking if CountTo section exists in the page, if not it will not run the script and avoid errors 
      var oTop = $('#counter').offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
      $('.counter-value').each(function() {
        var $this = $(this),
        countTo = $this.attr('data-count');
        $({
        countNum: $this.text()
        }).animate({
          countNum: countTo
        },
        {
          duration: 2000,
          easing: 'swing',
          step: function() {
          $this.text(Math.floor(this.countNum));
          },
          complete: function() {
          $this.text(this.countNum);
          //alert('finished');
          }
        });
      });
      a = 1;
      }
    }
    });
