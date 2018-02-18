(function ($) {
  $(document).ready(function() {
   //  $('.main').onepage_scroll({
	  // 	easing: "ease",
	  // 	animationTime: 500,
	  // 	keyboard: true,
	  // 	pagination: true,
	  // 	updateURL: false,
	  // 	loop: false,
	  // 	responsiveFallback: false,
	  // 	direction: "vertical"
	  // });

    if ($('.page-scroll').length !== 0) {
      $('.page-scroll').fullpage({
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Traktoriai', 'Kombainai', 'Krautuvai', 'Savivarčių priekabos', 'Puspriekabės', "Vilkikai"],
        showActiveTooltip: true,
      });
    }

    $('section > p').matchHeight();
  });
  
})(jQuery);

$(document).ready(function(){
	if ( $(window).width() >= 768){
  $(".header__menu > li").hover(function(){
      $(this).toggleClass("active");
  });
} if ( $(window).width() < 768) {
	$(".header__menu > li").click(function(){
      $(this).toggleClass("active");
  });
}
  $(".header__menu > li").each(function(index) {
  	if($(this).find('ul').length !== 0) {
  	  $(this).addClass('has-children');
  	}
  });


	$(".header__burger-menu").click(function () {
    $(".header__menu").toggleClass("toggle-menu");
        // $("#").show();   
  });

    $('.language-menu').click(function() {
      $('.language-menu li').toggle("");
    });

    $('.paging ul li').click(function() {
      $('.paging ul li').removeClass("active");
      $(this).addClass("active");
    });


    $('.mokymai .isorinis__heading a p').click(function() {
      $('.mokymai .isorinis__heading a p').removeClass("active");
      $(this).addClass("active");
    });

    $(document).ready(function() {
      $(".select").find("option").eq(0).remove();
  });

// $(function () {
//   $('body').on('click', function () {
//     $('<p>Text</p>').appendTo('.onepage-pagination li:first-child');
//   });
// });

// $(function append() {
// {
// $('main-section__info-block h1.val()').appendTo('.onepage-pagination li a');
// }
// });

// $(function myFunction() {
// 	{
//     $('.traktoriai').value.appendTo('.onepage-pagination li a');
// 	}
// });

// function myFunction() {
//     var x = document.getElementsByClassName("traktoriai");
//     x.value.appendTo(".onepage-pagination li a");
// }


});