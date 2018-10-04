function mmA(arr){
	var max = 0;
	var min = 0;
	var avg = 0;
	var sum = 0;
	var count = 1;
	for(var i = 0; i<arr.length; i++){
		if(arr[i]>max){
			max = arr[i];
		}
		if(arr[i]<min){
			min = arr[i];
		}
		arr[i]+= sum;
		count += 1;
	}
	avg = sum/count;
	console.log(max, min, avg);
}

mmA([-2,6,8,-12,5])