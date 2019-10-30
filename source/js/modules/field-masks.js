/* global document*/
/* eslint-disable no-unused-vars */
'use strict';

const $ = require('jquery');

$(document).ready(function () {
  const phoneField = document.querySelector('#telephone');

  if(phoneField) {
    const IMask = require('imask');

    let phoneMask = new IMask(phoneField, {
      mask: '+{7} 000 000 00 00'
    });
  }
});
