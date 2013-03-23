//Global Variables for movement
var up = false;
var down = false;
var left = false;
var right = false;
var bulletUp = false;
var bulletDown = false;
var bulletLeft = false;
var bulletRight = false;
var bulletCount = 100;
var bullets = [];

//Initialize the object
function Character(myStage){
	
	this.init = function(){
		var ttt = [];
		this.speed = 10;
		this.stage = myStage
		this.clip = new createjs.Shape();
		this.clip.graphics.beginStroke("white").drawPolyStar(0, 0, 15, 3, 0, angle);
		this.clip.y = window.innerHeight/2;
		this.clip.x = window.innerWidth/2;
		stage.addChild(this.clip);
		this.addBullets(100);
	
	}

	//Add bullets to the bullets array for pre-loading
	this.addBullets = function(numOfBullets) {
		for(var i = 0; i< numOfBullets; i++){
			bullets[i] = new Bullet();
			bullets[i].init();
		}
	}
	
	//Controlling the characters rotations
	this.move = function(){
		//Move down
		if((down == true) && (left == false) && (right == false)){
			this.clip.y += this.speed;
			this.clip.rotation = 180;
		}
		//Move up
		else if((up == true) && (left == false) && (right == false)){
			this.clip.y -= this.speed;
			this.clip.rotation = 0;
		}
		//Move right
		else if((right == true) && (up == false) && (down == false)){
			this.clip.x += this.speed;
			this.clip.rotation = 90;
		}
		//Move left
		else if((left == true) && (up == false) && (down == false)){
			this.clip.x -= this.speed;
			this.clip.rotation = 270;
		}
		//Move down and left
		else if((down == true) && (left == true)){
			this.clip.x -= this.speed;
			this.clip.y += this.speed;
			this.clip.rotation = 225;
		}
		//Move down and right
		else if((down == true) && (right == true)){
			this.clip.x += this.speed;
			this.clip.y += this.speed;
			this.clip.rotation = 135;
		}
		//Move up and left
		else if((up == true) && (left == true)){
			this.clip.x -= this.speed;
			this.clip.y -= this.speed;
			this.clip.rotation = 315;
		}
		//Move up and right
		else if((up == true) && (right == true)){
			this.clip.x += this.speed;
			this.clip.y -= this.speed;
			this.clip.rotation = 45;
		}
	}
	
	this.onKeyUp = function(e){
		//Moving the ship
		if(e.keyCode == 40){
				down = false;
		}
		if(e.keyCode == 38){
				up = false;
		}
		if(e.keyCode == 39){				
				right = false;
		}
		if(e.keyCode == 37){
				left = false;
		}
		//Shooting bullets
		if(e.keyCode == 87){
			bulletUp = false;
		}else if(e.keyCode == 83){
			bulletDown = false;
		//Test for directions
		}else if(e.keyCode == 65){
			bulletLeft = false;
		}else if(e.keyCode == 68){
			bulletRight = false;

		}
		//a = 65, d = 68
	}

	//Test key downs
	this.onKeyDown = function(e){
		//Moving the ship
		if(e.keyCode == 40){
				down = true;
		}
		else if(e.keyCode == 38){
				up = true;
		}
		else if(e.keyCode == 39){
				right = true;
		}
		else if(e.keyCode == 37){
				left = true;
		}
		//Shooting bullets
		if(e.keyCode == 87){
			bulletUp = true;
		}else if(e.keyCode == 83){
			bulletDown = true;
		}else if(e.keyCode == 65){
			bulletLeft = true;
		}else if(e.keyCode == 68){
			bulletRight = true;
		}
	}
	this.fire = function(){
		if(bulletUp || bulletDown || bulletLeft || bulletRight){
			bullets[bulletCount - 1].clip.x = this.clip.x;
			bullets[bulletCount - 1].clip.y = this.clip.y;
			if(bulletUp && !bulletDown && !bulletLeft && !bulletRight){
				//console.log('in here');
				bullets[bulletCount - 1].setMoving(true, 'up');
			}else if(!bulletUp && bulletDown && !bulletLeft && ! bulletRight){
				//console.log('in here');
				bullets[bulletCount - 1].setMoving(true, 'down');
			}else if(!bulletUp && !bulletDown && !bulletLeft && bulletRight){
				bullets[bulletCount - 1].setMoving(true, 'right');
			}else if(!bulletUp && !bulletDown && bulletLeft && !bulletRight){
				bullets[bulletCount - 1].setMoving(true, 'left');
			}
			//console.log(bullets[bulletCount -1].getDirection());
			if(bulletCount != 0){
				stage.addChild(bullets[bulletCount - 1].clip);
				bulletCount -= 1;
			}
			if(bulletCount == 0){
					bulletCount = 100;
			}
		}
	}

	this.moveBullets = function() {
		for(var i = 0; i< (bullets.length); i++){
			//console.log(bullets[i].getMoving());
			if(bullets[i].getMoving()){
				bullets[i].move();
			}
		}
	}

	document.addEventListener("keydown", this.onKeyDown, true);
	document.addEventListener("keyup", this.onKeyUp, true);	

	
	this.getPosX = function(){
		return this.clip.x;
	}
	
	this.getPosY = function(){
		return this.clip.y;
	}
	

}