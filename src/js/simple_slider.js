import {addWrapper, addButtonEventListeners, addNavButton} from './ui_component';
import {addSliderClass} from './helpers';
import {slide, initializeSliderPositions, startAutoPlayTimer} from './ui_control';

export default class Slider {

  constructor(sliderElementId, newConfigObject) {
    let activeImageIndex;
    let timeoutId;
    let images = document.getElementById(sliderElementId).children;

    this.elementId = sliderElementId;
    this.timeoutId = timeoutId;
    this.navButtons = true;
    this.autoPlay = true;
    this.autoPlayDelay = 3000;
    this.activeImageIndex = activeImageIndex;

    if (typeof (newConfigObject) === 'object') {
      for (let setting in newConfigObject) {
        this[setting] = newConfigObject[setting];
			}
		}

    addWrapper(sliderElementId);
    addSliderClass(sliderElementId);
    initializeSliderPositions(images, this);

    if (this.navButtons === true) {
      addNavButton('▶', 'js-previous-button', sliderElementId);
      addNavButton('◀', 'js-next-button', sliderElementId);
      addButtonEventListeners();
    }

    if (this.autoPlay === true) {
      startAutoPlayTimer(this, slide, this.autoPlayDelay);
    }
  }
}
