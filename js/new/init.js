/*
 * Copyright (c) 2021 Brian Calvo
 * Author: Brian Calvo
*/


jQuery(document).ready(function(){

    "user strict";

    // Ejecuta todas la funciones
    
    cursor();
    nav_bg();
    trigger_menu();
    profile_image();
    down();
    service_popup();
    imgtosvg();
    data_images();

    jQuery(window).load('body', function(){
        custom_load();
    });

});

// -----------------------------------------------------
// ------------------   CURSOR    ----------------------
// -----------------------------------------------------

function cursor(){

    "use strict";

    var myCursor = jQuery('.mouse-cursor');
	
	if(myCursor.length){
		if ($("body")) {
            const e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer");
            let n, i = 0,
            o = !1;
            window.onmousemove = function (s) {
                o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
            }, $("body").on("mouseenter", "a,.topbar .trigger, .cursor-pointer", function () {
                e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
            }), $("body").on("mouseleave", "a,.topbar .trigger, .cursor-pointer", function () {
                $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
            }), e.style.visibility = "visible", t.style.visibility = "visible"
        }
	}
};
// -----------------------------------------------------
// ---------------   PRELOADER   -----------------------
// -----------------------------------------------------

function preloader(){
	
	"use strict";
	
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
	var preloader = $('#preloader');
	
	if (!isMobile) {
		setTimeout(function() {
			preloader.addClass('preloaded');
		}, 800);
		setTimeout(function() {
			preloader.remove();
		}, 2000);

	} else {
		preloader.remove();
	}
}

// -----------------------------------------------------
// -----------------   CUSTOM LOAD    ----------------------
// -----------------------------------------------------

function custom_load(){
	
	"use strict";
	
	var speed	= 500;
	setTimeout(function(){preloader();},speed);
	setTimeout(function(){jQuery('body').addClass('opened');},speed+2000);
}

// -------------------------------------------------
// -------------   TOPBAR BG SCROLL  ---------------
// -------------------------------------------------

function nav_bg(){
	
	"use strict";
	
	jQuery(window).on('scroll',function(){
		var menu	 		= jQuery('.navbar');
		var WinOffset		= jQuery(window).scrollTop();
		
		if(WinOffset >= 100){
			menu.addClass('animate');
		}else{
			menu.removeClass('animate');
		}
	});
}

// ------------------------------------------------
// -------------------  ANCHOR --------------------
// ------------------------------------------------

jQuery('.nav').onePageNav();

// -----------------------------------------------------
// ---------------   TRIGGER MENU    -------------------
// -----------------------------------------------------

function trigger_menu(){
	
	"use strict";

	var hamburger 		= jQuery('.trigger .hamburger');
	var list			= jQuery('.navbar .list ul li');
	var mobileMenu		= jQuery('.mobile_menu .dropdown');
	var mobileMenuList	= jQuery('.mobile_menu .dropdown .dropdown_inner ul li a');

	hamburger.on('click',function(){
		var element 	= jQuery(this);

		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			list.removeClass('opened');
			mobileMenu.slideUp();
		}else{
			element.addClass('is-active');
			list.each(function(i){
				var ele = jQuery(this);
				setTimeout(function(){ele.addClass('opened');},i*50);
			});
			mobileMenu.slideDown();
		}
		return false;
	});
	
	mobileMenuList.on('click',function(){
		jQuery('.trigger .hamburger').removeClass('is-active');
		mobileMenu.slideUp();
		return false;
	});
}

// -----------------------------------------------------
// -----------------    DOWN    ------------------------
// -----------------------------------------------------

function down(){

    "user strict";

    var navbar = jQuery('.navbar').outerHeight();

    jQuery('.profile .down a').on('click', function(){
        if($.attr(this,'href') !== '#'){
            $('html,body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top-navbar+20
            }, 800);
        }
        return false;
    })

}

// --------------------------------------------------------------
// -----------------    PROFILE IMAGE    ------------------------
// --------------------------------------------------------------

function profile_image(){

	"use strict";
	
	var FixedImage	= jQuery('.profile .right .image .main').data('img-url');
	var wrapper	= jQuery('.profile .services ul');
	var list	= wrapper.find('li a');
	list.on('mouseenter',function(){
		var element = jQuery(this);
		var image	= element.find('.image').attr('src');
		element.closest('.profile').find('.right .image .main').css({backgroundImage:'url('+image+')'});
		console.log(image);
	});
	wrapper.on('mouseleave',function(){
		jQuery('.profile .right .image .main').css({backgroundImage:'url('+FixedImage+')'});
	});
}

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -------------------------------------------------
// -------------  SERVICE POPUP  -------------------
// -------------------------------------------------

function service_popup(){
	
	"use strict";
	
	var modalBox		= jQuery('.modalbox');
	var button			= jQuery('.profile .services ul li a');
	var closePopup		= modalBox.find('.close');
	
	button.on('click',function(){
		var element = jQuery(this);
		var elImage	= element.find('.image').attr('src');
		var title	= element.find('span').text();
		var content = element.parent('li').find('.hidden_content').html();
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(content);
		modalBox.find('.popup_informations').prepend('<div class="image"><img src="images/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="'+elImage+'"></div></div>');
		data_images();
		modalBox.find('.popup_informations .image').after('<div class="title"><h3>'+title+'</h3></div>');
		return false;
	});
	closePopup.on('click',function(){
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		return false;
	});
}

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function data_images(){
	
	"use strict";
	
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element			= jQuery(this);
		var url				= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}