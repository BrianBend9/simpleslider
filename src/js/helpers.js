/* eslint-disable */

function getInstanceOf(object, sliderElementId, scope) {
  for(let property in scope) {
    if(scope.hasOwnProperty(property)
      && scope[property] instanceof object
      && scope[property].elementId === sliderElementId) {
      return scope[property];
    }
  }
}

function addSliderClass(sliderElementId) {
  const sliderElement = document.getElementById(sliderElementId);
  sliderElement.classList.add('js-simpleslider');
}

export {getInstanceOf, addSliderClass};
