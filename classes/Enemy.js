function Enemy(myStage){
	//constants
	var HEALTH = 100;
	var SPEED = 7;

	//------------------------------contructor
	this.init = function(myStage){
	
		this.speed = SPEED;
		this.stage = myStage
		this.clip = new createjs.Shape();
		this.clip.graphics.beginStroke("white").drawRect(erx,ery,ex,ey);
		this.clip.y = window.innerHeight/3;
		this.clip.x = window.innerWidth/3;
		this.vx = 0;
		this.vy = 0;
		this.health = HEALTH;
		this.isAttack = false;
		stage.addChild(this.clip);
	}
	//------------------------------public methods
	this.checkPlayerPos = function(playerX,playerY){
		var distanceX = Math.abs(this.clip.x - playerX);
		var distanceY = Math.abs(this.clip.y - playerY);

		var targetX = playerX;
		var targetY = playerY;
		var hy = 0;
		isXNeg = false;
		isYNeg = false;

		var bX = this.clip.x;
		var bY = this.clip.y;
		
		if(playerX <= bX)isXNeg = true;
		if(playerY <= bY)isYNeg = true;
			
		targetY = Math.abs(mouse.y - bY);
		targetX = Math.abs(mouse.x - bX);

		hy = Math.sqrt((targetY * targetY) + (targetX * targetX));
		




		// if (!isXNeg && !isYNeg) {
		// 	this.vx = targetX/hy;
		// 	this.vy = targetY/hy;
		// }else if (isXNeg && isYNeg) {
		// 	this.vx = (targetX/hy)*-1;
		// 	this.vy = (targetY/hy)*-1;
		// }else if(!isXNeg && isYNeg){
		// 	this.vx = targetX/hy;
		// 	this.vy = (targetY/hy)*-1;
		// }else if(isXNeg && !isYNeg){
		// 	this.vx = (targetX/hy)*-1;
		// 	this.vy = targetY/hy;
		// }

		
		// this.vx = this.vx *2; 
		// this.vy = this.vy *2; 


		// if(){
		// 	this.isAttack = true;
		// }
	}

}