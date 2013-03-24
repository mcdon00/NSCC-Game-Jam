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

		var ss = new createjs.SpriteSheet({ "animations":{
	        "bananaFire":[1, 1],
	    	"bananaHit":[2, 2],
	    	"tomatoFire":[3,3],
	    	"tomateHit":[4,4],
	    	"peachFire":[0,0],
	    	"peachHit":[5,5]},
	        "images":["lib/projectiles.png"],
	        "frames":{
	            "regX":12.5,
	            "regY":12.5,
	            "height":25,
	            "width":25,
	            "count":6
	        }
    	});
    	this.clip = new createjs.BitmapAnimation(ss);
    	this.clip.gotoAndPlay("bananaFire");

		// this.clip = new createjs.Shape();
		// this.clip.graphics.beginFill("white").drawRect(-2 , -2 , 3, 3);
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