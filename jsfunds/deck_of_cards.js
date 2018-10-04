function Card(suit, str, num){
    this.suit = suit;
    this.string = str;
    this.num = num;
    var self = this;
    this.show = function(){
        console.log(self);
    }
}

function Deck(){
    var arr = ['none', 'Ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king'];
    var cardArr = [];
    for(var i=1; i<14; i++){
        var card = new Card('heart', arr[i], i);
        cardArr.push(card);
    }
    for(var i=1; i<14; i++){
        var card = new Card('clubs', arr[i], i);
        cardArr.push(card);
    }
    for(var i=1; i<14; i++){
        var card = new Card('diamonds', arr[i], i);
        cardArr.push(card);
    }
    for(var i=1; i<14; i++){
        var card = new Card('spades', arr[i], i);
        cardArr.push(card);
    }
    console.log(cardArr);

    this.shuffle = function(){
        var m = cardArr.length;
        var i;
        var t;
        while(m){
            i = Math.floor(Math.random() * m--);
            t = cardArr[m];
            cardArr[m] = cardArr[i];
            cardArr[i] = t;
        }
        console.log(cardArr);
    }
    this.reset = function(deleteDeck){
        delete deleteDeck;
        var deck = new Deck();
        return deck;
    }
    this.deal = function(){
        // var index = Math.floor(Math.random() * (52 - 1 + 1)) + 1;
        // above line to draw from middle of deck;
        var index = cardArr[0];
        console.log(index);
        return cardArr.splice(index, 1);
    }
}

function Player(name){
    this.name = name;
    this.hand = [];
    this.takeCard = function(deck, n){
        for(var i=1; i<=n; i++){
            this.hand.push(deck.deal());
        }
        return this.hand;
    }
    this.discard = function(n){
        this.hand.splice(n, 1);
        return this.hand;
    }
}

var deck1 = new Deck();
var player1 = new Player('bob');
console.log(player1.takeCard(deck1, 5));
console.log(player1.discard(3));
