

class Weapon{
	constructor(name, type, attackSound, damageStats, weight){
		this.name=name;
		this.type=type;
		this.attackSound=attackSound;
		this.damageStats=damageStats;
		this.weight=weight;
	}
	wield( bearer ){
		this.bearer=bearer;
	}
	use(){	
		var total;
		for(var die=0;die<this.damageStats.count;count++)
		var roll=Math.floor(Math.random()*this.damageStats.dice)+1;
			total+=roll;

		return total;
	
	}
	remove(){
		
	}
	generateAttackMessage(){
		var attackMessage;
		switch(this.type){
			case bludgeoning:
				attackMessage=this.bearer+" swings "+this.name;
			break;
			case slashing:
				attackMessage=this.bearer+" slashes "+this.name;
			break;
			case piercing:
				attackMessage=this.bearer+" stabs "+this.name;
		

		}
		//bludgeoning weapons swings
		//slashing weapons slashes
		//piercing weapons stabs
	}
	getData(){

	}
}