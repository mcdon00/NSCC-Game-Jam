function GameWorld(){
	
	this.init = function(myStage,myLevel){
		this.level = myLevel;
		this.stage = myStage;
    	this.clip = new createjs.Bitmap(this.level);
    	this.blah = new createjs.Bitmap("lib/foo.png");
		this.clip.y = 0;
		this.clip.x = 0;
		this.width = this.clip.width;
		this.height = this.clip.height;
		//Alternatively use can also use the graphics property of the Shape class to renderer the same as above.
		this.leftBound = new createjs.Shape();
		//this.leftBound.rotation = 10;
		this.leftBound.graphics.beginFill("#ff0000").drawRect(65, 235, 25, 50);
			
		this.rightBound = new createjs.Shape();
		this.rightBound.graphics.beginFill("#ff0000").drawRect(700, 100, 25, 450);
		// this.rightBound.skewX = -15;

		this.topBound = new createjs.Shape();
		this.topBound.graphics.beginFill("#ff0000").drawRect(100, 100, 620, 25);

		this.bottomBound = new createjs.Shape();
		this.bottomBound.graphics.beginFill("#ff0000").drawRect(25, 490, 750, 25);

		
		this.blah.x = 0;
		this.blah.y = 0;


		stage.addChild(this.clip);
		// stage.addChild(this.topBound);
		// stage.addChild(this.leftBound);
		// stage.addChild(this.rightBound);
		// stage.addChild(this.bottomBound);
		
		
		
		
		
		
	}

	this.changeLevel =function(myLevel){
		this.level = myLevel;
		this.clip.set(new createjs.Bitmap(this.level))
	}	
}