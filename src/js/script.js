import initMenuMobile from './modules/initMenuMobile';
import initBackToTop from './modules/initBackToTop';
import initSmoothScroll from './modules/initSmoothScroll';
import initScrollView from './modules/initScrollView';

$(document).ready(function () {
  initMenuMobile();

  // Habilita o tooltip
  // eslint-disable-next-line no-undef
  tippy('[data-tippy-content]', {
    interactive: true,
  });

  initBackToTop();
  initSmoothScroll();
  initScrollView();
});
