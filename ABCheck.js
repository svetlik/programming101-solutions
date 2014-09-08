function ABCheck(str) {

	var isSatisfied;
	
	// strings with < 5 chars - automatically out
	if (str.length < 5) {
		isSatisfied = false;
	}

	else {
		for (var i = 4; i < str.length; i++) {
			var aFirst = ((str[i] == 'a') && (str[i-4] == 'b'));
			var bFirst = ((str[i] == 'b') && (str[i-4] == 'a'));
			
			if (aFirst || bFirst)  {
					isSatisfied = true;
					break;
			}
			
			else isSatisfied = false;
		}
	}

	return isSatisfied;
}