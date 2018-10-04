function fizzbuzz(num){
	if(num<0){
		console.log('Number must be positive')
	}
	else{
		for(var i = 1; i < num+1; i++){
			if(i%3==0 && i%5==0){
				console.log('FizzBuzz');
			}else if(i%3==0 && i%5!=0){
				console.log('Fizz');
			}else if(i%3!=0 && i%5==0){
				console.log('Buzz');
			}else{
				console.log(i);
			}
		}
	}
}

fizzbuzz(18);