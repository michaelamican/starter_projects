var tigger = {character: 'Tigger'};
var pooh = { character: 'Winnie the Pooh' };
var piglet = {character: 'Piglet'};
var bees = {character: 'Bees'};
var owl = {character: 'Owl'};
var christopher = {character: 'Christopher Robin'};
var rabbit = {character: 'Rabbit'};
var gopher = {character: 'Gopher'};
var kanga = {character: 'Kanga'};
var eeyore = {character: 'Eeyore'};
var heffalumps = {character: 'Heffalumps'};

tigger.north = pooh;
pooh.south = tigger;
piglet.east = pooh;
pooh.west = piglet;
piglet.north = owl;
owl.south = piglet;
pooh.east = bees;
bees.west = pooh;
pooh.north = christopher;
christopher.south = pooh;
bees.north = rabbit;
rabbit.south = bees;
owl.east = christopher;
christopher.west.= owl;
christopher.east = rabbit;
rabbit.west = christopher;
christopher.north = kanga;
kanga.south = christopher;
rabbit.east = gopher;
gopher.west = rabbit;
kanga.north = eeyore;
eeyore.south = kanga;
eeyore.east = heffalumps;
heffalumps.west = eeyore;

function move(str){
	var player = Tigger;
	var location = tigger;
	player.location = tigger;
	if(str == ('north'||'south'||'east'||'west') && (player.str != null)){
		player.location = player.str;
		console.log(f'Player moved ${str} and is visiting ${location}');
	} else{
		console.log('Unable to go that way')
	}
}
