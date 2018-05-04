// (function(){
//     function load_button_1(){
//         var this_id = 'ch-buy-button-corejs-OJ75qmYEORp7MhCWIqZW';
//         var remove = document.getElementById(this_id);
//         if(remove){
//             remove.parentNode.removeChild(remove);
//         }
//         var script=document.createElement('script');
//         script.setAttribute('src', 'https://api.c.carthook.com/api/v1/code/OJ75qmYEORp7MhCWIqZW/buyButton.js?style=style1');
//         script.setAttribute('type', 'text/javascript');
//         script.setAttribute('id', this_id);
//         document.getElementsByTagName('head')[0].appendChild(script);
//     }
//     function load_button_css(){
//         var this_id = 'ch-buy-button-css-OJ75qmYEORp7MhCWIqZW';
//         var remove = document.getElementById(this_id);
//         if(remove){
//             remove.parentNode.removeChild(remove);
//         }
//         var link=document.createElement('link');
//         link.id=this_id;
//         link.rel='stylesheet';
//         link.type='text/css';
//         link.href='https://api.c.carthook.com/api/v1/code/OJ75qmYEORp7MhCWIqZW/buyButton.css?style=style1';
//         link.media='all';
//         link.addEventListener('load', function(){
//             load_button_1();
//         });
//         document.getElementsByTagName('head')[0].appendChild(link);
//     }
//     load_button_css();
// })();
// if(typeof chTranslationVariables == 'undefined'){
//     var chTranslationVariables = { "OJ75qmYEORp7MhCWIqZW" : {"$defVariant":"all","$quantity":"Quantity","$maxQuantity":10,"$buyText":"BUY NOW","$buyTextBackground":"#ff9f00","$buyTextColor":"#ffffff","$validation2":"Sorry! This item is currently not available in this"} };
// } else {
//     chTranslationVariables["OJ75qmYEORp7MhCWIqZW"] = {"$defVariant":"all","$quantity":"Quantity","$maxQuantity":10,"$buyText":"BUY NOW","$buyTextBackground":"#ff9f00","$buyTextColor":"#ffffff","$validation2":"Sorry! This item is currently not available in this"};
// }

// modal slider
$(document).ready(function(){
	console.log('test');
	var clickd = false;
	var item = $('.column3x3');
	var sliderModal = $('.modal-slider');
    var slickSlider = $('.modal-slider__container');
    var arrowLeft = $('.modal-slider-controls--left');
    var arrowRight = $('.modal-slider-controls--right');
    var exitBtn = $('.close-modal');
	var displayModal = 'modal-slider-show';

	item.on('click', function(e){
		if(clickd === false){
			clickd = $(this).index();
			sliderModal.addClass(displayModal);
			slickSlider.slick({
				initialSlide: clickd,
				slidesToShow: 1,
				prevArrow: arrowLeft,
				nextArrow: arrowRight,
				infinite: false
			});
		}else{
			console.log(clickd);
			clickd = $(this).index();
			e.preventDefault();
			slickSlider.slick('slickGoTo', parseInt(clickd));
			sliderModal.addClass(displayModal);
		}
	})
    exitBtn.click(function(e){
		sliderModal.removeClass(displayModal);
	})
	// esc to close
    $(document).on('keydown',function(e) {
        if (e.keyCode == 27) {
            sliderModal.removeClass(displayModal);
        }
	});
	// sticky disapear and modal close on clicking outside
	var content = $('#content-stop');
	var foot = $('.fixed-footer');
	
	function isScrolledIntoView(elem){
		var docViewTop = $(window).scrollTop();
		var docViewBottom = docViewTop + $(window).height();
		var elemTop = $(elem).offset().top;
		var elemBottom = elemTop + $(elem).height();
	
		return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}
	$(window).scroll(function() {
		if(isScrolledIntoView(content)){
			console.log('stigao');
			foot.hide();
		}else{
			foot.show();
		}
	});
	// modal close on clicking outside of modal
	// $(document).click(function(event) {
	// 	if (!$(event.target).closest(".slider-modal,.column3x3").length) {
	// 	  $("body").find(".modal-slider").removeClass("modal-slider-show");
	// 	}
	//   });
	// footer links
	var submenuLinksTitle = $('.block-title-column');
	var submenuLinksDrop = $('.footer-column-links');
	var chevronLinks = $('.fa-chevron-down');
	var chevronLinksActive = $('.fa-rotation');
	// dropdowns
	submenuLinksTitle.on('click', function(){
		if($(this).next().hasClass('footer-column-links--show')){
			$(this).next().removeClass('footer-column-links--show');
		}else{
			$('.footer-column').find('.footer-column-links--show').removeClass('footer-column-links--show');
			$(this).next().addClass('footer-column-links--show');
			
		}
	});
	// chevron rotation
	submenuLinksTitle.on('click', function(){
		if($(this).find('.fa').hasClass('fa-rotation')){
			$(this).find('.fa').removeClass('fa-rotation');
		}else{
			$('.footer-column').find('.fa').removeClass('fa-rotation');
			$(this).find('.fa').addClass('fa-rotation');
		}
	});

});





