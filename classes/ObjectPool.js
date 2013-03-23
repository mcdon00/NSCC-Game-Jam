// ObjectPool class
// Sean Morrow
// Mar 22 / 2013

var ObjectPool = (function() {
	// private property variables
	// list of all game objects to be rendered onto the canvas
	var usedList = [];

	// starting constant maximums of the game elements (virusMax can be extended by Object pool if needed)
	var BLUE_PLANE_MAX = 5;
	var RED_PLANE_MAX = 1;
	var BLUE_TANK_MAX = 10;
	var RED_TANK_MAX = 10;
	var BLUE_JEEP_MAX = 10;
	var RED_JEEP_MAX = 10;
	var BLUE_SOLDIER_MAX = 10;
	var RED_SOLDIER_MAX = 10;
	var BULLET_MAX = 100;
	var CLOUD_MAX = 50;
	var LANDSCAPE_MAX = 1;
	
	// object pool arrays
	var redPlanePool = [];
	var bluePlanePool = [];
	var redTankPool = [];
	var blueTankPool = [];
	var redJeepPool = [];
	var blueJeepPool = [];
	var redSoldierPool = [];
	var blueSoldierPool = [];
	var bulletPool = [];
	var cloudPool = [];
	var landscapePool = [];

	// ------------------------------------------------------ private methods
	function getObject(pool,max){
		// go through existing pool and grab target object that is not in use and return it
		var i;
		for (i = 0; i < max; i++) {
			if (!pool[i].used) {
				var object = pool[i];
				object.used = true;
				usedList[object.usedIndex] = object;
				return object;
			}
		}
		return null;
	}
		
	// ------------------------------------------------------ public methods
	return {	
		getUsedList:function() {return usedList},

		init:function() {
			// initialization
			var index = 0;
			var i = 0;
			// populate arrays to create pool of game objects
			for (i = 0; i < RED_PLANE_MAX; i++) {
				redPlanePool[i] = new Plane("RedPlane");
				redPlanePool[i].poolIndex = i;
				redPlanePool[i].usedIndex = index;
				usedList[index] = null;
				index++;
			}
			for (i = 0; i < BLUE_PLANE_MAX; i++) {
				bluePlanePool[i] = new Plane("BluePlane");
				bluePlanePool[i].poolIndex = i;
				bluePlanePool[i].usedIndex = index;
				usedList[index] = null;
				index++;
			}			
			for (i = 0; i < BULLET_MAX; i++) {
				bulletPool[i] = new Bullet();
				bulletPool[i].poolIndex = i;
				bulletPool[i].usedIndex = index;
				usedList[index] = null;
				index++;
			}
			for (i = 0; i < CLOUD_MAX; i++) {
				cloudPool[i] = new Cloud();
				cloudPool[i].poolIndex = i;
				cloudPool[i].usedIndex = index;
				usedList[index] = null;
				index++;
			}
			for (i = 0; i < LANDSCAPE_MAX; i++) {
				landscapePool[i] = new Landscape();
				landscapePool[i].poolIndex = i;
				landscapePool[i].usedIndex = index;
				usedList[index] = null;
				index++;
			}		
		},

		getRedPlane:function() {
			return getObject(redPlanePool, RED_PLANE_MAX);
	    },

		getBluePlane:function() {
			return getObject(bluePlanePool, BLUE_PLANE_MAX);
	    },	    

	    getBullet:function() {
	    	return getObject(bulletPool, BULLET_MAX);
	    	// ???????????????????????? check that this doesn't return null (no bullet objects free!)
	    },

	    getCloud:function() {
	    	return getObject(cloudPool, CLOUD_MAX);
	    },

	    getGround:function() {
	    	return getObject(landscapePool, LANDSCAPE_MAX);
	    },
			
		/*
		REFERENCE!
		public function getVirus():Virus {
			// if we only have one more virus left (could happen due to the nature of viruses) add another one for the next get
	        if (_virusCount == virusMax) {
	            virusPool[virusMax] = new Virus();
				virusPool[virusMax].poolIndex = virusMax;
				virusPool[virusMax].objectPool = this;		
				virusPool[virusMax].pathManager = game.pathManager;
				virusPool[virusMax].clipManager = game.clipManager;
				virusPool[virusMax].soundManager = game.soundManager;				
	            virusMax++;
				_virusCount++;
				virusPool[virusMax - 1].active = true;
	            return virusPool[virusMax - 1];
	        }
			// otherwise go through existing pool and grab one that is not in use and return it
			for each (var virus:Virus in virusPool) {
				if (!virus.active) {
					virus.active = true;
					_virusCount++;
					return virus;
				}
			}
			return null;
	    }
	    */

	    dispose:function(o) {
			// which type of game object are we disposing?
			if (o.type == "RedPlane") {
				redPlanePool[o.poolIndex].used = false;
				usedList[o.usedIndex] = null;
				//redPlaneCount--;

				//console.log("dispose redplane @ pool index " + o.getPoolIndex());

			} else if (o.type == "BluePlane") {
				bluePlanePool[o.poolIndex].used = false;
				usedList[o.usedIndex] = null;
				//bluePlaneCount--;

				//console.log("dispose bluePlane @ pool index " + o.getPoolIndex());

			} else if (o.type == "Bullet") {
				bulletPool[o.poolIndex].used = false;
				usedList[o.usedIndex] = null;
				//bulletCount--;

				//console.log("dispose bullet @ pool index " + o.getPoolIndex());

			} else if (o.type == "Cloud") {
				cloudPool[o.poolIndex].used = false;
				usedList[o.usedIndex] = null;
				//cloudCount--;

				//console.log("dispose cloud @ pool index " + o.getPoolIndex());

			}
		}



	}
});