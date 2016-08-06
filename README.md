# Simple Slider

This is a basic image slider created using html, css, and vanilla javascript(es6).

The slider is created from a ul element defined on a html page.

In your .js file linked to your html page, the slider needs to be instantiated using the ul element id,
and a configuration object as follows:

```
var variable = new Slider(sliderElementId, {
  setting: value,
});
```

Currently the only settings for this slider are navButtons, autoPlay, and autoPlayDelay.

For example:

(.js file)
```
  var example = new Slider('simpson-slider', {
    "navButtons": true, //to include navigation buttons on slider or not
    "autoPlay": false, //to have the images slide/or transition automatically
    "autoPlayDelay": 5000 //determines the amount of delay between image transitions
  });
```

Also note that the ul slider element needs to be inside a container element as in the example below. The container must also have a css height property specified.

(.html file)
```
<div id="example">
  <ul id="simpson-slider">
    <li><img src="src/images/simpsons-logo.png" alt="simpsons-logo"></li>
    <li><img src="http://vignette3.wikia.nocookie.net/simpsons/images/0/0b/Marge_Simpson.png/revision/20140826010629" alt="marge"></li>
    <li><img src="http://bartsimpsonpictures.squarelogic.net/bart-simpson-08.gif" alt="bart"></li>
    <li><img src="src/images/willie.jpg" alt="willie"></li>
    <li><img src="src/images/mcbain.jpg" alt="mcbain"></li>
  </ul>
</div>
```
