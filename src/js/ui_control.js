/* eslint-disable */

import {getInstanceOf} from "./helpers"

function slide(event) {
  const sliderElementId = event.type === undefined ? event.elementId : event.target.parentNode.lastChild.getAttribute('id');
  const images = document.getElementById(sliderElementId).children;
  let sliderObject = event.type === undefined ? event : getInstanceOf(Slider, sliderElementId, window);

  if (event.type !== undefined && sliderObject.timeoutId !== undefined) {
    resetAutoPlayTimer(sliderObject);
  }

  if ((event.type === undefined || event.target.classList.contains("js-next-button")) && sliderObject.activeImageIndex === images.length - 1) {
    resetAllImagePositions(images, sliderObject);
    initializeSliderPositions(images, sliderObject);
  } else if ((event.type === undefined || event.target.classList.contains("js-next-button")) && sliderObject.activeImageIndex < images.length - 1) {
    slideImagesToNextPosition(images, sliderObject);
  } else if (event.target.classList.contains("js-previous-button") && sliderObject.activeImageIndex > 0) {
    slideImagesToPreviousPosition(images, sliderObject);
  }
};

function slideImagesToPreviousPosition(imageArray, sliderObject) {
  imageArray[sliderObject.activeImageIndex].classList.remove("is-inactive", "is-active");
  sliderObject.activeImageIndex -= 1;
  imageArray[sliderObject.activeImageIndex].classList.add("is-active");
  imageArray[sliderObject.activeImageIndex].classList.remove("is-inactive");
};

function slideImagesToNextPosition(imageArray, sliderObject) {
  imageArray[sliderObject.activeImageIndex].classList.add("is-inactive");
  imageArray[sliderObject.activeImageIndex].classList.remove("is-active");
  sliderObject.activeImageIndex += 1;
  imageArray[sliderObject.activeImageIndex].classList.add("is-active");
};

function resetAllImagePositions(imageArray, sliderObject) {
  for (var i = 0; i < imageArray.length; i++) {
    imageArray[i].classList.remove("is-inactive", "is-active")
  }
};

function initializeSliderPositions(imageArray, sliderObject) {
  sliderObject.activeImageIndex = 0;
  imageArray[sliderObject.activeImageIndex].classList.add("is-active");
}

function startAutoPlayTimer(sliderObject, callbackFn, delay) {
  sliderObject.intervalId = setInterval(function() {
    callbackFn(sliderObject)
  }, delay);
};

function resetAutoPlayTimer(sliderObject) {
  clearInterval(sliderObject.timeoutId);
  sliderObject.timeoutId = undefined;
  console.log(sliderObject.timeoutId);
  startAutoPlayTimer(sliderObject, slide, sliderObject.autoPlayDelay);
};

export {slide, initializeSliderPositions, startAutoPlayTimer};
