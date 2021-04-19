//Задача №1

String.prototype.isPalindrome = function() {
	let phrase = this.toUpperCase().split("");
	let phraseWithoutSpaces = [];
	let phraseReverse = [];

	for (let i = 0; i < phrase.length; i++) {
		if (phrase[i] !== " ") {
			phraseWithoutSpaces.push(phrase[i]);
			phraseReverse.unshift(phrase[i]);
		}
	}

	let phraseReverseStr = phraseReverse.join("");
	let phraseWithoutSpacesStr = phraseWithoutSpaces.join("");

	if (phraseReverseStr === phraseWithoutSpacesStr) {
		return true;
	} else {
		return false;
	}
}

// Задача №2

function getAverageMark(marks) {
    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
    	sum = sum + marks[i];
    }

    if (sum === 0) {
    	return 0;
    } else {
    	let averageMark = sum / marks.length;
    	return Math.round(averageMark);
    }
}

//Задача №3

function checkBirthday(birthday) {
    let now = Date.now();
    birthday = +new Date(birthday);
    let diff = now - birthday;
    let age = diff / (86400000 * 365.25);
    if (age >= 18) {
    	return true;
    } else {
    	return false;
    }
}