/* eslint-disable no-alert, no-console */
'use strict';

document.addEventListener('DOMContentLoaded', function () {
  let mapContainer = document.querySelector('.map__container');
  const mapBlock = document.querySelector('#map');

  if(mapContainer) {
    mapContainer.addEventListener('mouseenter', function() {
      mapContainer.classList.add('map__container--hovered');
    });
  }

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
