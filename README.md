Simple and funny library that adds eyes that follow your cursor. There are no dependencies. Checkout [demo](https://krustnic.github.io/paranoia.js)

Usage:

```javascript
// Check that all images loaded
$(window).load(function() {
    ParanoiaJS.add( "#img1", {
        x           : 60,
        y           : 30,   
        size        : 100,
        appleSize   : 20,
        color       : "#FFFFFF",
        border      : '5',
        borderColor : 'black',
    } );        

    ParanoiaJS.add( "#img1", {
        x         : 115,
        y         : 30,
        size      : 100,
        appleSize : 20,
        color     : "#FFFFFF",
        border      : '5',
        borderColor : 'black',
    } ); 
});

```

This code adds two eyes at positions (60, 30) and (115, 30) relative to element with selector "#img1". Eye size is set to 100, eye fill color is "#FFFFFF" and size of apple of the eye is 20. Border size set to 5, border color - to black.

```javascript
// You can use helper to create pair of eyes
$(window).load(function() {
    ParanoiaJS.addPair( "#img1", {
        x           : 87,
        y           : 30,
        l           : 55
        size        : 100,
        appleSize   : 20,
        color       : "#FFFFFF",
        border      : '5',
        borderColor : 'black',
    } );        
});

```

This code do the same as code above in one method. Options x and y there is a coordinates of center between eyes, option l is a distance between them.