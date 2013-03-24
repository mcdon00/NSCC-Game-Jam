function GameWorld(){
	
	this.init = function(myStage,myLevel){
		this.level = myLevel;
		this.stage = myStage;
    	this.clip = new createjs.Bitmap(this.level);
    	//this.blah = new createjs.Bitmap("lib/foo.png");
		this.clip.y = 0;
		this.clip.x = 0;
		this.width = this.clip.width;
		this.height = this.clip.height;
		//Alternatively use can also use the graphics property of the Shape class to renderer the same as above.
		this.leftBound = new createjs.Shape();
		//this.leftBound.rotation = 10;
		this.leftBound.graphics.beginFill("#ff0000").drawRect(65, 235, 25, 100);
		this.leftBound.alpha = 0;
			
		this.rightBound = new createjs.Shape();
		this.rightBound.graphics.beginFill("#ff0000").drawRect(725, 235, 25, 100);
		// this.rightBound.skewX = -15;
		this.rightBound.alpha = 0;

		this.topBound = new createjs.Shape();
		this.topBound.graphics.beginFill("#ff0000").drawRect(360, 100, 100, 25);
		this.topBound.alpha = 0;

		this.bottomBound = new createjs.Shape();
		this.bottomBound.graphics.beginFill("#ff0000").drawRect(360, 525, 100, 25);
		this.bottomBound.alpha = 0;

		
		//this.blah.x = 0;
		//this.blah.y = 0;

		stage.addChild(this.topBound);
		stage.addChild(this.leftBound);
		stage.addChild(this.rightBound);
		stage.addChild(this.bottomBound);
		stage.addChild(this.clip);
		
		
		
		
		
		
		
	}

	this.changeLevel =function(myLevel){
		this.level = myLevel;
		this.clip.set(new createjs.Bitmap(this.level))
	}	
}