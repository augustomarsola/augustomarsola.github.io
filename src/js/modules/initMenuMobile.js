export default function initMenuMobile() {
  $('.menu-mobile').click(function () {
    $('.menu-ico').toggleClass('active');
    $('.menu-opcoes').toggleClass('active');
    $('.menu-links').toggleClass('menu-links-active');
  });

  $(window).scroll(function () {
    $('.menu-opcoes, .mobile-btn, .menu-ico').removeClass('active');
    $('.menu-links').removeClass('menu-links-active');
  });
}
