'use strict';

/*--------------------------------------------------------------------------- *
 * Shape Factory
 * Jodi-Ann Barrett
 * 
 * */

// Utility Functions 
function onEvent(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

// Select HTML element by class, id and html element
function select(selector, parent = document) {
  return parent.querySelector(selector);
}

// Select all HTML element by class, id and html element
function selectAll(selector, parent = document) {
  return parent.querySelectorAll(selector);
}

// Print
function print(arg) {
  console.log(arg);
}

/**--------------------------------------------------------------------------- */

export { print, select, selectAll, onEvent };
