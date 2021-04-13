"use strict";

//Задача №1

function getSolutions(a, b, c) {
	let D = Math.pow(b, 2) - 4 * a * c;
	
	if (D < 0) {
		return {D: D, roots: []};
	} else if (D === 0) {
		let x1 = -b / (2 * a);
		return {D: D, roots: [x1]};
	} else if (D > 0) {
		let x1 = (-b + Math.sqrt(D)) / (2 * a);
		let x2 = (-b - Math.sqrt(D)) / (2 * a);
		return {D: D, roots: [x1, x2]};
	}
}

function showSolutionsMessage(a, b, c) {
	let result = getSolutions(a, b, c);
	console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
	console.log(`Значение дискриминанта: ${result.D}`);
	if (result.roots.length === 0) {
		console.log(`Уравнение не имеет вещественных корней`);
	} else if (result.roots.length === 1) {
		console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
	} else if (result.roots.length === 2) {
		console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
	}
}

//Задача №2

function getAverageMark(marks) {
	let sum = 0;

	for (let i = 0; i < marks.length; i++) {
		sum = sum + marks[i];
	}

	if (sum === 0) {
		return 0;
	} else {
		return sum / marks.length;
	}
}

function getAverageScore(data) {
	let sum = 0;
	let n = 0;

	for (let property in data) {
		data[property] = getAverageMark(data[property]);
	}

	for (let property in data) {
		sum = sum + data[property];
		n = n + 1;
	}

	if (sum === 0) {
		data.average = 0
	} else {
		data.average = sum / n;
	}
	
	return data;
}

// Задача №3

function getDecodedValue(secret) {
	if (secret === 0) {
		return "Родриго";
	} else if (secret === 1) {
		return "Эмильо";
	}
}

function getPersonData(secretData) {
	return {firstName: getDecodedValue(secretData.aaa), lastName: getDecodedValue(secretData.bbb)};	
}
