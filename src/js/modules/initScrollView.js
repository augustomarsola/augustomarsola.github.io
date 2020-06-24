// Function like scrollSpy
export default function initScrollView() {
  $('.menu-linkA').each(function () {
    const height = $(this).height();
    const offsetTop = $(this).offset().top;
    const menuHeight = $('.menu-header').innerHeight();
    const id = $(this).attr('id');
    const $itemMenu = $(`a[href="#${id}"]`);

    $(window).scroll(function () {
      const scrollTop = $(window).scrollTop();
      if (
        offsetTop - menuHeight < scrollTop &&
        offsetTop + height - menuHeight > scrollTop
      ) {
        $itemMenu.addClass('active');
      } else {
        $itemMenu.removeClass('active');
      }
    });
  });
}
