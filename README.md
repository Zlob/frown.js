This is a fork of [paranoia.js](https://krustnic.github.io/paranoia.js) - simple and funny library that adds eyes that track your cursor. Fork add eyes frown if cursor get too close to them. There are no dependencies. Checkout [demo](https://zlob.github.io/frown.js)

Usage:

```javascript
// Check that all images loaded
$(window).load(function() {
    ParanoiaJS.add( "#img1", {
        x               : 60,
        y               : 30,   
        size            : 100,
        color           : "#FFFFFF",
        borderColor     : 'black',
        borderSize      : '5',
        eyeballSize     : 20,
        eyeballShift    : 20,
        emoteColor      : "white",
        emoteSize       : 0.75,
        emoteBorderColor: "#000000",
        emoteBorderSize : '5'
    } );        

    ParanoiaJS.add( "#img1", {
        x               : 115,
        y               : 30,
        size            : 100,
        color           : "#FFFFFF",
        borderColor     : 'black',
        borderSize      : '5',
        eyeballSize     : 20,
        eyeballShift    : 20,
        emoteColor      : "white",
        emoteSize       : 0.75,
        emoteBorderColor: "#000000",
        emoteBorderSize : '5'
    } ); 
});

```

This code adds two eyes at positions (60, 30) and (115, 30) relative to element with selector "#img1". Eye size is set to 100, eye fill color is "#FFFFFF" and size of apple of the eye is 20. Border size set to 5, border color - to black.

```javascript
// You can use helper to create pair of eyes
$(window).load(function() {
    ParanoiaJS.addPair( "#img1", {
        x               : 87,
        y               : 30,
        l               : 55
        size            : 100,
        color           : "#FFFFFF",
        borderColor     : 'black',
        borderSize      : '5',
        eyeballSize     : 20,
        eyeballShift    : 20,
        emoteColor      : "white",
        emoteSize       : 0.75,
        emoteborderColor: "#000000",
        emoteBorderSize : '5'
    } );        
});

```

This code do the same as code above in one method. Options x and y there is a coordinates of center between eyes, option l is a distance between them.

