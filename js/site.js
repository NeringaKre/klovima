(function ($) {
  $(document).ready(function() {
    if ($('.page-scroll').length !== 0) {
      $('.page-scroll').fullpage({
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['','Traktoriai', 'Kombainai', 'Krautuvai', 'Savivarčių priekabos', 'Puspriekabės', "Vilkikai"],
        showActiveTooltip: true,
        scrollingSpeed: 700,
      });
    }

    $('section > p').matchHeight();

    if ( $(window).width() >= 768){
      $(".header__menu > li").hover(function(){
          $(this).toggleClass("active");
      });
    } 

    if ( $(window).width() < 768) {
      $(".header__menu > li").click(function(){
          $(this).toggleClass("active");
      });
      //   $(".header__menu > li a").click(function(){
      //     $(".header__menu").css('display', 'none');
      // });
    }

    $(".header__menu > li").each(function(index) {
      if($(this).find('ul').length !== 0) {
        $(this).addClass('has-children');
      }
    });


    $(".header__burger-menu").click(function () {
      $(".header__menu").toggleClass("toggle-menu"); 
    });

    $('.language-menu').click(function() {
      $(".language-menu > div").toggleClass("active");
    });

      //  $(document.body).click(function() {
      //     $(".language-menu > div").removeClass("active");     
      // });


    $('.language-menu > div').on('focusout', function () {
      $(this).removeClass('active');
    });


    $('.paging ul li').click(function() {
      $('.paging ul li').removeClass("active");
      $(this).toggleClass("active");
    });


    $('.nuoma-vidinis .isorinis__heading a p').click(function() {
      $('.nuoma-vidinis .isorinis__heading a p').removeClass("active");
      $(this).addClass("active");
    });

    $('.mokymai .isorinis__heading a p').click(function() {
      $('.mokymai .isorinis__heading a p').removeClass("active");
      $(this).addClass("active");
    });

    $('.isorinis__models-block > div').matchHeight();

    $('.isorinis__info-blocks--first-line').matchHeight();

    $('.isorinis__info-blocks--second-line').matchHeight();

    $('.similar').matchHeight();

    $('.header__menu li').click(function() {
      $('.header__menu li').removeClass("active2");
      $(this).addClass("active2");
    });

    $('.header__menu a').on('click', function() {
      if ($(this).next().length === 0) {
        $('.header__menu').removeClass('toggle-menu');
      }
    });

    // $(".main-section__info-block .btn__red--big").click(function() {
    //   $('body').animate({
    //     scrollTop: $(".main-section__second").offset().top},'slow');
    // });

    //scroll arrows

    $( ".other-pages__arrow" ).click(function(e) {
      e.preventDefault(), $("html, body").animate({
        scrollTop: $(".other-pages__arrow").offset().top + 30
      }, 1e3)
    });

    $( ".other-pages__arrow2" ).click(function(f) {
      f.preventDefault(), $("html, body").animate({
        scrollTop: $(".other-pages__arrow2").offset().top + 30
      }, 1e3)
    });

    $(".main-section__arrow").click(function(f) {
      $.fn.fullpage.moveSectionDown();
    });

    $(".main-section__info-block .btn__red--big").click(function(f) {
      $.fn.fullpage.moveSectionDown();
    });

    if ($('#lightSlider').length !== 0) {
      if ($(window).width() > 1024) {
        $('#lightSlider').lightSlider({
          gallery: true,
          item: 1,
          loop: true,
          sliderMargin: 0,
          thumbItem: 4,
        });
      }
      
      if ($(window).width() <= 1024) {
        $('#lightSlider').lightSlider({
          gallery: true,
          item: 1,
          loop: true,
          sliderMargin: 0,
          thumbItem: 8,
        });
      }
    }
  });

  $(document).mouseup(function(e) {
    var languageContainer = $('.language-menu > div');

    if (!languageContainer.is(e.target) && languageContainer.has(e.target).length === 0) {
      languageContainer.removeClass('active');
    }
  });
})(jQuery);
