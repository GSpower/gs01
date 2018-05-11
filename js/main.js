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

	var holder = $('.ig-holder');

	holder.on('click', '.column3x3', function(e){
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
	// item.on('click', function(e){
	// 	if(clickd === false){
	// 		clickd = $(this).index();
	// 		sliderModal.addClass(displayModal);
	// 		slickSlider.slick({
	// 			initialSlide: clickd,
	// 			slidesToShow: 1,
	// 			prevArrow: arrowLeft,
	// 			nextArrow: arrowRight,
	// 			infinite: false,
	// 			fade: true,
	// 			speed: 0
	// 		});
	// 	}else{
	// 		console.log(clickd);
	// 		clickd = $(this).index();
	// 		e.preventDefault();
	// 		slickSlider.slick('slickGoTo', parseInt(clickd));
	// 		sliderModal.addClass(displayModal);
	// 	}
	// })
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

	// setting datas
	var imgs = [
		"https://www.healthforest.net/test/ig1.jpg",
		"https://www.healthforest.net/test/ig1.jpg",
		"https://www.healthforest.net/test/ig1.jpg",
		"https://www.healthforest.net/test/ig1.jpg",
		"https://www.healthforest.net/test/ig1.jpg",
		"https://www.healthforest.net/test/ig1.jpg"
	]

	var userNames = [

	]

	var descs = [

	]
	// init counter
	var arrayCounter = [0,1,2];
	// setting default values
	var firstImg = imgs[arrayCounter[0]];
	var secondImg = imgs[arrayCounter[1]];
	var thirdImg = imgs[arrayCounter[2]];

	function adding() {
		arrayCounter = arrayCounter.map(function(val){return val += 3;});
		console.log(arrayCounter);
	}
	


	loadMoreBtn.on('click', function(){
		
		var rowFlex = $('.row-flex').last();
		
		rowFlex.after("<div class='row-flex'><div class='column3x3'><img src=" + firstImg + " alt='zoe' class='centerImageOriginalIG'><div class='column3x3-hover'><i class='fa fa-instagram'></i></div></div><div class='column3x3'><img src=" + secondImg + " alt='zoe' class='centerImageOriginalIG'><div class='column3x3-hover'><i class='fa fa-instagram'></i></div></div><div class='column3x3'><img src=" + thirdImg + " alt='zoe' class='centerImageOriginalIG'><div class='column3x3-hover'><i class='fa fa-instagram'></i></div></div></div>");
		adding();
		firstImg = imgs[arrayCounter[0]];
		secondImg = imgs[arrayCounter[1]];
		thirdImg = imgs[arrayCounter[2]];

		var sliderContainer = $('.slick-track');
		
		sliderContainer.append("<div class='modal-slider__slide'><div class='slide-mo-left'><img src=" + firstImg + " alt='zoe' class='slider-img'></div><div class='slide-controls-responsive'><div class='modal-slider-controls modal-slider-controls--left'><svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 6.5 15' enable-background='new 0 0 6.5 15' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve'><path fill-rule='evenodd' clip-rule='evenodd' d='M1.5,7.625L6.5,15H5L0,7.625L5,0h1.5L1.5,7.625z'></path></svg></div><div class='modal-slider-controls modal-slider-controls--right'><svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 6.5 15' enable-background='new 0 0 6.5 15' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve'><path fill-rule='evenodd' clip-rule='evenodd' d='M0,0h1.5l5,7.625L1.5,15H0l5-7.375L0,0z'></path></svg></div></div><div class='slide-mo-right'><span class='close-modal'><svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 15.5 15.5' enable-background='new 0 0 15.5 15.5' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve'><path fill-rule='evenodd' clip-rule='evenodd' d='M15.071,1.136l-1.208-0.708L0.429,14.364l1.207,0.708L15.071,1.136z'></path><path fill-rule='evenodd' clip-rule='evenodd' d='M0.429,1.136l1.207-0.708l13.435,13.935l-1.208,0.708L0.429,1.136z'></path></svg></span><div class='slide-mo-desc'><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis id, provident voluptates ipsum accusantium dictarem adipisci ea sint exercitationem minus nobis nisi libero cum error vero cupiditate debitis esse.</p><a href='#' class='slide-mo-desc__user'>username</a></div></div></div><div class='modal-slider__slide'><div class='slide-mo-left'><img src=" + secondImg + " alt='zoe' class='slider-img'></div><div class='slide-controls-responsive'><div class='modal-slider-controls modal-slider-controls--left'><svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 6.5 15' enable-background='new 0 0 6.5 15' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve'><path fill-rule='evenodd' clip-rule='evenodd' d='M1.5,7.625L6.5,15H5L0,7.625L5,0h1.5L1.5,7.625z'></path></svg></div><div class='modal-slider-controls modal-slider-controls--right'><svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 6.5 15' enable-background='new 0 0 6.5 15' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve'><path fill-rule='evenodd' clip-rule='evenodd' d='M0,0h1.5l5,7.625L1.5,15H0l5-7.375L0,0z'></path></svg></div></div><div class='slide-mo-right'><span class='close-modal'><svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 15.5 15.5' enable-background='new 0 0 15.5 15.5' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve'><path fill-rule='evenodd' clip-rule='evenodd' d='M15.071,1.136l-1.208-0.708L0.429,14.364l1.207,0.708L15.071,1.136z'></path><path fill-rule='evenodd' clip-rule='evenodd' d='M0.429,1.136l1.207-0.708l13.435,13.935l-1.208,0.708L0.429,1.136z'></path></svg></span><div class='slide-mo-desc'><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis id, provident voluptates ipsum accusantium dictarem adipisci ea sint exercitationem minus nobis nisi libero cum error vero cupiditate debitis esse.</p><a href='#' class='slide-mo-desc__user'>username</a></div></div></div><div class='modal-slider__slide'><div class='slide-mo-left'><img src=" + thirdImg +" alt='zoe' class='slider-img'></div><div class='slide-controls-responsive'><div class='modal-slider-controls modal-slider-controls--left'><svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 6.5 15' enable-background='new 0 0 6.5 15' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve'><path fill-rule='evenodd' clip-rule='evenodd' d='M1.5,7.625L6.5,15H5L0,7.625L5,0h1.5L1.5,7.625z'></path></svg></div><div class='modal-slider-controls modal-slider-controls--right'><svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 6.5 15' enable-background='new 0 0 6.5 15' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve'><path fill-rule='evenodd' clip-rule='evenodd' d='M0,0h1.5l5,7.625L1.5,15H0l5-7.375L0,0z'></path></svg></div></div><div class='slide-mo-right'><span class='close-modal'><svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 15.5 15.5' enable-background='new 0 0 15.5 15.5' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve'><path fill-rule='evenodd' clip-rule='evenodd' d='M15.071,1.136l-1.208-0.708L0.429,14.364l1.207,0.708L15.071,1.136z'></path><path fill-rule='evenodd' clip-rule='evenodd' d='M0.429,1.136l1.207-0.708l13.435,13.935l-1.208,0.708L0.429,1.136z'></path></svg></span><div class='slide-mo-desc'><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis id, provident voluptates ipsum accusantium dictarem adipisci ea sint exercitationem minus nobis nisi libero cum error vero cupiditate debitis esse.</p><a href='#' class='slide-mo-desc__user'>username</a></div></div></div>");


		
		
		
	})
	// reviews load more on click
	function addingReviews() {
		arrayCounterReviews = arrayCounterReviews.map(function(val){
			return val += 3;
		});
	}
	var nickName = [
		"Carlos",
		"Peyton Huckaby",
		"Jay Sharp",
		"Tiffany Pham",
		"Kytzia Vergara",
		"Jay Sharp",
		"Maleia Dunn",
		"Lina",
		"Dejonelle Buckley",
		"Sharon Loera",
		"Diana pangan",
		"Ariana De La Riva",
		"Abigail Rojas",
		"Zachery",
		"Sunshine Irvin",
		"Genysis B",
		"Alissa Lemus",
		"Daisy",
		"Hailey Higley",
		"Kelly Tran",
		"Iris",
		"Sarah",
		"Nancy Phan",
		"Suzanne",
		// "Amy"
	]
	var reviewSmall = [
		"THE ZOE IS AMAZING!",
		"Greatest product ever",
		"Omg",
		"😍😍😍",
		"Great",
		"Simply amazing",
		"LOVE My Zoe",
		"I love it",
		"Game changing.",
		"Beautiful skin",
		"Team zoe",
		"Amazing product",
		"I love ZOE",
		"Clear Skin",
		"ZOE",
		"I FREAKING LOVE ZOE",
		"The ZOE is life chaning!!",
		"Amazing",
		"Amazing !!!!",
		"ACNE FREE!!",
		"The BEST FACIAL CLEANSER MASSAGER that i EVER BOUGHT!!!",
		"I'M SO HAPPY!!",
		"Simply Awesome!!",
		"I love the way Zoe cleanses my skin!",
		// "Great Product"
	]
	var reviewFull = [
		"The Zoe did wonders on my face. It cleared it up, I have a very nice and smooth face thanks to the Zoe! I will not lie, I was hesitant, given the fact that i've tried so many products, especially expensive ones that just do not work, but the Zoe has been nothing but great to me! I will definitely reccomend! ",

		"All my friends have a ZOE and they absolutely love it and I stron recommend to get one ",

		"I love this product so much better than the other brands ",

		"LOVE the zoe! definitely saw a difference before and when using this product! haven't been able to find one that actually works on my skin until now. 10/10 would recommend it ",

		"I'm absolutely in love with my ZOE! Over the past days my skin much healthier. Thanks for coming across end ZOE I'm so in love!❤️",

		"I love the Zoe product better than anything else I've tried ",

		"I used to worry about my skin but since using my ZOE, I've had nothing by but clear skin. It leaves my skin feeling soft and smooth. I love it, this product is amazing. ",

		"When I first heard about this product from my friends and how great it is I gave it a shot. I use to hate how my skin would feel like dirty & gross but now my skin looks & feels much healthier than before. I love it! ",

		"I have seen my skin change drastically! My Zoe is the first thing I reach for when I'm traveling ",

		"Zoe is amazing!!!!!!!! I struggled so much with my skin before using this product. This product has made me feel beautiful and so much more confident !! ",

		"I've heard nothing but amazing news and reviews for this product ",

		"As a person who usually has dry skin, it feels good to have soft skin again. Thank you. ",

		"I love Zoe and the fact that it helps me be able to get all my skin products onto my face rather than absorbing. I would recommend it for all skin products rather than the Clarisonic ",

		"I love my Zoe it given me clear skin and I love it!!💗 💗",

		"I i love that fact that's that Zoe works with any skin type! Also that it works so fast, I've seen people that use it && the the process of Zoe works wonders! I myself might just get one to try out this amazing product!❤️",

		"i love the way Zoe helps cleanse my face!! One of the best devices i have ever used and i definitely recommend it!! Thanks to Zoe, I have noticed a huge difference in my skin(: ",

		"I truly love the ZOE and have seen major improvements in my skin and I just love the way it feels! Can't wait to share this with all my friends! ",

		"I absolutely love the ZOE ! It's amazing!! 💗",

		"This is the best thing I've ever used. I've had bad acne most of my life and it works so well. I would definitely recommend it to everyone! 5/5 stars for sure ",

		"The Clarisonic can't even compare to Zoe! My skin is always feeling smooth and clean after I use the Zoe! After a few weeks of using the Zoe, I've noticed my skin become smooth and clear!!!! I am confident that the Zoe has significantly changed my complexion for the better! I absolutely love the product and plan on bringing it everywhere! ",

		"Dear Zoe Team, Thank you for making Zoe and I love the device so much that I bought one for everyone in my family for this Christmas. It is truly a life changing experience to use Zoe. My face feels like a million dollar after using Zoe. I have better skin now since Zoe enters into my life. Thanks QykSonic, Iris Ng ",

		"I'm obsessed with skincare and i'm so glad I finally found the perfect facial brush!!! i can't even explain how clean my face feels! and massaging it is my favorite thing to do, definitely a must have!!! ",

		"Zoe's pulsating massage feels so awesome, it's like I have an esthetician at home at my call ",

		"I love the way Zoe cleanses my skin, and it's so easy to clean and maintain, I can't believe I've been spending hundreds of dollars on replacement Clarisonic brush heads all these years "

		// "My skin never felt so alive, and clean. It felt like ages of makeup and dirt cleaned off a quick couple minutes "

	];

	var arrayCounterReviews = [0,1,2];

	var firstNickName = nickName[arrayCounterReviews[0]];
	var secondNickName = nickName[arrayCounterReviews[1]];
	var thirdNickName = nickName[arrayCounterReviews[2]];

	var firstReviewSmall = reviewSmall[arrayCounterReviews[0]];
	var secondReviewSmall = reviewSmall[arrayCounterReviews[1]];
	var thirdReviewSmall = reviewSmall[arrayCounterReviews[2]];

	var firstReviewFull = reviewFull[arrayCounterReviews[0]];
	var secondReviewFull = reviewFull[arrayCounterReviews[1]];
	var thirdReviewFull = reviewFull[arrayCounterReviews[2]];

	
	

	var loadMoreBtnReviews = $('#loadMoreBtnRev');

	loadMoreBtnReviews.on('click', function () {
		var grayLine = $('.row-reviews .grey').last();
		
		grayLine.after("<div class='ReviewColumn'><span class='stars'>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</span><br><b>"+ firstReviewSmall + "</b><br><i>" + firstNickName + "</i><br><span class='verified'><span class='checkmark'>&#10003;</span> Verified Buyer</span></div><div class='ReviewColumn2'>" + firstReviewFull +"</div><hr class='grey'><div class='ReviewColumn'><span class='stars'>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</span><br><b>"+ secondReviewSmall + "</b><br><i>" + secondNickName + "</i><br><span class='verified'><span class='checkmark'>&#10003;</span> Verified Buyer</span></div><div class='ReviewColumn2'>" + secondReviewFull +"</div><hr class='grey'><div class='ReviewColumn'><span class='stars'>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</span><br><b>"+ thirdReviewSmall + "</b><br><i>" + thirdNickName + "</i><br><span class='verified'><span class='checkmark'>&#10003;</span> Verified Buyer</span></div><div class='ReviewColumn2'>" + thirdReviewFull +"</div><hr class='grey'>");

		addingReviews();

		firstNickName = nickName[arrayCounterReviews[0]];
		secondNickName = nickName[arrayCounterReviews[1]];
		thirdNickName = nickName[arrayCounterReviews[2]];

		firstReviewSmall = reviewSmall[arrayCounterReviews[0]];
		secondReviewSmall = reviewSmall[arrayCounterReviews[1]];
		thirdReviewSmall = reviewSmall[arrayCounterReviews[2]];

		firstReviewFull = reviewFull[arrayCounterReviews[0]];
		secondReviewFull = reviewFull[arrayCounterReviews[1]];
		thirdReviewFull = reviewFull[arrayCounterReviews[2]];

		if(arrayCounterReviews[2] == 26){
			loadMoreBtnReviews.hide();
			
		}
		
	})

	// injecting low res video
	var windowWidth = $(window).outerWidth();
	
	var videoHolderFirst = $('#video-holder-first');
	var videoHolderSecond = $('#video-holder-second');
	var videoHolderThird = $('#video-holder-third');
	
	var videosHigh = [
		"https://content.jwplatform.com/videos/v1ezK8tI-T5UwtF42.mp4",
		"https://content.jwplatform.com/videos/BDZ0YZOk-T5UwtF42.mp4",
		"https://content.jwplatform.com/videos/uMKZsA89-T5UwtF42.mp4"
	];
	var videosLow = [
		"https://content.jwplatform.com/videos/v1ezK8tI-RxV8WVqH.mp4",
		"https://content.jwplatform.com/videos/BDZ0YZOk-Nz8Uvbt5.mp4",
		"https://content.jwplatform.com/videos/uMKZsA89-RxV8WVqH.mp4"
	];

	if (windowWidth >= 1000) {
		videoHolderFirst.after("<video class='column3__video' loop autoplay muted playsinline><source src=" + videosHigh[0] + " type='video/mp4'>Your browser does not support the video tag.</video>");
		videoHolderSecond.after("<video class='column3__video' loop autoplay muted playsinline><source src=" + videosHigh[1] + " type='video/mp4'>Your browser does not support the video tag.</video>");
		videoHolderThird.after("<video class='column3__video' loop autoplay muted playsinline><source src=" + videosHigh[2] + " type='video/mp4'>Your browser does not support the video tag.</video>");
	}else{
		videoHolderFirst.after("<center><video class='column3__video' loop autoplay muted playsinline><source src=" + videosLow[0] + " type='video/mp4'>Your browser does not support the video tag.</video></center>");
		videoHolderSecond.after("<center><video class='column3__video' loop autoplay muted playsinline><source src=" + videosLow[1] + " type='video/mp4'>Your browser does not support the video tag.</video></center>");
		videoHolderThird.after("<center><video class='column3__video' loop autoplay muted playsinline><source src=" + videosLow[2] + " type='video/mp4'>Your browser does not support the video tag.</video></center>");
	}
	
	// modal player
	var openBtnModalPlayer = $('#open-video-modal');
	var closeBtnModalPlayer = $('.video-overlay-popup__close-btn');
	var modalPlayer = $('.video-overlay-popup__video-wrap');
	var windowBody = $('body');
	var videoInsideModal = $('#video-1');
	openBtnModalPlayer.on('click', function () {
		modalPlayer.addClass('video-overlay-popup__video-wrap--active');
		windowBody.addClass('body-fix');
	})
	closeBtnModalPlayer.on('click', function () {
		modalPlayer.removeClass('video-overlay-popup__video-wrap--active');
		windowBody.removeClass('body-fix');
		videoInsideModal.attr('src', videoInsideModal.attr('src'));
		
	})
	
});
