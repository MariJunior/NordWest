/* global document */
'use strict';

const $ = require('jquery');

$(document).ready(function () {
  const reviews = document.querySelectorAll('.reviews__item');

  if(reviews.length) {
    require('readmore-js');

    $('.reviews__item-text').readmore({
      speed: 1500,
      moreLink: '<a class="link link--short" href="#">Подробнее</a>',
      lessLink: '<a class="link link--short" href="#">Меньше</a>',
      embedCSS: false
    })
  }
});
