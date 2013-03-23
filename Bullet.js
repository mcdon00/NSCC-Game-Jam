//Global Variables
//var bulletCount = 100;
//var bullets = [];
var moving;
var speed;

function Bullet(){
	//this.hi = "hi";
	this.init = function(){
		//this.stage = myStage;
		this.direction = null;
		moving = false;
		speed = 15;
		


		this.clip = new createjs.Shape();
		this.clip.graphics.beginFill("white").drawRect(-2 , -2 , 3, 3);
		this.clip.y = test.getPosY();
		this.clip.x = test.getPosX();
	}



	this.move = function() {
		if(this.getMoving() && (this.direction == 'up')){
			this.clip.y -= speed;
		}else if (this.getMoving() && (this.direction == 'down')){
			this.clip.y += speed;
		}else if (this.getMoving() && (this.direction == 'right')){
			this.clip.x += speed;
		}else if (this.getMoving() && (this.direction == 'left')){
			this.clip.x -= speed;
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
	
}