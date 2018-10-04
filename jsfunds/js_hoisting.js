js_hoisting.js
------
1. Given
console.log(hello);
var hello='world';
xxxxx
var hello;
console.log(hello);
hello='world';

(prints undefined)
------
2.
Given
var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}
xxxxx
function test(){
	var needle = 'magnet';
	console.log(needle);
}
var needle = 'haystack';
test();

(prints 'magnet' once)
------
3.
Given 
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
xxxxx
brendan = 'only okay'
var brendan = 'super cool';
function print(){
	console.log(brendan);
}
console.log(brendan);

(prints 'super cool')
------
4.
Given
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
xxxxx
var food = 'chicken';
console.log(food);
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
eat();

prints('chicken', 'half-chicken')
------
5. Given:
mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);
xxxxx
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
mean();
console.log(food);

prints error, food not defined.
------
6. Given
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);
xxxxx
var genre = "disco";
console.log(genre);
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
rewind();
console.log(genre);

prints undefined, rock, r&b, disco
------
7. Given
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);
xxxxx
dojo = "san jose";
console.log(dojo);
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
learn();
console.log(dojo);

prints 'san jose', 'seattle', 'burbank', 'san jose'
------
8. Given
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}
xxxxx
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));


prints {hiring: true, name: 'Chicago', students: 65}, 'error'

