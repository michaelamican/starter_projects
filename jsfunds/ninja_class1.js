class Ninja{
	constructor(name, health){
		this.name = name;
		this.health = health;
		
		sayName() {
			console.log(this.name);
		}
		showStats() {
			console.log(this.name, this.health, this.speed, this.strength);
		}
		drinkSake() {
			this.health += 10;
			console.log('Kanpai!');
		}
		punch(Ninja) {
			Ninja.health -= 5;
			console.log('Ninja punch!');
		}
		kick(Ninja) {
			Ninja.health -= 15;
			console.log('Ninja kick!');
		}
		if((this.kick() || this.punch()) && !(this instanceof Ninja)) {
			console.log('You must not hit the peacemakers');
		}
	}
}

class Sensei extends Ninja{
	constructor(name, health, speed, strength){
		super(name, health + 100, speed + 7, strength + 7);
		this.wisdom = 10;
	}
	childfunction(){
		speakWisdom(){
			drinkSake;
			console.log('How much zombies would a Rob Zombie rob if a Rob Zombie could rob zombies?');
		}
	}

}



var ninja1 = new Ninja('Nakano_Takeko');
var ninja2 = new Ninja('Tomoe_Gozen');
var ninja3 = new Ninja('Mochizuki_Chiyome');

var sensei1 = new Sensei('Ruth_Bader_Ginsberg');
var sensei2 = new Sensei('Elena_Kagan');
var sensei3 = new Sensei('Sonia_Sotomayor');


ninja1.showStats();
ninja2.sayName();
ninja3.drinkSake();
ninja3.showStats();

ninja1.kick(sensei2);
ninja2.punch(ninja1);
ninja3.kick(ninja2);

ninja1.showStats();
ninja2.showStats();
sensei2.showStats();
sensei1.speakWisdom();