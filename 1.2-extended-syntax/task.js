"use strict";

function getResult(a,b,c){
    let d;
    let x = [];

    d = Math.pow(b, 2) - 4 * a * c;

    if (d === 0) {
    	x[0] = -b / (2 * a);
    } else if (d > 0) {
    	x[0] = (-b + Math.sqrt(d)) / (2 * a);
    	x[1] = (-b - Math.sqrt(d)) / (2 * a);
    }

    return x;
}

function getAverageMark(marks){
    let averageMark;
    let sum = 0;

    if (marks.length === 0) {
    	averageMark = 0;
    	return averageMark;
    } else if (marks.length > 5) {
    	console.log("Количество введенных оценок превышает допустимое значение. При расчете будут учтены первые 5 оценок");
    	marks.splice(5);
    }

    for (let i = 0; i < marks.length; i++) {
    	sum = sum + marks[i];
    }

    averageMark = sum / marks.length;

    return averageMark;
}

function askDrink(name,dateOfBirthday){
    let age;
    let today = new Date();
    let yearToday = today.getFullYear();
    let yearBirth  = dateOfBirthday.getFullYear();
    let monthToday = today.getMonth() + 1;
    let monthBirth = dateOfBirthday.getMonth() + 1;
    let dayToday = today.getDate();
    let dayBirth = dateOfBirthday.getDate();
    let result;

    if (dayBirth <= dayToday && monthBirth <= monthToday) {
    	age = yearToday - yearBirth;
    } else {
    	age = yearToday - yearBirth - 1;
    }

    if (age >= 18) {
    	result = `Не желаете ли олд-фэшн, ${name}?`
    } else {
    	result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`
    }

    return result;
}