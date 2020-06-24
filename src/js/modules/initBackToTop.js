// Back to top
export default function initBackToTop() {
  if ($('#back-to-top').length) {
    const scrollTrigger = 100; // px
    const backToTop = function () {
      const scrollTop = $(window).scrollTop();
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
      $('html,body').stop().animate(
        {
          scrollTop: 0,
        },
        800,
      );
    });
  }
}
