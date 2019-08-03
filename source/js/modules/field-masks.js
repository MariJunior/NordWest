/* global document*/
/* eslint-disable no-unused-vars */
'use strict';

const $ = require('jquery');
const IMask = require('imask');

$(document).ready(function () {
  const phoneField = document.querySelector('#telephone');

  let phoneMask = new IMask(phoneField, {
    mask: '+{7} 000 000 00 00'
  });
});
