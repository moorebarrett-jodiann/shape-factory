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
  let numOfSides = Number(shapeName.options[shapeName.selectedIndex].text);

  if(shapeArray.length < 24) {
    //create shape object
    const shape = new Shape();
    shape.name = shapeName.value;
    shape.color = hexToString(shapeColor.value);
    
    //add object to array
    shapeArray.push(shape);
      
    // draw shape and add to grid box
    let div = drawShape(shapeName.value, shapeColor.value, numOfSides);
    gridBox.appendChild(div);

    // add click event listener to the html shape and call the objInfo() method 
    // to get the property information on the current object
    onEvent('click', div, () => {
      getObjInfo(shape);
    });
   
  } else {
    info.innerHTML = `<p>Container is Full!</p>`;
  }
  
});

// function to draw shape
function drawShape(name, color, sides) {

  let shapeNam = name;
  let shapeCol = color;
  let numOfSides = sides;

  // create html shapes
  var htmlShape = document.createElement('div');

  switch(numOfSides) {
    case 0:
      htmlShape.classList.add(shapeNam);
      htmlShape.style.backgroundColor = shapeCol;
      break;
    case 3:
      htmlShape.innerHTML = `
      <svg viewBox="0 0 100 100">
          <polygon points="50 0, 100 100, 0 100" fill="${shapeCol}"/>
      </svg>`;
      break;
    case 4:
      htmlShape.classList.add(shapeNam);
      htmlShape.style.backgroundColor = shapeCol;
      break;
    case 5:
      htmlShape.innerHTML = `
      <svg viewBox="0 0 100 100">
        <polygon points="18,100 0,40 50,0 100,40 80,100" fill="${shapeCol}"/>
      </svg>`;
      break;
    case 6:
      htmlShape.innerHTML = `
      <svg viewBox="0 0 100 100">
        <polygon points="22,100 0,50 22,0 78,0 100,50 78,100" fill="${shapeCol}"/>
      </svg>`;
      break;
    case 8:
      htmlShape.innerHTML = `
      <svg viewBox="0 0 100 100">
        <polygon points="26,100 0,71 0,30 26,0 72,0 100,30 100,71 72,100" fill="${shapeCol}"/>
      </svg>`;
      break;
    case 10:
      htmlShape.innerHTML = `
      <svg viewBox="0 0 100 100">
        <polygon points="50,0 60.5,39.5 100,40.1 67,59.5 76.4,100 50,71.9 16,95 32.9,59.5 0,40.1 39.4,39.5" fill="${shapeCol}"/>
      </svg>`;
      break;
    default:
      htmlShape.innerHTML = ``;
  }
  
  return htmlShape;
}

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
  shapeName.value = '';
  shapeColor.value = '';
});