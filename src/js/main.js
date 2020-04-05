$(document).ready(function () {
  $('.menu-mobile').click(function () {
    $('.menu-ico').toggleClass('active');
    $('.menu-opcoes').toggleClass('active');
    $('.menu-links').toggleClass('menu-links-active');
  });

   $(window).scroll(function (){
      $('.menu-opcoes, .mobile-btn, .menu-ico').removeClass('active');
      $('.menu-links').removeClass('menu-links-active');
   });

   //Habilita o tooltip
   tippy('[data-tippy-content]', {
    interactive: true,
    theme: 'light',
   });

   backTop();
   smoothScroll();
   scrollView();
});

// Back to top
function backTop() {
  if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
      backToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $('#back-to-top').addClass('show');
        } else {
          $('#back-to-top').removeClass('show');
        }
      };
    backToTop();
    $(window).on('scroll', function () {
      backToTop();
    });
    $('#back-to-top').on('click', function (e) {
      e.preventDefault();
      $('html,body').stop().animate({
        scrollTop: 0
      }, 800);
    });
  }
}

//Smooth Scroll
function smoothScroll() {
  $('.menu-header a[href^="#"]').click(function(e) {
    e.preventDefault();
    var target = $(this).attr("href");
     $('html, body').animate({
      scrollTop: $(target).offset().top - $('.menu-header').height() + 3
     }, 800);
  });
}

//Function like scrollSpy
function scrollView() {

  $('.menu-href').each(function(){
    var height = $(this).height(),
        offsetTop = $(this).offset().top,
        menuHeight = $('.menu-header').innerHeight(),
        id = $(this).attr('id'),
        $itemMenu = $('a[href="#' + id + '"]');
    
    $(window).scroll(function(){
      var scrollTop = $(window).scrollTop();
      if(offsetTop - menuHeight < scrollTop && offsetTop + height - menuHeight > scrollTop) {
        $itemMenu.addClass('active');
      } else {
        $itemMenu.removeClass('active');
      }
    });
  });
}