(function() {  
    
    var SVG_HTML_TEMPLATE      = [
        '<svg width="50" height="50" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">',
        ' <g>',
        '  <circle name="eye"   fill="#ffffff" stroke="#000000" stroke-width="5" cx="60" cy="60" r="50" />',
        '  <circle name="eyeball" fill="#000000" stroke="#000000" stroke-width="5" stroke-linejoin="null" stroke-linecap="null" cx="60" cy="60" r="12"/>',
        ' </g>',
        '</svg>'
    ].join("");
    
        var SVG_HTML_TEMPLATE_TOP      = [
        '<svg width="50" height="50" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">',
        ' <g>',
        '  <path name="top" stroke-width="5" stroke="#000000" fill="yellow" d="m60,10a50,50 0 1 0 0,0"/>',
        ' </g>',
        '</svg>'
    ].join("");
    
    var SVG_HTML_TEMPLATE_BOTTOM      = [
        '<svg width="50" height="50" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">',
        ' <g>',
        '  <path name="bottom" stroke-width="5" stroke="#000000" fill="yellow" d="m60,10a50,50 0 1 0 0,0"/>',
        ' </g>',
        '</svg>'
    ].join("");
    
    var Eye = function( imageSelector, options ) { 
        var self = this;
                        
        this.iamageSelector = imageSelector;

        this._element = document.querySelector( imageSelector );

        if ( !this._element ) {
            throw new Error("Not valid image selector");
            return;
        }        
        
        // Default options
        this.options = {
            "x"                 : 0,
            "y"                 : 0,
            "size"              : 50,
            "color"             : "#FFFFFF",
            "borderColor"       : "#000000",
            'borderSize'        : '5',
            "eyeballSize"       : 12,
            "eyeballShift"      : 20,
            //веки
            "emoteColor"        : "white",
            "emoteSize"         : 0.75,
            "emoteBorderColor"  : "#000000",
            'emoteBorderSize'   : '5'
            

        };

        // Replace default optinos
        for( var key in options ) {
            this.options[key] = options[key];
        };   
        
        this._build();        
    }
    
    Eye.prototype._build = function() {
        var self = this;
        
        this.cloneEyeObject = ParanoiaJS._cloneTemplate();    
        this.cloneEyeObject.setAttribute("width" , this.options["size"]);
        this.cloneEyeObject.setAttribute("height", this.options["size"]);
        
        this.svgElements   = this.cloneEyeObject.querySelectorAll("svg");
        this.mainElement   = this.cloneEyeObject.querySelector("[name=eye]");
        this.eyeElement   = this.cloneEyeObject.querySelector("[name=eye]");
        this.eyeballElement = this.cloneEyeObject.querySelector("[name=eyeball]");
        this.topElement = this.cloneEyeObject.querySelector("[name=top]");
        this.bottomElement = this.cloneEyeObject.querySelector("[name=bottom]");       
        
        for (i = 0; i < this.svgElements.length; i++) {
            this.svgElements[i].setAttribute("width" , this.options["size"]);
            this.svgElements[i].setAttribute("height", this.options["size"]);
        }
           
        
        this.eyeElement.setAttribute("fill", this.options["color"]);
        this.eyeElement.setAttribute("stroke", this.options["borderColor"]);
        this.eyeElement.setAttribute("stroke-width", this.options["borderSize"]);
        
        this.topElement.setAttribute("fill", this.options["emoteColor"]);
        this.topElement.setAttribute("stroke", this.options["emoteBorderColor"]);
        this.topElement.setAttribute("stroke-width", this.options["emoteBorderSize"]);
        
        this.bottomElement.setAttribute("fill", this.options["emoteColor"]);
        this.bottomElement.setAttribute("stroke", this.options["emoteBorderColor"]);
        this.bottomElement.setAttribute("stroke-width", this.options["emoteBorderSize"]);
        
        this.eyeballElement.setAttribute("r", this.options["eyeballSize"]);
        this.eyeballElement.setAttribute("cx", parseInt(this.options["eyeballShift"]) + parseInt(this.eyeballElement.getAttribute("cx")));
        
        document.body.appendChild( this.cloneEyeObject );

        this.moveToPosition();             
        
        // Set visible AFTER change position
        this.cloneEyeObject.style.display = "block";        
    }
    
    Eye.prototype.moveToPosition = function() {           
        this.move( this.options["x"], this.options["y"] );   
    }
    
    Eye.prototype.suspicion = function(x, y){
        var minSuspicion = 1000;
        var cloneEyeObjectPos = this.cloneEyeObject.getBoundingClientRect();
        var x1 = cloneEyeObjectPos.left + cloneEyeObjectPos.width/2;
        var y1 = cloneEyeObjectPos.top  + cloneEyeObjectPos.height/2; 
        var len = Math.pow(Math.pow(x1-x,2) + Math.pow(y1-y,2), 1/2);
        var angle = Math.PI/2;
        if(len <= minSuspicion){
            var angle = Math.PI/2 - ((1-len/minSuspicion) *  Math.PI/2 * this.options.emoteSize);   
        }
        var xr = 60 + (Math.cos(-angle) * 50 );
        var yr = 60 + (Math.sin(-angle) * 50 );
        var xr2 = (xr - 60);
        var yr2 = (60 + (60 - yr));
        var d = "m"+xr+","+yr+"a50,50 1 0 0 "+(-xr2*2)+",0z";
        this.topElement.setAttribute('d', d);

        var d2 = "m"+xr+","+yr2+"a50,50 1 0 1 "+(-xr2*2)+",0z";
        this.bottomElement.setAttribute('d', d2);
        
    }
        
    // Relactive to parent image
    Eye.prototype.move = function( x, y ) {
        var parentPostion = this._element.getBoundingClientRect();        
        this.cloneEyeObject.style.position = "absolute";
        this.cloneEyeObject.style.left = parentPostion["left"] + (x + pageXOffset) + "px";
        this.cloneEyeObject.style.top  = parentPostion["top"]  + (y + pageYOffset) + "px";
    }
        
    Eye.prototype.render = function( x2, y2 ) {               
        var cloneEyeObjectPos = this.cloneEyeObject.getBoundingClientRect();
                
        var x1 = cloneEyeObjectPos.left + cloneEyeObjectPos.width/2;
        var y1 = cloneEyeObjectPos.top  + cloneEyeObjectPos.height/2;              
                
        var angle = Math.atan2( y2 - y1, x2 - x1 ) * (180/Math.PI) ;

        this.eyeballElement.setAttribute( "transform", "rotate(" + angle + ", 60, 60)" );        
    }
    
    window.ParanoiaJS = new (function() {
        var self = this;
        
        this._eyes = [];
        this.isInitialized = false;
                
        this._listen = function() {
            window.addEventListener("mousemove", function( e ) {
                self._renderEyes( e.x, e.y );
            }, false);
            
            window.addEventListener("resize", function( e ) {
                self._resize();
            }, false);
        }
        
        this.add = function( imageSelector, options ) {
            if ( !self.isInitialized ) self._init();
            
            var eye = new Eye( imageSelector, options );                        
            this._eyes.push( eye );
            
            eye._element.addEventListener("load", function() {                
                self._resize();
            }, false);            
                        
            return eye;
        }
        
        this.addPair = function( imageSelector, options ) {
            if ( !self.isInitialized ) self._init();
            var eyes = {};

            var leftEyeOptions = JSON.parse(JSON.stringify(options));
            leftEyeOptions.x = leftEyeOptions.x - leftEyeOptions.l / 2;
            delete leftEyeOptions['l']; 
            var leftEye = this.add(imageSelector, leftEyeOptions); 
            eyes.leftEye = leftEye;
            
            var rightEyeOptions = JSON.parse(JSON.stringify(options));
            rightEyeOptions.x = rightEyeOptions.x + rightEyeOptions.l / 2;
            delete leftEyeOptions['l']; 
            var rightEye = this.add(imageSelector, rightEyeOptions);  
            eyes.rightEye = rightEye;
            return eyes;
        }; 

        this.render = function() {
            self._resize();
        }
        
        this._renderEyes = function( x, y ) {
            for( var idx in self._eyes ) {
                self._eyes[idx].render( x, y );
                self._eyes[idx].suspicion( x, y);
            }
        }
        
        this._resize = function() {
            for( var idx in self._eyes ) {
                self._eyes[idx].moveToPosition();
            }
        }
                
        this._init = function( callback ) {
            self.templateObject = document.createElement("object");
            self.templateObject.style.display  = "none";
            self.templateObject.style.position = "absolute";    
            
            var eyeObject = document.createElement("object");
            eyeObject.style.position = "absolute";    
            eyeObject.innerHTML = SVG_HTML_TEMPLATE;
            self.templateObject.appendChild(eyeObject);
            
            var topObject = document.createElement("object");
            topObject.style.position = "absolute";    
            topObject.innerHTML = SVG_HTML_TEMPLATE_TOP;
            self.templateObject.appendChild(topObject);
            
            var bottomObject = document.createElement("object");
            bottomObject.style.position = "absolute";   
            bottomObject.innerHTML = SVG_HTML_TEMPLATE_BOTTOM;
            self.templateObject.appendChild(bottomObject);
            
            document.body.appendChild( self.templateObject );
            
            self._listen();
            
            self.isInitialized = true;
        },
            
        this._cloneTemplate = function() {
            return self.templateObject.cloneNode(true);
        }
        
    })(); 
    
})();