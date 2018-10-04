function bracesValid(str){
	var count_open = 0;
	var count_close = 0;
	for(var i = 0; i < str.length; i++){
		if(str[i] == '('){
			count_open += 1;

			if(str[i] == (']' || '}' || '>'){
				return 'False';
			}

			if(str[i] == ')'){
				count_close += 1;
			}
		}

		if(count_open / count_close != 1){
			return 'False';
		}

		console.log('Checked parens');
		
		if(str[i] == '['){
			count_open += 1;
			if(str[i] == (')' || '}' || '>'){
				return 'False';
			}
			if(str[i] == ']'){
				count_close += 1;
			}
		}
		if(count_open / count_close != 1){
			return 'False';
		}
		
		console.log('Checked braces');
		
		if(str[i] == '{'){
			count_open += 1;
			if(str[i] == (']' || ')' || '>'){
				return 'False';
			}
			if(str[i] == '}'){
				count_close += 1;
			}
		}
		if(count_open / count_close != 1){
			return 'False';
		}
		if(str[i] == '<'){
			count_open += 1;
			if(str[i] == (']' || '}' || ')'){
				return 'False';
			}
			if(str[i] == '>'){
				count_close += 1;
			}
		}
		if(count_open / count_close != 1){
			return 'False';
		}
	return 'True';
	}
}

bracesValid('{[(())]}');
bracesValid('{[(}])');