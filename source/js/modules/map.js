/* eslint-disable no-alert, no-console */
'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const mapBlock = document.querySelector('.map');

  if (mapBlock) {
    ymaps.ready(function () {
      let myMap = new ymaps.Map('map', {
        center: [55.16013857, 61.28671600],
        zoom: 16,
        controls: ['largeMapDefaultSet']
      }, {
        searchControlProvider: 'yandex#search'
      });

      const myPlacemark = new ymaps.Placemark([55.75399400, 37.62209300], {
        hintContent: 'Мы находимся тут',
        balloonContent: 'Челябинск, улица Академика Сахарова, 34'
      });

      myMap.geoObjects.add(myPlacemark);
    });
  }
});
