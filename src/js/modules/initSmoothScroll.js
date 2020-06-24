// Smooth Scroll
export default function initSmoothScroll() {
  $('.menu-header a[href^="#"]').click(function (e) {
    e.preventDefault();
    const target = $(this).attr('href');
    $('html, body').animate(
      {
        scrollTop: $(target).offset().top - $('.menu-header').height() + 3,
      },
      800,
    );
  });
}
