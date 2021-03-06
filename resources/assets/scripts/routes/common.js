export default {
  init() {
    // JavaScript to be fired on all pages

    /* Truncate jQuery plugin */
    /* eslint-disable */
    !function(a){"use strict";a.fn.succinct=function(b){var c=a.extend({size:240,omission:"...",ignore:!0},b);return this.each(function(){var b,d,e=a(this),f=/[!-\/:-@\[-`{-~]$/,g=function(){e.each(function(){b=a(this).html(),b.length>c.size&&(d=a.trim(b).substring(0,c.size).split(" ").slice(0,-1).join(" "),c.ignore&&(d=d.replace(f,"")),a(this).html(d+c.omission))})};g()})}}(jQuery);
    /* eslint-enable */

    $('.hamburger-menu').click(function() {
      $('.closed').toggle();
      $('.open').toggle();
      $('.nav-menu').toggle();
    });

    $('aside .truncate').succinct({
      size: 30,
    });
    $('.tile .truncate').succinct({
      size: 50,
    });
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
