function Item(){
	this.init = function(myStage,myType,myValue,mySkin){
		this.type = myType;
		this.damage = myValue;
		this.Defence = myValue;
		this.health = myValue;
		this.stage = myStage;
    	this.clip = new createjs.Bitmap(mySkin);
		this.clip.y = 0;
		this.clip.x = 0;
		this.width = this.clip.width;
		this.height = this.clip.height;
		stage.addChild(this.clip);
	}
}