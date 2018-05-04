(function() {
  var __sections__ = {};
  (function() {
    for(var i = 0, s = document.getElementById('sections-script').getAttribute('data-sections').split(','); i < s.length; i++)
      __sections__[s[i]] = true;
  })();
  (function() {
  if (!__sections__["first-product-comments"]) return;
  try {
    

$('.comments-section-link').first().addClass('active-logo');
rot = $('.active-logo').data( "rot");
$('#'+rot).fadeIn().addClass('active-rot');
$('.comments-section-link').click(function(){
	this_rot = $(this).data("rot");
	$('.active-logo').removeClass('active-logo');
	$('.active-rot').removeClass('active-rot').hide();
	$(this).addClass('active-logo');
    $('#'+this_rot).fadeIn().addClass('active-rot');
});

  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["first-product-features"]) return;
  try {
    
$( "a.product-link" ).click(function() {
  block_id = $( this ).data( "block-id");
  if ($('.features-image[data-block-id="'+ block_id +'"]').hasClass('current')) {
      return
  } else { 
      $('.features-image.current').removeClass('current').hide();
	  $('.active-variant').removeClass('active-variant');
      $('.features-image[data-block-id="'+ block_id +'"]').show().addClass('current');
	  $(this).parent().addClass('active-variant');
  }
  
});
var featureHoverOrClick = function () {
    block_id = $( this ).data( "block-id");
  if ($('.features-gif[data-block-id="'+ block_id +'"]').hasClass('current')) {
    return
  } else { 
    $('.features-gif.current').removeClass('current').hide();
	$( "a.active-feature" ).removeClass('active-feature');
	$(this).addClass('active-feature');
  	$('.features-gif[data-block-id="'+ block_id +'"]').show().addClass('current');
  } 
}
$( "a.features-link" ).click(featureHoverOrClick);

  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["first-product-gallery"]) return;
  try {
    
 $('.gallery-section-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.gallery-section-nav-slider'
});
$('.gallery-section-nav-slider').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.gallery-section-slider',
  centerMode: true,
  centerPadding: '100px',
  focusOnSelect: true
});

  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["first-product-header"]) return;
  try {
    
    window.onload = function() {
		$('#product-header').detach().appendTo($('#shopify-section-header'));
  		input = $('#input-id').val();
  		$('#video-modal').attr('src', input);
    };
    header_height = $('.site-header').height();
	$(window).scroll(function() {
		currentScroll = $(window).scrollTop();
        if (currentScroll >= header_height) { 
				$('#product-header').detach().appendTo($('.template-product'));
                $('#product-header').css({                     
                  position: 'fixed',
                  top: '0',
                  left: '0',
                  width: '100vw',
                  opacity: 0.9
                });
        } else {     
				$('#product-header').detach().appendTo($('#shopify-section-header'));
                $('#product-header').css({                      
                  position: 'static',
                  opacity: 1
                });
        	}
	});
    
	$("#product-header a, .product-info a, .mobile-nav-group a ").click(function(e){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500);
        e.preventDefault();
    });
    $('.btn-video').click(function(e){
  		e.preventDefault();
  		$('#video-block').fadeIn();
  	});
  	$('.video-close').click(function(){
  		$('#video-block').fadeOut();
  	});

  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["first-product-vertical-slider"]) return;
  try {
    

parallax = function(i){
    if ( i < $('.vertical-slider-img').length){
      source = $('.vertical-slider-img')[i].src;
         $('.vertical-slider-section').css({
            background: "url("+source+") no-repeat 50% 50%",
            'background-size': 'cover',
            'background-attachment': 'fixed'	
          });
    };
};

    
	$(window).scroll(function() {
               if ($(window).width() > 1024 ){
                 var hT = $('#shopify-section-first-product-vertical-slider').offset().top ,
                     hH = $('#shopify-section-first-product-vertical-slider').height(),
                     wS = $(this).scrollTop(),
                     wB = wS + $(window).height();
                 if (wS > (hT+ 50)){
                     $('.vertical-slider-img').each(function(){
                          $(this).hide();
                      });
                     $('.vertical-slider-block').each(function( index ){
                          offset = $(this).children('.vertical-slider-text').offset().top;
                          height = $(this).children('.vertical-slider-text').outerHeight();
                          bottom = offset + height;

                          if (wS > bottom){
                              parallax(index+1);
                          } else {
                              source = $(this).children('.vertical-slider-image').children('.vertical-slider-img').attr('src');
                              $('.vertical-slider-section').css({
                              background: "url("+source+") no-repeat 50% 50%",
                              'background-size': 'cover',
                              'background-attachment': 'fixed'
                              });
                              return false;
                          };
                      });
                 };
               if ((wB > (hT + hH)) || (wS < hT)){
                $('.vertical-slider-img').each(function(){
                        $(this).show();
                    });
               };
            } else {
                  $('.vertical-slider-img').each(function(){
                        $(this).show();
                    });                                
           };
           if ( $(window).width() < 767 ){
			if (!$('.vertical-slider-section').hasClass('slick-initialized')){
              $('.vertical-slider-section').slick({
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: true,
                  arrows: true
                  });
           }} else {
            $('.vertical-slider-section.slick-initialized').slick('unslick');
           };
 });
                 
               
               




  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["first-product-video"]) return;
  try {
    
height = $('.main-video').height();
$('.video-section-text-block').css({
	height: height	
});
$('.video-section-main').css({
	height: height	
});
$( window ).resize(function() {
    height = $('.main-video').height();
	$('.video-section-text-block').css({
            height: height	
          });
    $('.video-section-main').css({
                height: height	
              });
});


  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["footer"]) return;
  try {
    
$('.footer-title').click(function(){
	sibling = $(this).next('.footer_link_ul');
	height = sibling.prop('scrollHeight');
	if (!$(this).children().hasClass('expanded')){
		$(this).children().addClass('expanded');
        sibling.css('max-height',height);
		sibling.addClass('border');
	}
	else{
		$(this).children().removeClass('expanded');
		sibling.css('max-height',0);
		sibling.removeClass('border');
	}
});


  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["main-product-features"] && !window.DesignMode) return;
  try {
    
$( "a.product-link" ).click(function() {
  block_id = $( this ).data( "block-id");
  if ($('.features-image[data-block-id="'+ block_id +'"]').hasClass('current')) {
      return
  } else { 
      $('.features-image.current').removeClass('current').hide();
	  $('.active-variant').removeClass('active-variant');
      $('.features-image[data-block-id="'+ block_id +'"]').show().addClass('current');
	  $(this).parent().addClass('active-variant');
  }
  
});
var featureHoverOrClick = function () {
    block_id = $( this ).data( "block-id");
  if ($('.features-gif[data-block-id="'+ block_id +'"]').hasClass('current')) {
    return
  } else { 
    $('.features-gif.current').removeClass('current').hide();
	if($(this).hasClass('active-feature')){
		$(this).removeClass('active-feature');
		$(this).next().hide();
	}
	else{
      $( "a.active-feature" ).next().hide();
      $( "a.active-feature" ).removeClass('active-feature');
      $(this).addClass('active-feature');
	  if ($(window).width() < 767){
        $(this).next().show();
      }
	}
  	$('.features-gif[data-block-id="'+ block_id +'"]').show().addClass('current');
  } 
}
$( "a.features-link" ).click(featureHoverOrClick);
if ($(window).width() < 767){
   $('.features-variants').insertAfter('.features-image-block');
}
$(window).resize(function(){
   if ($(window).width() < 767){
     $('.features-variants').insertAfter('.features-image-block');
   }
  else{
   	$('.features-variants').insertAfter('.features-list');
  }
});

  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["main-product-header"] && !window.DesignMode) return;
  try {
    
    window.onload = function() {
		$('#product-header').detach().appendTo($('#shopify-section-header'));
  		input = $('#input-id').val();
  		$('#video-modal').attr('src', input);
    };
    header_height = $('.site-header').height();
	$(window).scroll(function() {
		currentScroll = $(window).scrollTop();
        if (currentScroll >= header_height) { 
				$('#product-header').detach().appendTo($('.template-index'));
                $('#product-header').css({                     
                  position: 'fixed',
                  top: '0',
                  left: '0',
                  width: '100vw',
                  opacity: 0.9
                });
        } else {     
				$('#product-header').detach().appendTo($('#shopify-section-header'));
                $('#product-header').css({                      
                  position: 'static',
                  opacity: 1
                });
        	}
	});
    
	$("#product-header a, .product-info a, .mobile-nav-group a, .mobile-product-block a").click(function(e){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500);
        e.preventDefault();
    });
    $('.btn-video').click(function(e){
  		e.preventDefault();
  		$('#video-block').fadeIn();
  	});
  	$('.video-close').click(function(){
  		$('#video-block').fadeOut();
  	});

  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["main-product-reviews"] && !window.DesignMode) return;
  try {
    
function writeReview(){
  $('.spr-summary-actions').detach().appendTo($('#review-footer'));
  $('.spr-form').detach().appendTo($('.spr-content'));
}
setTimeout(writeReview, 2000);

  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["main-product-video"] && !window.DesignMode) return;
  try {
    
height = $('.main-video').height();
$('.video-section-text-block').css({
	height: height	
});
$('.video-section-main').css({
	height: height	
});
$( window ).resize(function() {
    height = $('.main-video').height();
	$('.video-section-text-block').css({
            height: height	
          });
    $('.video-section-main').css({
                height: height	
              });
});


  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["main-rpoduct-gallery"] && !window.DesignMode) return;
  try {
    
 $('.gallery-section-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  variableWidth: true,
  adaptiveHeight: true,
  asNavFor: '.gallery-section-nav-slider'
});
$('.gallery-section-nav-slider').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.gallery-section-slider',
  centerMode: true,
  centerPadding: '100px',
  focusOnSelect: true
});

  } catch(e) { console.error(e); }
})();

(function() {
  if (!__sections__["product-template"] && !window.DesignMode) return;
  try {
    
	var Queue = (function () {

        Queue.prototype.autorun = true;
        Queue.prototype.running = false;
        Queue.prototype.queue = [];

        function Queue(autorun) {
            if (typeof autorun !== "undefined") {
                this.autorun = autorun;
            }
            this.queue = []; //initialize the queue
        };

        Queue.prototype.add = function (callback) {
            var _this = this;
            //add callback to the queue
            this.queue.push(function () {
                var finished = callback();
                if (typeof finished === "undefined" || finished) {
                    //  if callback returns `false`, then you have to 
                    //  call `next` somewhere in the callback
                    _this.dequeue();
                }
            });

            if (this.autorun && !this.running) {
                // if nothing is running, then start the engines!
                this.dequeue();
            }

            return this; // for chaining fun!
        };

        Queue.prototype.dequeue = function () {
            this.running = false;
            //get the first element off the queue
            var shift = this.queue.shift();
            if (shift) {
                this.running = true;
                shift();
            }
            return shift;
        };

        Queue.prototype.next = Queue.prototype.dequeue;

        return Queue;

    })();

	var q = new Queue(false).add(function () {
        $('#view_360').reel({
          images: $images_for_view
        });
        $('#view_360_mobile').reel({
        	images: $images_for_view
        });
    }).add(function () {
        $('.mobile-images-slider-1').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          infinite: false,
          dots: true
        });

        $('.mobile-images-slider-2').on('afterChange', function(){
        	if($('#view_360_mobile-reel').hasClass('slick-current')){
				$(this).slick('slickSetOption', 'swipe', false);
			} else {
				$(this).slick('slickSetOption', 'swipe', true);
			}
        });

        $('.mobile-images-slider-2').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
		  swipe: true,
          asNavFor: '.mobile-images-slider-3'
        });
		
        $('.mobile-images-slider-3').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          focusOnSelect: true,
          asNavFor: '.mobile-images-slider-2'
        });

        $('.mobile-sliders-wrapper').each(function(){
            $(this).addClass('invisible');
        });
        $('#slider-'+$selected).removeClass('invisible');

    });

    q.next();

	

	

	 

  } catch(e) { console.error(e); }
})();

})();
