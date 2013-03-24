//Global Variables for movement
var up = false;
var down = false;
var left = false;
var right = false;
var aryRadians = [];
var playAnim = false;

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
	        "stand":[0, 0],
	    	"moveLeft":[11, 12],
	    	"moveDownRight":[1,2],
	    	"moveRight":[3,4],
	    	"moveDownLeft":[13,14],
	    	"moveUpRight":[5,6],
	    	"moveUpLeft":[9,10],
	    	"moveUp":[7,8],
	    	"moveDown":[0,0]},
	        "images":["lib/player.png"],
	        "frames":{
	            "regX":30,
	            "regY":46,
	            "height":92,
	            "width":60,
	            "count":15
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

	//When the character picks up an item
	this.pickUp = function() {

	}

	
	//Controlling the characters rotations
	this.move = function(){
		// console.log(down);
		// console.log(up);
		//Move down
		if((down == true) && (left == false) && (right == false)){
			this.clip.y += this.speed;
			if(!playAnim){
				this.clip.gotoAndPlay("moveDown");
				playAnim = true;
			}
			
			//this.clip.rotation = 180;
		}
		//Move up
		else if((up == true) && (left == false) && (right == false)){
			this.clip.y -= this.speed;
			if(!playAnim){
				this.clip.gotoAndPlay("moveUp");
				playAnim = true;
			}	
			//this.clip.rotation = 0;
		}
		//Move right
		else if((right == true) && (up == false) && (down == false)){
			this.clip.x += this.speed;
			if(!playAnim){
				this.clip.gotoAndPlay("moveRight");
				playAnim = true;
			}
			//this.clip.rotation = 90;
		}
		//Move left
		else if((left == true) && (up == false) && (down == false)){
			this.clip.x -= this.speed;
			if(!playAnim){
				this.clip.gotoAndPlay("moveLeft");
				playAnim = true;
			}
			//this.clip.rotation = 270;
		}
		//Move down and left
		if((down == true) && (left == true)){
			this.clip.x -= this.speed;
			this.clip.y += this.speed;
			this.clip.gotoAndPlay("moveDownLeft");
			playAnim = true;
			
			//this.clip.rotation = 225;
		}
		//Move down and right
		if((down == true) && (right == true)){
			this.clip.x += this.speed;
			this.clip.y += this.speed;
			this.clip.gotoAndPlay("moveDownRight");
			playAnim = true;
			//this.clip.rotation = 135;
		}
		//Move up and left
		if((up == true) && (left == true)){
			this.clip.x -= this.speed;
			this.clip.y -= this.speed;
			this.clip.gotoAndPlay("moveUpLeft");
			playAnim = true;
			//this.clip.rotation = 315;
		}
		//Move up and right
		if((up == true) && (right == true)){
			this.clip.x += this.speed;
			this.clip.y -= this.speed;
			this.clip.gotoAndPlay("moveUpRight");
			playAnim = true;
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
		playAnim = false;
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
			if(e.keyCode == 38){
				up = true;
			}
		}
		else if(e.keyCode == 37){
				left = true;
		}
	}

	this.knockBack = function(direction, event){
		//directions are just placeholders
		//What direction do I want him to move
		if(direction == "north"){
			this.clip.y += 50;
		}else if(direction == "east"){
			this.clip.x -= 50;
		}else if(direction == "south"){
			this.clip.y -= 50;
		}else if(direction == "west"){
			this.clip.x += 50;
		}else if(direction == "northEast"){
			this.clip.y += 25;
			this.clip.x -= 25;
		}else if(direction == "northWest"){
			this.clip.y += 25;
			this.clip.x += 25;
		}else if(direction == "southEast"){
			this.clip.y -= 25;
			this.clip.x -= 25;
		}else if(direction == "southWest"){
			this.clip.y -= 25;
			this.clip.x += 25;
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
	this.decreaseHealth = function(damage){
		if(this.armour > 0){
			if((this.armor - damage) > 0){
				this.armour -= damage;
			}else{
				damage -= this.armor;
				this.armor = 0;
				this.health -= damage;
			}
		}else{
			this.health -= damage;	
		}
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