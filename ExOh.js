function ExOh(str) {
	
	var xCount = 0;
	
	for (var i = 0; i < str.length; i++) {
		if (str[i] == 'x') {
			xCount++;
		}
	}
	
	if ((str.length-xCount) == xCount) {
		return true;
	}
	
	else return false;
}