//Global Variables for movement
var up = false;
var down = false;
var left = false;
var right = false;
var aryRadians = [];

//Initialize the object
function Character(myStage){
	//change conditions to allow for diagonal moving
	
	this.init = function(){
		this.speed = 10;
		this.health = 100;
		this.damage = 5;
		this.armor = 10;
		this.inventory = {};
		this.isAlive = true;
		this.stage = myStage

		var ss = new createjs.SpriteSheet({ "animations":{
	        "stand":[0, 0]},
	        "images":["lib/character_sheet.png"],
	        "frames":{
	            "regX":25,
	            "regY":32.5,
	            "height":65,
	            "width":50,
	            "count":3
	        }
    	});
    	this.clip = new createjs.BitmapAnimation(ss);
    	this.clip.gotoAndPlay("stand");
		//this.clip.graphics.beginStroke("white").drawPolyStar(0, 0, 15, 3, 0, angle);
		this.clip.y = window.innerHeight/2;
		this.clip.x = window.innerWidth/2;
		stage.addChild(this.clip);
		
	
	}

	this.inventory = {
		"armor": null,
		"weapon": null,
		"item": null,
	}

	this.setArmor = function(armor){
		this.inventory['armor'] = armor;
	}

	this.setWeapon = function(weapon){
		this.inventory['weapon'] = weapon;
	}

	this.setItem = function(item){
		this.inventory['item'] = item;
	}

	
	//Controlling the characters rotations
	this.move = function(){
		//Move down
		if((down == true) && (left == false) && (right == false)){
			this.clip.y += this.speed;
			//this.clip.rotation = 180;
		}
		//Move up
		else if((up == true) && (left == false) && (right == false)){
			this.clip.y -= this.speed;
			//this.clip.rotation = 0;
		}
		//Move right
		else if((right == true) && (up == false) && (down == false)){
			this.clip.x += this.speed;
			//this.clip.rotation = 90;
		}
		//Move left
		else if((left == true) && (up == false) && (down == false)){
			this.clip.x -= this.speed;
			//this.clip.rotation = 270;
		}
		//Move down and left
		else if((down == true) && (left == true)){
			this.clip.x -= this.speed;
			this.clip.y += this.speed;
			//this.clip.rotation = 225;
		}
		//Move down and right
		else if((down == true) && (right == true)){
			this.clip.x += this.speed;
			this.clip.y += this.speed;
			//this.clip.rotation = 135;
		}
		//Move up and left
		else if((up == true) && (left == true)){
			this.clip.x -= this.speed;
			this.clip.y -= this.speed;
			//this.clip.rotation = 315;
		}
		//Move up and right
		else if((up == true) && (right == true)){
			this.clip.x += this.speed;
			this.clip.y -= this.speed;
			//this.clip.rotation = 45;
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
	}

	document.addEventListener("keydown", this.onKeyDown, true);
	document.addEventListener("keyup", this.onKeyUp, true);	

	
	this.getPosX = function(){
		return this.clip.x;
	}
	
	this.getPosY = function(){
		return this.clip.y;
	}

	this.getHealth = function(){
		return this.health;
	}

	this.getArmor = function(){
		return this.armor;
	}

	this.getDamage = function(){
		return this.damage;
	}

	this.getAlive = function(){
		return this.isAive;
	}
	
}