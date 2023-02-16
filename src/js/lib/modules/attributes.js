import $ from '../core';

$.prototype.addAttr = function(attributeName, attributeValue) {
    for (let i = 0; i < this.length; i++) {
        if (attributeName == '' || attributeName == undefined) {
            console.log('Attribute name missing');
            continue;
        } 
        if (attributeValue == undefined) {
            this[i].setAttribute(attributeName, '');
        } else {
            this[i].setAttribute(attributeName, attributeValue);
        } 
    }

    return this;
};

$.prototype.removeAttr = function(attributeName) {
    for (let i = 0; i < this.length; i++) {
        if (attributeName === '') {
            continue; 
        }
        this[i].removeAttribute(attributeName);
    }

    return this;
};
