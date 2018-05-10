$selected = $('#SingleOptionSelector-0').val();
$images_for_view = ["images/products/Cam_0000_large.png",
            "images/products/FRONT_Yell_shadow_web_large8270.png",
            ];
$('.product-single__thumbnails-item').each(function(){
    if(!$(this).hasClass('alt-'+ $selected)){
      $(this).hide();
    }
});

$('.color-pick-block').click(function(){
    value = $(this).children('input').val();
  if (value != $selected ){
    $('#open-360').hide();
    $('#view_360-reel').hide();

  } else {
    $('#open-360').show();
    $('#view_360-reel').show();
  }
  $('#SingleOptionSelector-0').val(value).trigger('change');
  $('.product-single__thumbnails-item').each(function(){
    if($(this).hasClass('alt-'+ value)){
      $(this).fadeIn();
    }
    else{
      $(this).hide();
    }
  });
  $('.mobile-sliders-wrapper').each(function(){
      $(this).addClass('invisible');
  });
  $('#slider-'+value).removeClass('invisible');
  $('#slider-'+value).children('.mobile-images-slider-1').slick('slickGoTo',0);
});


$('#open-360').click(function(){
    $(this).toggleClass('active');
  $('#view_360-reel').toggleClass('visible');
});

$('.open-description').click(function(){
    $(this).toggleClass('active');
  $('.product-single__description').fadeToggle();
});


  function copyStars(){
    $('.spr-summary-starrating').clone().insertAfter('.product-single__title');
  }
    setTimeout(copyStars, 2000);

$('.slider-image').on('click', function(){
  title = $(this).data('title');

  $('#'+title).show().addClass('megaz');

  if($(this).hasClass('360-mobile')){
    slide = $('#view_360_mobile-reel').data('slick-index');
        $('#'+title).children().children('.mobile-images-slider-2').slick('slickGoTo',slide);
      $('#'+title).children().children('.mobile-images-slider-3').slick('slickGoTo',slide);
  } else {
        img = $(this).data('img');
        $('#'+title).children().children('.mobile-images-slider-2').slick('slickGoTo',img);
      $('#'+title).children().children('.mobile-images-slider-3').slick('slickGoTo',img);
  }
});

$('.close-slider').click(function(){
  $(this).parent().parent().removeClass('megaz');
  $('.mobile-images-slider-2').slick('slickGoTo',0);
});

$('.mobile-sliders-container').mouseup(function(e) {
  var container = $('.mobile-sliders-block');
  if (!container.is(e.target) && container.has(e.target).length === 0 )
  {
    $(".mobile-sliders-container").removeClass('megaz');
  }
});

if($(window).width()<767){
  $('.color-pick-container').detach().prependTo($('.product-single__meta'));
};


$(document).ready(function () {
    $.reel.scan();

});

setTimeout(function() { $.reel.scan(); }, 4000);