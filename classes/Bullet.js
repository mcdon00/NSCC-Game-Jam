//Global Variables
//var bulletCount = 100;
//var bullets = [];
var moving;
var speed;

function Bullet(myStage){
	//this.hi = "hi";
	this.init = function(){
		//this.stage = myStage;
		this.direction = null;
		moving = false;
		speed = 15;
		stage = myStage;

		this.clip = new createjs.Shape();
		this.clip.graphics.beginFill("white").drawRect(-2 , -2 , 3, 3);
		//this.clip.y = player.getPosY();
		//this.clip.x = player.getPosX();
	}

	this.move = function(bool, str) {
		if(this.getMoving() && (this.direction == 'up')){
			this.clip.y -= speed;
		}else if (this.getMoving() && (this.direction == 'down')){
			this.clip.y += speed;
		}else if (this.getMoving() && (this.direction == 'right')){
			this.clip.x += speed;
		}else if (this.getMoving() && (this.direction == 'left')){
			this.clip.x -= speed;
		}else if (this.getMoving() && (this.direction == 'upleft')){
			this.clip.x -= speed/2;
			this.clip.y += speed/2
		}else if (this.getMoving() && (this.direction == 'downleft')){
			this.clip.x -= speed/2;
			this.clip.y -= speed/2
		}else if (this.getMoving() && (this.direction == 'upright')){
			this.clip.x += speed/2;
			this.clip.y += speed/2
		}else if (this.getMoving() && (this.direction == 'downright')){
			this.clip.x += speed/2;
			this.clip.y -= speed/2
		}
	}

	this.setMoving = function(bool, str) {
		moving = bool;
		this.direction = str;
	}

	this.getMoving = function(){
		return moving;
	}
	this.getDirection = function(){
		return this.direction;
	}
	this.getPosX = function() {
		return this.clip.x;
	}	

	this.getPosY = function() {
		return this.clip.y;
	}

	this.setPosX = function(x){
		this.clip.x = x;
	}
	this.setPosY = function(y){
		this.clip.y = y;
	}

	
	
}