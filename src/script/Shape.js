'use strict';

/*--------------------------------------------------------------------------- *
 * Shape Factory
 * Jodi-Ann Barrett
 * 
 * */

class Shape {
    constructor (name, color) {
        this._name = name;
        this._color = color;
    }

    set name (name) {
        if(name.length > 0) {
            this._name = name;
        } else {
            throw new TypeError('Name is not valid');
        }
    }

    get name() {
        return this._name;
    }
    
    set color (color) {
        if(color.length > 0) {
            this._color = color;
        } else {
            throw new TypeError('Color is not valid');
        }
    }

    get color() {
        return this._color;
    }
    
    getInfo() {
        return `${this.color} ${this.name}`;
    }
}

export default Shape;
