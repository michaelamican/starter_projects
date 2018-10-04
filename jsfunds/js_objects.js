js_objects.js


challenge 1:


function printStudents(students){
	let students = [
		{name: 'Remy', cohort: 'Jan'},
		{name: 'Genevieve', cohort: 'March'},
		{name: 'Chuck', cohort: 'Jan'},
		{name: 'Osmund', cohort: 'June'},
		{name: 'Nikki', cohort: 'June'},
		{name: 'Boris', cohort: 'June'}
	];
	for(student in students){
		console.log('Name: '+student.name+', Cohort: '+student.cohort);
	}
}
printStudents(students);


challenge 2:

function printCompany(users){
	var id = 1;
	let users = {
		employees: [
			{'first_name':  'Miguel', 'last_name' : 'Jones'},
			{'first_name' : 'Ernie', 'last_name' : 'Bertson'},
			{'first_name' : 'Nora', 'last_name' : 'Lu'},
			{'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
		],
		managers: [
			{'first_name' : 'Lillian', 'last_name' : 'Chambers'},
			{'first_name' : 'Gordon', 'last_name' : 'Poe'}
		]
	};
	function countLetters(user){
		var letters = 0;
		for(user in users){
			for(letters in first_name){
				letters += 1;
			}
			for(letters in last_name){
				letters += 1;
			}
		}
		return letters;
	}
	console.log('EMPLOYEES');
	for(employee in employees){
		console.log(id + ' - '+employee.last_name.toUpperCase()+', '+employee.first_name.toUpperCase()+' - '+countLetters(employee));
		id += 1;
	}
	id = 1;
	console.log('MANAGERS');
	for(manager in managers){
		console.log(id + ' - '+manager.last_name.toUpperCase()+', '+manager.first_name.toUpperCase()+' - '+countLetters(manager));
		id += 1;
	}
}
printCompany(users);