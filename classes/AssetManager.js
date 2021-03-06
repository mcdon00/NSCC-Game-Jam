// AssetManager class
// Sean Morrow
// Mar 22 / 2013

var AssetManager = function() {
	// private variables
	// manifest of asset information
	var manifest = [{src:"character_sheet.png", id:"Character", data:{
						width:50, height:65, regPoint:"topLeft",
						animations:{walk:[0,0]}
					}}];


					
	// keep track of assets
	var counter = 0;
	var total = manifest.length;
	// array of spritesheet objects
	var spriteSheets = [];
	//var sounds = [];	
	// preloader object
	var preloader;
	// construct custom event object and initialize it
	var readyEvt = document.createEvent("Event");
	readyEvt.initEvent("onready", true, true);    

	// ------------------------------------------------------ event handlers
	onLoaded = function(e) {
		// what type of asset was loaded?
		switch(e.type) {
			case createjs.PreloadJS.IMAGE:
				// spritesheet loaded
				var source = e.result;
				var data = e.data;
				// determine registration point of sprite
				var x = 0;
				var y = 0;
				if (data.regPoint == "center"){
					x = Math.floor(data.width/2);
					y = Math.floor(data.height/2)
				} 
				// construct Spritesheet object from source
				spriteSheet = new createjs.SpriteSheet({
					images:[source],
					frames:{width:data.width, height:data.height, regX:x, regY:y},
					animations: data.animations
				});

				// store spritesheet object for later retrieval
				spriteSheets[e.id] = spriteSheet;
				break;
			case createjs.PreloadJS.SOUND:
				// sound loaded
				// ???????????????????????????? - not sure we need with SoundJS
				//sounds.push(e.result);
				break;
        }

        //console.log("asset loaded: " + e.result.src)

        // are we done?
        counter++;
        if (counter >= total) {
			// dispatch event that all assets are loaded
			document.dispatchEvent(readyEvt);
        }
	}

	//called if there is an error loading the spriteSheet (usually due to a 404)
	onError = function(e) {
		//console.log("Preloader > Error Loading asset");
	}	

	onProgress = function(e) {
		//console.log("preloading progress : " + e.loaded);
	}

	// ------------------------------------------------------ public methods
	this.getClip = function(id) {
		// construct BitmapAnimation object to animate the frames (I call this a clip)
		bitmapAnimation = new createjs.BitmapAnimation(spriteSheets[id]);
		bitmapAnimation.name = id;
		bitmapAnimation.x = 0;
		bitmapAnimation.y = 0;
		bitmapAnimation.currentFrame = 0;
		return bitmapAnimation;
	},

	/*
	this.getSounds = function() {
		return sounds;
	}
	*/

	this.load = function() {
		// construct preloader
		//console.log(createjs.PreloadJS());
		preloader = new createjs.PreloadJS();
		// registers the PreloadJS object with SoundJS - will automatically have access to all sound assets
		preloader.installPlugin(createjs.SoundJS);
		preloader.onFileLoad = onLoaded;
		preloader.onProgress = onProgress;
		preloader.onError = onError;
		preloader.setMaxConnections(5);			
		// load first spritesheet to start preloading process
		preloader.loadManifest(manifest);
	}
};