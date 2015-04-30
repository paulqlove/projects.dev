$(document).on("pageshow", "[data-role='page']", function () {
 $('div.ui-loader').hide();

});

/* ============================ TOC ==============================
 IOS 8 Bug Fix  
 SUPPORTS TOUCH OR NOT for IOS, Android, and Windows Mobile 
 RESPONSIVE EQUAL HEIGHTS 

================================================================ */

// --------------- IOS 8 Bug Fix --------------- //
$(window).load(function() {
    var deviceAgent = navigator.userAgent.toLowerCase();
    var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
    if (agentID) {
    setTimeout(function(){
        window.scrollTo(1, 1);
    }, 100);
}
}); 

/* --------------- SUPPORTS TOUCH OR NOT for IOS, Android, and Windows Mobile --------------- */
/*! Detects touch support and adds appropriate classes to html and returns a JS object  |  Copyright (c) 2013 Izilla Partners Pty Ltd  | http://www.izilla.com.au / Licensed under the MIT license  |  https://coderwall.com/p/egbgdw */
var supports=(function(){var d=document.documentElement,c="ontouchstart" in window||navigator.msMaxTouchPoints;if(c){d.className+=" touch";return{touch:true}}else{d.className+=" no-touch";return{touch:false}}})();

/* --------------- RESPONSIVE EQUAL HEIGHTS --------------- */
/* Javascript-Equal-Height-Responsive-Rows https://github.com/Sam152/Javascript-Equal-Height-Responsive-Rows */
(function($){$.fn.equalHeight=function(){var heights=[];$.each(this,function(i,element){$element=$(element);var element_height;var includePadding=($element.css('box-sizing')=='border-box')||($element.css('-moz-box-sizing')=='border-box');if(includePadding){element_height=$element.innerHeight();}else{element_height=$element.height();}
heights.push(element_height);});this.css('height',Math.max.apply(window,heights)+'px');return this;};$.fn.equalHeightGrid=function(columns){var $tiles=this;$tiles.css('height','auto');for(var i=0;i<$tiles.length;i++){if(i%columns===0){var row=$($tiles[i]);for(var n=1;n<columns;n++){row=row.add($tiles[i+n]);}
row.equalHeight();}}
return this;};$.fn.detectGridColumns=function(){var offset=0,cols=0;this.each(function(i,elem){var elem_offset=$(elem).offset().top;if(offset===0||elem_offset==offset){cols++;offset=elem_offset;}else{return false;}});return cols;};$.fn.responsiveEqualHeightGrid=function(){var _this=this;function syncHeights(){var cols=_this.detectGridColumns();_this.equalHeightGrid(cols);}
$(window).bind('resize load',syncHeights);syncHeights();return this;};})(jQuery);

     
// var footerPosition = $('.footer').offset();
// var footerTop = footerPosition.top;
//     console.log(footerTop +' from the top');
// var bottomSlider = $('.footer').height();
//     console.log(bottomSlider + ' height of footer');    

// var ch_social_pos = footerTop - bottomSlider;
//     console.log(ch_social_pos);
// $('.slide-panel-footer').css("top",ch_social_pos);
$(function() {
    var bottomSlider = $('.footer').height();
    $('.slide-panel-footer').css("bottom",bottomSlider);
    console.log(bottomSlider);    
    /* ---------------  DATA SLIDE --------------- */
    $('[data-slide="slide"]').click(function(e) {
        
        var $this = $(this);
        var target = $this.attr('data-target');
        var $target = $(target);
        
        if ($('.slide-panel-parent').children().is('.open')) {
            $('.open').not(target).removeClass('open');
            $('.active-slide-btn').not(this).removeClass('active-slide-btn');
            $(this).toggleClass('active-slide-btn');
            $(target).toggleClass('open');
            $('html').removeClass('slide-active');
            


        } else {
            $(target).toggleClass('open');
            $(this).toggleClass('active-slide-btn');
            $('#page').toggleClass('page-off');
        }

        if ($('.slide-panel-parent').children().is('.open')) {
            $('html').addClass('slide-active'); //was addClass

        } else {
            $('html').removeClass('slide-active');

        }
        	$('#nav-toggle').toggleClass('hidden');
        e.preventDefault();
    });

    //correct the shifting of the scrollbar when a slide is active
    if ($(document).height() > $(window).height()) {
       $('body').addClass('body-scroll-fix');      
    }


    $('.slide-panel .close').click(function(e) {
        $('.active-slide-btn').removeClass('active-slide-btn');
        $(this).parent().removeClass('open');
        $('html').removeClass('slide-active');
        $('#page').removeClass('page-off');
        $('#nav-toggle').removeClass('hidden');
        e.preventDefault();
    });
 
    $('#color_footer_rbutton').click(function(e){
        $("#social_icons").removeClass('open');
    });
    // indicate what panel you're on when you've clicked inside a panel to another panel
    $('.slide-panel .signin-toggle').click(function(e) {
         $('.header-btn.signin-toggle').toggleClass('active-slide-btn');

        e.preventDefault();
    });
    
    $('.slide-panel .login-toggle').click(function(e) {
         $('.header-btn.login-toggle').toggleClass('active-slide-btn');
        e.preventDefault();
    });
    

});


// ------------------  DON'T COVER ANCHOR TARGETS --------------------

$(function() {

    //set the variable of the Navbar 
    var navbarHeight = $(".header").height() + 10;

    // SLIDE TO ANCHOR and DON'T COVER ANCHORS WITH .has-anchor on the trigger :: http://stackoverflow.com/a/20320919/1004312
    $('.has-anchor').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - navbarHeight //offset
                }, 1500);
            }
        }
    });
    // Executed on page load with URL containing an anchor tag.
    if ($(location.href.split("#")[1])) {
        var target = $('#' + location.href.split("#")[1]);
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top - navbarHeight //offset height of header here if the header is fixed and it is not!
            }, 1500);
            return false;
        }
    }

});

/* ---------------  MISC INITIALIZATIONS AND CUSTOM SCRIPTS --------------- */
$(function() {

    /* --------------- Add class to show what page user is on --------------- */
    var path = window.location.href.substr(window.location.href.lastIndexOf("/"));
    console.log(path)
    $(" a").each(function(){
      if($(this).attr("href") == path || $(this).attr("href") == ''){
          
          $(this).addClass("current");
        };
    });

    $('.purchase_button_desktop').mouseenter(function(){
        $('i#prev_image_button').fadeIn().removeClass('hidden');
        $('i#prev_image_button').fadeIn().addClass('bounce_it');
        
    })
    $('.purchase_button_desktop').mouseout(function(){
        $('i#prev_image_button').fadeOut();
    })

   
    /* --------------- Show event description and hide on mobile --------------- */
    $('.event_description').click(function(){
        $('.event_description ul').toggleClass("hidden-xs");
        $('.event_description i').toggleClass("hidden-xs");
    });
    /* ---------------  Equal Heights on some Divs --------------- */
        $('.galleries').equalHeight();
        $('#footerOptions li').equalHeight();
        $('.event_info li').equalHeight();
        $('.workshop_list img').equalHeight();
        $('.events_list img').equalHeight();
        $('.same_height').equalHeight();
       
    if($(window).width() > 768){
        // $('.we_div_height').equalHeight();
        $('#artist_workshop').height($('#workshop_height').height());
        $('#artist_events').height($('#events_height').height());
        
    }

    /* --------------- .title inner wrapper --------------- */
    $('.title').wrapInner("<span></span>");

    /* --------------- Inner Wrappers for .info-text-box and .widget-title --------------- */
    $('.info-text-box').wrapInner("<span></span>");
    $('.widget-title').wrapInner("<span></span>");

   
    $('body').on('mouseup', function(e) {
        $('.icon-demo span.glyphicon, .icon-demo span.ti').each(function() {
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.tooltip').has(e.target).length === 0) {
                $(this).tooltip('hide');
            }
        });
    });

    /* ---------------  Scroll to Top ---------------*/
    $('#go-to-top').hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#go-to-top').fadeIn();
        } else {
            $('#go-to-top').fadeOut();
        }
    });
    $('#go-to-top').click(function(e) {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });
    
    

}); // end doc ready



