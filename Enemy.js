function Enemy(myStage){
		this.init = function(){

		/********* Variables for creating the square.Change these to make it bigger *************/
		var ex = 25;
		var ey = 25;
		var erx = (-(ex / 2));
		var ery = (-(ey / 2));
		/********************** ****************/
		
		this.speed = 7;
		this.stage = myStage
		this.clip = new createjs.Shape();
		this.clip.graphics.beginStroke("white").drawRect(erx,ery,ex,ey);
		this.clip.y = window.innerHeight/3;
		this.clip.x = window.innerWidth/3;
		stage.addChild(this.clip);
	}
}