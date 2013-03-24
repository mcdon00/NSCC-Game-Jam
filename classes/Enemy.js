function Enemy(myStage){
	//constants
	var HEALTH = 800;
	var SPEED = 7;
	var DISTANCE_TO_ATTACK = 300;

	//------------------------------contructor
	this.init = function(myStage,myX,myY){
	
		this.speed = SPEED;
		this.stage = myStage
		this.type="";
		var ss = new createjs.SpriteSheet({ "animations":{
	    	"moveLeft":[11, 12],
	    	"moveDownRight":[10,13],
	    	"moveRight":[15,19],
	    	"moveDownLeft":[3,6],
	    	"moveUpRight":[5,6],
	    	"moveUpLeft":[9,10],
	    	"moveUp":[19,22],
	    	"moveDown":[0,0]},
	        "images":["lib/garbageBag.png"],
	        "frames":{
	            "regX":59,
	            "regY":52,
	            "height":104,
	            "width":119,
	            "count":23
	        }
    	});
    	this.clip = new createjs.BitmapAnimation(ss);
    	this.clip.play();
		this.clip.y = myY;
		this.clip.x = myX;
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
				// if(!(this.clip.currentAnimation == "moveUpLeft")){
						
				// }
				
			}else if (isXNeg && isYNeg) {
				this.vx = (targetX/hy)*-1;
				this.vy = (targetY/hy)*-1;
				//this.clip.gotoAndPlay("moveDownRight");
			}else if(!isXNeg && isYNeg){
				this.vx = targetX/hy;
				this.vy = (targetY/hy)*-1;
				
			}else if(isXNeg && !isYNeg){
				this.vx = (targetX/hy)*-1;
				this.vy = targetY/hy;
				//this.clip.gotoAndPlay("moveDownRight");
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
			if(isXNeg){
				if(isYNeg){
					if(!(this.clip.currentAnimation == "moveUp")){
						this.clip.gotoAndPlay("moveUp");	
					}
					
				}else{
					if(!(this.clip.currentAnimation == "moveDownLeft")){
						this.clip.gotoAndPlay("moveDownLeft");
					}
				}
			}else if(isYNeg){
				if(!(this.clip.currentAnimation == "moveUp")){
					this.clip.gotoAndPlay("moveUp");	
				}
				//entPlayer.graphic = sprWalkBackRight;
			}else{
				if(!(this.clip.currentAnimation == "moveDownRight")){
					this.clip.gotoAndPlay("moveDownRight");	
				}
			}
			this.clip.x += this.vx;
			this.clip.y += this.vy;
		}	
	}

	this.attack = function(myPlayer){
		//myPlayer.knockBack();
		// myPlayer.decreaseHealth();
	}


}