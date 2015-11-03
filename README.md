This is a fork of [paranoia.js](https://krustnic.github.io/paranoia.js) - simple and funny library that adds eyes that track your cursor. Fork add eyes frown if cursor get too close to them. There are no dependencies. Checkout [demo](https://zlob.github.io/paranoia.js)

Usage:

```javascript
// Check that all images loaded
$(window).load(function() {
    ParanoiaJS.add( "#img1", {
        x           : 60,               //eye center x coordinate
        y           : 30,               //eye center y coordinate
        size        : 100,              //eye size
        eyeballSize : 20,               //eyeball size
        color       : "#FFFFFF"         //eye color
        eyelidColor : "#9B8260"         //eyelid color
    } );        

    ParanoiaJS.add( "#img1", {
        x           : 115,
        y           : 30,
        size        : 100,
        eyeballSize : 20,
        color       : "#FFFFFF"
        eyelidColor : "#9B8260"
    } );        
});

```

This code adds two eyes at positions (60, 30) and (115, 30) relative to element with selector "#img1". Eye size is set to 100, eye fill color is "#FFFFFF", eyelid color is #9B8260 and eyeball size is 20.
