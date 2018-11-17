

class Character{
	constructor(name, charClass){
		this.name = name;
		this.charClass= charClass;
		this.stats = {
			strength: null,
			dexterity: null,
			constitution: null,
			willpower: null,
			intelligence: null,
			charisma: null
		}
		this.weapon = null;
		this.armor = null;
		this.itemWeight = 0;
		this.clothing = {
			head: null,
			neck: null,
			torso: null,
			hands: null,
			legs: null,
			feet: null
		}
	}
	generateStat( statName, valueDice){
		var total;
		for(var i=0; i<valueDice.count;i++){
			var roll=Math.floor(Math.random()*6)+1;
			total+=roll;
		}
		this.stats[statName] = total;
		return total;
	}
	equipWeapon( weapon ){
		this.weapon=weapon;
		this.itemWeight+=this.weapon.weight;
	}
	wearItem( wearable ){
		this.wearable=wearable;
		this.itemWeight+=this.wearable[weight];
	}
	attack( target ){
		var damage=this.weapon.use();
		var message= this.weapon.generateAtt


	}
}