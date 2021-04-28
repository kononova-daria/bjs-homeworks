// Задача №1

function parseCount (inputData) {
	let dataNumber = Number.parseInt(inputData);
	if (isNaN(dataNumber) === true) {
		throw new Error ("Невалидное значение");
	} else {
		return dataNumber;
	}
}

function validateCount (inputData) {
	try {
		return parseCount(inputData);
	} catch(e) {
		return e;
	}
}

// Задача №2

class Triangle {
	constructor (a, b, c) {
		if ((a + b) > c && (b + c) > a && (a + c) > b) {
			this.a = a;
			this.b = b;
			this.c = c;
		} else {
			throw new Error ("Треугольник с такими сторонами не существует");
		}
	}
	getPerimeter() {
		return this.a + this.b + this.c;
	}
	getArea() {
		let p = 0.5 * this.getPerimeter();
		let S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
		return Number(S.toFixed(3));
	}
}

function getTriangle (a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch(e) {
		return {
			getArea() {
				return "Ошибка! Треугольник не существует";
			},
			getPerimeter() {
				return "Ошибка! Треугольник не существует";
			}
		}
	}
}