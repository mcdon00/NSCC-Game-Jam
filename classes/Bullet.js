//Global Variables
//var bulletCount = 100;
//var bullets = [];
var moving;
//var speedX;
//var speedY;

function Bullet(myStage){
	//this.hi = "hi";
	this.init = function(){
		//this.stage = myStage;
		this.direction = null;
		moving = false;
		speed = 15;
		stage = myStage;
		this.speedX;
		this.speedY;

		this.clip = new createjs.Shape();
		this.clip.graphics.beginFill("white").drawRect(-2 , -2 , 3, 3);
		//this.clip.y = player.getPosY();
		//this.clip.x = player.getPosX();
	}

	this.move = function() {
		if(this.getMoving()){
			this.clip.x += this.speedX;
			this.clip.y += this.speedY;
		}
	}

	this.setMoving = function(bool, str) {
		moving = bool;
		this.direction = str;
	}

	this.getMoving = function(){
		return moving;
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

	this.setSpeed = function(sx,sy){
		this.speedX = sx;
		this.speedY = sy;
	}
	this.getSpeed = function(){
		return this.speedX + this.speedY;
	}
	
}