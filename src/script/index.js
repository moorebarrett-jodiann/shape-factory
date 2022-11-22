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

onEvent('click', create, function(event) {
  event.preventDefault();

  if(shapeArray.length < 24) {

    const shape = new Shape();
    shape.name = shapeName.value;
    shape.color = hexToString(shapeColor.value);
    shapeArray.push(shape);
      
    var obj = document.createElement('div');
    obj.classList.add(shapeName.value);
    obj.style.backgroundColor = shapeColor.value;
    obj.style.display = 'inline-block';
    gridBox.appendChild(obj);
    onEvent('click', obj, () => {
      getObjInfo(shape);
    });
   
  } else {
    info.innerHTML = `<p>Container is Full</p>`;
  }
  
});

function getObjInfo( obj ) {

  let index = shapeArray.indexOf(obj) + 1;  
  info.innerHTML = `<p> Unit ${index}: ${obj.getInfo()}</p>`;
}

function hexToString( code ) {
  switch(code) {
    case '#079':
      return 'Blue';
      break; 
    case '#9f0':
      return 'Green';
      break; 
    case '#f90':
      return 'Orange';
      break; 
    case '#f09':
      return 'Pink';
      break; 
    case '#90f':
      return 'Purple';
      break; 
  }
}

// when page is reloaded clear grid 
onEvent('load', window, () => {
  gridBox.innerHTML = '';
});