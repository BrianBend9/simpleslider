function getInstanceOf(object, sliderElementId, scope) {
  let sliderObject;

  for (let property in scope) {
    if (scope.hasOwnProperty(property) &&
    scope[property] instanceof object &&
    scope[property].elementId === sliderElementId) {
      sliderObject = scope[property];
    }
  }
  return sliderObject;
}

function addSliderClass(sliderElementId) {
  const sliderElement = document.getElementById(sliderElementId);

  sliderElement.classList.add('js-simpleslider');
}

export {getInstanceOf, addSliderClass};
