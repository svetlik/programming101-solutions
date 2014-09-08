function isOdd(number) {

	if (((number % 2) !== 0) && (number !== '-')) {
		return true;
	}

	else return false;
}

function dashInsert(num) {

	var counter = 0;
	num = String(num);

	// getting the number of times we will need to add dashes
	for (var i = 1; i < num.length; i++) {
		if ((isOdd(num[i])) && (isOdd(num[i-1]))) {
			counter++;
		}
	}
	
	// adding dashes 'counter' number of times
	for (var j = 0; j < counter; j++) {
		for (var i = 1; i < num.length; i++) {
			if ((isOdd(num[i])) && (isOdd(num[i-1]))) {
				//placing the dash between the two odd digits
				num = [num.slice(0, i), '-', num.slice(i)].join('');
				break;
			}
		}
	}

	return num;
}
