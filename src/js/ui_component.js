/* eslint-disable */

import {slide} from "./ui_control";

function addWrapper(sliderElementId) {
  const sliderElement = document.getElementById(sliderElementId);
  const mysliderParent = sliderElement.parentNode;
  const wrapper = document.createElement('div');
  wrapper.classList.add('js-simpleslider-wrapper');
  mysliderParent.replaceChild(wrapper, sliderElement);
  wrapper.appendChild(sliderElement);
};

function addButtonEventListeners() {
  const buttons = document.getElementsByClassName('js-nav-button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", slide, false);
  }
};

function addNavButton(buttonText, buttonClass, sliderElementId) {
  const sliderElement = document.getElementById(sliderElementId);
  const button = document.createElement("button");
  const text = document.createTextNode(buttonText);
  button.appendChild(text);
  button.classList.add("nav-button", "js-nav-button", buttonClass);
  sliderElement.parentNode.insertBefore(button, sliderElement);
};

export {addWrapper, addButtonEventListeners, addNavButton};
