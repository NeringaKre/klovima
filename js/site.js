(function ($) {
  $(document).ready(function() {
    if ($('.page-scroll').length !== 0) {
      $('.page-scroll').fullpage({
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['','Traktoriai', 'Kombainai', 'Krautuvai', 'Savivarčių priekabos', 'Puspriekabės', "Vilkikai"],
        showActiveTooltip: true,
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
      $('.language-menu li').toggle("");
    });

    $('.paging ul li').click(function() {
      $('.paging ul li').removeClass("active");
      $(this).toggleClass("active");
    });


    $('.mokymai .isorinis__heading a p').click(function() {
      $('.mokymai .isorinis__heading a p').removeClass("active");
      $(this).addClass("active");
    });

    $('.isorinis__models-block > div').matchHeight();

    $('.isorinis__info-blocks--first-line').matchHeight();

    $('.isorinis__info-blocks--second-line').matchHeight();

    $('.header__menu li').click(function() {
      $('.header__menu li').removeClass("active2");
      $(this).addClass("active2");
    });

    $('.header__menu a').on('click', function() {
      if ($(this).next().length === 0) {
        $('.header__menu').removeClass('toggle-menu');
      }
    });
  });
  
})(jQuery);
