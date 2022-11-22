'use strict';

/*--------------------------------------------------------------------------- *
 * Shape Factory
 * Jodi-Ann Barrett
 * 
 * */

import { print, select, selectAll, onEvent } from './utils.js';
import Shape from './Shape.js';

/**--------------------------------- Data ----------------------------------- */
const create = select('.create-shape');
const gridBox = select('.grid');
const shapeName = select('.shape');
const shapeColor = select('.color');
const info = select('.info');
const shapeArray = [];
/**-------------------------------------------------------------------------- */

// create shape objects and initialize click events on each object
onEvent('click', create, function(event) {
  event.preventDefault();

  if(shapeArray.length < 24) {
    const shape = new Shape();
    shape.name = shapeName.value;
    shape.color = hexToString(shapeColor.value);
    console.log(shape);
    shapeArray.push(shape);
      
    var obj = document.createElement('div');
    obj.classList.add(shapeName.value);
    obj.style.backgroundColor = shapeColor.value;
    gridBox.appendChild(obj);
    onEvent('click', obj, () => {
      getObjInfo(shape);
    });
   
  } else {
    info.innerHTML = `<p>Container is Full!</p>`;
  }
  
});

// function to get object info from Shape class
function getObjInfo( obj ) {
  let index = shapeArray.indexOf(obj) + 1;  
  info.innerHTML = `<p> Unit ${index}: ${obj.getInfo()}</p>`;
}

// Convert hex code to string value
function hexToString( code ) {
  switch(code) {
    case '#079':
      return 'blue';
      break; 
    case '#9f0':
      return 'green';
      break; 
    case '#f90':
      return 'orange';
      break; 
    case '#f09':
      return 'pink';
      break; 
    case '#90f':
      return 'purple';
      break; 
  }
}

// when page is reloaded clear grid 
onEvent('load', window, () => {
  gridBox.innerHTML = '';
});