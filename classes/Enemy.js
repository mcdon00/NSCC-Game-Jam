function Enemy(myStage){
	//constants
	var HEALTH = 800;
	var SPEED = 7;
	var DISTANCE_TO_ATTACK = 100;

	//------------------------------contructor
	this.init = function(myStage){
	
		this.speed = SPEED;
		this.stage = myStage
		var ss = new createjs.SpriteSheet({ "animations":{
	        "stand":[0, 0]},
	        "images":["lib/character_sheet.png"],
	        "frames":{
	            "regX":0,
	            "regY":0,
	            "height":65,
	            "width":50,
	            "count":3
	        }
    	});
    	this.clip = new createjs.BitmapAnimation(ss);
    	this.clip.gotoAndPlay("stand");
		this.clip.y = window.innerHeight/3;
		this.clip.x = window.innerWidth/3;
		this.vx = 1;
		this.vy = 1;
		this.health = HEALTH;
		this.isAttack = false;
		stage.addChild(this.clip);
	}
	//------------------------------public methods
	this.checkPlayerPos = function(playerX,playerY){

		distanceX = Math.abs((this.clip.x - playerX));
		distanceY = Math.abs((this.clip.y - playerY));

		distance = Math.sqrt((distanceX*distanceX) + (distanceY*distanceY));
		// hy -= (obj1.r + obj2.r);
			var targetX = 0;
			var targetY = 0;
			var hy = 0;
			isXNeg = false;
			isYNeg = false;

			var bX = this.clip.x;
			var bY = this.clip.y;
			
			if(playerX <= bX)isXNeg = true;
			if(playerY <= bY)isYNeg = true;
				
			targetY = Math.abs(playerY - bY);
			targetX = Math.abs(playerX - bX);

			hy = Math.sqrt((targetY * targetY) + (targetX * targetX));

			if (!isXNeg && !isYNeg) {
				this.vx = targetX/hy;
				this.vy = targetY/hy;
			}else if (isXNeg && isYNeg) {
				this.vx = (targetX/hy)*-1;
				this.vy = (targetY/hy)*-1;
			}else if(!isXNeg && isYNeg){
				this.vx = targetX/hy;
				this.vy = (targetY/hy)*-1;
			}else if(isXNeg && !isYNeg){
				this.vx = (targetX/hy)*-1;
				this.vy = targetY/hy;
			}
			
			this.vx = this.vx *4; 
			this.vy = this.vy *4; 
		
		if(distance <= DISTANCE_TO_ATTACK){
			this.isAttack = true;
			this.move();
		}else{
			this.isAttack = false;
		}
	}

	this.move = function(){
		if(this.isAttack){
			this.clip.x += this.vx;
			this.clip.y += this.vy;
		}	
	}

	this.attack = function(myPlayer){

	}


}