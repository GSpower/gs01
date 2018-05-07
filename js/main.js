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
				infinite: false,
				fade: true,
				speed: 0
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
	// sticky disapear
	var contentToStart = $('#fix-start');
	var foot = $('.fixed-footer');
	
	$(document).on('scroll', function() {
		
		if($(this).scrollTop()>=$('#fix-start').position().top){
			foot.addClass('fixed-footer--display');
		
		}if($(this).scrollTop()>=$('#content-stop').position().top){
			foot.removeClass('fixed-footer--display');
		}if($(this).scrollTop()<=$('#fix-start').position().top){
			foot.removeClass('fixed-footer--display');
		}
	})
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

	// load more images instagram
	var loadMoreBtn = $('.load-more-ig');
	var holder = $('.ig-holder');
	var rowFlex = $('.row-flex').last();
	// console.log(rowFlex);
	var imgs = [
		"https://www.healthforest.net/test/ig1.jpg",
		"https://www.healthforest.net/test/ig1.jpg",
		"https://www.healthforest.net/test/ig1.jpg",
		"https://www.healthforest.net/test/ig1.jpg",
		"https://www.healthforest.net/test/ig1.jpg",
		"https://www.healthforest.net/test/ig1.jpg"
	]
	var arrayCounter = [0,1,2];

	var firstImg = imgs[arrayCounter[0]];
	var secondImg = imgs[arrayCounter[1]];
	var thirdImg = imgs[arrayCounter[2]];

	
	

	function adding() {
		arrayCounter = arrayCounter.map(function(val){return val += 3;});
		console.log(arrayCounter);
	}
	
	loadMoreBtn.on('click', function(){
		holder.append("<div class='row-flex'><div class='column3x3'><img src=" + firstImg + " alt='zoe' class='centerImageOriginalIG'><div class='column3x3-hover'><i class='fa fa-instagram'></i></div></div><div class='column3x3'><img src=" + secondImg + " alt='zoe' class='centerImageOriginalIG'><div class='column3x3-hover'><i class='fa fa-instagram'></i></div></div><div class='column3x3'><img src=" + thirdImg + " alt='zoe' class='centerImageOriginalIG'><div class='column3x3-hover'><i class='fa fa-instagram'></i></div></div></div>");
		adding();
		firstImg = imgs[arrayCounter[0]];
		secondImg = imgs[arrayCounter[1]];
		thirdImg = imgs[arrayCounter[2]];
	})
	

});





