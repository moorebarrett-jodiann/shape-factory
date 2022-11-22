'use strict';

/*--------------------------------------------------------------------------- *
 * Shape Factory
 * Jodi-Ann Barrett
 * 
 * */

import { print, select, onEvent } from './utils.js';
import Shape from './Shape.js';

/**--------------------------------- Data ----------------------------------- */
const create = select('.create-shape');
const gridBox = select('.grid');
const shapeName = select('.shape');
const shapeColor = select('.color');
const shapeArray = [];
/**-------------------------------------------------------------------------- */

onEvent('click', create, function(event) {
  event.preventDefault();

  const shape = new Shape();
  shape.name = shapeName.value;
  shape.color = shapeColor.value;

  shapeArray.push(
    shape
  );
    
  var obj = document.createElement('div');
  obj.classList.add(shape.name);
  obj.style.backgroundColor = shape.color;
  obj.style.display = 'inline-block';
 
  gridBox.appendChild(obj);

  console.log(shapeArray);
  
});


